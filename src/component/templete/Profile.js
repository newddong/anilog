import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getProtectRequestListByShelterId, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import {getUserInfoById, getUserProfile} from 'Root/api/userapi';
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
import Modal from 'Component/modal/Modal';

export default Profile = ({route, navigation}) => {
	// console.log('profile props', props.route.params);
	const [data, setData] = React.useState(route.params?.userobject || dummy_userObject[0]); //라벨을 클릭한 유저의 userObject data
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
		navigation.push('FeedWrite');
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

	//TabSelect 하단 AccountList
	const showTabContent = () => {
		if (tabMenuSelected == 0) {
			//피드
			return (
				<View style={[profile.feedListContainer]}>
					<FeedThumbnailList items={data.feedList} onClickThumnail={onClick_Thumbnail_FeedTab} />
				</View>
			);
		} else if (tabMenuSelected == 1) {
			//태그
			return (
				<View style={[profile.feedListContainer]}>
					<FeedThumbnailList items={data.feedList} onClickThumnail={onClick_Thumbnail_FeedTab} />
				</View>
			);
		} else if (tabMenuSelected == 2) {
			//보호활동
			if (data.user_type == NORMAL) {
				return (
					<View style={[profile.feedListContainer, {flex: 1}]}>
						<ProtectedPetList data={data._id} onClickLabel={item => navigation.push('UserProfile', item)} />
						<FeedThumbnailList items={data.feedList} onClickThumnail={onClick_Thumbnail_FeedTab} />
					</View>
				);
			} else {
				return (
					//유저타입 - 보호소 => 보호소가 보호중인 동물들의 리스트 출력
					<View style={[profile.animalNeedHelpList]}>
						<AnimalNeedHelpList data={protectActList} onClickLabel={onClickProtectAnimal} />
					</View>
				);
			}
		}
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
			<ScrollView style={{flex: 1}}>
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
				<View style={[temp_style.tabSelectFilled_Type2]}>{getTabSelectList()}</View>
				{/* FlatList안에 마우스가 갇히는 현상 해결 */}
				<View style={{flex: 1, width: '100%'}}>{showTabContent()}</View>
			</ScrollView>
			<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
					<Write94 />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const q = {
	__v: 2,
	_id: '61c56c7538c5f6dee5a8b835',
	feedList: [
		{
			__v: 0,
			_id: '61c58fc438c5f6dee5a8bfa4',
			feed_avatar_id: '61c56d4438c5f6dee5a8b867',
			feed_comment_count: 0,
			feed_content: '템테이션이라는 가로형 간식이 있는데 너무 좋아하더라고요. 자주 사줘야겠어요.',
			feed_date: '2021-12-24T09:15:48.599Z',
			feed_favorite_count: 0,
			feed_is_protect_diary: false,
			feed_like_count: 0,
			feed_medias: [Array],
			feed_thumbnail: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640337348438_9C72445F-0B25-47C0-8D5F-BC7BD1545EFF.jpg',
			feed_type: 'feed',
			feed_update_date: '2021-12-24T09:15:48.599Z',
			feed_writer_id: '61c56c7538c5f6dee5a8b835',
			missing_animal_date: '2021-12-24T09:15:48.600Z',
			report_witness_date: '2021-12-24T09:15:48.600Z',
		},
		{
			__v: 0,
			_id: '61c56c9f38c5f6dee5a8b842',
			feed_comment_count: 0,
			feed_content: '우리 아가 자고 있는 모습 보고 하루를 시작하세요',
			feed_date: '2021-12-24T06:45:51.450Z',
			feed_favorite_count: 0,
			feed_is_protect_diary: false,
			feed_like_count: 0,
			feed_medias: [Array],
			feed_thumbnail: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640328351150_70D9F004-93DF-41F8-A069-7E33960490F3.jpg',
			feed_type: 'feed',
			feed_update_date: '2021-12-24T06:45:51.450Z',
			feed_writer_id: '61c56c7538c5f6dee5a8b835',
			missing_animal_date: '2021-12-24T06:45:51.450Z',
			report_witness_date: '2021-12-24T06:45:51.450Z',
		},
	],
	pet_family: [],
	shelter_address: {},
	user_address: {brief: '서울시 마포구 신수동', city: '서울시', detail: '89-78', district: '마포구 신수동', neighbor: '89-77'},
	user_agreement: {
		is_donation_info: true,
		is_location_service_info: true,
		is_marketting_info: true,
		is_over_fourteen: true,
		is_personal_info: true,
		is_service: true,
	},
	user_denied: false,
	user_follow_count: 0,
	user_follower_count: 0,
	user_interests: [],
	user_introduction: '지금을 사세요',
	user_is_verified_email: false,
	user_is_verified_phone_number: true,
	user_mobile_company: 'SK텔레콤',
	user_my_pets: [
		{
			_id: '61c56d4438c5f6dee5a8b867',
			user_nickname: '밍키',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640328516226_D77420DE-D3F4-48C3-A3F1-EB2ECE1EA4AF.jpg',
		},
		{
			_id: '61c56ed938c5f6dee5a8b8c4',
			user_nickname: '임보 고양이1',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640328921351_350C8F11-09C2-4D10-BABD-AC3B79B107EF.jpg',
		},
	],
	user_name: '권상우',
	user_nickname: '권상우',
	user_phone_number: '01096450422',
	user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640328309165_20200414101332_5e950e3ca0022_1.jpg',
	user_register_date: '2021-12-24T06:45:09.246Z',
	user_type: 'user',
	user_upload_count: 0,
};
