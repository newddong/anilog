import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {getAnimalListWithApplicant, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import {txt} from 'Root/config/textstyle';
import {GRAY10} from 'Root/config/color';

//ShelterMenu => 신청서 조회 [Nav명 - ProtectApplyList]
//ShelterMenu => 보호중인 동물 [Nav명 - ShelterProtectAnimalList]
export default AidRequestManage = ({route, navigation}) => {
	const token = route.params.token;
	const [loading, setLoading] = React.useState(true); // 화면 출력 여부 결정
	const [data, setData] = React.useState([]);
	const isShelterProtect = route.name == 'ShelterProtectAnimalList';

	React.useEffect(() => {
		if (isShelterProtect) {
			// 보호중인 동물이므로 입양 및 임시보호가 완료된 보호동물들은 출력이 되어서는 안됨
			//protect_animal_status !='adopt' or 'protect'일 경우 제외되어야 함
			//차후 API 다듬는 과정에서 추가 필요
			getShelterProtectAnimalList(
				{
					shelter_protect_animal_object_id: null,
					request_number: 10,
				},
				result => {
					console.log('result / getShelterProtectAnimalList / ShelterProtectAnimalList', result.msg);
					setData(result.msg);
					setTimeout(() => {
						setLoading(false);
					}, 1500);
				},
				err => {
					console.log('err / getShelterProtectAnimalList', err);
					setTimeout(() => {
						setLoading(false);
					}, 1500);
					// setData(err);
				},
			);
		} else {
			//token(id)를 토대로 보호소 계정이 등록한 보호요청 게시글 중 신청서가 들어와 있는 목록을 조회
			console.log('ProtectApplyList');
			getAnimalListWithApplicant(
				{},
				result => {
					// console.log('result / getAnimalListWithApplicant / ProtectApplyList', result.msg);
					let merged = [];
					result.msg.map((data, i) => {
						data.shelter_name = route.params.shelter_name;
						//출력된 보호요청게시글들이 가지는 지원신청서가 혹시 wait상태인 것이 없는 경우 ( == 입양/임보가 확정-취소-신청취소 된 상태 )
						// ==> 출력되어서는 안됨
						const hasApplicantsWaitng = data.protect_act_applicants.some(e => e.protect_act_status == 'wait');
						hasApplicantsWaitng ? merged.push(data) : false;
					});
					setData(merged);
					setTimeout(() => {
						setLoading(false);
					}, 1500);
				},
				err => {
					console.log('err / getAnimalListWithApplicant', err);
					setTimeout(() => {
						setLoading(false);
					}, 1500);
					// setData(err);
				},
			);
		}
	}, []);

	//선택 시 이동
	const onSelect = index => {
		// console.log('dummy Index', dummy_AidRequestAnimalList[index]);
		!isShelterProtect ? navigation.push('ProtectApplicant', data[index]) : console.log('ShelterProtectAnimalList에서는 네비게이션 정의가 안됨');
	};

	const addProtectAnimal = () => {
		navigation.push('AssignProtectAnimalImage');
		// navigation.push('WriteAidRequest');
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
					<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
						{data.length == 0 ? (
							<Text style={[txt.noto30, {alignSelf: 'center', marginTop: 130, color: GRAY10}]}>지원 신청이 들어온 게시글이 없네요.</Text>
						) : (
							<AidRequestList
								items={data}
								onPressAddProtectAnimal={addProtectAnimal}
								onSelect={onSelect}
								nvName={route.name}
								selectBorderMode={false}
							/>
						)}
					</View>
				</ScrollView>
			</View>
		);
	}
};
// 61c1cc107be07611b00945f9

