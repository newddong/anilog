import React from 'react';
import {Text, View} from 'react-native';
import {login_style, shelterMenul_style, temp_txt, temp_style, btn_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterMenu = props => {
	return (
		<View style={login_style.wrp_main}>
			<View style={[shelterMenul_style.shelterMenuStep1]}>
				{/* Shelter Info*/}
				<View style={[shelterMenul_style.shelterInfo]}>
					<View style={[shelterMenul_style.shelterInfo_container]}>
						<View style={[shelterMenul_style.shelterInfo_container_left]}>
							{/* ProfileImageLarge */}
							<View style={[temp_style.profileImageLarge]}>
								<Text>(M)ProfileImageLarge</Text>
							</View>
						</View>
						<View style={[shelterMenul_style.shelterInfo_container_right]}>
							{/* userId */}
							<View style={[shelterMenul_style.shelterInfo_user_id]}>
								<Text>User_id</Text>
							</View>
							{/* contents */}
							<View style={[shelterMenul_style.shelterInfo_contents]}>
								<Text>Contents</Text>
							</View>
						</View>
					</View>
				</View>

				{/* (O)SocialInfoB-4Items */}
				<View style={[temp_style.socialInfoB, shelterMenul_style.socialInfoB_4Items]}>
					<Text>(o)SocialInfoB-4Items</Text>
				</View>

				{/* (btn_w280, Float) */}
				<View style={[shelterMenul_style.btnView]}>
					<View style={[btn_style.btn_w280]}>
						<Text>(A)btn_w280</Text>
					</View>
					<View style={[shelterMenul_style.btnView_floadAddPet_126x92]}>
						<Text style={temp_txt.small}>(A)FloatAddPet_126x92</Text>
					</View>
					<View style={[shelterMenul_style.btnView_floadArticle_126x92]}>
						<Text style={temp_txt.small}>(A)FloatArticle_126x92</Text>
					</View>
				</View>
			</View>

			{/* (O)ProfileMenul */}
			<View style={[shelterMenul_style.profileMenu1]}>
				<Text>(o)ProfileMenu</Text>
			</View>
			<View style={[shelterMenul_style.profileMenu2]}>
				<Text>(o)ProfileMenu</Text>
			</View>
			<View style={[shelterMenul_style.profileMenu3]}>
				<Text>(o)ProfileMenu</Text>
			</View>
		</View>
	);
};
