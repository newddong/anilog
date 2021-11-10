import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, btn_style, temp_style, progressbar_style, assignPetProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetProfileImage = props => {
	const navigation = useNavigation();
	const moveToAssignPetProfileImage = () => {
		props.navigation.push('AssignPetInfoA');
	};
	const moveToSinglePhotoSelect = () => {
		props.navigation.push('SinglePhotoSelect');
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignPetProfileImage, assignPetProfileImage_style.textMsg]}>
				<Text>Text Msg</Text>
			</View>

			{/* (M)ProfileImageSelect */}
			<TouchableWithoutFeedback onPress={moveToSinglePhotoSelect}>
				<View style={[temp_style.profileImageSelect, assignPetProfileImage_style.profileImageSelect]}>
					<Text>(M)ProfileImageSelect</Text>
				</View>
			</TouchableWithoutFeedback>

			{/* InputForm */}
			<View style={[temp_style.inputForm_assignPetProfileImage, assignPetProfileImage_style.inputForm]}>
				<View style={[temp_style.input30_assignPetProfileImage]}>
					<Text>(M)Input30</Text>
				</View>
				<View style={[temp_style.checkBox_assignPetProfileImage, assignPetProfileImage_style.checkBox]}>
					<Text>(M)CheckBox</Text>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<TouchableWithoutFeedback onPress={moveToAssignPetProfileImage}>
				<View style={[btn_style.btn_w654, assignPetProfileImage_style.btn_w654]}>
					{/* <Text>(A)Btn_w654(반려동물 닉네임등록 완료)</Text> */}
					<AniButton
						btnTitle={'확인'}
						btnTheme={'shadow'}
						btnStyle={'filled'}
						btnLayout={btn_w654}
						titleFontStyle={24}
						onPress={() => navigation.push('AssignPetInfoA')}
					/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
