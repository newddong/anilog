import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {login_style, btn_style, animalAdoption} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AnimalAdoption = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main, animalAdoption.animalAdoption_container]}>
			{/* 축하메시지 */}
			<View style={[animalAdoption.congratulatory_message]}>
				<Text style={[txt.noto30b, {color: APRI10, textAlign: 'center'}]}>축하합니다! </Text>
				<Text style={[txt.noto30b, {color: APRI10}]}>임시보호를 하고 있는 동물이 입양을 가게 되었나요? </Text>
			</View>
			{/* Instruction */}
			<View style={[animalAdoption.instruction]}>
				<Text>Instruction</Text>
			</View>
			{/* btn_w522 */}
			<View style={[btn_style.btn_w522, animalAdoption.btn_w522]}>
				<Text>(A)btn_w522</Text>
			</View>
			{/* btn_w522 */}
			<View style={[btn_style.btn_w522, animalAdoption.btn_w522]}>
				<Text>(A)btn_w522</Text>
			</View>
		</ScrollView>
	);
};
