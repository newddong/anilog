import React from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackArrow32, Send60_Big} from 'Atom/icon';
import DP from 'Root/config/dp';
import {WHITE, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import Modal from 'Root/component/modal/Modal';
import {assignAidRequest} from 'Root/api/protect_request_api_ksw';

export default SendHeader = ({route, navigation, options}) => {
	// console.log('props SendHeader', props);
	const onSend = () => {
		if (route.params.data) {
			// console.log('route, SendHeader', route.params.data);

			switch (route.params.nav) {
				case 'AidRequestAnimalList':
					navigation.push('WriteAidRequest', {data: route.params.data});
					break;
				case 'WriteAidRequest': {
					Modal.popTwoBtn(
						'해당 내용으로 보호요청 \n 게시글을 작성하시겠습니까?',
						'취소',
						'확인',
						() => Modal.close(),
						() => {
							assignAidRequest(
								route.params.data,
								successed => {
									console.log('successed / assignAidRequest', successed);
									Modal.popNoBtn('보호요청 게시글 \n 작성이 완료되었습니다!');
									setTimeout(() => {
										Modal.close();
										navigation.push('ShelterMenu');
									}, 1500);
								},
								err => {
									console.log('err, assignAidRequest', err);
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
