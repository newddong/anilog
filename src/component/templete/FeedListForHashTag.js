import React from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {APRI10, GRAY20, GRAY30, WHITE} from 'Root/config/color';

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
	const [showRecent, setShowRecent] = React.useState(true);

	//최근 게시글 버튼 클릭
	const showRecentFeed = () => {
		setShowRecent(true);
	};
	//추천 게시글 버튼 클릭
	const showRecommendedFeed = () => {
		setShowRecent(false);
	};
	return (
		<View style={[login_style.wrp_main, feedListForHashTag.container]}>
			{/* HashTagInfo */}
			<View style={[feedListForHashTag.hashTagInfo]}>
				<View style={[feedListForHashTag.hashLabel]}>
					<HashLabel keyword={hashInfo.keyword} keywordBold={hashInfo.keywordBold} count={hashInfo.count} />
				</View>
				{/* 최근 게시글 / 추천 게시글 */}
				<View style={[feedListForHashTag.postCategory]}>
					<TouchableOpacity onPress={showRecentFeed}>
						<Text style={[txt.noto24, {color: showRecent ? APRI10 : 'black'}]}>최근게시글 </Text>
					</TouchableOpacity>
					<Text style={{}}> | </Text>
					<TouchableOpacity onPress={showRecommendedFeed}>
						<Text style={[txt.noto24, {color: !showRecent ? APRI10 : 'black'}]}> 추천게시글</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<View style={[temp_style.feedThumbnailList]}>
				<FeedThumbnailList onClickThumnail={moveToHashFeedList} />
			</View>
		</View>
	);
};

// HashLabel.defaultProps = {
// 	keyword: '#KEYWORD',
// 	keywordBold: true,
// 	count: 'Count한 게시물',
// };
