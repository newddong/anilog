import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {getAnimalListWithApplicant, getShelterProtectAnimalList} from 'Root/api/shelterapi';

//ShelterMenu => 신청서 조회 [Nav명 - ProtectApplyList]
//ShelterMenu => 보호중인 동물 [Nav명 - ShelterProtectAnimalList]
export default AidRequestManage = ({route, navigation}) => {
	const token = route.params.token;
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		if (route.params.nav == 'ShelterProtectAnimalList') {
			//token(id)를 토대로 보호소 계정이 등록한 보호동물 리스트 조회
			// console.log('ShelterProtectAnimalList Nav');
			getShelterProtectAnimalList(
				{
					shelter_protect_animal_object_id: null,
					request_number: 10,
				},
				result => {
					console.log('result / getShelterProtectAnimalList / ShelterProtectAnimalList', result.msg);
					setData(result.msg);
				},
				err => {
					console.log('err / getShelterProtectAnimalList', err);
					// setData(err);
				},
			);
		} else {
			//token(id)를 토대로 보호소 계정이 등록한 보호요청 게시글 중 신청서가 들어와 있는 목록을 조회
			console.log('ProtectApplyList');
			getAnimalListWithApplicant(
				{},
				result => {
					console.log('result / getAnimalListWithApplicant / ProtectApplyList', result.msg[0].protect_act_applicants);
					setData(result.msg);
				},
				err => {
					console.log('err / getAnimalListWithApplicant', err);
					// setData(err);
				},
			);
		}
	}, []);

	//선택 시 이동
	const onSelect = index => {
		// console.log('dummy Index', dummy_AidRequestAnimalList[index]);
		navigation.push('ProtectApplicant', data[index]);
	};

	const addProtectAnimal = () => {
		navigation.push('AssignProtectAnimalImage');
		// navigation.push('WriteAidRequest');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
					{data.length == 0 ? (
						<Text style={{}}>지원이 들어온 신청 내역이 없습니다.</Text>
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
};

const withApplica = [
	{
		__v: 1,
		_id: '61c07f0c0b3fb5a4acae2c26',
		protect_act_applicants: [[Object]],
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
	},
];
[
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
		protect_act_status: 'wait',
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
		protect_act_status: 'wait',
		protect_act_type: 'adopt',
	},
	{
		__v: 0,
		_id: '61c2fc527be07611b00955e6',
		protect_act_address: {brief: '경기도 화성시 장안면 석포로 107', detail: '311'},
		protect_act_applicant_id: '61c023d9679aa5ae46128102',
		protect_act_checklist: {
			is_adult: true,
			is_agreed_housemate: true,
			is_experience_defecate: true,
			is_knowledge_sanitation: true,
			is_near_veterinary: true,
		},
		protect_act_companion_history: [[Object]],
		protect_act_phone_number: '01096450422',
		protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
		protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
		protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
		protect_act_status: 'wait',
		protect_act_type: 'adopt',
	},
];
