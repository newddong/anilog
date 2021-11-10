import React from 'react';
import {Text, View} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, changeUserProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ChangeUserProfileImage = props => {
	const navigation = useNavigation();
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)ProfileImageSelect */}
			<View style={[temp_style.profileImageSelect, changeUserProfileImage_style.profileImageSelect]}>
				<ProfileImageSelect
					selectedImageUri={'https://img.animalplanet.co.kr/news/2019/08/10/700/v4q0b0ff4hcpew1g6t39.jpg'}
					onClick={() => navigation.push('SinglePhotoSelect')}
				/>
			</View>

			{/* ProfileNicknameChange */}
			<View style={[temp_style.profileNicknameChange, changeUserProfileImage_style.profileNicknameChange]}>
				{/* (M)Input24 */}
				<View style={[temp_style.input24_changeUserProfileImage, changeUserProfileImage_style.input24]}>
					<Input24 title={'기존 닉네임'} />
				</View>
				{/* (M)Input24 */}
				<View style={[temp_style.input24_changeUserProfileImage]}>
					<Input24 title={'새 닉네임'} descriptionType={'info'} info={'2자 이상 15자 이내의 영문, 숫자의 입력만 가능합니다'} />
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, changeUserProfileImage_style.btn_w654]}>
				<AniButton btnTitle={'확인'} disable={true} titleFontStyle={32} btnLayout={btn_w654} />
			</View>
		</View>
	);
};

// Input24.defaultProps = {
// 	title: 'title', // input title
// 	placeholder: 'placeholder',
// 	descriptionType: 'star', // star , info - title 오른쪽 description을 별표형식 / Info형식 구분
// 	value: 'value',
// 	alert_msg: 'alert_msg',
// 	confirm_msg: 'confirm_msg',
// 	info: null, //
// };

// ProfileImageSelect.defaultProps = {
// 	selectedImageUri: null,
// 	defaultImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
// 	onClick: e => console.log(e),
// };
