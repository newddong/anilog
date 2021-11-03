import React from 'react';
import {Text, View} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfoA_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetInfoA = props => {
	return (
		<View style={login_style.wrp_main}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignPetInfoA, assignPetInfoA_style.textMsg]}>
				<Text>Text Msg</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.AssignPetInfoA, assignPetInfoA_style.inputForm]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignPetInfoA_line1]}>
					<Text style={[temp_style.text_assignPetInfoA]}>Text</Text>
					<View style={[temp_style.dropdownSelect_assignPetInfoA_depth1, assignPetInfoA_style.dropdownSelect_depth1]}>
						<Text>(M)DropdownSelect</Text>
					</View>
					<View style={[temp_style.dropdownSelect_assignPetInfoA_depth2, assignPetInfoA_style.dropdownSelect_depth2]}>
						<Text>(M)DropdownSelect</Text>
					</View>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignPetInfoA_line2]}>
					<Text>(M)Input30</Text>
				</View>

				{/* InputForm line3 */}
				<View style={[temp_style.inputForm_assignPetInfoA_line3]}>
					<Text>(M)Input30</Text>
				</View>
			</View>

			{/* InputForm */}
			<View style={[temp_style.inputForm_assignPetProfileImage, assignPetInfoA_style.inputForm]}>
				<View style={[temp_style.input30_assignPetProfileImage]}>
					<Text>(M)Input30</Text>
				</View>
				<View style={[temp_style.checkBox_assignPetProfileImage, assignPetInfoA_style.checkBox]}>
					<Text>(M)CheckBox</Text>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignPetInfoA_style.btn_w654]}>
				<Text>(A)Btn_w654</Text>
			</View>
		</View>
	);
};
