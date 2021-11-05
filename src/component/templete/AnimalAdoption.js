import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {login_style, btn_style, animalAdoption} from './style_templete';

export default AnimalAdoption = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, animalAdoption.container]}>
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
			</View>
		</ScrollView>
	);
};
