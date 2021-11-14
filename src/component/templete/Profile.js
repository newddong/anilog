import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
	const item = props.route.params;
	const navigation = useNavigation();
	const [userType, setUserType] = React.useState(SHELTER); //NORMAL, PET, SHELTER
	const [petStatus, setPetStatus] = React.useState('adopted'); // 현재 로드되어 있는 profile의 userType이 PET인 경우 그 펫의 상태 state
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0);
	const [showOwnerState, setShowOwnerState] = React.useState(true); // 현재 로드되어 있는 profile의 userType이 Pet인 경우 반려인 계정 Tab의 Open 여부
	const dummyData = {
		userType: userType,
		petStatus: petStatus,
	};
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
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<PetList />
						</View>
					</View>
				);
				// 보호활동 보이기 true
			} else if (tabMenuSelected == 2) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.protectedPetList]}>
							<ProtectedPetList onClickLabel={item => navigation.push('UserProfile', item)} />
						</View>
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
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<OwnerList />
						</View>
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
				return <FeedThumbnailList onClickThumnail={() => navigation.push('UserFeedList')} />;
			} else if (tabMenuSelected == 1) {
				//태그
				return <FeedThumbnailList onClickThumnail={() => navigation.push('UserTagFeedList')} />;
			} else if (tabMenuSelected == 2) {
				//보호활동
				return <FeedThumbnailList onClickThumnail={() => navigation.push('ProtectAnimalFeedList')} />;
			}
		} else if (userType == SHELTER) {
			//보호소프로필 상태에서 보호활동 Tab을 눌렀을 경우에는 요보호동물 리스트를 출력
			return tabMenuSelected == 2 ? (
				//요보호동물 클릭할 경우 해당 동물의 상태 Detail Screen으로 이동
				<AnimalNeedHelpList onItemClick={item => navigation.push('AnimalProtectRequestDetail', item)} />
			) : (
				// 그 이외의 피드, 태그 탭 상태에서는 Feed리스트를 출력
				<FeedThumbnailList onClickThumnail={() => console.log('보호소프로필의 피드 및 태그 탭 => Thumbnail 클릭')} />
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
		<ScrollView>
			{/* 테스트용  */}
			<View style={{width: '100%', height: 30, flexDirection: 'row', backgroundColor: 'yellow'}}>
				<TouchableOpacity onPress={() => setUserType(NORMAL)} style={{width: 100, height: 15, backgroundColor: 'purple'}}>
					<Text>NORMAL</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setUserType(PET)} style={{width: 100, height: 15, backgroundColor: 'red'}}>
					<Text>pet</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setUserType(SHELTER)} style={{width: 100, height: 15, backgroundColor: 'lightgray'}}>
					<Text>shelter</Text>
				</TouchableOpacity>
				<Text>{userType}</Text>
			</View>
			{/* 테스트용 종료 */}
			<View style={[login_style.wrp_main, profile.container]}>
				<View style={[profile.profileInfo]}>
					<ProfileInfo
						data={dummyData}
						dummyData={dummyData}
						showMyPet={e => alert(e)}
						volunteerBtnClick={() => navigation.push('ApplyVolunteer')}
						adoptionBtnClick={() => navigation.push('ApplyAnimalAdoptionA')}
						onShowOwnerBtnClick={() => setShowOwnerState(true)}
						onHideOwnerBtnClick={() => setShowOwnerState(false)}
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
				<TouchableWithoutFeedback onPress={moveToFeedWrite}>
					<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
						<Write94 />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ScrollView>
	);
};
