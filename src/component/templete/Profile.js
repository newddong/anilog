import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DP from 'Root/config/dp';
import {
	dummy_AnimalFromShelter_adopted,
	dummy_FeedObject,
	dummy_ShelterProtectAnimalObject,
	dummy_userObject,
	dummy_UserObject_pet,
	dummy_UserObject_protected_pet,
	dummy_UserObject_shelter,
} from 'Root/config/dummyDate_json';
import {NORMAL, PET, SHELTER} from 'Root/i18n/msg';
import {Write94} from '../atom/icon';
import TabSelectFilled_Type2 from '../molecules/TabSelectFilled_Type2';
import ProfileInfo from '../organism/ProfileInfo';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import OwnerList from '../organism_ksw/OwnerList';
import PetList from '../organism_ksw/PetList';
import ProtectedPetList from '../organism_ksw/ProtectedPetList';
import {login_style, profile, temp_style} from './style_templete';

export default Profile = props => {
	console.log('profile props', props.route.params);

	const navigation = useNavigation();

	const userData = dummy_userObject[0]; //로그인 유저의 userObject data
	const [profile_data, setProfile_data] = React.useState(props.route.params || dummy_UserObject_shelter[0]); //라벨을 클릭한 유저의 userObject data
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0); //프로필 Tab의 선택상태
	const [showOwnerState, setShowOwnerState] = React.useState(false); // 현재 로드되어 있는 profile의 userType이 Pet인 경우 반려인 계정 리스트의 출력 여부
	const [showCompanion, setShowCompanion] = React.useState(false); // User계정이 반려동물버튼을 클릭
	//현재 접속 중인 계정의 _id를 토큰에 저장
	React.useEffect(() => {
		AsyncStorage.setItem('token', JSON.stringify(userData._id));
	}, []);

	React.useEffect(() => {
		// console.log('profileData userTYpe', profile_data.user_type);
	}, [profile_data]);

	//프로필의 피드탭의 피드 썸네일 클릭
	const onClick_Thumbnail_FeedTab = () => {
		navigation.push('UserFeedList');
	};

	//프로필의 태그탭의 피드 썸네일 클릭
	const onClick_Thumbnail_TagTab = () => {
		navigation.push('UserTagFeedList');
	};

	//프로필의 보호활동 탭의 피드 썸네일 클릭
	const onClick_Thumbnail_ProtectTab = () => {
		navigation.push('ProtectAnimalFeedList');
	};

	//보호소프로필의 피드 및 태그 탭 썸네일 클릭xx
	const onClick_FeedThumbnail_ShelterProfile = () => {
		console.log('보호소프로필의 피드 및 태그 탭 => Thumbnail 클릭');
	};

	//보호소프로필의 봉사활동 클릭
	const onClick_Volunteer_ShelterProfile = () => {
		navigation.push('ApplyVolunteer', {profile_data: profile_data});
	};

	//보호소프로필의 보호활동 탭의 피드 썸네일 클릭
	const onClick_ProtectedThumbLabel = (status, user_id, item) => {
		// console.log('item', item);
		navigation.push('AnimalProtectRequestDetail', item);
	};

	//피드글작성 버튼 클릭(액션버튼)
	const moveToFeedWrite = () => {
		props.navigation.push('FeedWrite');
	};

	//액션버튼 하단 탭 메뉴 클릭 콜백함수
	const onSelectTabMenu = (item, index) => {
		setTabMenuSelected(index);
	};

	//유저타입 - 펫 => 반려인 계정에서 가족계정의 이미지 라벨을 클릭
	const onClickOwnerLabel = item => {
		console.log('item', item);
	};

	//유저타입 - 유저 => 반려동물 리스트에서 항목 클릭
	const onClickMyCompanion = item => {
		console.log('item', item);
	};

	//TabSelect 하단 AccountList => userType NORMAL일 경우
	const showTabContent = () => {
		if (tabMenuSelected == 0) {
			//피드
			return (
				<View style={[profile.feedListContainer]}>
					<FeedThumbnailList items={dummy_FeedObject} onClickThumnail={onClick_Thumbnail_FeedTab} />
				</View>
			);
		} else if (tabMenuSelected == 1) {
			//태그
			return (
				<View style={[profile.feedListContainer]}>
					<FeedThumbnailList items={dummy_FeedObject.slice(1, 10)} onClickThumnail={onClick_Thumbnail_FeedTab} />
				</View>
			);
		} else if (tabMenuSelected == 2) {
			//보호활동
			return profile_data.user_type == NORMAL ? (
				<View style={[profile.feedListContainer, {flex: 1}]}>
					<ProtectedPetList items={dummy_UserObject_protected_pet} onClickLabel={item => navigation.push('UserProfile', item)} />
					<View style={{flex: 1}}>
						<FeedThumbnailList items={dummy_FeedObject} onClickThumnail={onClick_Thumbnail_FeedTab} />
					</View>
				</View>
			) : (
				<View style={[profile.animalNeedHelpList]}>
					<AnimalNeedHelpList
						data={dummy_AnimalFromShelter_adopted}
						onClickLabel={(status, user_id, item) => onClick_ProtectedThumbLabel(status, user_id, item)}
					/>
				</View>
			);
		}
	};

	//userType이 PET이며 Tab의 반려인계정이 Open으로 설정이 되어 있는 경우
	const showPetOrOwnerList = () => {
		if (profile_data.user_type == PET && showOwnerState) {
			// 반려동물 보이기 true
			return (
				<View style={[profile.petList]}>
					<OwnerList items={dummy_userObject} onClickLabel={onClickOwnerLabel} />
				</View>
			);
		} else if (profile_data.user_type == NORMAL && showCompanion) {
			return (
				<View style={[profile.petList]}>
					<PetList items={dummy_UserObject_pet} onClickLabel={onClickMyCompanion} />
				</View>
			);
		}
	};

	// 유저타입에 따라 다른 탭 아이템 출력
	const getTabSelectList = () => {
		return profile_data.user_type == PET ? (
			<TabSelectFilled_Type2 items={['피드', '태그']} onSelect={onSelectTabMenu} />
		) : (
			<TabSelectFilled_Type2 items={['피드', '태그', '보호활동']} onSelect={onSelectTabMenu} />
		);
	};

	return (
		<View style={[login_style.wrp_main, profile.container]}>
			<ScrollView style={{flex: 1}}>
				<View style={[profile.profileInfo]}>
					<ProfileInfo
						data={profile_data}
						showMyPet={e => alert(e)}
						volunteerBtnClick={() => navigation.push('ApplyVolunteer')}
						adoptionBtnClick={() => navigation.push('ApplyAnimalAdoptionA')}
						onShowOwnerBtnClick={() => setShowOwnerState(true)}
						onHideOwnerBtnClick={() => setShowOwnerState(false)}
						onShowCompanion={() => setShowCompanion(true)}
						onHideCompanion={() => setShowCompanion(false)}
						onPressVolunteer={onClick_Volunteer_ShelterProfile}
					/>
				</View>
				{showPetOrOwnerList()}
				<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>{getTabSelectList()}</View>
				{/* FlatList안에 마우스가 갇히는 현상 해결 */}
				<View style={{flex: 1}}>{showTabContent()}</View>
			</ScrollView>
			<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
					<Write94 />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
