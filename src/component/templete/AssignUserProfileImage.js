import React from 'react';
import {Text, View} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, assignUserProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignUserProfileImage = props => {	
	return (
		<View style={login_style.wrp_main}>   
			{/* Text Msg */}
			<View style={[temp_style.textMsg_AssignUserProfileImage, assignUserProfileImage_style.txt_msg]}>
				<Text>Text Msg</Text>
			</View>
					
			{/* (M)ProfileImageSelect */}
			<View style={[temp_style.profileImageSelect, assignUserProfileImage_style.profileImageSelect]}>
				<Text>ProfileImageSelect</Text>
			</View>	

            {/* (M)Input30 */}
			<View style={[temp_style.input30_assignUserProfileImage, assignUserProfileImage_style.input30]}>
				<Text>(M)Input30</Text>
			</View>	

            {/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignUserProfileImage_style.btn_w654]}>
				<Text>(A)Btn_w654</Text>
			</View>
		</View>
	);
};