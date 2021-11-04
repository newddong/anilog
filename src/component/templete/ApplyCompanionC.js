import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {applyCompanionC, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main, applyCompanionC.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionC.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionC.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (O)AssignCheckList */}
			<View style={[temp_style.assignCheckList, applyCompanionC.assignCheckList]}>
				<Text>(O)AssignCheckList</Text>
			</View>
			<View style={[applyCompanionC.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<Text>(A)btn_w176</Text>
				</View>
			</View>
		</ScrollView>
	);
};
