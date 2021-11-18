import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {login_style, aidRequestList} from './style_templete';
import AccountList from '../organism_ksw/AccountList';
import {useNavigation} from '@react-navigation/core';
import AidRequestList from '../organism_ksw/AidRequestList';
import {btn_style, temp_style, baseInfo_style} from './style_templete';

export default AidRequestAnimalList = props => {
	return (
		<View style={login_style.wrp_main}>
			{/* <FlatList> */}
			<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
				{/* (O)AnimalProtectDetails */}
				<AidRequestList></AidRequestList>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
