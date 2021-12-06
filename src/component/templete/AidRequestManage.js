import React from 'react';
import {View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {dummy_AidRequestAnimalList} from 'Root/config/dummyDate_json';
import {protectedPetList} from '../organism_ksw/style_organism';

export default AidRequestManage = ({route, navigation}) => {
	// console.log('props.route.name=>' + route.name);

	const onSelect = index => {
		console.log('dummy Index', dummy_AidRequestAnimalList[index]);
		navigation.push('ProtectApplicant', dummy_AidRequestAnimalList[index]);
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
				<AidRequestList items={dummy_AidRequestAnimalList} nvName={route.name} onSelect={onSelect} />
			</View>
		</View>
	);
};
