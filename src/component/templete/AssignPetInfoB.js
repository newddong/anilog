import React from 'react';
import {Text, View} from 'react-native';
import { btn_w226 } from '../atom/btn/btn_style';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetInfoB = props => {
	return (
		<View style={login_style.wrp_main}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text>Text Msg</Text>
			</View> 

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoB, assignPetInfo_style.inputForm]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[temp_style.text_assignPetInfo]}>Text</Text>
					<View style={[temp_style.datePicker_assignPetInfo_depth1, assignPetInfo_style.datePicker_depth1]}>
						<Text>(M)DatePicker</Text>
					</View>
					<Text style={[temp_style.text218_assignPetInfo, assignPetInfo_style.text218]}>Text</Text>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[temp_style.text_assignPetInfo]}>Text</Text>
					<View style={[temp_style.inputNoTitle_assignPetInfo, assignPetInfo_style.inputNoTitle]}>
						<Text>(M)InputNoTitle</Text>
					</View>
					<Text style={[temp_style.text68_assignPetInfo , assignPetInfo_style.text68]}>Text</Text>
				</View>			
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewB]}>
				<View style={[btn_style.btn_w226]}>
					<Text>(A)Btn_w226</Text>
				</View>
				<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
					<Text>(A)Btn_w226</Text>
				</View>
			</View>
		</View>
	);
};