import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetInfoA = props => {
	const moveToAssignProtectAnimalAge = () => {
		props.navigation.push('AssignProtectAnimalAge');
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text>Text Msg</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoA, assignPetInfo_style.inputForm]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[temp_style.text_assignPetInfo]}>Text</Text>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth1, assignPetInfo_style.dropdownSelect_depth1]}>
						<Text>(M)DropdownSelect</Text>
					</View>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth2, assignPetInfo_style.dropdownSelect_depth2]}>
						<Text>(M)DropdownSelect</Text>
					</View>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[temp_style.text_assignPetInfo]}>Text</Text>
					<View style={[temp_style.tabSelectFilled_Type1, assignPetInfo_style.tabSelectFilled_Type1]}>
						<Text>(M)TabSelectFilled_Type1</Text>
					</View>
				</View>

				{/* InputForm line3 */}
				<View style={[temp_style.inputForm_assignPetInfo_line3, assignPetInfo_style.line3]}>
					<Text style={[temp_style.text_assignPetInfo]}>Text</Text>
					<View style={[temp_style.radioBox_assignPetInfo, assignPetInfo_style.tabSelectFilled_Type1]}>
						<Text>(M)RadioBox</Text>
					</View>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewA]}>
				<TouchableWithoutFeedback onPress={props.navigation.goBack}>
					<View style={[btn_style.btn_w226]}>
						{/* <Text>(A)Btn_w226(뒤로)</Text> */}
						<AniButton
							btnTitle={'뒤로'}
							btnTheme={'shadow'}
							btnStyle={'border'}
							btnLayout={btn_w226}
							titleFontStyle={24}
							onPress={() => navigation.goBack()}
						/>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={moveToAssignProtectAnimalAge}>
					<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
						<AniButton
							btnTitle={'다음'}
							btnTheme={'shadow'}
							btnStyle={'filled'}
							btnLayout={btn_w226}
							titleFontStyle={24}
							onPress={() => navigation.push('AssignPetInfoB')}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};
