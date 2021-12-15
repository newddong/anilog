import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {dummy_AidRequestAnimalList, dummy_requestAnimalListApplied} from 'Root/config/dummyDate_json';
import {getRequestAnimalListApplied, getShelterAnimalList} from 'Root/api/protect_request_api_ksw';

//ShelterMenu => 신청서 조회 [Nav명 - ProtectApplyList]
//ShelterMenu => 보호중인 동물 [Nav명 - ShelterProtectAnimalList]
export default AidRequestManage = ({route, navigation}) => {
	const token = route.params.token;
	const [data, setData] = React.useState(dummy_requestAnimalListApplied);

	React.useEffect(() => {
		if (route.params.nav == 'ShelterProtectAnimalList') {
			//token(id)를 토대로 보호소 계정이 등록한 보호동물 리스트 조회

			getShelterAnimalList(
				token,
				successed => {
					console.log('successed / getShelterAnimalList', successed);
				},
				err => {
					console.log('err / getShelterAnimalList', err);
				},
			);
		} else {
			//token(id)를 토대로 보호소 계정이 등록한 보호요청 게시글 중 신청서가 들어와 있는 목록을 조회

			getRequestAnimalListApplied(
				token,
				successed => {
					console.log('successed / getShelterAnimalList', successed);
				},
				err => {
					console.log('err / getShelterAnimalList', err);
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
