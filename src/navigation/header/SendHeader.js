import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackArrow32, Send60_Big} from 'Atom/icon';
import DP from 'Root/config/dp';
import {WHITE, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import Modal from 'Root/component/modal/Modal';
import {createProtectRequest} from 'Root/api/shelterapi';

export default SendHeader = ({route, navigation, options}) => {
	// console.log('props SendHeader', route.params);

	const onSend = () => {
		if (route.params.data) {
			console.log('OnSend', route.params.data);
			const data = route.params.data;
			switch (route.params.nav) {
				case 'AidRequestAnimalList': {
					console.log('route, SendHeader / AidRequestAnimalList', data);
					navigation.push('WriteAidRequest', {data: data});
					break;
				}
				case 'WriteAidRequest': {
					Modal.popTwoBtn(
						'해당 내용으로 보호요청 \n 게시글을 작성하시겠습니까?',
						'취소',
						'확인',
						() => Modal.close(),
						() => {
							console.log('SendHeader / Before Create AidRequest ', data);
							const bd = {
								protect_animal_id: '61be0063244ae6ea37b64e2d',
								protect_request_content: 'Asdas',
								protect_request_photo_thumbnail: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
								protect_request_photos: undefined,
								protect_request_status: 'rescue',
								protect_request_title: 'Dd1',
								shelter_protect_animal_object_id: '61be0063244ae6ea37b64e2d',
							};
							createProtectRequest(
								data,
								successed => {
									console.log('successed / createProtectRequest', successed);
									Modal.popNoBtn('보호요청 게시글 \n 작성이 완료되었습니다!');
									setTimeout(() => {
										Modal.close();
										navigation.push('ShelterMenu');
									}, 1500);
								},
								err => {
									console.log('err, createProtectRequest', err);
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
			Modal.popOneBtn('선택하신 보호요청 게시글이 없습니다!', '확인', () => Modal.close());
		}
	};

	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableOpacity onPress={navigation.goBack}>
				<View style={style.backButtonContainer}>
					<BackArrow32 onPress={navigation.goBack} />
				</View>
			</TouchableOpacity>
			<Text style={[{flex: 1, textAlign: 'center', marginLeft: 30 * DP, marginRight: 80 * DP}, txt.roboto40b]}>{options.title}</Text>
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
		height: 80 * DP,
		justifyContent: 'center',
		padding: 10 * DP,
	},
});
