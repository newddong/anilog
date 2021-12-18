import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';

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
					request_number: 100,
				},
				successed => {
					console.log('successed / getShelterProtectAnimalList / ShelterProtectAnimalList', successed.msg);
					setData(successed.msg);
				},
				err => {
					console.log('err / getShelterProtectAnimalList', err);
					// setData(err);
				},
			);
		} else {
			//token(id)를 토대로 보호소 계정이 등록한 보호요청 게시글 중 신청서가 들어와 있는 목록을 조회
			console.log('ProtectApplyList');
			getShelterProtectAnimalList(
				{
					shelter_protect_animal_object_id: null,
					request_number: 100,
				},
				successed => {
					console.log('successed / getShelterAnimalList / ProtectApplyList', successed.msg);
					const example = {
						__v: 0,
						_id: '61bdff9b244ae6ea37b64e28',
						protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
						protect_animal_estimate_age: '2년 1개월',
						protect_animal_neutralization: 'unknown',
						protect_animal_photo_uri_list: [],
						protect_animal_protector_discussion_id: [],
						protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
						protect_animal_rescue_location: 'Cora st ',
						protect_animal_sex: 'female',
						protect_animal_species: '개',
						protect_animal_species_detail: '치와와',
						protect_animal_status: 'rescue',
						protect_animal_weight: 5,
					};
					setData(successed.msg);
				},
				err => {
					console.log('err / getShelterAnimalList', err);
					setData(err);
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
					<AidRequestList items={data} onPressAddProtectAnimal={addProtectAnimal} onSelect={onSelect} nvName={route.name} selectBorderMode={false} />
				</View>
			</ScrollView>
		</View>
	);
};
