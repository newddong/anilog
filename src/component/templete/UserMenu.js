import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { dummy_userObject } from 'Root/config/dummyDate_json';
import { txt } from 'Root/config/textstyle';
import { ACCOUNT, ANIMAL_PROTECTION_STATE, APPLICATION_HISTORY, COMUNITY, FAVORITES, FRIENDS, INFO, INFO_QUESTION, MY_ACTIVITY_IN_SHELTER, MY_COMPANION, MY_CONTENTS, MY_INFO_MODIFY, NOTE_LIST, PEED_CONTENTS, PROTECTION_REQUEST, SETTING, TAGED_CONTENTS_FOR_ME } from 'Root/i18n/msg';
import { btn_w280 } from '../atom/btn/btn_style';
import { FavoriteTag48_Filled, Paw48_APRI10, Setting46 } from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import ProfileMenu from '../organism_ksw/ProfileMenu';
import SocialInfoB from '../organism_ksw/SocialInfoB';
import { login_style, temp_style, userMenu_style } from './style_templete';

export default UserMenu = props => {

	const navigation = useNavigation();

	const [data, setData] = React.useState(dummy_userObject)

	React.useEffect(() => {

	}, [])

	// React.useEffect(() => {
	// 	const loadfn = async () => {
	// 		await cookieReset(await AsyncStorage.getItem('token'));
	// 		let profile = await axios.get(serveruri + '/user/getMyProfile');
	// 		setData(profile.data.msg);
	// 		console.log('profiledata');
	// 		console.log(profile.data);
	// 	};
	// 	loadfn();
	// }, []);

	const [socialInfoData, setSocialInfoData] = React.useState({
		upload_count: data.user_upload_count,
		follower_count: data.user_follower_count,
		follow_count: data.user_follow_count
	})
	const menuClick = menuItem => {
		switch (menuItem) {
			case '친구':
				navigation.push('SaveFavorite'); // FollowObject
				break;
			case '피드 게시글':
				navigation.push('FavoriteFeeds'); // FavoriteFeedObject
				break;
			case '보호 요청':
				navigation.push('SaveAnimalRequest'); // BookmarkProtectRequestObject
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

	// 나의 반려동물 버튼 클릭
	const onPressMyCompanion = () => {
		navigation.push('UserInfoSetting')
	}

	// 내 정보 수정 클릭
	const onPressModifyMyInfo = () => {
		navigation.push('UserInfoSetting')
	}

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, userMenu_style.container]}>
				{/* 유저 프로필 정보 */}
				<View style={[userMenu_style.userMenu_step1]}>
					<View style={[temp_style.userInfo, userMenu_style.userInfo]}>
						<View style={[temp_style.profileImageLarge, userMenu_style.profileImageLarge]}>
							<ProfileImageLarge194 img_uri={data ? data.user_profile_uri : 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg'} />
						</View>

						<View>
							<View style={[userMenu_style.user_id]}>
								<Text style={[txt.roboto36b]}>{data ? data.user_nickname : ''}</Text>
							</View>
							<View style={[userMenu_style.contents,]}>
								<Text ellipsizeMode={'tail'} numberOfLines={3} style={[txt.noto24, { color: GRAY10 }]}>{data ? data.user_Introduction : ''}</Text>
							</View>
						</View>
					</View>

					{/* 업로드 팔로워 팔로잉 */}
					<View style={[userMenu_style.socialInfoB]}>
						<SocialInfoB data={socialInfoData} />
					</View>

					{/* 내 정보 수정 버튼*/}
					<View style={[userMenu_style.btn_w280_view]}>
						<View style={[userMenu_style.btn_w280]}>
							<AniButton btnLayout={btn_w280} btnStyle={'border'} btnTheme={'shadow'} btnTitle={MY_INFO_MODIFY} onPress={onPressModifyMyInfo} />
						</View>

						{/* 나의 반려동물 버튼 */}
						<View style={[userMenu_style.btn_w280]}>
							<AniButton btnLayout={btn_w280} btnStyle={'border'} btnTheme={'gray'} btnTitle={MY_COMPANION} onPress={onPressMyCompanion} />
						</View>
					</View>
				</View>

				{/* 하단 메뉴 */}
				<View style={[temp_style.userMenu_step2, userMenu_style.horizontalLine]}>
					<ProfileMenu
						menuTitle={FAVORITES}
						menuItems={[
							[FRIENDS, PEED_CONTENTS],
							[PROTECTION_REQUEST, COMUNITY],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<FavoriteTag48_Filled />}
					/>
					<ProfileMenu
						menuTitle={MY_ACTIVITY_IN_SHELTER}
						menuItems={[
							[MY_CONTENTS, TAGED_CONTENTS_FOR_ME],
							[APPLICATION_HISTORY, ANIMAL_PROTECTION_STATE],
							[COMUNITY, NOTE_LIST],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<Paw48_APRI10 />}
					/>
					<ProfileMenu
						menuTitle={SETTING}
						menuItems={[
							[INFO_QUESTION, ACCOUNT],
							[INFO, ''],
						]}
						onClick={clikedItem => menuClick(clikedItem)}
						titleIcon={<Setting46 />}
					/>
				</View>
			</View>
		</ScrollView>
	);
};


export const ddd = {
	_id: 1, //temp
	user_type: 'user', //유저의 유형, 일반유저(user),보호소(shelter),반려동물(pet)으로 나뉨
	user_agreement: {
		is_over_fourteen: true, //14살 이상
		is_service: true, //서비스 동의
		is_personal_Info: true, //개인정보 제공 동의
		is_location_service_info: true, //위치정보 제공 동의
		is_donation_info: true, //기부정보 제공 동의
		is_marketting_Info: false //마케팅정보 제공 동의
	}, //회원가입 동의항목 동의여부
	user_name: '권상우', //실명
	user_nickname: '덴데', //닉네임
	user_phone_number: '010-9645-0422', //휴대폰번호
	user_mobile_company: 'LG U+', //가입된 통신사
	user_is_verified_phone_number: true, //폰번호 인증여부
	user_email: 'lanad01@naver.com', //이메일
	user_is_verified_email: false, //이메일 인증여부
	user_password: '121212', //패스워드
	user_address: {
		city: '서울시', //시,도 
		district: '마포구', //군,구
		neighbor: '신수동 89-77' //동,읍,면
	}, //회원주소
	user_profile_uri: 'https://photo.jtbc.joins.com/news/2017/06/05/20170605100602700.jpg', //프로필 사진
	user_Introduction: '권상우는 연예계에서 없어선 안 될 배우다. 드라마와 영화, 두 분야를 오가며 시청자와 관객의 부름을 받는 배우는 생각보다 많지 않다. 호감도와 연기력, 두 가지 모두를 갖춰야 전방위 활동이 가능하다.',
	user_birthday: '1991-12-21', //필요한지 검토 필요
	// user_interests : Array<{
	//             location : String, 
	//             activity : String
	//             }>, //관심사 항목 키워드
	user_upload_count: 142142, //업로드 게시물 숫자
	user_follow_count: 12324, //팔로우 숫자
	user_follower_count: 1245667, //팔로워 숫자
	user_denied: false, //유저의 차단여부
	user_register_date: '2021-11-24', //가입일
}
