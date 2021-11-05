import React from 'react';
import {Text, View} from 'react-native';
import {login_style, selectAccount} from './style_templete';

export default SelectAccount = props => {
	return (
		<View style={[login_style.wrp_main, selectAccount.container]}>
			{/* AccountList */}
			<View style={[selectAccount.accountList]}>
				<Text>AccountList</Text>
			</View>
		</View>
	);
};
