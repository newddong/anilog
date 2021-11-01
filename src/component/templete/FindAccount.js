import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import DP from 'Root/config/dp';
import {
	 REQ_NAME, REQ_PHONE_NUM, TAB_VERIFY_EMAIL, TAB_VERIFY_PHONE
	, ASSIGN_USER_DESCRIPTION, REQ_EMAIL, CHECK_VERIFYCATION, REQUEST_VERIFYCATION, INPUT_VERIFYCATION_NUM
	, EMAIL_NAVER, EMAIL_DAUM, EMAIL_KAKAO, EMAIL_NATE, EMAIL_GMAIL
	, INPUT_DIRECT, INPUT_DOMAIN
    } from 'Root/i18n/msg';
import TabSelectBorder_Type1 from 'Root/component/molecules/TabSelectBorder_Type1';
import {txt, lo, tab}  from './style_assign';

export default FindAccount = props => {	
    const tabArray = [TAB_VERIFY_PHONE, TAB_VERIFY_EMAIL];
    
	return (
		<View style={lo.wrp_main}>				
			<TabSelectBorder_Type1 items={tabArray}/>            
            <View style={lo.msg}>
				<Text style={[txt.noto28, txt.center]}>{ASSIGN_USER_DESCRIPTION}</Text>
			</View>

		</View>
	);
};