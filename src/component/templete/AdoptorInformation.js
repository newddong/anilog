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
	const r = {
		__v: 0,
		_id: '61c93e5a951b87d739e4b4a6',
		protect_animal_id: {
			__v: 0,
			_id: '61c93e1c951b87d739e4b492',
			protect_act_applicants: [],
			protect_animal_belonged_shelter_id: '61c93dbf951b87d739e4b410',
			protect_animal_estimate_age: '1년 6개월',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [
				'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578587999_812C16C8-A065-408B-B41B-3A187420666F.jpg',
			],
			protect_animal_protect_request_id: '61c93e5a951b87d739e4b4a6',
			protect_animal_protector_discussion_id: [],
			protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
			protect_animal_rescue_location: '안양천유수지',
			protect_animal_sex: 'male',
			protect_animal_species: '개',
			protect_animal_species_detail: '믹스견',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '개',
		protect_animal_species_detail: '믹스견',
		protect_request_comment_count: 0,
		protect_request_content: '사람을 너무 좋아하는 웰시코기 믹스견이에요건강한 상태로 새로운 가족을 기다리고 있어요',
		protect_request_date: '2021-12-27T04:17:30.905Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578587999_812C16C8-A065-408B-B41B-3A187420666F.jpg'],
		protect_request_status: 'complete',
		protect_request_title: '귀염둥이를 소개합니다',
		protect_request_update_date: '2021-12-27T04:17:30.905Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61c93dbf951b87d739e4b410',
			pet_family: [],
			shelter_address: {brief: '서울특별시 영등포구 당산동3가 552-1 영등포세무서', detail: '앞마당'},
			shelter_delegate_contact_number: '01012345678',
			shelter_foundation_date: null,
			shelter_homepage: 'www.ydp.com',
			shelter_name: '양평동유기동물보호소',
			user_agreement: {
				is_donation_info: false,
				is_location_service_info: false,
				is_marketting_info: false,
				is_over_fourteen: false,
				is_personal_info: false,
				is_service: false,
			},
			user_denied: false,
			user_email: 'ydp@naver.com',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [],
			user_introduction: '',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [],
			user_name: '양평동유기동물보호소',
			user_nickname: '양평동유기동물보호소',
			user_password: 'smallf84',
			user_phone_number: '01012345678',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578495813_1D5411A3-178E-42D6-B236-01C71DD6B106.jpg',
			user_register_date: '2021-12-27T04:14:55.914Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	};
	const [loading, setLoading] = React.useState(true); // 화면 출력 여부 결정
	const [data, setData] = React.useState(route.params);

	React.useEffect(() => {
		// console.log('data', data);
		// delete data._id;
		const protect_animal_object = data.protect_animal_id;
		let merged = Object.assign(data, protect_animal_object);
		// console.log('e', e.protect_animal_id);
		// delete merged.protect_animal_id;
		//현재 동물보호신청(protectActivityApplicationObject)필드가 없는 상태 (protect_act_applicant가 최신화되어 있지 않기 때문)
		//getProtectAnimalByProtectAnimalId를 통해 실시간 입양신청 ID 받기
		//Id로 신청정보 상세 조회 총
		//차후 깔끔하게 처리 필요
		getProtectAnimalByProtectAnimalId(
			{
				shelter_protect_animal_object_id: protect_animal_object._id,
			},
			result => {
				// console.log('result / getProtectAnimalByProtectAnimalId  / AdoptorInformation  : ', result.msg.protect_act_applicants);
				// 로그 결과  : ["61c34aed17f59a595cc4219a", "61c34be517f59a595cc421a0", "61c34f5a17f59a595cc42211", "61c487b567b952173d67d9c8"]
				getApplyDetailById(
					{
						protect_act_object_id: result.msg.protect_act_applicants[0], //[0]번이면 안될텐데?
					},
					result => {
						console.log('result / getApplyDetailById / AdoptorInfor :', result.msg.protect_act_applicant_id);
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
// 61c7104c10b3b3bf4acbd20b

const par = {
	__v: 0,
	_id: '61c93e1c951b87d739e4b492',
	adoptorObject: {
		__v: 0,
		_id: '61c93dbf951b87d739e4b410',
		pet_family: [],
		shelter_address: {brief: '서울특별시 영등포구 당산동3가 552-1 영등포세무서', detail: '앞마당'},
		shelter_delegate_contact_number: '01012345678',
		shelter_foundation_date: null,
		shelter_homepage: 'www.ydp.com',
		shelter_name: '양평동유기동물보호소',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_email: 'ydp@naver.com',
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
		user_name: '양평동유기동물보호소',
		user_nickname: '양평동유기동물보호소',
		user_password: 'smallf84',
		user_phone_number: '01012345678',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578495813_1D5411A3-178E-42D6-B236-01C71DD6B106.jpg',
		user_register_date: '2021-12-27T04:14:55.914Z',
		user_type: 'shelter',
		user_upload_count: 0,
	},
	protect_act_address: {brief: '서울특별시 강서구 마곡중앙로 161-17(마곡동)', detail: '510호'},
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
			_id: '61c93fc7951b87d739e4b59d',
			companion_pet_age: '15세 이상',
			companion_pet_current_status: 'died',
			companion_pet_period: '15년 이상',
			companion_pet_species: '개',
		},
		{
			_id: '61c93fc7951b87d739e4b59e',
			companion_pet_age: '10세 이하',
			companion_pet_current_status: '함께 생활하고 있어요.',
			companion_pet_period: '5년 이하',
			companion_pet_species: '고양이',
		},
	],
	protect_act_motivation: '사랑으로 보살피겠습니다',
	protect_act_phone_number: '01029386382',
	protect_act_status: 'accept',
	protect_act_type: 'adopt',
	protect_animal_belonged_shelter_id: '61c93dbf951b87d739e4b410',
	protect_animal_estimate_age: '1년 6개월',
	protect_animal_neutralization: 'no',
	protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578587999_812C16C8-A065-408B-B41B-3A187420666F.jpg'],
	protect_animal_protect_request_id: '61c93e5a951b87d739e4b4a6',
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
	protect_animal_rescue_location: '안양천유수지',
	protect_animal_sex: 'male',
	protect_animal_species: '개',
	protect_animal_species_detail: '믹스견',
	protect_animal_status: 'rescue',
	protect_animal_weight: 12,
	protect_request_comment_count: 0,
	protect_request_content: '사람을 너무 좋아하는 웰시코기 믹스견이에요건강한 상태로 새로운 가족을 기다리고 있어요',
	protect_request_date: '2021-12-27T04:17:30.905Z',
	protect_request_favorite_count: 0,
	protect_request_hit: 0,
	protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578587999_812C16C8-A065-408B-B41B-3A187420666F.jpg'],
	protect_request_status: 'complete',
	protect_request_title: '귀염둥이를 소개합니다',
	protect_request_update_date: '2021-12-27T04:17:30.905Z',
	protect_request_writer_id: {
		__v: 0,
		_id: '61c93dbf951b87d739e4b410',
		pet_family: [],
		shelter_address: {brief: '서울특별시 영등포구 당산동3가 552-1 영등포세무서', detail: '앞마당'},
		shelter_delegate_contact_number: '01012345678',
		shelter_foundation_date: null,
		shelter_homepage: 'www.ydp.com',
		shelter_name: '양평동유기동물보호소',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_email: 'ydp@naver.com',
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
		user_name: '양평동유기동물보호소',
		user_nickname: '양평동유기동물보호소',
		user_password: 'smallf84',
		user_phone_number: '01012345678',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578495813_1D5411A3-178E-42D6-B236-01C71DD6B106.jpg',
		user_register_date: '2021-12-27T04:14:55.914Z',
		user_type: 'shelter',
		user_upload_count: 0,
	},
};
const e = {
	__v: 1,
	_id: '61c93e1c951b87d739e4b492',
	protect_act_applicants: ['61c93fc7951b87d739e4b59c'],
	protect_animal_belonged_shelter_id: '61c93dbf951b87d739e4b410',
	protect_animal_estimate_age: '1년 6개월',
	protect_animal_neutralization: 'no',
	protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640578587999_812C16C8-A065-408B-B41B-3A187420666F.jpg'],
	protect_animal_protect_request_id: '61c93e5a951b87d739e4b4a6',
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
	protect_animal_rescue_location: '안양천유수지',
	protect_animal_sex: 'male',
	protect_animal_species: '개',
	protect_animal_species_detail: '믹스견',
	protect_animal_status: 'rescue',
	protect_animal_weight: 12,
};

const adoptor = {
	__v: 0,
	_id: '61c93fc7951b87d739e4b59c',
	protect_act_address: {brief: '서울특별시 강서구 마곡중앙로 161-17(마곡동)', detail: '510호'},
	protect_act_applicant_id: '61c93dbf951b87d739e4b410',
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{
			_id: '61c93fc7951b87d739e4b59d',
			companion_pet_age: '15세 이상',
			companion_pet_current_status: 'died',
			companion_pet_period: '15년 이상',
			companion_pet_species: '개',
		},
		{
			_id: '61c93fc7951b87d739e4b59e',
			companion_pet_age: '10세 이하',
			companion_pet_current_status: '함께 생활하고 있어요.',
			companion_pet_period: '5년 이하',
			companion_pet_species: '고양이',
		},
	],
	protect_act_motivation: '사랑으로 보살피겠습니다',
	protect_act_phone_number: '01029386382',
	protect_act_protect_animal_id: '61c93e1c951b87d739e4b492',
	protect_act_request_article_id: '61c93e5a951b87d739e4b4a6',
	protect_act_request_shelter_id: '61c93dbf951b87d739e4b410',
	protect_act_status: 'accept',
	protect_act_type: 'adopt',
};
