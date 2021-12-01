import React from 'react';
import {View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';

export default AidRequestManage = props => {
	console.log('props.otherParam=>' + props.route.params.otherParam);
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
				<AidRequestList nvName={props.route.params.otherParam} />
			</View>
		</View>
	);
};
