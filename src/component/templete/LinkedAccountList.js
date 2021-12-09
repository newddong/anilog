import React from 'react';
import {ScrollView, View} from 'react-native';
import {Write94} from '../atom/icon';
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
					<ControllableAccountList title={'팔로워'} />
				</View>
				<View style={[linkedAccountList.accountList_step2]}>
					<ControllableAccountList title={'추천'} showCrossMark={true} />
				</View>
			</ScrollView>
			<View style={[linkedAccountList.floatingBtn]}>
				<Write94 onPress={onWrite} />
			</View>
		</View>
	);
};
LinkedAccountList.defaultProps = {};
