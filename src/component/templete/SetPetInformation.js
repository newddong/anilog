import React from 'react';
import {Text, View} from 'react-native';
import {login_style, setPetInformation, temp_style, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default SetPetInformation = props => {
	return (
		<View style={[login_style.wrp_main]}>
			<View style={[setPetInformation.inputForm]}>
				{/* tabSelectFilled_Type1 */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text>Text</Text>
						</View>
					</View>
					<View style={[temp_style.tabSelectFilled_Type1]}>
						<Text>tabSelectFilled_Type1</Text>
					</View>
				</View>
				{/* DatePicker And Birth Time */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text>Text</Text>
						</View>
					</View>
					<View style={[setPetInformation.datePicker]}>
						<Text style={[temp_txt.medium]}>DatePicker</Text>
					</View>
					<View style={[setPetInformation.birthTime]}>
						<Text> 1년 5개월</Text>
					</View>
				</View>
				{/* weight Input Form */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text>Text</Text>
						</View>
					</View>
					<View style={[setPetInformation.inputNoTitle]}>
						<Text style={[temp_txt.small]}>inputNoTitle</Text>
					</View>
					<View style={[setPetInformation.kg]}>
						<Text> kg </Text>
					</View>
				</View>
				{/* RadioBox */}
				<View style={[setPetInformation.radioBoxForm]}>
					<View style={[setPetInformation.radioBox_left]}>
						<Text>Text</Text>
					</View>
					<View style={[setPetInformation.radioBox_right]}>
						<Text> RadioBox</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
