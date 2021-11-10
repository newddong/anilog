import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import {login_style, btn_style, temp_style, progressbar_style, assignProtectAnimal_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignProtectAnimalImage = props => {
	const navigation = useNavigation();
	const moveToNext = () => {
		navigation.push('AssignProtectAnimalDate');
	};
	const moveToSinglePhotoSelect = () => {
		navigation.push('SinglePhotoSelect');
	};

	return (
		<View style={login_style.wrp_main}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignProtectAnimal, assignProtectAnimal_style.textMsg]}>
				<Text>Text Msg</Text>
			</View>

			{/* (O)SelectedMediaList */}
			<View style={[temp_style.selectedMediaList_assignProtectAnimal, assignProtectAnimal_style.selectedMediaList]}>
				<Text>(O)SelectedMediaList</Text>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignProtectAnimal, assignProtectAnimal_style.btn_w226_view_image]}>
				<TouchableOpacity onPress={moveToSinglePhotoSelect}>
					<View style={[temp_style.image_assignProtectAnimal]}>
						<Text>사진추가</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={moveToNext}>
					<View style={[btn_style.btn_w226, assignProtectAnimal_style.btn_w226]}>
						<Text>(A)Btn_w226</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
