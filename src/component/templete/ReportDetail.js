import React from 'react';
import {FlatList, LogBox, ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, missingAnimalDetail, reportDetail, temp_style} from './style_templete';

export default ReportDetail = props => {
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main, reportDetail.container]}>
			{/* Img_square_750 */}
			<View style={[temp_style.img_square_750, reportDetail.img_square_750]}>
				<Text>Img_square_750</Text>
			</View>
			{/* (O)FeedContent */}
			<View style={[temp_style.feedContent, reportDetail.feedContent]}>
				<Text>(O)FeedContent</Text>
			</View>
			{/* (O)CommentList */}
			<View style={[temp_style.commentList, reportDetail.commentList]}>
				<Text>(O)CommentList</Text>
				<FlatList nestedScrollEnabled={true} />
			</View>
		</ScrollView>
	);
};
