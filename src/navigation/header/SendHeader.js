import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {BackArrow32, Bracket48, Send60_Big} from 'Atom/icon';
import DP from 'Root/config/dp';
import {WHITE, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import Modal from 'Root/component/modal/Modal';
import {createProtectRequest} from 'Root/api/shelterapi';
import {RED} from 'Root/screens/color';

export default SendHeader = ({route, navigation, options}) => {
	// console.log('props SendHeader', route.params);

	const onSend = () => {
		if (route.params.data) {
			// console.log('OnSend', route.params.data);
			const data = route.params.data;
			switch (route.params.nav) {
				case 'AidRequestAnimalList': {
					// console.log('route, SendHeader / AidRequestAnimalList', data);
					navigation.push('WriteAidRequest', {data: data});
					break;
				}
				case 'WriteAidRequest': {
					console.log('data', data);
					const t = {
						protect_animal_id: '61d083dc07a02d829880ef53',
						protect_request_content: '',
						protect_request_photo_thumbnail: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
						protect_request_photos_uri: [
							'/Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DD6346EA-03F5-4557-9EA2-19B6F54BBD81/tmp/react-native-image-crop-picker/49CF8C2D-DDA8-4C5E-8078-413036B66DFF.jpg',
							'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DD6346EA-03F5-4557-9EA2-19B6F54BBD81/tmp/498FB492-1880-42C5-9E76-9FA68FA1D38F.jpg',
							'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DD6346EA-03F5-4557-9EA2-19B6F54BBD81/tmp/C872CF3D-8549-4AD8-BAE6-033EC009595B.jpg',
							'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DD6346EA-03F5-4557-9EA2-19B6F54BBD81/tmp/03ACABC1-37D2-4639-AAFD-F80ECBB6BA07.jpg',
							'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DD6346EA-03F5-4557-9EA2-19B6F54BBD81/tmp/5ECE540D-EA67-4956-96AF-529E2EE97490.jpg',
						],
						protect_request_status: 'rescue',
						protect_request_title: '',
						shelter_protect_animal_object_id: '61d083dc07a02d829880ef53',
					};

					Modal.popTwoBtn(
						'해당 내용으로 보호요청 \n 게시글을 작성하시겠습니까?',
						'취소',
						'확인',
						() => Modal.close(),
						() => {
							console.log('SendHeader / Before Create AidRequest ', data);
							createProtectRequest(
								{
									protect_request_photos_uri: data.protect_request_photos_uri,
									shelter_protect_animal_object_id: data.shelter_protect_animal_object_id,
									protect_request_title: data.protect_request_title,
									protect_request_content: data.protect_request_content,
								},
								successed => {
									console.log('successed / createProtectRequest / SendHeader', successed.protect_request_photos_uri);
									Modal.popNoBtn('보호요청 게시글 \n 작성이 완료되었습니다!');
									Modal.close();
									navigation.push('ShelterMenu');
								},
								err => {
									console.log('err, createProtectRequest / SendHeader', err);
								},
							);
							Modal.close();
						},
					);
				}
				default:
					break;
			}
		} else {
			Modal.popOneBtn('선택하신 보호요청 게시글이 없습니다!', '선택완료', () => Modal.close());
		}
	};

	const titleStyle = [{textAlign: 'center'}, txt.noto40b, route.params?.type ? {color: RED} : {}];

	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableOpacity onPress={navigation.goBack}>
				<View style={style.backButtonContainer}>
					<BackArrow32 onPress={navigation.goBack} />
				</View>
			</TouchableOpacity>

			<View style={style.titleContainer}>
				<Text style={titleStyle}>{options.title}</Text>
			</View>

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
