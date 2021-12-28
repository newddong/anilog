import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeIcon} from 'Asset/image';
import React from 'react';
import {View, Text, ScrollView, Linking, TouchableOpacity, ActivityIndicator} from 'react-native';
import {getProtectRequestByProtectRequestId} from 'Root/api/protectapi';
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

	const [data, setData] = React.useState(props.data);
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

	const onClickLabel = data => {
		props.onClickLabel(data);
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
						props.nav == 'AdoptorInformation' ? (
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
									<UserDescriptionLabel data={data.adoptorObject} onClickLabel={onClickLabel} />
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
								{data.protect_act_address.brief || ''}
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

const q = {
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
