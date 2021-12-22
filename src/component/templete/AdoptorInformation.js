import React from 'react';
import {ScrollView, View} from 'react-native';
import {dummy_AdoptorInformation} from 'Root/config/dummyDate_json';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

// ShelterMenu - 나의 보호소 출신동물 - 입양처 보기
// 연관 테이블 - PRotectionActivityApplicantObject , ProtectRequestObject, ShelterProtectAnimalObject
export default AdoptorInformation = ({route}) => {
	// console.log('AdoptorInformation request', route.params);
	// console.log('AdoptorInformation adoptor', route.params.protect_animal_adoptor_id);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.animalProtectDetails_adoptorInformation, baseInfo_style.list]}>
					<AnimalProtectDetail data={route.params} />
				</View>
			</ScrollView>
		</View>
	);
};
