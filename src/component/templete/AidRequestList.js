import React from 'react';
import {Text, View} from 'react-native';
import {login_style, aidRequestList} from './style_templete';

export default AidRequestList = props => {
	return (
		<View style={[login_style.wrp_main, aidRequestList.container]}>
			{/* AccountList */}
			<View style={[aidRequestList.aidRequestList]}>
				<Text>AccountList</Text>
			</View>
		</View>
	);
};
