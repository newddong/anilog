import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Text, FlatList} from 'react-native';
import {getProtectRequestListByShelterId, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import {getUserInfoById, getUserProfile} from 'Root/api/userapi';
import DP from 'Root/config/dp';
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
import Modal from 'Component/modal/Modal';
import userGlobalObject from 'Root/config/userGlobalObject';

export default Profile = ({route, navigation}) => {
	// console.log('profile props', props.route.params);
	const [data, setData] = React.useState({...route.params?.userobject, feedList: []}); //라벨을 클릭한 유저의 userObject data
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0); //프로필 Tab의 선택상태
	const [showOwnerState, setShowOwnerState] = React.useState(false); // 현재 로드되어 있는 profile의 userType이 Pet인 경우 반려인 계정 리스트의 출력 여부
	const [showCompanion, setShowCompanion] = React.useState(false); // User계정이 반려동물버튼을 클릭
	const [protectActList, setProtectActList] = React.useState([]);
	React.useEffect(() => {
		if (route.params && route.params.userobject) {
			getUserProfile(
				{
					userobject_id: route.params.userobject._id,
				},
				result => {
					// console.log('result ', result.msg);
					navigation.setOptions({title:result.msg.user_nickname})
					setData(result.msg);
				},
				err => {
					Modal.popOneBtn(err, '확인', () => {
						Modal.close();
						navigation.goBack();
					});
				},
			);
		} else {
			Modal.popOneBtn('존재하지 않는 유저입니다.', '확인', () => {
				Modal.close();
				navigation.goBack();
			});
		}
	}, []);

	//보호소 프로필일 경우 보호요청 게시글 목록을 조회
	React.useEffect(() => {
		// console.log('data ? ', data.user_type);
		if (data.user_type == 'shelter') {
			const unsubscribe = navigation.addListener('focus', () => {
				getProtectRequestListByShelterId(
					{
						shelter_userobject_id: data._id,
						request_number: 10,
						protect_request_object_id: null,
						protect_request_status: 'rescue',
					},
					result => {
						console.log('result / getProtectRequestListByShelterId / Profile  : ', result.msg);
						setProtectActList(result.msg);
					},
					err => {
						console.log('err / getProtectRequestListByShelterId / Profile   :', err);
					},
				);
			});
			return unsubscribe;
		}
	}, [navigation]);

	//펫 프로필일 경우 반려인 계정을 조회
	React.useEffect(() => {}, []);

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
		console.log('profile', data._id);
		navigation.push('ApplyVolunteer', {token: data._id});
	};

	//보호소프로필의 보호활동 탭의 피드 썸네일 클릭
	const onClickProtectAnimal = (status, user_id, item) => {
		console.log('item', item);
		navigation.push('AnimalProtectRequestDetail', {item: item, list: protectActList});
	};

	//피드글작성 버튼 클릭(액션버튼)
	const moveToFeedWrite = () => {
		navigation.push('FeedWrite',{feedType:'Feed'});
	};

	//액션버튼 하단 탭 메뉴 클릭 콜백함수
	const onSelectTabMenu = (item, index) => {
		console.log(protectActList);
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

	const userProfileInfo = () => {
		return (
			<>
				<View style={[profile.profileInfo]}>
					<ProfileInfo
						data={data}
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
			</>
		);
	};

	//TabSelect 하단 AccountList
	const showTabContent = () => {
		//테스트데이터 지워도 됨
		// let test;
		// if (data.feedList?.length > 0) {
		// 	console.log('th');
		// 	test = Array.from({length: 50}, (v, i) => data?.feedList[i % data.feedList?.length]);
		// } else {
		// 	console.log('tt');
		// 	test = Array.from({length: 50}, (v, i) => ({
		// 		_id: i,
		// 		checkBoxState: false,
		// 		feed_thumbnail: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640337348438_9C72445F-0B25-47C0-8D5F-BC7BD1545EFF.jpg',
		// 		feed_type: 'feed',
		// 		feed_medias: [],
		// 	}));
		// }
		const renderItem = (item, index) => {
			if (index == 0) {
				return (
					<View style={[temp_style.tabSelectFilled_Type2]}>
						{getTabSelectList()}
						{tabMenuSelected == 2&&data.user_type != SHELTER&&<ProtectedPetList data={data._id} onClickLabel={item => navigation.push('UserProfile', item)} />}
					</View>
				);
			}
			if (data.user_type != SHELTER) {
				return <FeedThumbnailList items={item} onClickThumnail={onClick_Thumbnail_FeedTab} />;
			} else {
				if (tabMenuSelected != 2) {
					return <FeedThumbnailList items={item} onClickThumnail={onClick_Thumbnail_FeedTab} />;
				} else {
					return (<View style={[profile.animalNeedHelpList]}>
						<AnimalNeedHelpList data={protectActList} onClickLabel={onClickProtectAnimal} />
					</View>);
				}
			}
		};

		return (
			<View style={[profile.feedListContainer]}>
				<FlatList
					data={[{}, data.feedList]}//테스트 나중에 data.feedList로 변경해야함
					renderItem={({item, index}) => renderItem(item, index)}
					keyExtractor={(item, index) => index + ''}
					ListHeaderComponent={userProfileInfo()}
					stickyHeaderIndices={[1]}
					nestedScrollEnabled
					showsVerticalScrollIndicator={false}
				/>
			</View>
		);

	};

	//userType이 PET이며 Tab의 반려인계정이 Open으로 설정이 되어 있는 경우
	const showPetOrOwnerList = () => {
		if (data.user_type == PET && showOwnerState) {
			// 반려인 계정
			return (
				<View style={[profile.petList]}>
					<OwnerList items={data.pet_family} onClickLabel={onClickOwnerLabel} />
				</View>
			);
			//반려동물
		} else if (data.user_type == NORMAL && showCompanion) {
			return (
				<View style={[profile.petList]}>
					<PetList items={data.user_my_pets} onClickLabel={onClickMyCompanion} />
				</View>
			);
		}
	};

	// 유저타입에 따라 다른 탭 아이템 출력
	const getTabSelectList = () => {
		return data.user_type == PET ? (
			<TabSelectFilled_Type2 items={['피드', '태그']} onSelect={onSelectTabMenu} />
		) : (
			<TabSelectFilled_Type2 items={['피드', '태그', '보호활동']} onSelect={onSelectTabMenu} />
		);
	};

	return (
		<View style={[login_style.wrp_main, profile.container]}>
			{showTabContent()}
			{userGlobalObject.userInfo&&<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
					<Write94 />
				</View>
			</TouchableWithoutFeedback>}
		</View>
	);
};
