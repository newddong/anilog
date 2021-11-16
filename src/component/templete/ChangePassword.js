import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import PasswordChecker from '../organism_ksw/PasswordChecker';
import {login_style, btn_style, temp_style, changePassword_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ChangePassword = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<View style={[temp_style.passwordChecker_changePassword, changePassword_style.passwordChecker]}>
					<PasswordChecker />
				</View>

				<View style={[btn_style.btn_w654, changePassword_style.btn_w654]}>
					<AniButton btnTitle={'확인'} btnLayout={btn_w654} disable={true} titleFontStyle={32} />
				</View>
			</View>
		</ScrollView>
	);
};
