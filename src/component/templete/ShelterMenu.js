import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {login_style, shelterMenu, temp_txt, temp_style, btn_style, tabSelectBorder_Type1} from './style_templete';
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
	dummy_AnimalFromShelter_adopted,
	dummy_userObject,
	dummy_UserObject_pet,
	dummy_UserObject_protected_pet,
	dummy_UserObject_shelter,
	dummy_user_shelter,
} from 'Root/config/dummyDate_json';
import {_dummy_VolunteerActivityApplicant, _dummy_userObject_user} from 'Root/config/dummy_data_hjs';
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
	DEFAULT_PROFILE,
} from 'Root/i18n/msg';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {GRAY10} from 'Root/config/color';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import OwnerList from '../organism_ksw/OwnerList';
import ProtectedPetList from '../organism_ksw/ProtectedPetList';
import ShelterVerticalLabel from '../organism_ksw/ShelterVerticalLabel';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import ProfileImageSmall from '../molecules/ProfileImageSmall';
import RadioBox from '../molecules/RadioBox';
import RescueImage from '../molecules/RescueImage';
import SelectedMedia from '../molecules/SelectedMedia';
import ShelterInfo from '../molecules/ShelterInfo';
import TabSelectBorder_Type2 from '../molecules/TabSelectBorder_Type2';
import TabSelectBorder_Type1 from '../molecules/TabSelectBorder_Type1';
import TabSelectBorder_Type3 from '../molecules/TabSelectBorder_Type3';
import TabSelectFilled_Type2 from '../molecules/TabSelectFilled_Type2';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import UserLocationLabel from '../molecules/UserLocationLabel';
import UserLocationTimeLabel from '../molecules/UserLocationTimeLabel';
import UserPetLabel from '../molecules/UserPetLabel';
import UserTimeLabel from '../molecules/UserTimeLabel';
import MeatBallDropdown from '../molecules/MeatBallDropdown';

export default ShelterMenu = ({route}) => {
	const navigation = useNavigation();
	const userData = dummy_UserObject_shelter[0]; //우선 userObject_Shelter 0번 추가

	//보호소 정보 수정
	const moveToShelterInfoSetting = () => {
		navigation.push('ShelterInfoSetting', userData);
	};

	//동물 추가
	const moveToAssignProtectAnimalImage = () => {
		navigation.push('AssignProtectAnimalImage');
	};

	//게시물 추가
	const moveToAidRequestAnimalList = () => {
		navigation.push('AidRequestAnimalList', userData);
	};

	//메뉴에 해당되는 네이게이션 이동
	const click_menu = item_menu => {
		switch (item_menu) {
			//--------------- 보호 동물 관리
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
				//listType: 'original'- 클릭시 해당 UserProfile로 go, 'twoBtn' - 클릭시 외곽 선 표출, , 'checkBox' - 해당 페이지에서 바로 체크박스 표출
				navigation.push('AnimalFromShelter', dummy_AnimalFromShelter_adopted);
				break;
			//봉사활동 신청 관리
			case MANAGEMENT_OF_VOLUNTEER:
				navigation.push('ManageShelterVolunteer', route.name);
				break;
			//---------------즐겨찾기
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
				//listType: 'original'- 클릭시 해당 UserProfile로 go, 'twoBtn' - 클릭시 외곽 선 표출, , 'checkBox' - 해당 페이지에서 선택하기 시 체크박스 표출
				navigation.push('SaveAnimalRequest', dummy_AppliesRecord_protect);
				break;
			//커뮤니티
			case COMUNITY:
				alert('준비중입니다.');
				break;
			//-------------나의 활동
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
				//보호요청 게시글 스크린 필요 데이터 : ShelterProtectAnimalObject.protect_animal_writer_id == userData._id가 일치하는 것을 검색해야한다
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
			//-------------- 설정
			//정보/문의
			case INFO_QUESTION:
				alert('준비중입니다.');
				break;
			// 계정
			case ACCOUNT:
				alert('준비중입니다.');
				break;
		}
	};

	return (
		<View style={(login_style.wrp_main, shelterMenu.container)}>
			<ScrollView style={{flex: 1}}>
				<View style={[shelterMenu.shelterMenuStep1]}>
					{/* Shelter Info*/}
					<View style={[shelterMenu.shelterInfo]}>
						<MeatBallDropdown menu={['d1', 'd2']} />
						<View style={[shelterMenu.shelterInfo_container]}>
							<View style={[shelterMenu.shelterInfo_container_left]}>
								<View style={[temp_style.profileImageLarge]}>
									<ProfileImageLarge160 data={userData} />
								</View>
							</View>
							<View style={[shelterMenu.shelterInfo_container_right]}>
								{/* 보호소 이름 */}
								<View style={[shelterMenu.shelterInfo_user_id]}>
									<Text style={txt.noto36b}>{userData.shelter_name}</Text>
								</View>
								{/* user_introduction */}
								<View style={[shelterMenu.shelterInfo_contents]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>{userData.user_introduction}</Text>
								</View>
							</View>
						</View>
					</View>
					{/* SocialInfo */}
					<View style={[temp_style.socialInfoB, shelterMenu.socialInfoB_4Items]}>
						<SocialInfoB data={userData} />
					</View>

					<View style={[shelterMenu.btnView]}>
						<View style={[btn_style.btn_w280]}>
							<AniButton btnTitle={'보호소 정보수정'} btnStyle={'border'} btnLayout={btn_w280} onPress={moveToShelterInfoSetting} />
						</View>

						<View style={[shelterMenu.btnView_floadAddPet_126x92]}>
							<FloatAddPet_126x92 onPress={moveToAssignProtectAnimalImage}></FloatAddPet_126x92>
						</View>

						<View style={[shelterMenu.btnView_floadArticle_126x92]}>
							<FloatAddArticle_126x92 onPress={moveToAidRequestAnimalList}></FloatAddArticle_126x92>
						</View>
					</View>
				</View>
				{/* 하단 메뉴 */}
				<View style={[shelterMenu.profileMenu1]}>
					<ProfileMenu
						menuTitle={MANAGEMENT_OF_PROTECTED_ANIMAL}
						menuItems={[
							[PROTECTED_ANIMAL, INQUERY_APPLICATION],
							[FROM_MY_SHELTER, MANAGEMENT_OF_VOLUNTEER],
						]}
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
						onClick={click_menu}
						titleIcon={<Paw46 />}
					/>
				</View>
				<View style={[shelterMenu.profileMenu4]}>
					<ProfileMenu menuTitle={SETTING} menuItems={[[INFO_QUESTION, ACCOUNT]]} onClick={click_menu} titleIcon={<Setting46 />} />
				</View>
			</ScrollView>
		</View>
	);
};
