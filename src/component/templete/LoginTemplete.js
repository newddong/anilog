import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {login_style,temp_style, btn_style, loginTemplete_style} from './style_templete';

export default LoginTemplete = props => {	 
  
	return (
		<View style={login_style.wrp_main}>	
			{/* confirm without login */}
            <View style={temp_style.without_login}>				 
				<Text>로그인 없이 둘러보기</Text>
			</View>

			{/* LoginForm */}
			<View style={temp_style.loginForm}>				 
				<Text>LoginForm</Text>
			</View>

			{/* Btn_w522 */}
			<View style={[btn_style.btn_w522, loginTemplete_style.btn_w522_login]}>		 
				<Text>Btn_w522</Text>
			</View>

			{/* Btn_w522 */}
			<View style={[btn_style.btn_w522, loginTemplete_style.btn_w522_assign]}>		 
				<Text>Btn_w522</Text>
			</View>

			{/* basic info */}
			<View style={[login_style.basic_info, loginTemplete_style.basic_info]}>				 
				<Text>보호소 등록  |  내 계정 찾기  |  비밀번호 재설정</Text>
			</View>	

			{/* social login */}
			<View style={[login_style.social_info, loginTemplete_style.social_info]}>				 
				<Text>소셜아이디로 로그인</Text>
			</View>	

		</View>
	);
};