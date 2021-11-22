import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { btn_w654 } from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import { login_style, btn_style, temp_style, changeUserProfileImage_style } from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ChangeUserProfileImage = props => {
	const navigation = useNavigation();
	const [confirmed, setConfirmed] = React.useState(false);
	const onConfirmed = () => {
		console.log('확인 클릭');
	};
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, { flex: 1 }]}>
				{/* (M)ProfileImageSelect */}
				<View style={[temp_style.profileImageSelect, changeUserProfileImage_style.profileImageSelect]}>
					<ProfileImageSelect
						selectedImageUri={'https://cdn.imweb.me/upload/S20190926a0754ded73eb5/dc9933a6cf7b3.png'}
						onClick={() => navigation.push('SinglePhotoSelect', props.route.name)}
					/>
				</View>

				{/* ProfileNicknameChange */}
				<View style={[temp_style.profileNicknameChange, changeUserProfileImage_style.profileNicknameChange]}>
					{/* (M)Input24 */}
					<View style={[temp_style.input24_changeUserProfileImage, changeUserProfileImage_style.input24]}>
						<Input24 title={'기존 닉네임'} defaultValue={props.previous_nickname} width={654} />
					</View>
					{/* (M)Input24 */}
					<View style={[temp_style.input24_changeUserProfileImage]}>
						<Input24
							title={'새 닉네임'}
							descriptionType={'info'}
							info={'2자 이상 15자 이내의 영문, 숫자의 입력만 가능합니다'}
							placeholder={'새로운 닉네임을 적어주세요.'}
							width={654}
						/>
					</View>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, changeUserProfileImage_style.btn_w654]}>
					{!confirmed ? (
						<AniButton btnTitle={'확인'} btnStyle={'filled'} btnTheme={'shadow'} titleFontStyle={32} btnLayout={btn_w654} onPress={onConfirmed} />
					) : (
						<AniButton btnTitle={'확인'} disable={true} titleFontStyle={32} btnLayout={btn_w654} />
					)}
				</View>
			</View>
		</ScrollView>
	);
};
ChangeUserProfileImage.defaultProps = {
	previous_nickname: 'Previous Nickname',
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
