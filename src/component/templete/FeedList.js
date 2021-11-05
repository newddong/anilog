import React from 'react';
import {Text, View} from 'react-native';
import {feedList, login_style, missingAnimalDetail, temp_style} from './style_templete';

export default FeedList = props => {
	return (
		<View style={[login_style.wrp_main, missingAnimalDetail.container]}>
			{/* FeedList */}
			<View style={[feedList.feedList]}>
				<Text>FeedList</Text>
			</View>

			{/* FloatButton */}
			<View style={[temp_style.floatingBtn, feedList.floatingBtn]}>
				<Text>Float Btn</Text>
			</View>
		</View>
	);
};
