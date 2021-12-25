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
			//token(id)를 토대로 보호소 계정이 등록한 보호동물 리스트 조회
			// console.log('ShelterProtectAnimalList Nav');
			getShelterProtectAnimalList(
				{
					shelter_protect_animal_object_id: null,
					request_number: 10,
				},
				result => {
					// console.log('result / getShelterProtectAnimalList / ShelterProtectAnimalList', result.msg);
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
