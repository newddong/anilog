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
					const mt = [
						{
							__v: 1,
							_id: '61c5734438c5f6dee5a8b96e',
							protect_act_applicants: ['61c5820238c5f6dee5a8bbdd'],
							protect_animal_belonged_shelter_id: '61c5724c38c5f6dee5a8b95c',
							protect_animal_estimate_age: '2년 2개월',
							protect_animal_neutralization: 'no',
							protect_animal_photo_uri_list: [
								'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330052596_797A0127-E891-4286-8F6D-856C0F09003D.jpg',
							],
							protect_animal_protect_request_id: '61c575b538c5f6dee5a8b9d1',
							protect_animal_protector_discussion_id: [],
							protect_animal_rescue_date: '2020-12-03T00:00:00.000Z',
							protect_animal_rescue_location: '강원도 평창군 장흥이 인근',
							protect_animal_sex: 'female',
							protect_animal_species: '기타',
							protect_animal_species_detail: '사자',
							protect_animal_status: 'rescue',
							protect_animal_weight: 14,
						},
						{
							__v: 2,
							_id: '61c576c638c5f6dee5a8b9fd',
							protect_act_applicants: ['61c5c80938c5f6dee5a8cdfa', '61c73f7b10b3b3bf4acbed77'],
							protect_animal_belonged_shelter_id: '61c5724c38c5f6dee5a8b95c',
							protect_animal_estimate_age: '2개월',
							protect_animal_neutralization: 'unknown',
							protect_animal_photo_uri_list: [
								'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg',
							],
							protect_animal_protect_request_id: '61c576f538c5f6dee5a8ba06',
							protect_animal_protector_discussion_id: [],
							protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
							protect_animal_rescue_location: '강원도 강릉시 주문진 인근',
							protect_animal_sex: 'female',
							protect_animal_species: '기타',
							protect_animal_species_detail: '호랑이',
							protect_animal_status: 'rescue',
							protect_animal_weight: 8,
						},
					];

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
					// console.log('result / getAnimalListWithApplicant / ProtectApplyList', result.msg[0]);
					let merged = [];
					result.msg.map((data, i) => {
						console.log('v', i, data.protect_act_applicants);
						data.protect_act_applicants.map((v, i) => {
							console.log('v', i, v.protect_act_status);
							if (v.protect_act_status == 'wait') {
								merged.push(data);
								data.shelter_name = route.params.shelter_name;
							}
						});
						// if (v.protect_act_applicants.protect_act_status == 'wait') {
						// 	v.shelter_name = route.params.shelter_name;
						// 	merged.push(v);
						// }
					});

					// console.log('merged', JSON.stringify(merged));
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
