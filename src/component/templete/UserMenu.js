import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {dummy_userObject, dummy_UserObject_shelter} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {
	ACCOUNT,
	ANIMAL_PROTECTION_STATE,
	APPLICATION_HISTORY,
	COMUNITY,
	DEFAULT_PROFILE,
	FAVORITES,
	FRIENDS,
	INFO,
	INFO_QUESTION,
	MY_ACTIVITY_IN_SHELTER,
	MY_COMPANION,
	MY_CONTENTS,
	MY_INFO_MODIFY,
	NOTE_LIST,
	PEED_CONTENTS,
	PROTECTION_REQUEST,
	SETTING,
	TAGED_CONTENTS_FOR_ME,
} from 'Root/i18n/msg';
import {btn_w280} from '../atom/btn/btn_style';
import {FavoriteTag48_Filled, Paw48_APRI10, Setting46} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import ProfileMenu from '../organism_ksw/ProfileMenu';
import SocialInfoB from '../organism_ksw/SocialInfoB';
import {login_style, temp_style, userMenu_style} from './style_templete';

// 상우 필요 작업
// (T)ChangeUserProfileImage - UI작업, API적용
// (T)ChangePassword - UI작업, API적용
// (T)UserInfoDetailSettting - 프로필 상세 정보 UI작업,API적용
export default UserMenu = props => {
	const navigation = useNavigation();

	const [data, setData] = React.useState(dummy_UserObject_shelter[0]); //우선 userObject 0번 추가

	React.useEffect(() => {
		AsyncStorage.setItem('token', JSON.stringify(data._id));
	}, [data]);

	const [socialInfoData, setSocialInfoData] = React.useState({
		upload_count: data.user_upload_count,
		follower_count: data.user_follower_count,
		follow_count: data.user_follow_count,
	});

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
				navigation.push('AppliesRecord', data._id); // ShelterProtectAnimalObject
				break;
			case '동물 보호 현황':
				navigation.push('AnimalProtectList', data._id); //ProtectAnimalObject
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
		navigation.push('PetInfoSetting', data); //data에 있는 userObject를 토대로 해당 유저의 반려동물을 검색해서 보내야함
	};

	// 내 정보 수정 클릭
	const onPressModifyMyInfo = () => {
		navigation.push('UserInfoSetting', data);
	};

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, userMenu_style.container]}>
				{/* 유저 프로필 정보 */}
				<View style={[userMenu_style.userMenu_step1]}>
					<View style={[temp_style.userInfo, userMenu_style.userInfo]}>
						<View style={[temp_style.profileImageLarge, userMenu_style.profileImageLarge]}>
							<ProfileImageLarge194 img_uri={data ? data.user_profile_uri : DEFAULT_PROFILE} />
						</View>

						<View>
							<View style={[userMenu_style.user_id]}>
								<Text style={[txt.roboto36b]}>{data ? data.user_nickname : ''}</Text>
							</View>
							<View style={[userMenu_style.contents]}>
								<Text ellipsizeMode={'tail'} numberOfLines={3} style={[txt.noto24, {color: GRAY10}]}>
									{data ? data.user_introduction : ''}
								</Text>
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
