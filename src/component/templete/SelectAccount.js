import React from 'react';
import {Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import AccountList from '../organism_ksw/AccountList';
import {login_style, selectAccount} from './style_templete';

export default SelectAccount = props => {
	const onSelect = (item, index) => {
		Modal.popTwoBtn(
			`${index}님이 입양예정자가 맞습니까?`,
			'취소',
			'예',
			() => Modal.close(),
			() => alert('확인!'),
		);
	};

	return (
		<View style={[login_style.wrp_main, selectAccount.container]}>
			<View style={[selectAccount.accountList]}>
				<AccountList items={dummy_userObject} onSelect={onSelect} />
			</View>
		</View>
	);
};
