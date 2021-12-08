import React from 'react';
import {Text, View, TouchableWithoutFeedback, FlatList, ScrollView} from 'react-native';
import {WHITE} from 'Root/config/color';
import {dummy_FeedObject} from 'Root/config/dummyDate_json';
import {Write94} from '../atom/icon';
import Feed from '../organism/Feed';
import {feedList, login_style, missingAnimalDetail, temp_style} from './style_templete';

export default FeedList = ({route, navigation}) => {
	console.log('feeD_id', route.params);

	const moveToFeedWrite = () => {
		navigation.push('FeedWrite');
	};

	const renderItem = item => {
		return <Feed data={item} />;
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1, backgroundColor: WHITE}]}>
			<FlatList data={dummy_FeedObject.feed_medias} renderItem={({item}) => renderItem(item)} nestedScrollEnabled />
			<View style={[temp_style.floatingBtn, feedList.floatingBtn]}>
				<Write94 onPress={moveToFeedWrite} />
			</View>
		</View>
	);
};
