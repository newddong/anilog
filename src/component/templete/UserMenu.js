import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, userMenu_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserMenu = props => {
	return (
		<View style={login_style.wrp_main}>
			<ScrollView>
				{/* step1 */}
				<View style={[temp_style.userMenu_step1]}>
					{/* UserInfo */}
					<View style={[temp_style.userInfo, userMenu_style.userInfo]}>
						{/* ProfileImageLarge */}
						<View style={[temp_style.profileImageLarge, userMenu_style.profileImageLarge]}>
							<Text>(M)ProfileImageLarge</Text>
						</View>

						{/* 2번째 세로 view */}
						<View>
							{/* User_id */}
							<View style={[temp_style.user_id, userMenu_style.user_id]}>
								<Text>User_id</Text>
							</View>
							{/* Contents */}
							<View style={[temp_style.contents]}>
								<Text>Contents</Text>
							</View>
						</View>
					</View>

					{/* (O)SocialInfoB - 3items */}
					<View style={[temp_style.socialInfoB, userMenu_style.socialInfoB]}>
						<Text>(O)SocialInfoB - 3items</Text>
					</View>

					{/* btn_w280_view */}
					<View style={[temp_style.btn_w280__view_userMenu, userMenu_style.btn_w280_view]}>
						{/* btn_w280_view */}
						<View style={[temp_style.btn_w280_userMenu, userMenu_style.btn_w280]}>
							<Text>(A)btn_w280</Text>
						</View>
						{/* btn_w280_view */}
						<View style={[temp_style.btn_w280_userMenu]}>
							<Text>(A)btn_w280</Text>
						</View>
					</View>
				</View>

				{/* step2 */}
				<View style={[temp_style.userMenu_step2, userMenu_style.horizontalLine]}>
					<Text>(0)ProfileMenu</Text>
				</View>

				{/* step3 */}
				<View style={[temp_style.userMenu_step3, userMenu_style.horizontalLine]}>
					<Text>(0)ProfileMenu</Text>
				</View>

				{/* step4 */}
				<View style={[temp_style.userMenu_step4, userMenu_style.horizontalLine]}>
					<Text>(0)ProfileMenu</Text>
				</View>
			</ScrollView>
		</View>
	);
};
