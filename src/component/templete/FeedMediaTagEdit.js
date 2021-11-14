import React from 'react';
import {View, Text} from 'react-native';
import FeedMedia_temp from '../molecules/FeedMedia_temp';
import {login_style, temp_style, feedMediaTagEdit} from './style_templete';

export default FeedMediaTagEdit = props => {
	return (
		<View style={[login_style.wrp_main, feedMediaTagEdit.container]}>
			<View style={[temp_style.feedMedia]}>
				<FeedMedia_temp />
			</View>
		</View>
	);
};
