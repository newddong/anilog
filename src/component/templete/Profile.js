import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
	dummy_ShelterProtectAnimalObject,
	dummy_userObject,
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
	// console.log('profile props', props.route.params);

	const navigation = useNavigation();

	const userData = dummy_userObject[0]; //로그인 유저의 userObject data
	// const profile_data = props.route.params || dummy_UserObject_shelter[0]; //라벨을 클릭한 유저의 userObject data
	const profile_data = dummy_UserObject_shelter[0]; //라벨을 클릭한 유저의 userObject data
	const [userType, setUserType] = React.useState(SHELTER); //NORMAL, PET, SHELTER
	const [petStatus, setPetStatus] = React.useState('adopted'); // 현재 로드되어 있는 profile의 userType이 PET인 경우 그 펫의 상태 state
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0); //프로필 Tab의 선택상태
	const [showOwnerState, setShowOwnerState] = React.useState(true); // 현재 로드되어 있는 profile의 userType이 Pet인 경우 반려인 계정 Tab의 Open 여부

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

	//보호소프로필의 피드 및 태그 탭 썸네일 클릭
	const onClick_FeedThumbnail_ShelterProfile = () => {
		console.log('보호소프로필의 피드 및 태그 탭 => Thumbnail 클릭');
	};

	//보호소프로필의 봉사활동 클릭
	const onClick_Volunteer_ShelterProfile = () => {
		navigation.push('ApplyVolunteer', profile_data);
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

	//TabSelect 하단 AccountList => userType NORMAL일 경우
	const showPetList = () => {
		//유저타입 - 사람
		if (userType == NORMAL) {
			// 반려동물 보이기 true
			if (tabMenuSelected == 0) {
				return (
					<View style={[profile.petList]}>
						<PetList />
					</View>
				);
				// 보호활동 보이기 true
			} else if (tabMenuSelected == 2) {
				return (
					<View style={[profile.protectedPetList]}>
						<ProtectedPetList items={dummy_UserObject_protected_pet} onClickLabel={item => navigation.push('UserProfile', item)} />
					</View>
				);
			} else {
				<View style={[profile.feedListContainer]}></View>;
			}
		}
	};

	//userType이 PET이며 Tab의 반려인계정이 Open으로 설정이 되어 있는 경우
	const showOwnerList = () => {
		if (userType == PET) {
			// 반려동물 보이기 true
			if (!showOwnerState) {
				return (
					<View style={[profile.petList]}>
						<OwnerList onClickLabel={e => console.log(e)} />
					</View>
				);
				// 보호활동 보이기 true
			}
		}
	};

	const getThumbnailList = () => {
		// 0, 1,2로 구분하는 것이 아닌 의미를 부여한 상수 이름으로 추후에 변경 할 것
		if (userType == PET || userType == NORMAL) {
			if (tabMenuSelected == 0) {
				//피드
				return <FeedThumbnailList onClickThumnail={onClick_Thumbnail_FeedTab} />;
			} else if (tabMenuSelected == 1) {
				//태그
				return <FeedThumbnailList onClickThumnail={onClick_Thumbnail_TagTab} />;
			} else if (tabMenuSelected == 2) {
				//보호활동
				return <FeedThumbnailList onClickThumnail={onClick_Thumbnail_ProtectTab} />;
			}
		} else if (userType == SHELTER) {
			//보호소프로필 상태에서 보호활동 Tab을 눌렀을 경우에는 요보호동물 리스트를 출력
			return tabMenuSelected == 2 ? (
				//보호활동탭의 동물 List 썸네일 클릭할 경우 해당 동물의 상태 Detail Screen으로 이동
				<View style={{marginTop: 20}}>
					<AnimalNeedHelpList
						data={dummy_ShelterProtectAnimalObject}
						onLabelClick={(status, user_id, item) => onClick_ProtectedThumbLabel(status, user_id, item)}
					/>
				</View>
			) : (
				// 그 이외의 피드, 태그 탭 상태에서는 Feed리스트를 출력
				<FeedThumbnailList onClickThumnail={onClick_FeedThumbnail_ShelterProfile} />
			);
		}
	};

	// 유저타입에 따라 다른 탭 아이템 출력
	const getTabSelectList = () => {
		if (userType == NORMAL) {
			return <TabSelectFilled_Type2 items={['피드', '태그', '보호활동']} onSelect={e => setTabMenuSelected(e)} />;
		} else if (userType == PET) {
			return <TabSelectFilled_Type2 items={['피드', '태그']} onSelect={e => setTabMenuSelected(e)} />;
		} else if (userType == SHELTER) {
			return <TabSelectFilled_Type2 items={['피드', '태그', '보호활동']} onSelect={e => setTabMenuSelected(e)} />;
		}
	};

	return (
		<View style={[login_style.wrp_main, profile.container]}>
			<ScrollView>
				<View style={[profile.profileInfo]}>
					<ProfileInfo
						data={profile_data}
						showMyPet={e => alert(e)}
						volunteerBtnClick={() => navigation.push('ApplyVolunteer')}
						adoptionBtnClick={() => navigation.push('ApplyAnimalAdoptionA')}
						onShowOwnerBtnClick={() => setShowOwnerState(true)}
						onHideOwnerBtnClick={() => setShowOwnerState(false)}
						onPressVolunteer={onClick_Volunteer_ShelterProfile}
					/>
				</View>
				{showOwnerList()}
				<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>{getTabSelectList()}</View>
				{showPetList()}
				<View>
					<ScrollView horizontal={false} style={{width: '100%', height: '100%'}}>
						<ScrollView horizontal={true} style={{width: '100%', height: '100%'}}>
							<View style={[temp_style.feedThumbnailList, profile.feedThumbNailList]}>{getThumbnailList()}</View>
						</ScrollView>
					</ScrollView>
				</View>
			</ScrollView>
			<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
					<Write94 />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
