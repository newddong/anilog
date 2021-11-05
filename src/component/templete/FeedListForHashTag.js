import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {feedListForHashTag, login_style, temp_style} from './style_templete';

export default FeedListForHashTag = props => {
	return (
		<View style={[login_style.wrp_main, feedListForHashTag.container]}>
			{/* HashTagInfo */}
			<View style={[feedListForHashTag.hashTagInfo]}>
				<View style={[feedListForHashTag.hashLabel]}>
					<Text>HashLabel</Text>
				</View>
				<View style={[feedListForHashTag.postCategory]}>
					<Text style={[txt.noto24]}>최근게시글 </Text>
					<Text style={{}}> | </Text>
					<Text style={[txt.noto24]}> 추천게시글</Text>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<View style={[temp_style.feedThumbnailList]}>
				<Text>(O)FeedThumbnailList</Text>
			</View>
		</View>
	);
};
