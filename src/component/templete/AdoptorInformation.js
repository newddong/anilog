import React from 'react';
import {ScrollView, View} from 'react-native';
import {getProtectAnimalByProtectAnimalId} from 'Root/api/shelterapi';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

// ShelterMenu - 나의 보호소 출신동물 - 입양처 보기
// 연관 테이블 - PRotectionActivityApplicantObject , ProtectRequestObject, ShelterProtectAnimalObject
export default AdoptorInformation = ({route}) => {
	console.log('AdoptorInformation request', route.params);
	// console.log('AdoptorInformation adoptor', route.params.protect_animal_adoptor_id);
	React.useEffect(() => {
		getProtectAnimalByProtectAnimalId(
			{
				shelter_protect_animal_object_id: route.params.protect_animal_id._id,
			},
			result => {
				console.log('result / getProtectAnimalByProtectAnimalId  / AdoptorInformation  : ', result.msg);
			},
			err => {
				console.log('err / getProtectAnimalByProtectAnimalId  / AdoptorInformation  :  ', err);
			},
		);
	}, []);
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
