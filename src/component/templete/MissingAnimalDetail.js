import React from 'react';
import {FlatList, LogBox, ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, missingAnimalDetail, temp_style} from './style_templete';

export default MissingAnimalDetail = props => {
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main, missingAnimalDetail.container]}>
			{/* Poster */}
			<View style={[missingAnimalDetail.poster]}>
				<Text>Poster</Text>
			</View>
			{/* (O)FeedContent */}
			<View style={[temp_style.feedContent, missingAnimalDetail.feedContent]}>
				<Text>(O)FeedContent</Text>
			</View>
			{/* (O)CommentList */}
			<View style={[temp_style.commentList, missingAnimalDetail.commentList]}>
				<Text>(O)CommentList</Text>
				<FlatList nestedScrollEnabled />
			</View>
		</ScrollView>
	);
};
