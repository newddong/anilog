import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {btn_w176} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputLongText from '../molecules/InputLongText';
import Stagebar from '../molecules/Stagebar';
import {applyCompanionD, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	const navigation = useNavigation();

	return (
		<View style={[login_style.wrp_main, applyCompanionD.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionD.stageBar]}>
				<Stagebar
					current={4}
					maxstage={4}
					insideBarStyle={{flex: 1, backgroundColor: APRI10, borderRadius: 5}}
					width={292}
					backgroundBarStyle={{borderRadius: 5}}
					textStyle={{}}
				/>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionD.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (M)InputLongText */}
			<View style={[temp_style.inputLongText, applyCompanionD.InputLongText]}>
				<InputLongText />
			</View>
			{/* BtnsContainer */}
			<View style={[applyCompanionD.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'뒤로'} titleFontStyle={24} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'임시저장'} titleFontStyle={24} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton
						btnStyle={'filled'}
						btnLayout={btn_w176}
						btnTitle={'다음'}
						titleFontStyle={24}
						onPress={() =>
							props.route.name == 'ApplyProtectActivityD' ? navigation.push('ApplyProtectActivityE') : navigation.push('ApplyAnimalAdoptionE')
						}
					/>
				</View>
			</View>
		</View>
	);
};
