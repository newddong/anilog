import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {getApplyDetailById} from 'Root/api/protectapi';
import {getProtectAnimalByProtectAnimalId} from 'Root/api/shelterapi';
import {getUserInfoById} from 'Root/api/userapi';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

// ShelterMenu - 나의 보호소 출신동물 - 입양처 보기
// 연관 테이블 - PRotectionActivityApplicantObject , ProtectRequestObject, ShelterProtectAnimalObject
export default AdoptorInformation = ({route, navigation}) => {
	// console.log('AdoptorInformation request', route.params);
	const [loading, setLoading] = React.useState(true); // 화면 출력 여부 결정
	const [data, setData] = React.useState(route.params);

	React.useEffect(() => {
		const p = data.protect_animal_id;
		let merged = Object.assign(data, p);
		// console.log('e', e.protect_animal_id);
		delete merged.protect_animal_id;
		// console.log('merged', merged.protect_animal_id);
		//현재 동물보호신청(protectActivityApplicationObject)필드가 없는 상태 (protect_act_applicant가 최신화되어 있지 않기 때문)
		//getProtectAnimalByProtectAnimalId를 통해 실시간 입양신청 ID 받기
		//Id로 신청정보 상세 조회 총
		//차후 깔끔하게 처리 필요
		getProtectAnimalByProtectAnimalId(
			{
				shelter_protect_animal_object_id: merged._id,
			},
			result => {
				console.log('result / getProtectAnimalByProtectAnimalId  / AdoptorInformation  : ', result.msg.protect_act_applicants);
				// 로그 결과  : ["61c34aed17f59a595cc4219a", "61c34be517f59a595cc421a0", "61c34f5a17f59a595cc42211", "61c487b567b952173d67d9c8"]
				getApplyDetailById(
					{
						protect_act_object_id: result.msg.protect_act_applicants[0], //[0]번이면 안될텐데?
					},
					result => {
						// console.log('result / getApplyDetailById / AdoptorInfor :', result.msg);
						merged.protect_act_address = result.msg.protect_act_address;
						merged.protect_act_checklist = result.msg.protect_act_checklist;
						merged.protect_act_companion_history = result.msg.protect_act_companion_history;
						merged.protect_act_motivation = result.msg.protect_act_motivation;
						merged.protect_act_phone_number = result.msg.protect_act_phone_number;
						merged.protect_act_motivation = result.msg.protect_act_motivation;
						merged.protect_act_status = result.msg.protect_act_status;
						merged.protect_act_type = result.msg.protect_act_type;
						getUserInfoById(
							{
								userobject_id: result.msg.protect_act_applicant_id,
							},
							result => {
								// console.log('result / getUserInfoById / AdoptorInformation  :', result.msg);
								merged.adoptorObject = result.msg;
								setData(merged);
								setTimeout(() => {
									setLoading(false);
								}, 1500);
							},
							err => {
								console.log('err / getUserInfoById / AdoptorInformation  ', err);
							},
						);
						// console.log('merge', merged);
					},
					err => {
						console.log('err /getApplyDetailById / AdoptorInfor : ', err);
					},
				);
			},
			err => {
				console.log('err / getProtectAnimalByProtectAnimalId  / AdoptorInformation  :  ', err);
			},
		);
	}, []);

	const onClickAdoptor = data => {
		// console.log('data', data);
		navigation.push('UserProfile', {userobject: data});
	};

	if (loading) {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'}></ActivityIndicator>
			</View>
		);
	} else {
		return (
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<ScrollView style={{flex: 1}}>
					<View style={[temp_style.animalProtectDetails_adoptorInformation, baseInfo_style.list]}>
						<AnimalProtectDetail data={data} onClickLabel={onClickAdoptor} nav={route.name} />
					</View>
				</ScrollView>
			</View>
		);
	}
};

const t = {
	__v: 0,
	_id: '61c323c77be07611b009577b',
	protect_act_address: {brief: '서울특별시 송파구 송파나루길 206(신천동)', detail: '201호'},
	protect_act_applicants: [],
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{
			_id: '61c48bda67b952173d67daae',
			companion_pet_age: '1세 이하',
			companion_pet_current_status: '함께 생활하고 있어요.',
			companion_pet_period: '1년 이하',
			companion_pet_species: '개',
		},
	],
	protect_act_motivation: '인사조로 자동인가요 엿간네요',
	protect_act_phone_number: '01096450423',
	protect_act_status: 'accept',
	protect_act_type: 'protect',
	protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
	protect_animal_estimate_age: '1년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631164_7DC02D18-40C7-4B6F-A9C0-712C13AE898D.jpg',
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631185_9E099D04-C030-40BB-A59C-BB3331C94EDF.jpg',
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631239_3CBDA0D4-8947-4292-98B1-93EFDDC84262.jpg',
	],
	protect_animal_protect_request_id: '61c324147be07611b0095780',
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: '2021-12-17T00:00:00.000Z',
	protect_animal_rescue_location: '구월동 117-84',
	protect_animal_sex: 'female',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '벵골고양이',
	protect_animal_status: 'rescue',
	protect_animal_weight: 3,
	protect_request_comment_count: 0,
	protect_request_content:
		'피부상태나 사람 따르는 것을 보니 길을 잃었거나 유기된 묘같습니다. 부모님은 며칠만 허락해주겠다고 하셔서 하루빨리 새로운 집사를 구해줘야할 것 같아요.',
	protect_request_date: '2021-12-22T13:11:48.932Z',
	protect_request_favorite_count: 0,
	protect_request_hit: 0,
	protect_request_photos_uri: [
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631164_7DC02D18-40C7-4B6F-A9C0-712C13AE898D.jpg',
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631185_9E099D04-C030-40BB-A59C-BB3331C94EDF.jpg',
		'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640178631239_3CBDA0D4-8947-4292-98B1-93EFDDC84262.jpg',
	],
	protect_request_status: 'complete',
	protect_request_title: '너무 이쁜 뱅골고양이 아마도 유기된 듯해요',
	protect_request_update_date: '2021-12-22T13:11:48.932Z',
	protect_request_writer_id: {
		__v: 0,
		_id: '61c023d9679aa5ae46128102',
		pet_family: [],
		shelter_address: {brief: '마포구 신수동 89-77', detail: '203호'},
		shelter_delegate_contact_number: '01096450001',
		shelter_foundation_date: '2011-12-04T00:00:00.000Z',
		shelter_homepage: '',
		shelter_name: '상우 보호소6',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_email: 'lanad01@naver.com',
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction:
			'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
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
