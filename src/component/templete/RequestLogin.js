import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TabSelectBorder_Type1 from 'Root/component/molecules/TabSelectBorder_Type1';
import {login_style, btn_style, requestLogin_style } from './style_templete';
import {txt}  from 'Root/config/textstyle';
import { NEEDS_LOGIN_ARE_YOU_MEMBER} from 'Root/i18n/msg';

export default RequestLogin = props => {	    
	return (
		<View style={login_style.wrp_main}>	
			{/* Text Massage	 */}
            <View style={requestLogin_style.txt_msg}>				 
				<Text style={[txt.noto28, txt.center]}>{NEEDS_LOGIN_ARE_YOU_MEMBER}</Text>
			</View>	

			{/* (A)Btn_w522 */}
			<View style={[btn_style.btn_w522, requestLogin_style.btn_w522]}>				 
				<Text>(A)Btn_w522</Text>
			</View>	

			{/* social login */}
			<View style={[login_style.social_info, requestLogin_style.social_info]}>				 
				<Text>소셜아이디로 로그인</Text>
			</View>	

		</View>
	);
};