import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {feedListForHashTag, login_style, temp_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import HashLabel from '../molecules/HashLabel';
import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';

export default FeedListForHashTag = props => {
	const hashInfo = props.route.params;
	const navigation = useNavigation();
	const moveToHashFeedList = () => {
		navigation.push('HashFeedList');
	};

	return (
		<View style={[login_style.wrp_main, feedListForHashTag.container]}>
			{/* HashTagInfo */}
			<View style={[feedListForHashTag.hashTagInfo]}>
				<View style={[feedListForHashTag.hashLabel]}>
					<HashLabel keyword={hashInfo.keyword} keywordBold={hashInfo.keywordBold} count={hashInfo.count} />
				</View>
				<View style={[feedListForHashTag.postCategory]}>
					<Text style={[txt.noto24]}>최근게시글 </Text>
					<Text style={{}}> | </Text>
					<Text style={[txt.noto24]}> 추천게시글</Text>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<TouchableWithoutFeedback onPress={moveToHashFeedList}>
				<View style={[temp_style.feedThumbnailList]}>
					{/* <Text>(O)FeedThumbnailList</Text> */}
					<FeedThumbnailList onClickThumnail={moveToHashFeedList} />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

// HashLabel.defaultProps = {
// 	keyword: '#KEYWORD',
// 	keywordBold: true,
// 	count: 'Count한 게시물',
// };
