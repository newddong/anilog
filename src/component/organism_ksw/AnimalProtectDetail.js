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
	console.log(' AnimalProtectDetail / props.data', props.data);
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
	_id: '61c5c80938c5f6dee5a8cdfa',
	protect_act_address: {brief: '경기도 파주시 파주읍 파발로26번길 7(파주파주휴먼시아)', detail: '110동 2012'},
	protect_act_applicant_id: '61c56c7538c5f6dee5a8b835',
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{
			_id: '61c5c80938c5f6dee5a8cdfb',
			companion_pet_age: '1세 이하',
			companion_pet_current_status: '함께 생활하고 있어요.',
			companion_pet_period: '1년 이하',
			companion_pet_species: '새',
		},
	],
	protect_act_motivation: '솔 크 보내는 사람 추천',
	protect_act_phone_number: '01096450422',
	protect_act_protect_animal_id: '61c576c638c5f6dee5a8b9fd',
	protect_act_request_article_id: '61c576f538c5f6dee5a8ba06',
	protect_act_request_shelter_id: '61c5724c38c5f6dee5a8b95c',
	protect_act_status: 'wait',
	protect_act_type: 'protect',
	protect_animal_data: {
		protect_animal_estimate_age: '2개월',
		protect_animal_neutralization: 'unknown',
		protect_animal_photo_uri_list: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg',
		],
		protect_animal_protect_request_id: '61c576f538c5f6dee5a8ba06',
		protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
		protect_animal_rescue_location: '강원도 강릉시 주문진 인근',
		protect_animal_sex: 'female',
		protect_animal_species: '기타',
		protect_animal_status: 'rescue',
		protect_animal_weight: 8,
	},
	protect_animal_rescue_location: '강원도 강릉시 주문진 인근',
	protect_animal_species: '기타',
	protect_animal_species_detail: '호랑이',
	protect_request_date: '2021-12-24T07:29:57.236Z',
	protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg'],
	shelter_name: undefined,
	user_introduction: '지금을 사세요',
	user_nickname: '상우1',
	user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640437954460_209CC267-AC61-4830-9F0E-33C8736F05F7.jpg',
};
