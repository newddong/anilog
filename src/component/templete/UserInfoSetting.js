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
					{/* accountInfo - MyInfo에서 첫번째 칸 : 계정정보 */}
					<View style={[temp_style.accountInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title]}>
							<Text>Tititle</Text>
						</View>
						{/* accountInfo_depth2 - user_email과 비밀번호 변경하기*/}
						<View style={[temp_style.accountInfo_depth2]}>
							<View style={[temp_style.user_email_userInfoSetting, userInfoSetting_style.user_email]}>
								<Text>User_email</Text>
							</View>
							<View style={[temp_style.changePassword_userInfoSetting, userInfoSetting_style.changePassword]}>
								<Text>비밀번호 변경하기</Text>
							</View>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* detailInfo - MyInfo에서 두번째 칸 : 상세정보 */}
					<View style={[temp_style.detailInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
							<Text>Tititle</Text>
						</View>
						<View style={[temp_style.bracket48, userInfoSetting_style.bracket48]}>
							<Text>Bracket48</Text>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* introduce - MyInfo에서 세번째 칸 : 소개 */}
					<View style={[temp_style.introduceInfo]}>
						<View style={[temp_style.introduceInfo_depth1]}>
							<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
								<Text>Tititle</Text>
							</View>
							<View style={[btn_style.btn_w114, userInfoSetting_style.btn_w114]}>
								<Text>btn_w114</Text>
							</View>
						</View>
						<View style={[temp_style.userText_userInfoSetting, userInfoSetting_style.userText]}>
							<Text>User_Text</Text>
						</View>
					</View>
				</View>
				{/* step3 - MyPetList */}
				<View style={[temp_style.myPetList]}>
					<View style={[temp_style.myPetList_title]}>
						<Text style={[temp_style.title_userInfoSetting, userInfoSetting_style.title_detail]}>Title</Text>
					</View>
					<View style={[temp_style.myPetList_myPetList]}>
						<Text>(O)MyPetList</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
