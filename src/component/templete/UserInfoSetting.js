import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, userInfoSetting_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserInfoSetting = props => {
	return (
		<View style={login_style.wrp_main}>
			<ScrollView>
				{/* step1 */}
				<View style={[temp_style.userInfoSetting_step1]}>
					{/* (M)ProfileImageLarge */}
					<View style={[temp_style.profileImageLarge, userInfoSetting_style.profileImageLarge]}>
						<Text>(M)ProfileImageLarge</Text>
					</View>

					{/* (A)btn_w242 */}
					<View style={[btn_style.btn_w242, userInfoSetting_style.btn_w242]}>
						<Text>(A)btn_w242</Text>
					</View>
				</View>

				{/* step2 - MyInfo */}
				<View style={[temp_style.userInfoSetting_step2]}>
					{/* privateInfo */}
					<View style={[temp_style.privateInfo]}>
						<View style={[temp_style.title]}>
							<Text>Tititle</Text>
						</View>
					</View>

					{/*  detailInfo*/}
					<View style={[btn_style.btn_w242, userInfoSetting_style.btn_w242]}>
						<Text>(A)btn_w242</Text>
					</View>

					{/*  introduce*/}
					<View style={[btn_style.btn_w242, userInfoSetting_style.btn_w242]}>
						<Text>(A)btn_w242</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
