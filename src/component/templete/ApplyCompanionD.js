import React from 'react';
import {Text, View} from 'react-native';
import {applyCompanionD, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	return (
		<View style={[login_style.wrp_main, applyCompanionD.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionD.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionD.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (M)InputLongText */}
			<View style={[temp_style.inputLongText, applyCompanionD.InputLongText]}>
				<Text>(M)InputLongText</Text>
			</View>
			{/* BtnsContainer */}
			<View style={[applyCompanionD.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
			</View>
		</View>
	);
};
