import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
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

export default Profile = ({route, navigation}) => {
	// console.log('profile props', props.route.params);
	const [profile_data, setProfile_data] = React.useState(route.params || dummy_UserObject_shelter[0]); //라벨을 클릭한 유저의 userObject data
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0); //프로필 Tab의 선택상태
	const [showOwnerState, setShowOwnerState] = React.useState(false); // 현재 로드되어 있는 profile의 userType이 Pet인 경우 반려인 계정 리스트의 출력 여부
	const [showCompanion, setShowCompanion] = React.useState(false); // User계정이 반려동물버튼을 클릭
	const [protectActList, setProtectActList] = React.useState([]);
	React.useEffect(() => {
		getUserProfile(
			{
				userobject_id: route.params ? route.params._id : '61c023d9679aa5ae46128102', //상우보호소4 임시로
				user_type: route.params ? route.params.user_type : 'shelter',
			},
			result => {
				console.log('result / getUserProfile / Profile  :  ', result.msg.user_nickname);
				setProfile_data(result.msg);
			},
			err => {
				console.log('err / getUserProfile / Profile  :  ', err);
			},
		);
	}, []);

	React.useEffect(() => {
		getProtectRequestListByShelterId(
			{
				shelter_userobject_id: profile_data._id,
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
		console.log('profile', profile_data._id);
		navigation.push('ApplyVolunteer', {token: profile_data._id});
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
				//유저타입 - 보호소 => 보호소가 보호중인 동물들의 리스트 출력
				<View style={[profile.animalNeedHelpList]}>
					<AnimalNeedHelpList data={protectActList} onClickLabel={onClickProtectAnimal} />
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

const tt = [
	{
		__v: 0,
		_id: '61c188ba2aaa7e1134cef1e2',
		protect_animal_id: {
			__v: 0,
			_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '4년 1개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
			protect_animal_rescue_location: '고르고스 언덕',
			protect_animal_sex: 'female',
			protect_animal_species: '기타',
			protect_animal_species_detail: '치와와',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: '함께 상처를 치료할 동반자를 구합니다. ',
		protect_request_date: '2021-12-21T07:56:42.286Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640073402165_8.jpg'],
		protect_request_status: 'rescue',
		protect_request_title: '아직 사람을 그리워하는 것 같습니다.',
		protect_request_update_date: '2021-12-21T07:56:42.286Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '01096450001',
			shelter_foundation_date: '2011-12-04T00:00:00.000Z',
			shelter_homepage: '',
			shelter_name: '상우 보호소6',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'lanad01@naver.com',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction:
				'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: '상우 보호소5',
			user_nickname: '가하즈보호소',
			user_password: '121212',
			user_phone_number: '01096450001',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
			user_register_date: '2021-12-20T06:34:01.773Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	},
	{
		__v: 0,
		_id: '61c2b82b7be07611b0094ed2',
		protect_animal_id: {
			__v: 0,
			_id: '61c2b6007be07611b0094ec4',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '2개월',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c2b82b7be07611b0094ed2',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2021-12-08T00:00:00.000Z',
			protect_animal_rescue_location: 'AK풀라자 포하',
			protect_animal_sex: 'female',
			protect_animal_species: '기타',
			protect_animal_species_detail: '토끼',
			protect_animal_status: 'rescue',
			protect_animal_weight: 2,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '토끼',
		protect_request_comment_count: 0,
		protect_request_content:
			'토끼 키우는 것은 생각보다 많은 각오가 필요한 일입니다. 경력까지는 요구하지 않겠지만 어느정도 소양을 갖춘 분이 데려가주시면 좋겠습니다.',
		protect_request_date: '2021-12-22T05:31:23.186Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528231_E3043E03-4A96-4270-958B-CF38B89588C5.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528246_D9B16F08-812E-4BF1-B5DF-9DAB2E3E0BF2.jpg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '아이스크림 같이 녹을 것만 같은 아이입니다.',
		protect_request_update_date: '2021-12-22T05:31:23.187Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '01096450001',
			shelter_foundation_date: '2011-12-04T00:00:00.000Z',
			shelter_homepage: '',
			shelter_name: '상우 보호소6',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'lanad01@naver.com',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction:
				'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: '상우 보호소5',
			user_nickname: '가하즈보호소',
			user_password: '121212',
			user_phone_number: '01096450001',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
			user_register_date: '2021-12-20T06:34:01.773Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	},
];
