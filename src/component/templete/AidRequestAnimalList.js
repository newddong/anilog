import React from 'react';
import {View} from 'react-native';
import {login_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {temp_style, baseInfo_style} from './style_templete';
import {dummy_AidRequestAnimalList, dummy_ShelterProtectAnimalObject, dummy_UserObject_shelter} from 'Root/config/dummyDate_json';
import DP from 'Root/config/dp';

//AidRequestList에서 필요한 데이터 테이블 =====> ShelterProtectAnimalObject <=====

export default AidRequestAnimalList = ({route, navigation}) => {
	//본래라면 UserObject에 담긴 _id를 토대로 보호중인 동물을 서버로부터 가져옴.
	const dummy_AidRequestList = dummy_AidRequestAnimalList;

	const onPressAddProtectAnimal = () => {
		navigation.push('AssignProtectAnimalImage');
		// navigation.push('WriteAidRequest');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1, width: 750 * DP}]}>
			<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
				<AidRequestList items={dummy_AidRequestList} onPressAddProtectAnimal={onPressAddProtectAnimal} />
			</View>
		</View>
	);
};

AidRequestAnimalList.defaultProps = {};
