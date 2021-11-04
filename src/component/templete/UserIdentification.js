import React from 'react';
import {Text, View} from 'react-native';
import {btn_style, login_style, temp_style, userIdentification} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserIdentification = props => {
	return (
		<View style={[login_style.wrp_main, userIdentification.container]}>
			{/* (M)Tab SElect Border */}
			<View style={[temp_style.tabSelectBorder_Type1, userIdentification.tabSelect]}>
				<Text>(M)Tab SElect Border</Text>
			</View>
			{/* Text Message */}
			<View style={[userIdentification.textMessage]}>
				<Text>Text Message</Text>
			</View>
			{/* InputForm */}
			<View style={[userIdentification.inputForm]}>
				{/* (M)Input30 */}
				<View style={[temp_style.input30]}>
					<Text> (M)Input30</Text>
				</View>
				{/* inputWithSelect/InputWithEmail */}
				<View style={[temp_style.inputWithSelect, userIdentification.inputWithSelect]}>
					<Text>inputWithSelect/InputWithEmail</Text>
				</View>
			</View>
			{/* Btn_w654 */}
			<View style={[btn_style.btn_w654, userIdentification.btn_w654]}>
				<Text>Btn_w654</Text>
			</View>
		</View>
	);
};
