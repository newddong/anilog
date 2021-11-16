import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {mobile_carrier} from 'Root/i18n/msg';
import {btn_w226, btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import InputWithSelect from '../molecules/InputWithSelect';
import Stagebar from '../molecules/Stagebar';
import AddressInput from '../organism_ksw/AddressInput';
import {addressInput} from '../organism_ksw/style_organism';
import {applyCompanionA, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionA = props => {
	const navigation = useNavigation();
	console.log('Route' + props.route.name);
	return (
		<View style={[login_style.wrp_main, applyCompanionA.container]}>
			{/* stageBar */}
			<View style={[temp_style.stageBar, applyCompanionA.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 20 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={1} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>
			{/* textMSg */}
			<View style={[temp_style.stageBar, applyCompanionA.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>개인정보의 내용이 맞는지 확인해 주세요.</Text>
			</View>
			{/* InputForm */}
			<View style={[temp_style.inputForm_ApplyCompanionA, applyCompanionA.inputForm]}>
				{/* addressInput */}
				<View style={[temp_style.addressInput]}>
					{/* <Text> (O)Address Input</Text> */}
					<AddressInput />
				</View>
				<View style={[temp_style.input24A_applyCompanionA, applyCompanionA.input24A]}>
					<View style={[addressInput.titleContainer]}>
						<Text style={[txt.noto24, {color: APRI10}]}>연락처 </Text>
					</View>
					<InputWithSelect items={mobile_carrier} width={360} />
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
