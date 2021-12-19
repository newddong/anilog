import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackArrow32} from 'Atom/icon';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {WHITE, APRI10} from 'Root/config/color';
import Modal from 'Root/component/modal/Modal';
import {updateUserDetailInformation} from 'Root/api/userapi';

export default SaveButtonHeader = ({navigation, route, options, back}) => {
	const [data, setData] = React.useState(null);
	const hasUnsavedChanges = Boolean(data);

	const save = () => {
		// console.log('save button', data);
		// console.log('Save Pressed data received  :  ', route.params.data);
		const received = route.params.data;
		setData(received);
		if (route.params.route_name == 'UserInfoDetailSetting') {
			console.log('received Data _id', received._id);
			console.log('received Data birthday', received.user_birthday);
			console.log('received Data interest', received.user_interests);
			console.log('received Data addr', received.user_address);
			console.log('received Data gender', received.user_sex);
			updateUserDetailInformation(
				{
					userobject_id: received._id,
					user_birthday: received.user_birthday,
					user_interests: received.user_interests,
					user_address: received.user_address,
					user_sex: received.user_sex,
				},
				result => {
					console.log('result / updateUserDetailInformation / SaveButtonHeader   : ', result);
				},
				err => {
					console.log('err / updateUserDetailInformation / SaveButtonHeader    :  ', err);
				},
			);
		}
	};

	React.useEffect(() => {
		// console.log('SaveButtonHeader Route Changed?   ', route.params);
		// setData(route.params);
	}, [route.params]);

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
						console.log('저장 후 나감 data', route.params);
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
