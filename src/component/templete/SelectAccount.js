import React from 'react';
import {Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import AccountList from '../organism_ksw/AccountList';
import {login_style, selectAccount} from './style_templete';
import {useNavigation} from '@react-navigation/core';

export default SelectAccount = props => {
	const navigation = useNavigation();
	const onSelect = (item, index) => {
		Modal.popTwoBtn(
			`${index}님이 입양예정자가 맞습니까?`,
			'취소',
			'예',
			() => Modal.close(),
			() => {
				Modal.close();
				navigation.push('PetInfoSetting', {userobject_id: props.route.params.userobject_id});
			},
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
