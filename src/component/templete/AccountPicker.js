import React from 'react';
import {Text, View} from 'react-native';
import {login_style, accountPicker} from './style_templete';

export default AccountPicker = props => {
	return (
		<View style={[login_style.wrp_main, accountPicker.container]}>
			{/* AccountList */}
			<View style={[accountPicker.accountList]}>
				<Text>AccountList</Text>
			</View>
		</View>
	);
};
