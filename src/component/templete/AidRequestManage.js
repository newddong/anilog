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
					// console.log('result / getShelterProtectAnimalList / ShelterProtectAnimalList', result.msg);
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
					// console.log('result / getAnimalListWithApplicant / ProtectApplyList', result.msg[0]);
					let merged = result.msg;
					merged.map((v, i) => {
						v.shelter_name = route.params.shelter_name;
					});
					setData(merged);
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
// 61c1cc107be07611b00945f9
