import React from 'react';
import {Text, View} from 'react-native';
import {login_style, animalFromShelter_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {useNavigation} from '@react-navigation/core';
import {getProtectRequestListByShelterId, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import {txt} from 'Root/config/textstyle';

export default AnimalFromShelter = ({route}) => {
	const token = route.params;
	const navigation = useNavigation();
	const [data, setData] = React.useState([]); //AnimalNeedHelpList에 보낼 리스트정보

	React.useEffect(() => {
		getProtectRequestListByShelterId(
			//현재 로그인한 보호소의 고유 _id를 파라미터로 보내고
			//_id를 통해 얻어온 보호소의 보호 요청 게시글 리스트를 출력
			{
				shelter_userobject_id: token,
				protect_request_status: 'complete',
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				// console.log('result / getProtectRequestListByShelterId / ShelterProtectRequests', result.msg);
				setData(result.msg);
				Modal.close();
				// setProtectAnimalList(successed.msg);
				// 받아온 protect_animal_protect_Request_id로 해당 게시글 좋아요 여부도 판별해야함
			},
			err => {
				console.log('err / getProtectRequestListByShelterId / ShelterProtectRequest', err);
				Modal.close();
			},
		);
	}, [route]);

	//라벨 클릭
	const onClickLabel = (status, user_id, item) => {
		console.log('status , id => ' + status + '_' + user_id);
	};

	//테두리 모드 On 상태에서 입양처 보기 클릭
	const onPressAdoptorInfo = data => {
		// console.log('item', item);
		navigation.push('AdoptorInformation', data);
	};

	// 테두리 모드 On 상태에서 게시글보기 클릭 => AnimapProtectRequestDetail == ProtectRequestManage
	const onPressProtectRequest = item => {
		navigation.push('ProtectRequestManage', item);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[animalFromShelter_style.container]}>
				{data.length == 0 ? (
					<Text style={[txt.roboto32b, {marginTop: 200}]}>아직 입양 완료된 보호소 출신의 보호 동물이 없네요.</Text>
				) : (
					<AnimalNeedHelpList
						data={data}
						borderMode={true}
						onClickLabel={onClickLabel}
						onPressAdoptorInfo={onPressAdoptorInfo}
						onPressProtectRequest={onPressProtectRequest}
					/>
				)}
			</View>
		</View>
	);
};

AnimalFromShelter.defaultProps = {
	data: [],
};

const e = [
	{
		__v: 0,
		_id: '61c175d0b83cbeb3c893db71',
		protect_animal_id: {
			__v: 0,
			_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '4년 1개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c175d0b83cbeb3c893db71',
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
		protect_request_content: '나이는 많아 보이지만 아주 정이 많아보입니다. 데려가기를 연락하세요.',
		protect_request_date: '2021-12-21T06:36:00.739Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [],
		protect_request_status: 'rescue',
		protect_request_title: '새로운 엄마를 구해요',
		protect_request_update_date: '2021-12-21T06:36:00.739Z',
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
