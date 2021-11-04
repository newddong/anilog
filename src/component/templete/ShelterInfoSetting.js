import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, shelterInfoSetting, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterInfoSetting = props => {
	return (
		<View style={login_style.wrp_main}>
			{/* ProfileImage & btn_w242*/}
			<View style={[shelterInfoSetting.shelterInfoSetting_step1]}>
				<View style={[temp_style.profileImageLarge]}>
					<Text>(M)ProfileImageLarge</Text>
				</View>
				<View style={[shelterInfoSetting.btn_w242]}>
					<Text style={temp_txt.small}>(A)btn_w242</Text>
				</View>
			</View>

			{/* MyInfo */}
			<View style={[shelterInfoSetting.shelterInfoSetting_step2]}>
				<Text>MyInfo</Text>
			</View>
		</View>
	);
};
