import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w280} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import ProfileMenu from '../organism_ksw/ProfileMenu';
import SocialInfoB from '../organism_ksw/SocialInfoB';
import {login_style, btn_style, temp_style, progressbar_style, userMenu_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserMenu = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, userMenu_style.container]}>
				{/* step1 */}
				<View style={[userMenu_style.userMenu_step1]}>
					{/* UserInfo */}
					<View style={[temp_style.userInfo, userMenu_style.userInfo]}>
						{/* ProfileImageLarge */}
						<View style={[temp_style.profileImageLarge, userMenu_style.profileImageLarge]}>
							<ProfileImageLarge194 img_uri={'https://blog.kakaocdn.net/dn/bPLim5/btq6BEqY2Tt/LFOIUbaauHk4IB2YOmzxA0/img.jpg'} />
						</View>

						{/* 2번째 세로 view */}
						<View>
							{/* User_id */}
							<View style={[userMenu_style.user_id]}>
								<Text style={[txt.roboto36b]}>User_id</Text>
							</View>
							{/* Contents */}
							<View style={[userMenu_style.contents]}>
								<Text style={[txt.noto24, {color: GRAY10}]}>우리 귀요미 쥬쥬랑 죠죠를 소개합니당 애교 덩어리 쥬쥬{'&'}시크 존멋탱 죠죠</Text>
							</View>
						</View>
					</View>

					{/* (O)SocialInfoB - 3items */}
					<View style={[userMenu_style.socialInfoB]}>
						{/* <Text>(O)SocialInfoB - 3items</Text> */}
						<SocialInfoB />
					</View>

					{/* btn_w280_view */}
					<View style={[userMenu_style.btn_w280_view]}>
						{/* btn_w280_view */}
						<View style={[userMenu_style.btn_w280]}>
							<AniButton btnLayout={btn_w280} btnStyle={'border'} btnTheme={'shadow'} btnTitle={'내 정보 수정'} titleFontStyle={24} />
						</View>
						{/* btn_w280_view */}
						<View style={[userMenu_style.btn_w280]}>
							<AniButton btnLayout={btn_w280} btnStyle={'border'} btnTheme={'gray'} btnTitle={'나의 반려동물'} titleFontStyle={24} />
						</View>
					</View>
				</View>

				{/* step2 */}
				<View style={[temp_style.userMenu_step2, userMenu_style.horizontalLine]}>
					<ProfileMenu />
				</View>
			</View>
		</ScrollView>
	);
};

// ProfileImageLarge194.defaultProps = {
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
// };
