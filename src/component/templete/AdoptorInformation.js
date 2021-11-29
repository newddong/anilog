import React from 'react';
import {View} from 'react-native';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

export default AdoptorInformation = ({route}) => {
	// console.log('AdoptorInformation', route.params);

	return (
		<View style={login_style.wrp_main}>
			<View style={[temp_style.animalProtectDetails_adoptorInformation, baseInfo_style.list]}>
				<AnimalProtectDetail data={route.params} />
			</View>
		</View>
	);
};
