import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import InputWithSelect from '../molecules/InputWithSelect';
import Stagebar from '../molecules/Stagebar';
import AddressInput from '../organism_ksw/AddressInput';
import {applyCompanionA, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionA = props => {
	const navigation = useNavigation();
	console.log('Route' + props.route.name);
	return (
		<View style={[login_style.wrp_main, applyCompanionA.container]}>
			{/* stageBar */}
			<View style={[temp_style.stageBar, applyCompanionA.stageBar]}>
				<Stagebar
					current={1}
					maxstage={5}
					insideBarStyle={{flex: 1, backgroundColor: APRI10, borderRadius: 5}}
					width={292}
					backgroundBarStyle={{borderRadius: 5}}
					textStyle={{}}
				/>
			</View>
			{/* textMSg */}
			<View style={[temp_style.stageBar, applyCompanionA.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* InputForm */}
			<View style={[temp_style.inputForm_ApplyCompanionA, applyCompanionA.inputForm]}>
				{/* addressInput */}
				<View style={[temp_style.addressInput]}>
					{/* <Text> (O)Address Input</Text> */}
					<AddressInput />
				</View>
				<View style={[temp_style.input24A_applyCompanionA, applyCompanionA.input24A]}>
					<InputWithSelect />
				</View>
			</View>
			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, applyCompanionA.btn_w654]}>
				<AniButton
					btnStyle={'filled'}
					btnTitle={'확인'}
					titleFontStyle={40}
					btnLayout={btn_w654}
					onPress={() =>
						props.route.name == 'ApplyProtectActivityA' ? navigation.push('ApplyProtectActivityB') : navigation.push('ApplyAnimalAdoptionB')
					}
				/>
			</View>
		</View>
	);
};
