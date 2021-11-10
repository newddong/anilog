import React from 'react';
import {Text, View} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, changePetProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ChangePetProfileImage = props => {
	const petData = props.route.params;
	return (
		<View style={login_style.wrp_main}>
			{/* (M)ProfileImageSelect */}
			<View style={[temp_style.profileImageSelect, changePetProfileImage_style.ProfileImageSelect]}>
				{/* <Text>(M)ProfileImageSelect</Text> */}
				<ProfileImageSelect img_uri={petData.img_uri} />
			</View>

			{/* (M)Input30(notitle) */}
			<View style={[temp_style.input30_changePetProfileImage, changePetProfileImage_style.input30]}>
				{/* <Text>(M)Input30(notitle)</Text> */}
				<Input30 showTitle={false} placeholder={petData.petNickname} />
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, changePetProfileImage_style.btn_w654]}>
				<AniButton btnTitle={'확인'} btnStyle={'filled'} btnTheme={'shadow'} titleFontStyle={32} btnLayout={btn_w654} />
			</View>
		</View>
	);
};

// ProfileImageSelect.defaultProps = {
// 	selectedImageUri: null,
// 	defaultImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
// 	onClick: e => console.log(e),
// };

// Input30.defaultProps = {
// 	showTitle: true, // true - title과 description 출력 , false - 미출력
// 	title: 'title',
// 	description: 'description',
// 	placeholder: 'placeholder',
// 	value: 'value',
// 	alert_msg: 'alert_msg',
// 	confirm_msg: 'confirm_msg',
// 	onClear: e => console.log(e),
// 	onChange: e => console.log(e),
// };
