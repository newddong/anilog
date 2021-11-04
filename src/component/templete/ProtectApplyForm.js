import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style, protectApplyForm, btn_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ProtectApplyForm = props => {
	return (
		<View style={login_style.wrp_main}>
			<ScrollView style={[protectApplyForm.animalProtectDetails]}></ScrollView>
			<View style={btn_style.btn_w226}></View>
		</View>
	);
};
