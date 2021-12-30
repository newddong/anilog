import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {getProtectRequestByProtectRequestId, setProtectActivityStatus, setProtectRequestStatus} from 'Root/api/protectapi';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, protectApplyForm} from './style_templete';

export default ProtectApplyForm = ({route, navigation}) => {
	// console.log('ProtectApplyForm props', route.params);
	const [data, setData] = React.useState(route.params);
	const [loading, setLoading] = React.useState(true); // 화면 출력 여부 결정
	console.log('status', data.protect_act_type);
	const r = {
		__v: 0,
		_id: '61c73f7b10b3b3bf4acbed77',
		protect_act_address: {brief: '서울특별시 마포구 마포대로 143(공덕동)', detail: '110동 2001호'},
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
				_id: '61c73f7b10b3b3bf4acbed78',
				companion_pet_age: '5세 이하',
				companion_pet_current_status: 'living',
				companion_pet_period: '5년 이하',
				companion_pet_species: '동물종류',
			},
		],
		protect_act_motivation: '임시보호에는 자신있습니다. ',
		protect_act_phone_number: '01096450422',
		protect_act_protect_animal_id: '61c576c638c5f6dee5a8b9fd',
		protect_act_request_article_id: '61c576f538c5f6dee5a8ba06',
		protect_act_request_shelter_id: '61c5724c38c5f6dee5a8b95c',
		protect_act_status: 'accept',
		protect_act_type: 'adopt',
		protect_animal_data: {
			protect_animal_estimate_age: '2개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [
				'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg',
			],
			protect_animal_protect_request_id: '61cc926db6fcf452771b8e3d',
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
		shelter_name: '상우보호소',
		user_introduction: '아리앗고개	트리스트럼성채지하 1층수정회랑',
		user_nickname: '탈론',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640570178278_A41084E8-FFD4-4C03-A891-FCD063F71380.jpg',
	};

	React.useEffect(() => {
		getProtectRequestByProtectRequestId(
			{
				protect_request_object_id: data.protect_act_request_article_id,
			},
			result => {
				// console.log('result / getProtectRequestByProtectRequestId / ProtectApplyForm ', result.msg);
				const addedData = {...data};
				addedData.protect_animal_species = result.msg.protect_animal_species;
				addedData.protect_animal_species_detail = result.msg.protect_animal_species_detail;
				addedData.protect_animal_rescue_location = result.msg.protect_animal_id.protect_animal_rescue_location;
				addedData.protect_request_date = result.msg.protect_request_date;
				addedData.protect_request_photos_uri = result.msg.protect_request_photos_uri;
				// const merged = Object.assign(data, result.msg);
				setData(addedData);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			},
			err => {
				console.log('err / getProtectRequestByProtectRequestId / ProtectApplyForm  ', err);
			},
		);
	}, []);

	const onPressConfirm = () => {
		// console.log('data', data);
		//보호요청게시글의 상태뿐만 아니라 입양 및 보호신청 상태도 Accept로 바꾸어야한다
		setProtectActivityStatus(
			{
				protect_act_object_id: data._id,
				protect_act_status: 'accept',
			},
			result => {
				console.log('result / setProtectActivityStatus / ProtectApplyForm  : ', result.msg);
			},
			err => {
				console.log('err / setProtectActivityStatus / ProtectApplyForm  : ', err);
			},
		);
		setProtectRequestStatus(
			{
				protect_request_object_id: data.protect_act_request_article_id,
				protect_request_status: 'complete',
			},
			result => {
				console.log('result / setProtectRequestStatus / ProtectApplyForm  : ', result.msg);
				navigation.reset({
					index: 0,
					routes: [{name: 'ShelterMenu'}],
				});
			},
			err => {
				console.log('err / SetProtectRequestStatus / ProtectApplyForm  :', err);
			},
		);
	};

	if (loading) {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'}></ActivityIndicator>
			</View>
		);
	}
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[protectApplyForm.detailContainerm, {flex: 1}]}>
				<AnimalProtectDetail data={data} />
			</View>
			<View style={[protectApplyForm.confirmButton]}>
				<AniButton onPress={onPressConfirm} btnTitle={data.protect_act_type == 'adopt' ? '입양 확정' : '임시보호 확정'} btnLayout={btn_w226} />
			</View>
		</View>
	);
};
