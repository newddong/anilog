import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import DP from 'Root/config/dp';
import {Write94} from '../atom/icon';
import TabSelectBorder_Type3 from '../molecules/TabSelectBorder_Type3';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {linkedAccountList} from './style_templete';

export default LinkedAccountList = props => {
	const onWrite = () => {
		console.log('Onwrite');
	};

	return (
		<View style={linkedAccountList.container}>
			<ScrollView contentContainerStyle={linkedAccountList.insideContainer}>
				<View style={[linkedAccountList.accountList_step1]}>
					<ControllableAccountList title={'함께 아는 친구'} />
				</View>
				<View style={[linkedAccountList.accountList_step2]}>
					<ControllableAccountList title={'추천'} />
				</View>
			</ScrollView>
			<View style={[linkedAccountList.floatingBtn]}>
				<Write94 onPress={onWrite} />
			</View>
		</View>
	);
};
