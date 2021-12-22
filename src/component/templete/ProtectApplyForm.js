import React from 'react';
import {ScrollView, View} from 'react-native';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, protectApplyForm} from './style_templete';

export default ProtectApplyForm = ({route, navigation}) => {
	// console.log('ProtectApplyForm props', route.params);

	React.useEffect(() => {}, []);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[protectApplyForm.detailContainer]}>
				<AnimalProtectDetail data={route.params} />
			</View>
			<View style={btn_style.btn_w226}></View>
		</View>
	);
};
