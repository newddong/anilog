import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import Feed from '../organism/Feed';
import {feedList, login_style, missingAnimalDetail, temp_style} from './style_templete';

export default FeedList = props => {
	const moveToFeedWrite = () => {
		props.navigation.push('FeedWrite');
	};

	return (
		<View style={[login_style.wrp_main, missingAnimalDetail.container]}>
			{/* FeedList */}
			<View style={[feedList.feedList]}>
				<Feed />
			</View>

			{/* FloatButton */}
			<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, feedList.floatingBtn]}>
					<Text>Float Btn</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
