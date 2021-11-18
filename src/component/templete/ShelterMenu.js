import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {login_style, shelterMenu, temp_txt, temp_style, btn_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import {txt} from 'Root/config/textstyle';
import SocialInfoB from '../organism_ksw/SocialInfoB';
import {btn_w280} from '../atom/btn/btn_style';
import {FloatAddPet_126x92} from '../atom/icon';
import {FloatAddArticle_126x92} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileMenu from '../organism_ksw/ProfileMenu';
import {Setting46, FavoriteTag48_Filled, Heart48_Filled, Paw46} from '../atom/icon';
import {
	MANAGEMENT_OF_PROTECTED_ANIMAL,
	PROTECTED_ANIMAL,
	INQUERY_APPLICATION,
	FROM_MY_SHELTER,
	MANAGEMENT_OF_VOLUNTEER,
	FAVORITES,
	FRIENDS,
	PEED_CONTENTS,
	REQ_PROTECTION_SAVE,
	COMUNITY,
	MY_ACTIVITY_IN_SHELTER,
	MY_CONTENTS,
	TAGED_CONTENTS_FOR_ME,
	APPLICATION_HISTORY,
	UPLOADED_POST_FOR_REQ_PROTECTION,
	NOTE_LIST,
	SETTING,
	INFO_QUESTION,
	ACCOUNT,
} from 'Root/i18n/msg';

export default ShelterMenu = props => {
	const navigation = useNavigation();

	//보호소 정보 수정
	const moveToShelterInfoSetting = () => {
		navigation.push('ShelterInfoSetting');
	};
	//동물 추가
	const moveToAssignProtectAnimalImage = () => {
		navigation.push('AssignProtectAnimalImage');
	};
	//게시물 추가
	const moveToAidRequestAnimalList = () => {
		navigation.push('AidRequestAnimalList');
	};

	//메뉴에 해당되는 네이게이션 이동
	const click_menu = item_menu => {
		switch (item_menu) {
			// 보호중인 동물
			case PROTECTED_ANIMAL:
				navigation.navigate('ShelterProtectAnimalList', {name: 'ShelterProtectAnimalList'});
				break;
			// 신청서 조회
			case INQUERY_APPLICATION:
				navigation.navigate('ProtectApplyList', {name: 'ProtectApplyList'});
				break;
			//나의 보호소 출신 동물
			case FROM_MY_SHELTER:
				navigation.push('AnimalFromShelter');
				break;
			//봉사활동 신청 관리
			case MANAGEMENT_OF_VOLUNTEER:
				navigation.push('ManageShelterVolunteer');
				break;
			//친구
			case FRIENDS:
				navigation.push('SaveFavorite');
				break;
			//피드 게시글
			case PEED_CONTENTS:
				navigation.push('FavoriteFeeds');
				break;
			//보호요청(저장)
			case REQ_PROTECTION_SAVE:
				navigation.push('SaveAnimalRequest');
				break;
			//커뮤니티
			case COMUNITY:
				alert('준비중입니다.');
				break;
			//내 게시물
			case MY_CONTENTS:
				navigation.push('UserFeeds');
				break;
			// 나를 태그한 글
			case TAGED_CONTENTS_FOR_ME:
				navigation.push('TagMeFeeds');
				break;
			//신청내역
			case APPLICATION_HISTORY:
				alert('준비중입니다.');
				break;
			// 보호 요청 올린 게시글
			case UPLOADED_POST_FOR_REQ_PROTECTION:
				navigation.push('ShelterProtectRequests');
				break;
			//커뮤니티
			case COMUNITY:
				alert('준비중입니다.');
				break;
			// 신청내역
			case NOTE_LIST:
				alert('준비중입니다.');
				break;
			//정보/문의
			case INFO_QUESTION:
				alert('준비중입니다.');
				break;
			// 계정
			case ACCOUNT:
				nalert('준비중입니다.');
				break;
		}
	};

	return (
		<View style={(login_style.wrp_main, shelterMenu.container)}>
			<ScrollView>
				<View style={[shelterMenu.shelterMenuStep1]}>
					{/* Shelter Info*/}
					<View style={[shelterMenu.shelterInfo]}>
						<View style={[shelterMenu.shelterInfo_container]}>
							<View style={[shelterMenu.shelterInfo_container_left]}>
								{/* ProfileImageLarge */}
								<View style={[temp_style.profileImageLarge]}>
									{/* <Text>(M)ProfileImageLarge</Text> */}
									<ProfileImageLarge160
										img_uri="https://img.insight.co.kr/static/2018/08/05/700/45666287b9lm5l1q9948.jpg"
										shelterType="private"
										userType="shelter"></ProfileImageLarge160>
								</View>
							</View>
							<View style={[shelterMenu.shelterInfo_container_right]}>
								{/* userId */}
								<View style={[shelterMenu.shelterInfo_user_id]}>
									<Text style={txt.noto36b}>파인트리 유기동물 보호소</Text>
								</View>
								{/* contents */}
								<View style={[shelterMenu.shelterInfo_contents]}>
									<Text style={txt.noto24}>서울시 마포구에 있는 유기 동물 보호소 입니다. 아이들의 보호를 도와주세요.</Text>
								</View>
							</View>
						</View>
					</View>

					{/* (O)SocialInfoB-4Items */}
					<View style={[temp_style.socialInfoB, shelterMenu.socialInfoB_4Items]}>
						{/* <Text>(o)SocialInfoB-4Items</Text> */}
						<SocialInfoB></SocialInfoB>
					</View>

					{/* (btn_w280, Float) */}
					<View style={[shelterMenu.btnView]}>
						{/* <TouchableOpacity onPress={moveToShelterInfoSetting}> */}
						<View style={[btn_style.btn_w280]}>
							<AniButton
								btnTitle={'보호소 정보수정'}
								btnStyle={'border'}
								titleFontStyle={24}
								btnLayout={btn_w280}
								onPress={moveToShelterInfoSetting}
							/>
						</View>

						{/* </TouchableOpacity> */}

						<View style={[shelterMenu.btnView_floadAddPet_126x92]}>
							<FloatAddPet_126x92 onPress={moveToAssignProtectAnimalImage}></FloatAddPet_126x92>
						</View>

						<View style={[shelterMenu.btnView_floadArticle_126x92]}>
							<FloatAddArticle_126x92 onPress={moveToAidRequestAnimalList}></FloatAddArticle_126x92>
						</View>
					</View>
				</View>

				{/* (O)ProfileMenul */}
				<View style={[shelterMenu.profileMenu1]}>
					<ProfileMenu
						menuTitle={MANAGEMENT_OF_PROTECTED_ANIMAL}
						menuItems={[
							[PROTECTED_ANIMAL, INQUERY_APPLICATION],
							[FROM_MY_SHELTER, MANAGEMENT_OF_VOLUNTEER],
						]}
						// onClick={clikedItem => console.log(clikedItem)}
						onClick={click_menu}
						titleIcon={<Heart48_Filled />}
					/>
				</View>
				<View style={[shelterMenu.profileMenu2]}>
					<ProfileMenu
						menuTitle={FAVORITES}
						menuItems={[
							[FRIENDS, PEED_CONTENTS],
							[REQ_PROTECTION_SAVE, COMUNITY],
						]}
						// onClick={clikedItem => console.log(clikedItem)}
						onClick={click_menu}
						titleIcon={<FavoriteTag48_Filled />}
					/>
				</View>
				<View style={[shelterMenu.profileMenu3]}>
					<ProfileMenu
						menuTitle={MY_ACTIVITY_IN_SHELTER}
						menuItems={[
							[MY_CONTENTS, TAGED_CONTENTS_FOR_ME],
							[APPLICATION_HISTORY, UPLOADED_POST_FOR_REQ_PROTECTION],
							[COMUNITY, NOTE_LIST],
						]}
						// onClick={clikedItem => console.log(clikedItem)}
						onClick={click_menu}
						titleIcon={<Paw46 />}
					/>
				</View>
				<View style={[shelterMenu.profileMenu4]}>
					<ProfileMenu
						menuTitle={SETTING}
						menuItems={[[INFO_QUESTION, ACCOUNT]]}
						// onClick={clikedItem => console.log(clikedItem)}
						onClick={click_menu}
						titleIcon={<Setting46 />}
					/>
				</View>
			</ScrollView>
		</View>
	);
};
