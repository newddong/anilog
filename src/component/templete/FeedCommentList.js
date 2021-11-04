import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {feedCommentList, login_style} from './style_templete';

export default FeedCommentList = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, feedCommentList.container]}>
				<View style={[feedCommentList.feedContent]}>
					<Text>(O)feedContent</Text>
				</View>
				<View style={[feedCommentList.commentList]}>
					<Text>(O)commentList</Text>

					<View style={[feedCommentList.editComment]}>
						<Text>(O)EditComment</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
