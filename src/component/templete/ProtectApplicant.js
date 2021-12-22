import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, manageVolunteer, protectApplicant} from './style_templete';
import {txt} from 'Root/config/textstyle';
import {GRAY20} from 'Root/config/color';
import AccountList from '../organism_ksw/AccountList';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {getUserInfoById, getUserProfile} from 'Root/api/userapi';

export default ProtectApplicant = ({route, navigation}) => {
	// console.log('ProtectApplicant route', route.params);
	const data = route.params;
	const animalNeedHelpData = {
		protect_animal_photo_uri_list: data.protect_animal_photo_uri_list,
		protect_animal_estimate_age: data.protect_animal_estimate_age,
		protect_animal_neutralization: data.protect_animal_neutralization,
		protect_animal_protect_request_id: data.protect_animal_protect_request_id,
		protect_animal_rescue_date: data.protect_animal_rescue_date,
		protect_animal_rescue_location: data.protect_animal_rescue_location,
		protect_animal_rescue_date: data.protect_animal_rescue_date,
		protect_animal_sex: data.protect_animal_sex,
		protect_animal_species: data.protect_animal_species,
		protect_animal_status: data.protect_animal_status,
		protect_animal_weight: data.protect_animal_weight,
	};
	// delete data.protect_act_applicants;

	const applicants = route.params.protect_act_applicants;
	const [adoptorList, setAdoptorList] = React.useState([]); //입양신청자 계정 내역
	const [protectorList, setProtectorList] = React.useState([]); //임시보호 신청자 계정 내역

	React.useEffect(() => {
		let adoptors = [];
		let protectors = [];

		applicants.map((v, i) => {
			v.protect_act_type == 'adopt' ? adoptors.push(v) : protectors.push(v);
		});
		// console.log('adopt', adoptors);

		let copyAdopt = [...adoptorList];
		let copyProtect = [...protectorList];
		adoptors.map((v, i) => {
			let applicantId = v.protect_act_applicant_id;
			getUserInfoById(
				{
					userobject_id: applicantId,
				},
				result => {
					// console.log('result / getUserProfile / ProtectApplicant / Adoprtor  : ', result.msg);
					// console.log('v inside adoptors map', v);
					const mergedObject = Object.assign(v, result.msg);
					const merged = Object.assign(mergedObject, animalNeedHelpData);

					copyAdopt.push(merged);
					setAdoptorList(copyAdopt);
				},
				err => {
					console.log('err / getUserProfile / ProtectApplicant / Adoptor  : ', err);
				},
			);
		});
		protectors.map((v, i) => {
			let applicantId = v.protect_act_applicant_id;
			getUserInfoById(
				{
					userobject_id: applicantId,
				},
				result => {
					// console.log('result / getUserProfile / ProtectApplicant / Adoprtor  : ', result.msg);

					const mergedObject = Object.assign(v, result.msg);
					// console.log('merged  ', mergedObject);
					copyProtect.push(mergedObject);
					setProtectorList(copyProtect);
				},
				err => {
					console.log('err / getUserProfile / ProtectApplicant / Adoptor  : ', err);
				},
			);
		});
	}, []);

	//AccountList의 라벨 클릭 콜백 함수
	const onClickLabel = data => {
		console.log('data', data);
		navigation.push('UserProfile', data);
	};

	//입양, 임보 신청자 아이템 클릭 콜백 함수 (라벨 이외의 영역)
	const onSelect = (item, index) => {
		navigation.push('ProtectApplyForm', item);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				{/* 입양 신청 */}
				<View style={[manageVolunteer.container]}>
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto28]}>입양 신청</Text>
						<Text style={[txt.noto28, {color: GRAY20}]}> {adoptorList.length}</Text>
					</View>
					<View style={[protectApplicant.accountListContainer]}>
						{adoptorList.length == 0 ? (
							<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>입양 신청건이 없습니다.</Text>
						) : (
							<AccountList
								items={adoptorList}
								showStarMark={true}
								showCrossMark={false}
								makeBorderMode={false}
								onSelect={onSelect}
								onClickLabel={onClickLabel}
							/>
						)}
					</View>
					{/* 임시보호신청 */}
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto28]}>임시보호 신청</Text>
						<Text style={[txt.noto28, {color: GRAY20}]}> {protectorList.length}</Text>
					</View>
					<View style={[protectApplicant.accountListContainer]}>
						{protectorList.length == 0 ? (
							<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>임시보호 신청건이 없습니다.</Text>
						) : (
							<AccountList
								items={protectorList}
								onSelect={onSelect}
								onClickLabel={onClickLabel}
								makeBorderMode={false}
								showStarMark={true}
								showCrossMark={false}
							/>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const rote = {
	__v: 2,
	_id: '61c07f0c0b3fb5a4acae2c26', //ShelterProtetAnimal Id 보호소의 보호동물
	protect_act_applicants: [
		// 입양 보호 신청 정보
		{
			__v: 0,
			_id: '61c1cc107be07611b00945f9', // ProtectAct Object Id(보호활동 )
			protect_act_address: [Object],
			protect_act_applicant_id: '61c023d9679aa5ae46128102',
			protect_act_checklist: [Object],
			protect_act_companion_history: [Array],
			protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
			protect_act_phone_number: '01096450422',
			protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2', //동물 보호 게시글 ID
			protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
			protect_act_status: 'wait',
			protect_act_type: 'protect',
		},
		{
			__v: 0,
			_id: '61c1e55a7be07611b009470a',
			protect_act_address: [Object],
			protect_act_applicant_id: '61c023d9679aa5ae46128102',
			protect_act_checklist: [Object],
			protect_act_companion_history: [Array],
			protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
			protect_act_phone_number: '01096450422',
			protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
			protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
			protect_act_status: 'wait',
			protect_act_type: 'adopt',
		},
	],
	protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
	protect_animal_estimate_age: '4년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [],
	protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
	protect_animal_rescue_location: '고르고스 언덕',
	protect_animal_sex: 'female',
	protect_animal_species: '기타',
	protect_animal_species_detail: '치와와',
	protect_animal_status: 'rescue',
	protect_animal_weight: 12,
};
const ty = {
	__v: 0,
	_id: '61c023d9679aa5ae46128102',
	pet_family: [],
	protect_act_address: {brief: 'string', city: '서울특별시', detail: 'string', district: '마포구 신수동', neighbor: '89-77 203호'},
	protect_act_applicant_id: '61c023d9679aa5ae46128102',
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{
			_id: '61c1e55a7be07611b009470b',
			companion_pet_age: '1개월',
			companion_pet_current_status: 'adopt',
			companion_pet_period: '1년',
			companion_pet_species: '개',
		},
	],
	protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
	protect_act_phone_number: '01096450422',
	protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
	protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
	protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
	protect_act_status: 'wait',
	protect_act_type: 'adopt',
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
};
const e = [
	{
		__v: 0,
		_id: '61c1cc107be07611b00945f9',
		protect_act_address: {brief: 'string', city: '서울특별시', detail: 'string', district: '마포구 신수동', neighbor: '89-77 203호'},
		protect_act_applicant_id: '61c023d9679aa5ae46128102',
		protect_act_checklist: {
			is_adult: true,
			is_agreed_housemate: true,
			is_experience_defecate: true,
			is_knowledge_sanitation: true,
			is_near_veterinary: true,
		},
		protect_act_companion_history: [[Object]],
		protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
		protect_act_phone_number: '01096450422',
		protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
		protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
		protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
		protect_act_status: 1,
		protect_act_type: 'protect',
	},
	{
		__v: 0,
		_id: '61c1e55a7be07611b009470a',
		protect_act_address: {brief: 'string', city: '서울특별시', detail: 'string', district: '마포구 신수동', neighbor: '89-77 203호'},
		protect_act_applicant_id: '61c023d9679aa5ae46128102',
		protect_act_checklist: {
			is_adult: true,
			is_agreed_housemate: true,
			is_experience_defecate: true,
			is_knowledge_sanitation: true,
			is_near_veterinary: true,
		},
		protect_act_companion_history: [[Object]],
		protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
		protect_act_phone_number: '01096450422',
		protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
		protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
		protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
		protect_act_status: 2,
		protect_act_type: 'adopt',
	},
];

const e2 = {
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
};
// 61c1e55a7be07611b009470a
const routt = {
	__v: 2,
	_id: '61c07f0c0b3fb5a4acae2c26',
	protect_act_applicants: [
		{
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			protect_act_address: [Object],
			protect_act_applicant_id: '61c023d9679aa5ae46128102',
			protect_act_checklist: [Object],
			protect_act_companion_history: [Array],
			protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
			protect_act_phone_number: '01096450422',
			protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
			protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
			protect_act_status: 'wait',
			protect_act_type: 'protect',
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
		{
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			protect_act_address: [Object],
			protect_act_applicant_id: '61c023d9679aa5ae46128102',
			protect_act_checklist: [Object],
			protect_act_companion_history: [Array],
			protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
			protect_act_phone_number: '01096450422',
			protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
			protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
			protect_act_status: 'wait',
			protect_act_type: 'adopt',
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
	],
	protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
	protect_animal_estimate_age: '4년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [],
	protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
	protect_animal_rescue_location: '고르고스 언덕',
	protect_animal_sex: 'female',
	protect_animal_species: '기타',
	protect_animal_species_detail: '치와와',
	protect_animal_status: 'rescue',
	protect_animal_weight: 12,
};
