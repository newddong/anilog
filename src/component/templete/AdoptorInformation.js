import React from 'react';
import {ScrollView, View} from 'react-native';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

export default AdoptorInformation = ({route}) => {
	// console.log('AdoptorInformation', route.params);

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
