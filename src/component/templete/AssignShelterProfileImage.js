import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, assignShelterProfileImage_style} from './style_templete';
import Modal from 'Component/modal/Modal';
import {launchImageLibrary} from 'react-native-image-picker';
import {assignShelter} from 'Root/api/userapi';

export default AssignShelterProfileImage = props => {
	const [data, setData] = React.useState({
		...props.route.params,
		user_profile_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	});

	const assginShelter = () => {
		Modal.popNoBtn('등록중입니다.');
		assignShelter(
			data,
			successmsg => {
				Modal.close(); //NoBtn팝업 종료
				Modal.popNoBtn('보호소 등록이 완료되었습니다.');
				setTimeout(() => {
					Modal.close();
					props.navigation.reset({index: 0, routes: [{name: 'Login'}]});
				}, 1000);
			},
			errormsg => {
				Modal.close();
				//에러메세지 표시
				Modal.popOneBtn(errormsg, '확인', () => {
					Modal.close();
				});
			},
		);
	};

	const selectPhoto = () => {
		// props.navigation.push('SinglePhotoSelect', props.route.name);
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 1,
			},
			responseObject => {
				console.log('선택됨', responseObject);
				responseObject.didCancel
					? console.log('선택취소')
					: setData({...data, user_profile_uri: responseObject.assets[responseObject.assets.length - 1].uri});
			},
		);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* Text Msg */}
			<TouchableWithoutFeedback onPress={() => console.log(data)}>
				<View
					style={{backgroundColor: 'red', height: 30, width: 30, position: 'absolute', borderWidth: 1, borderColor: 'blue', top: 0, left: 0}}></View>
			</TouchableWithoutFeedback>
			<View style={[temp_style.textMsg_AssignUserProfileImage, assignShelterProfileImage_style.txt_msg]}>
				<Text style={[txt.noto24]}>프로필 사진은 나중에도 변경 할 수 있어요.</Text>
			</View>

			{/* (M)ProfileImageSelect */}
			<View style={[temp_style.profileImageSelect, assignShelterProfileImage_style.profileImageSelect]}>
				<ProfileImageSelect onClick={selectPhoto} selectedImageUri={data.user_profile_uri} />
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignShelterProfileImage_style.btn_w654]}>
				<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w654} onPress={assginShelter} />
			</View>
		</View>
	);
};
