import React from 'react';
import {ScrollView, View} from 'react-native';
import {getAdoptorInformation} from 'Root/api/protect_act_api_ksw';
import {getProtectAnimalByProtectAnimalId} from 'Root/api/shelterapi';
import {dummy_AdoptorInformation} from 'Root/config/dummyDate_json';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

// ShelterMenu - 나의 보호소 출신동물 - 입양처 보기
// 연관 테이블 - PRotectionActivityApplicantObject , ProtectRequestObject, ShelterProtectAnimalObject
export default AdoptorInformation = ({route}) => {
	console.log('AdoptorInformation request', route.params);
	// console.log('AdoptorInformation adoptor', route.params.protect_animal_adoptor_id);
	React.useEffect(() => {
		getProtectAnimalByProtectAnimalId(
			{
				shelter_protect_animal_object_id: route.params.protect_animal_id._id,
			},
			result => {
				console.log('result / getProtectAnimalByProtectAnimalId  / AdoptorInformation  : ', result.msg);
				const re = {
					__v: 3,
					_id: '61c2b6007be07611b0094ec4',
					protect_act_applicants: ['61c34aed17f59a595cc4219a', '61c34be517f59a595cc421a0', '61c34f5a17f59a595cc42211'],
					protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
					protect_animal_estimate_age: '2개월',
					protect_animal_neutralization: 'no',
					protect_animal_photo_uri_list: [
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528231_E3043E03-4A96-4270-958B-CF38B89588C5.jpg',
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528246_D9B16F08-812E-4BF1-B5DF-9DAB2E3E0BF2.jpg',
					],
					protect_animal_protect_request_id: '61c2b82b7be07611b0094ed2',
					protect_animal_protector_discussion_id: [],
					protect_animal_rescue_date: '2021-12-08T00:00:00.000Z',
					protect_animal_rescue_location: 'AK풀라자 포하',
					protect_animal_sex: 'female',
					protect_animal_species: '기타',
					protect_animal_species_detail: '토끼',
					protect_animal_status: 'rescue',
					protect_animal_weight: 2,
				};
			},
			err => {
				console.log('err / getProtectAnimalByProtectAnimalId  / AdoptorInformation  :  ', err);
			},
		);
	}, []);
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.animalProtectDetails_adoptorInformation, baseInfo_style.list]}>
					<AnimalProtectDetail data={route.params} />
				</View>
			</ScrollView>
		</View>
	);
};

const t = {
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
		protect_animal_sex: 'male',
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_animal_status: 'protect',
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
	protect_request_status: 'complete',
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
};
