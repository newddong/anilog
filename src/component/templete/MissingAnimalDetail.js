import React from 'react';
import {Text, View, FlatList, ScrollView, LogBox, Image} from 'react-native';
import {testArray} from 'Root/i18n/msg';
import {login_style, missingAnimalDetail, temp_style} from './style_templete';
import {styles} from '../atom/image/imageStyle';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {Post_dog} from 'Asset/image';
import FeedContent from '../organism/FeedContent';
import CommentList from 'Root/screens/feed/home/post/commentlist';

export default MissingAnimalDetail = props => {
	const getFlat = item => {
		return (
			<View>
				<Text>{item}</Text>
				<Text>{item}</Text>
			</View>
		);
	};

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, missingAnimalDetail.container]}>
				{/* Poster */}
				<View style={[missingAnimalDetail.poster]}>
					<SvgWrap svg={<Post_dog />} />
				</View>
				{/* (O)FeedContent */}
				<View style={[temp_style.feedContent, missingAnimalDetail.feedContent]}>
					<FeedContent></FeedContent>
				</View>
				{/* (O)CommentList */}
				<View style={[temp_style.commentList, missingAnimalDetail.commentList]}>
					<Text>(O)CommentList</Text>
					<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
				</View>
			</View>
		</ScrollView>
	);
};
