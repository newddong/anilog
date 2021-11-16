import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Write94} from '../atom/icon';
import InputWithSearchIcon from '../molecules/InputWithSearchIcon';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {followerList} from './style_templete';

export default FollowerList = props => {
	const onWrite = () => {
		console.log('Onwrite');
	};

	return (
		<View style={followerList.container}>
			<ScrollView contentContainerStyle={followerList.insideContainer}>
				<View style={[followerList.inputWitchSearch]}>
					<InputWithSearchIcon />
				</View>
				<View style={[followerList.accountList_step1]}>
					<ControllableAccountList title={'함께 아는 친구'} />
				</View>
			</ScrollView>
			<View style={[followerList.floatingBtn]}>
				<Write94 onPress={onWrite} />
			</View>
		</View>
	);
};