const t = [
	{
		__v: 2,
		_id: '61cbce57b6fcf452771afa6c',
		protect_act_applicants: [[Object]],
		protect_animal_belonged_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_animal_estimate_age: '1개월',
		protect_animal_neutralization: 'unknown',
		protect_animal_photo_uri_list: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640746583784_rn_image_picker_lib_temp_5e9662f7-b787-418b-aafc-682d5ded3916.jpg',
		],
		protect_animal_protect_request_id: '61cbe478b6fcf452771b06c3',
		protect_animal_protector_discussion_id: [],
		protect_animal_rescue_date: null,
		protect_animal_rescue_location: '골목 안',
		protect_animal_sex: 'male',
		protect_animal_species: '개',
		protect_animal_species_detail: '말티즈',
		protect_animal_status: 'rescue',
		protect_animal_weight: 0,
	},
	{
		__v: 4,
		_id: '61cbf9e7b6fcf452771b1991',
		protect_act_applicants: [[Object], [Object], [Object], [Object]],
		protect_animal_belonged_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_animal_estimate_age: '3년 12개월',
		protect_animal_neutralization: 'unknown',
		protect_animal_photo_uri_list: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735290_rn_image_picker_lib_temp_29cee8f1-3f04-4bde-b648-a1db006a77a1.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735299_rn_image_picker_lib_temp_c3f86414-7a30-427e-b6b3-d599d02a28a2.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735326_rn_image_picker_lib_temp_55b3cd1e-1850-4bfa-986d-4899fc7fb38e.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735349_rn_image_picker_lib_temp_d87d5262-5e66-457d-9e91-adacf2b5ee50.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735355_rn_image_picker_lib_temp_6648c0f3-f9bd-42f9-9289-ee4876c8933e.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735360_rn_image_picker_lib_temp_4bf45c9c-79bb-41fc-ab00-62dc3cf07476.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735367_rn_image_picker_lib_temp_32c10fa5-4b0b-4925-8599-0f82fc15a29f.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735372_rn_image_picker_lib_temp_0853acad-43f3-4113-8f05-88162540eb77.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735376_rn_image_picker_lib_temp_388c911c-f6f1-4dc2-8005-85a5f380ef82.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735382_rn_image_picker_lib_temp_e9ebc2e3-bd40-44ca-b784-23a81aa17fe1.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640757735388_rn_image_picker_lib_temp_9ad661c6-9c4d-4c94-a23d-8e2c9077a64a.jpg',
		],
		protect_animal_protect_request_id: '61cbfabab6fcf452771b1a9a',
		protect_animal_protector_discussion_id: [],
		protect_animal_rescue_date: '2021-12-15T00:00:00.000Z',
		protect_animal_rescue_location: '',
		protect_animal_sex: 'female',
		protect_animal_species: '고양이',
		protect_animal_species_detail: '믹스묘',
		protect_animal_status: 'rescue',
		protect_animal_weight: 4,
	},
];

const d = [
	{
		__v: 0,
		_id: '61cc0219b6fcf452771b23de',
		protect_act_address: {brief: '서울특별시 마포구 마포대로 86(도화동)', detail: '16층'},
		protect_act_applicant_id: '61ca7212951b87d739e53293',
		protect_act_checklist: {
			is_adult: true,
			is_agreed_housemate: true,
			is_experience_defecate: true,
			is_knowledge_sanitation: true,
			is_near_veterinary: true,
		},
		protect_act_companion_history: [],
		protect_act_motivation: '보호소끼리의 입양신청',
		protect_act_phone_number: '0107777777',
		protect_act_protect_animal_id: '61cbf9e7b6fcf452771b1991',
		protect_act_request_article_id: '61cbfabab6fcf452771b1a9a',
		protect_act_request_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_act_status: 'wait',
		protect_act_type: 'adopt',
	},
	{
		__v: 0,
		_id: '61cc03ceb6fcf452771b2588',
		protect_act_address: {brief: '서울특별시 마포구 마포대로 86(도화동)', detail: '16층'},
		protect_act_applicant_id: '61ca7212951b87d739e53293',
		protect_act_checklist: {
			is_adult: false,
			is_agreed_housemate: false,
			is_experience_defecate: false,
			is_knowledge_sanitation: false,
			is_near_veterinary: false,
		},
		protect_act_companion_history: [[Object]],
		protect_act_motivation: '보호소테스트2',
		protect_act_phone_number: '11',
		protect_act_protect_animal_id: '61cbf9e7b6fcf452771b1991',
		protect_act_request_article_id: '61cbfabab6fcf452771b1a9a',
		protect_act_request_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_act_status: 'wait',
		protect_act_type: 'protect',
	},
	{
		__v: 0,
		_id: '61cc040bb6fcf452771b25f5',
		protect_act_address: {brief: '경상북도 영양군 일월면 오리도곡로 737', detail: '오리오리'},
		protect_act_applicant_id: '61ca7212951b87d739e53293',
		protect_act_checklist: {
			is_adult: false,
			is_agreed_housemate: false,
			is_experience_defecate: false,
			is_knowledge_sanitation: false,
			is_near_veterinary: false,
		},
		protect_act_companion_history: [],
		protect_act_motivation: null,
		protect_act_phone_number: '11111',
		protect_act_protect_animal_id: '61cbf9e7b6fcf452771b1991',
		protect_act_request_article_id: '61cbfabab6fcf452771b1a9a',
		protect_act_request_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_act_status: 'accept',
		protect_act_type: 'protect',
	},
	{
		__v: 0,
		_id: '61cc0451b6fcf452771b268b',
		protect_act_address: {brief: '서울특별시 동대문구 천호대로87길 43(장안동)', detail: '1'},
		protect_act_applicant_id: '61ca7212951b87d739e53293',
		protect_act_checklist: {
			is_adult: false,
			is_agreed_housemate: false,
			is_experience_defecate: false,
			is_knowledge_sanitation: false,
			is_near_veterinary: false,
		},
		protect_act_companion_history: [],
		protect_act_motivation: null,
		protect_act_phone_number: '7',
		protect_act_protect_animal_id: '61cbf9e7b6fcf452771b1991',
		protect_act_request_article_id: '61cbfabab6fcf452771b1a9a',
		protect_act_request_shelter_id: '61cbcbfdb6fcf452771af939',
		protect_act_status: 'wait',
		protect_act_type: 'adopt',
	},
];
