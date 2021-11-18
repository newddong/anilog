import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, assignShelterProfileImage_style} from './style_templete';

export default AssignShelterProfileImage = props => {
	const [imgSelected, setImgSelected] = React.useState();

	//SinglePhotoSelect에서 받아오는 Image값이 null일 경우 default이미지 설정, 존재할 경우 해당 img_uri사용
	React.useEffect(() => {
		props.route.params == null
			? setImgSelected('https://flexible.img.hani.co.kr/flexible/normal/930/620/imgdb/original/2019/1120/20191120501989.jpg')
			: setImgSelected(props.route.params[0]);
	});

	const goLogin = () => {
		props.navigation.reset({index: 0, routes: [{name: 'Login'}]});
	};

	const selectPhoto = () => {
		props.navigation.push('SinglePhotoSelect', props.route.name);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* Text Msg */}
			<View style={[temp_style.textMsg_AssignUserProfileImage, assignShelterProfileImage_style.txt_msg]}>
				<Text style={[txt.noto24]}>프로필 사진은 나중에도 변경 할 수 있어요.</Text>
			</View>

			{/* (M)ProfileImageSelect */}
			<View style={[temp_style.profileImageSelect, assignShelterProfileImage_style.profileImageSelect]}>
				<ProfileImageSelect onClick={selectPhoto} selectedImageUri={imgSelected} />
			</View>

			{/* (A)Btn_w654 */}
			<TouchableWithoutFeedback onPress={goLogin}>
				<View style={[btn_style.btn_w654, assignShelterProfileImage_style.btn_w654]}>
					<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w654} onPress={goLogin} />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
