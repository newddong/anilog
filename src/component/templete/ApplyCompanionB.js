import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {AddItem64} from '../atom/icon';
import {applyCompanionB, login_style, temp_style} from './style_templete';

export default ApplyCompanionC = props => {
	return (
		<View style={[login_style.wrp_main, applyCompanionB.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionB.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionB.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (O)CompanionFormList */}
			<View style={[temp_style.companionFormList, applyCompanionB.inputForm]}>
				<Text>(O)CompanionFormList</Text>
			</View>
			<View style={[applyCompanionB.addPetBtnView]}>
				<AddItem64 />
				<View style={[applyCompanionB.addPetTextView]}>
					<Text style={[txt.noto30, applyCompanionB.addPetText]}>반려 생활 추가</Text>
				</View>
			</View>
		</View>
	);
};
