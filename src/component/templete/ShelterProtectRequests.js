import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {dummy_AnimalNeedHelpList_various_status} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import {getProtectRequestList, getProtectRequestListByShelterId} from 'Root/api/shelterapi';
import Modal from '../modal/Modal';

// ShelterMenu - 보호요청 올린 게시글 클릭
// params - 로그인한 보호소 유저의 _id
export default ShelterProtectRequests = ({route, navigation}) => {
	const [protectAnimalList, setProtectAnimalList] = React.useState([]); // AnimalNeedHelpList 내가 올린 보호요청 게시글 목록 리스트
	const [filterSpecies, setFilterSpecies] = React.useState();
	const [filterStatus, setFilterStatus] = React.useState('rescue');

	React.useEffect(() => {
		Modal.popNoBtn('잠시만 기다려주세요.');
		getProtectRequestListByShelterId(
			{
				shelter_userobject_id: route.params,
				protect_request_status: filterStatus,
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getProtectRequestList / ShelterProtectRequests', result.msg);
				setProtectAnimalList(result.msg);
				Modal.close();
			},
			err => {
				console.log('err / getProtectReqeustListByShelterId / ShelterProtectRequest', err);
				Modal.close();
			},
		);
	}, [filterSpecies, filterStatus]);

	//보호 게시글 목록의 라벨 클릭 콜백
	const onClickLabel = (status, user_id, item) => {
		navigation.push('AnimalProtectRequestDetail', dummy_AnimalNeedHelpList_various_status[0]);
	};

	//보호게시글 목록의 즐겨찾기 태그
	const onFavoriteTag = (state, index) => {
		console.log('state Favorite Tag', state); //state
	};

	//화면 좌측 상단 필터드롭다운
	const onSelectFilter = (v, i) => {
		let filter = v;
		i == 0 ? setFilterSpecies() : setFilterSpecies(filter);
	};

	//화면 우측상단 미트볼 드롭다운
	const onSelectMeatball = (v, i) => {
		//입양가능 , 협의중 , 완료
		switch (i) {
			case 0:
				setFilterStatus('rescue');
				break;
			case 1:
				setFilterStatus('discuss');
				break;
			case 2:
				setFilterStatus('complete');
				break;
			default:
				break;
		}
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.filterbutton_view, protectRequestList_style.filterbutton_view]}>
				<View style={[temp_style.filterbutton]}>
					<FilterButton menu={PET_KIND} width={306} onSelect={onSelectFilter} />
				</View>
				<View style={[temp_style.meatball50]}>
					<MeatBallDropdown menu={PROTECT_STATUS} onSelect={onSelectMeatball} />
				</View>
			</View>
			<View style={[temp_style.baseFlatList_protectRequestList, baseInfo_style.list]}>
				<AnimalNeedHelpList data={protectAnimalList} onClickLabel={onClickLabel} onFavoriteTag={onFavoriteTag} />
			</View>
		</View>
	);
};

const t = [
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
];
