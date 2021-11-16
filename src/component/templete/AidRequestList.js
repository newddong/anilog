import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {login_style, aidRequestList} from './style_templete';
import AccountList from '../organism_ksw/AccountList';
import {useNavigation} from '@react-navigation/core';

export default AidRequestList = props => {
	const navigation = useNavigation();
	const moveToWriteAidRequest = () => {
		navigation.push('WriteAidRequest');
	};

	return (
		<View style={[login_style.wrp_main, aidRequestList.container]}>
			<TouchableOpacity onPress={moveToWriteAidRequest}>
				<View>
					<Text>보호중인 동물 추가하기</Text>
				</View>
			</TouchableOpacity>
			{/* AccountList */}
			<View style={[aidRequestList.aidRequestList]}>
				<AccountList />
			</View>
		</View>
	);
};
