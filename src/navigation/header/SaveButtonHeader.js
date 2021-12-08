import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackArrow32} from 'Atom/icon';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {WHITE, APRI10} from 'Root/config/color';
import Modal from 'Root/component/modal/Modal';

export default SaveButtonHeader = ({navigation, route, options, back}) => {
	React.useEffect(() => {
		// console.log('route', route.params);
	}, [route.params]);

	const [data, setData] = React.useState(null);
	const hasUnsavedChanges = Boolean(data);

	const save = () => {
		setData(route.params);
		navigation.setParams(data);
	};

	React.useEffect(
		() =>
			navigation.addListener('beforeRemove', e => {
				if (hasUnsavedChanges) {
					// If we don't have unsaved changes, then we don't need to do anything
					return;
				}

				// Prevent default behavior of leaving the screen
				e.preventDefault();
				Modal.popTwoBtn(
					'저장하지 않고 나가시겠습니까?',
					'저장 후 나감',
					'나가기',
					() => {
						Modal.close();
						setData(route.params);
						navigation.dispatch(e.data.action, data);
					},
					() => {
						Modal.close();
						navigation.dispatch(e.data.action, data);
					},
				);
			}),
		[navigation, hasUnsavedChanges],
	);

	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableOpacity onPress={navigation.goBack}>
				<View style={style.backButtonContainer}>
					<BackArrow32 onPress={navigation.goBack} />
				</View>
			</TouchableOpacity>
			<View style={style.titleContainer}>
				<Text style={txt.noto40b}>{options.title}</Text>
			</View>
			<TouchableOpacity onPress={save}>
				<View style={style.buttonContainer}>
					<Text style={[txt.noto36b, {color: APRI10, lineHeight: 56 * DP}]}>저장</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		height: 135 * DP,
		flexDirection: 'row',
		backgroundColor: WHITE,
		paddingHorizontal: 48 * DP,
	},
	titleContainer: {
		marginBottom: 20 * DP,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 67 * DP,
		marginBottom: 22 * DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
	backButtonContainer: {
		width: 80 * DP,
		height: 66 * DP,
		justifyContent: 'center',
		// backgroundColor:'red',
		marginBottom: 18 * DP,
	},
});

SaveButtonHeader.defaultProps = {};
