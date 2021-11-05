import React from 'react';
import {Text, View} from 'react-native';
import {applyCompanionA, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionA = props => {
	return (
		<View style={[login_style.wrp_main, applyCompanionA.container]}>
			{/* stageBar */}
			<View style={[temp_style.stageBar, applyCompanionA.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>
			{/* textMSg */}
			<View style={[temp_style.stageBar, applyCompanionA.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* InputForm */}
			<View style={[temp_style.inputForm_ApplyCompanionA, applyCompanionA.inputForm]}>
				{/* addressInput */}
				<View style={[temp_style.addressInput]}>
					<Text> (O)Address Input</Text>
				</View>
				{/* (M)Input24A */}
				<View style={[temp_style.input24A_applyCompanionA, applyCompanionA.input24A]}>
					<Text>(M)Input24A</Text>
				</View>
			</View>
			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, applyCompanionA.btn_w654]}>
				<Text>(A)Btn_w654</Text>
			</View>
		</View>
	);
};
