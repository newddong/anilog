import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {applyDetails, btn_style, login_style, temp_style} from './style_templete';

export default ApplyDetails = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main, applyDetails.container]}>
			{/* (M)animalProtectDetails */}
			<View style={[temp_style.animalProtectDetails, applyDetails.animalProtectDetails]}>
				<Text>(M)animalProtectDetails</Text>
			</View>
			{/* BtnsContainer */}
			<View style={[applyDetails.btnContainer]}>
				<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
					<Text>(A)btn_w226</Text>
				</View>
				<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
					<Text>(A)btn_w226</Text>
				</View>
			</View>
		</ScrollView>
	);
};
