import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w280} from '../atom/btn/btn_style';
import {FavoriteTag48_Filled, Paw48_APRI10, Setting46} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import ProfileMenu from '../organism_ksw/ProfileMenu';
import SocialInfoB from '../organism_ksw/SocialInfoB';
import {login_style, temp_style, userMenu_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserMenu = props => {
	const navigation = useNavigation();
	const menuClick = menuItem => {
		switch (menuItem) {
			case '친구':
				navigation.push('SaveFavorite');
				break;
			case '피드 게시글':
				navigation.push('FavoriteFeeds');
				break;
			case '보호 요청':
				navigation.push('SaveAnimalRequest');
				break;
			case '내 게시글':
				navigation.push('UserFeeds');
				break;
			case '나를 태그한 글':
				navigation.push('TagMeFeeds');
				break;
			case '신청 내역':
				navigation.push('AppliesRecord');
				break;
			case '동물 보호 현황':
				navigation.push('AnimalProtectList');
				break;
			// case '쪽지함':
			// 	return navigation.push('AnimalProtectList')
			// case '정보/문의':
			// 	return navigation.push('AnimalProtectList')
			// case '커뮤니티':
			// 	return navigation.push('SaveAnimalRequest')
		}
		// navigation.push('me')
	};
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

						{/* UserProfile 정보 */}
						<View>
							{/* User_id */}
							<View style={[userMenu_style.user_id]}>
								<Text style={[txt.roboto36b]}>User_id</Text>
							</View>
							{/* User 상태 메시지 */}
							<View style={[userMenu_style.contents]}>
								<Text style={[txt.noto24, {color: GRAY10}]}>우리 귀요미 쥬쥬랑 죠죠를 소개합니당 애교 덩어리 쥬쥬{'&'}시크 존멋탱 죠죠</Text>
							</View>
						</View>
					</View>

					{/* 업로드 팔로워 팔로잉 */}
					<View style={[userMenu_style.socialInfoB]}>
						{/* <Text>(O)SocialInfoB - 3items</Text> */}
						<SocialInfoB />
					</View>

					{/* 내 정보 수정 버튼*/}
					<View style={[userMenu_style.btn_w280_view]}>
						{/* btn_w280_view */}
						<View style={[userMenu_style.btn_w280]}>
							<AniButton
								btnLayout={btn_w280}
								btnStyle={'border'}
								btnTheme={'shadow'}
								btnTitle={'내 정보 수정'}
								titleFontStyle={24}
								onPress={() => navigation.push('UserInfoSetting')}
							/>
						</View>

						{/* 나의 반려동물 버튼 */}
						<View style={[userMenu_style.btn_w280]}>
							<TouchableOpacity onPress={() => navigation.push('UserInfoSetting')}>
								<AniButton btnLayout={btn_w280} btnStyle={'border'} btnTheme={'gray'} btnTitle={'나의 반려동물'} titleFontStyle={24} />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* UserMenu Page 하단 각종 메뉴는 ProfileMenu 안에 존재 */}
				<View style={[temp_style.userMenu_step2, userMenu_style.horizontalLine]}>
					<ProfileMenu
						menuTitle={'즐겨찾기'}
						menuItems={[
							['친구', '피드 게시글'],
							['보호 요청', '커뮤니티'],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<FavoriteTag48_Filled />}
					/>
					<ProfileMenu
						menuTitle={'나의 활동'}
						menuItems={[
							['내 게시글', '나를 태그한 글'],
							['신청 내역', '동물 보호 현황'],
							['커뮤니티', '쪽지함'],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<Paw48_APRI10 />}
					/>
					<ProfileMenu
						menuTitle={'설정'}
						menuItems={[
							['정보/문의', '계정'],
							['알림', ''],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<Setting46 />}
					/>
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
