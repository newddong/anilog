import React from 'react';
import {ScrollView, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {Write94} from '../atom/icon';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {linkedAccountList} from './style_templete';

export default LinkedAccountList = props => {
	const onWrite = () => {
		console.log('Onwrite');
	};

	const [myFollower, setMyFollower] = React.useState(); // 팔로워리스트 현재 빈 값
	const [recommendedList, setRecommendedList] = React.useState(); // 추천리스트 현재 빈 값

	return (
		<View style={[linkedAccountList.container]}>
			<ScrollView style={[{flex: 0}]}>
				<View style={[linkedAccountList.insideContainer]}>
					<View style={[linkedAccountList.accountList_step1]}>
						<ControllableAccountList items={dummy_userObject} title={'팔로워'} />
					</View>

					<View style={[linkedAccountList.accountList_step1]}>
						<ControllableAccountList items={dummy_userObject} title={'추천'} showCrossMark={true} />
					</View>
				</View>
			</ScrollView>
			<View style={[linkedAccountList.floatingBtn]}>
				<Write94 onPress={onWrite} />
			</View>
		</View>
	);
};
LinkedAccountList.defaultProps = {};
