import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {BackArrow32, Bracket48, Send60_Big} from 'Atom/icon';
import DP from 'Root/config/dp';
import {WHITE, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import Modal from 'Root/component/modal/Modal';
import {RED} from 'Root/screens/color';
import {createFeed, createMissing, createReport} from 'Root/api/feedapi';

export default FeedWriteHeader = ({route, navigation, options}) => {
	const complete = result => {
		Modal.close();
		Modal.popNoBtn('게시물 등록이 완료되었습니다.');
		setTimeout(() => {
			Modal.close();
		}, 200);
		navigation.goBack();
	};
	const handleError = err => {
		console.log('err', err);
		Modal.close();
		Modal.popOneBtn(err, '확인', () => Modal.close());
	};

	const onSend = () => {
		Modal.popNoBtn('게시물을 등록중입니다.');

		switch (route.params?.feedType) {
			case 'Feed':
				createFeed(route.params, complete, handleError);
				break;
			case 'Missing':
				createMissing(route.params, complete, handleError);
				break;
			case 'Report':
				createReport(route.params, complete, handleError);
				break;
			default:
				break;
		}
	};

	const titleStyle = [{textAlign: 'center'}, txt.noto40b, route.params?.feedType != 'Feed' ? {color: RED} : {}];

	const avartarSelect = () => {
		Modal.feedAvartarSelect(petObject => {
			console.log(petObject);
			navigation.setOptions({title: petObject.user_nickname});
			navigation.setParams({...route.params, feed_avatar_id: petObject._id});
		});
	};

	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableOpacity onPress={navigation.goBack}>
				<View style={style.backButtonContainer}>
					<BackArrow32 onPress={navigation.goBack} />
				</View>
			</TouchableOpacity>
			{route.params?.feedType != 'Feed' ? (
				<View style={style.titleContainer}>
					<Text style={titleStyle}>{options.title}</Text>
				</View>
			) : (
				<TouchableWithoutFeedback onPress={avartarSelect}>
					<View style={style.titleContainer}>
						<Text style={titleStyle}>{options.title}</Text>
						<Bracket48 />
					</View>
				</TouchableWithoutFeedback>
			)}
			<Send60_Big onPress={onSend} />
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 135 * DP,
		flexDirection: 'row',
		backgroundColor: WHITE,
		paddingHorizontal: 48 * DP,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 126 * DP,
	},
	shadow: {
		// shadowColor: '#000000',
		// shadowOpacity: 0.27,
		// shadowRadius: 4.65,
		// shadowOffset: {
		// 	width: 0,
		// 	height: 4,
		// },
		// elevation: 4,
	},
	backButtonContainer: {
		width: 80 * DP,
		height: 80 * DP,
		justifyContent: 'center',
		padding: 10 * DP,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
