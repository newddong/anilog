import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeIcon} from 'Asset/image';
import React from 'react';
import {View, Text, ScrollView, Linking, TouchableOpacity} from 'react-native';
import {GRAY10, APRI10, BLUE20} from 'Root/config/color';
import {dummy_adoptorInfo} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {House48, Phone48, Paw48_APRI10, Check48, TextBalloon48, Person48} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {animalProtectList} from '../templete/style_templete';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalProtectDetail} from './style_organism';

export default AnimalProtectDetail = props => {
	// console.log(' AnimalProtectDetail / props.data', props.data);
	const data = props.data;
	const d = {
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
		protect_animal_estimate_age: '4년 1개월',
		protect_animal_neutralization: 'unknown',
		protect_animal_photo_uri_list: [],
		protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
		protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
		protect_animal_rescue_location: '고르고스 언덕',
		protect_animal_sex: 'female',
		protect_animal_species: '기타',
		protect_animal_status: 'rescue',
		protect_animal_weight: 12,
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
	const getStatusText = arg => {
		switch (arg) {
			case 'living':
				return '함께 살고 있어요.';
			case 'died':
				return '무지개 다리를 건넜어요';
			case 'adopt':
				return '다른 친구에게 입양되었어요.';
		}
	};
	const onPressPhoneNum = () => {
		Linking.openURL(`tel:${data.shelter_delegate_contact_number}`);
	};

	return (
		<ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
			<View style={[animalProtectDetail.container]}>
				<View style={[animalProtectDetail.animalNeedHelp_container]}>
					<AnimalNeedHelp data={data} />
				</View>
				<View style={[animalProtectDetail.details_container]}>
					{/* 보호장소 */}
					{
						//입양신청을 통해서 들어왔을 경우 입양자 계정에 대한 View를 보여줌
						data.protect_act_type == 'adopted' ? (
							<View style={[animalProtectDetail.detail]}>
								<View style={{flexDirection: 'row'}}>
									<View style={[animalProtectDetail.detail_icon48]}>
										<Person48 />
									</View>
									<View style={[animalProtectDetail.detail_title]}>
										<Text style={[txt.noto24b, {color: GRAY10}]}>입양자 계정</Text>
									</View>
								</View>
								<View style={[animalProtectDetail.detail_content]}>
									<UserDescriptionLabel data={dummy_adoptorInfo} />
								</View>
							</View>
						) : null
					}

					<View style={[animalProtectDetail.detail]}>
						<View style={[animalProtectList.menuHeader]}>
							<House48 />
							<Text style={[txt.noto24b, {color: GRAY10}]}>{'   '}보호장소</Text>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24]}>
								{data.protect_act_address.city || ''} {data.protect_act_address.district || ''} {data.protect_act_address.neighbor || ''}
							</Text>
						</View>
					</View>
					{/* 연락처 */}
					<View style={[animalProtectDetail.detail]}>
						<View style={[animalProtectList.menuHeader]}>
							<Phone48 />
							<Text style={[txt.noto24b, {color: GRAY10}]}>{'   '}연락처</Text>
						</View>
						<TouchableOpacity onPress={onPressPhoneNum} style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24, {color: BLUE20, textDecorationLine: 'underline'}]}>{data.protect_act_phone_number || ''}</Text>
						</TouchableOpacity>
					</View>
					{/* 반려 동물 생활 */}
					<View style={[animalProtectDetail.detail]}>
						<View style={[animalProtectList.menuHeader]}>
							<Paw48_APRI10 />
							<Text style={[txt.noto24b, {color: GRAY10}]}>{'   '}반려 동물 생활</Text>
						</View>
						{data.protect_act_companion_history.map((v, i) => {
							return (
								<View style={[animalProtectDetail.detail_content]} key={i}>
									<Text style={[txt.noto24]}>
										{i + 1}. {v.companion_pet_species} / 나이 : {v.companion_pet_age} / 반려생활 : {v.companion_pet_period}
									</Text>
									<Text style={[txt.noto24, {color: APRI10, paddingLeft: 10}]}>{getStatusText(v.companion_pet_current_status)}</Text>
								</View>
							);
						})}
					</View>
					{/* 체크 포인트  */}
					<View style={[animalProtectDetail.detail]}>
						<View style={[animalProtectList.menuHeader]}>
							<Check48 />
							<Text style={[txt.noto24b, {color: GRAY10}]}>{'   '}체크 포인트</Text>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_adult ? APRI10 : GRAY10}]}>- 성인 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_near_veterinary ? APRI10 : GRAY10}]}>- 주거지 근처 동물병원 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_agreed_housemate ? APRI10 : GRAY10}]}>- 동거인 동의 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_experience_defecate ? APRI10 : GRAY10}]}>- 배변 훈련 지식 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_knowledge_sanitation ? APRI10 : GRAY10}]}>
								- 반려동물 청결 지식 확인
							</Text>
						</View>
					</View>
					{/* 신청 동기  */}
					<View style={[animalProtectDetail.detail]}>
						<View style={[animalProtectList.menuHeader]}>
							<TextBalloon48 />
							<Text style={[txt.noto24b, {color: GRAY10}]}>{'   '}신청 동기</Text>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24]}>{data.protect_act_motivation || ''}</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

AnimalProtectDetail.defaultProps = {};
