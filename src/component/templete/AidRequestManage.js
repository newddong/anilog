import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {dummy_AidRequestAnimalList} from 'Root/config/dummyDate_json';

//PRotectApplylist
export default AidRequestManage = ({route, navigation}) => {
	const [data, setData] = React.useState(dummy_AidRequestAnimalList);

	//선택 시 이동
	const onSelect = index => {
		// console.log('dummy Index', dummy_AidRequestAnimalList[index]);
		navigation.push('ProtectApplicant', data[index]);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
					<AidRequestList items={data} nvName={route.name} onSelect={onSelect} selectBorderMode={false} />
				</View>
			</ScrollView>
		</View>
	);
};
