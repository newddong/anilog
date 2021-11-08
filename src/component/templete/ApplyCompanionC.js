import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {btn_w176} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import AssignCheckList from '../organism_ksw/AssignCheckList';
import {applyCompanionC, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	const navigation = useNavigation();

	return (
		<View style={[login_style.wrp_main, applyCompanionC.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionC.stageBar]}>
				<Stagebar
					current={3}
					maxstage={5}
					insideBarStyle={{flex: 1, backgroundColor: APRI10, borderRadius: 5}}
					width={292}
					backgroundBarStyle={{borderRadius: 5}}
					textStyle={{}}
				/>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionC.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (O)AssignCheckList */}
			<View style={[temp_style.assignCheckList, applyCompanionC.assignCheckList]}>
				<AssignCheckList />
			</View>
			{/* (A)btn_w176 */}
			<View style={[applyCompanionC.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'뒤로'} titleFontStyle={24} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'임시저장'} titleFontStyle={24} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton
						btnStyle={'filled'}
						btnLayout={btn_w176}
						btnTitle={'다음'}
						titleFontStyle={24}
						onPress={() =>
							props.route.name == 'ApplyProtectActivityC' ? navigation.push('ApplyProtectActivityD') : navigation.push('ApplyAnimalAdoptionD')
						}
					/>
				</View>
			</View>
		</View>
	);
};
