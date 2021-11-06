import React from 'react';
import {Text, View} from 'react-native';
import {organism_style, feed_style} from './style_organism';
import FeedContent from './FeedContent';

export default Feed = props => {
	return (
		<View style={organism_style.feed}>
			{/* (O)FeedContent */}
			<FeedContent></FeedContent>

			{/* FeedMedia */}
			<View style={organism_style.feedMedia_feed}>
				<Text>FeedMedia</Text>
			</View>

			{/* comment*/}
			<View style={organism_style.comment_feed_view}>
				{/* LikeCommentButtons */}
				<View style={organism_style.likeCommentButtons_view}>
					{/* <View style={organism_style.likeCommentButtons, feed_style.likeCommentButtons}>
						<View style={organism_style.like48}>
							<Text>LIKE 48</Text>
						</View>
						<View style={organism_style.like_count_view_feed}>
							<View style={(organism_style.like_count_feed, feed_style.like_count)}>
								<Text>like_count</Text>
							</View>
						</View>
						<View style={organism_style.like48}>
							<Text>COMMENT 48</Text>
						</View>
						<View style={organism_style.comment_count_view_feed}>
							<View style={(organism_style.comment_count_feed, feed_style.comment_count)}>
								<Text>comment_count</Text>
							</View>
						</View>
					</View> */}
				</View>

				{/* RecentComment */}
				<View style={(organism_style.recentComment_view, feed_style.recentComment)}>
					<View style={organism_style.writerID_feed_view}>
						<View style={organism_style.writerID_feed}>
							<Text>Writer_ID</Text>
						</View>
					</View>
					<View style={organism_style.commentText_view}>
						<Text>CommentText</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
