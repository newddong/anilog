import React from 'react';
import {Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';

import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w522} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, progressbar_style, assignUserProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignUserProfileImage = props => {
	const moveToAssignPetProfileImage = () => {
		props.navigation.push('AssignPetProfileImage');
	};
	const selectPhoto = () => {
		props.navigation.push('SinglePhotoSelect');
	};
	const onChangeNickName = text => {
		console.log(text);
	};
	//반려동물 등록 from 모달창 아직 미구현
	const goAssignPet = () => {
		console.log();
	};
	return (
		<KeyboardAvoidingView keyboardVerticalOffset={400}>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				{/* Text Msg */}
				<View style={[temp_style.textMsg_AssignUserProfileImage, assignUserProfileImage_style.txt_msg]}>
					<Text style={[txt.noto24]}>프로필 사진과 닉네임은 나중에도 변경 할 수 있어요.</Text>
				</View>

				{/* (M)ProfileImageSelect */}
				<View style={[temp_style.profileImageSelect, assignUserProfileImage_style.profileImageSelect]}>
					<ProfileImageSelect onClick={selectPhoto} />
				</View>

				{/* (M)Input30 */}
				<View style={[temp_style.input30_assignUserProfileImage, assignUserProfileImage_style.input30]}>
					<Input30
						showTitle={true}
						title={'닉네임'}
						description={'* 2자 이상 15자 이내의 영문,숫자, _ 의 입력만 가능합니다.'}
						width={654}
						confirm_msg={'사용 가능한 닉네임입니다.'}
						alert_msg={'사용 불가능한 닉네임입니다.'}
						onChange={text => onChangeNickName(text)}
					/>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, assignUserProfileImage_style.btn_w654]}>
					<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w522} onPress={moveToAssignPetProfileImage} />
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};
