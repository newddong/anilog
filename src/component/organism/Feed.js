import React from 'react';
import {Text, View} from 'react-native';
import {organism_style, feed_style} from './style_organism';
import FeedContent from './FeedContent';
import {ScrollView} from 'react-native';

export default Feed = props => {
	return (
		<View style={organism_style.feed}>
			{/* (O)FeedContent */}
			<FeedContent></FeedContent>
			<ScrollView>
				{/* FeedMedia */}
				<View style={organism_style.feedMedia_feed}>
					<Text>FeedMedia</Text>
				</View>

				{/* comment*/}
				<View style={organism_style.comment_feed_view}>
					{/* LikeCommentButtons */}
					<View style={[organism_style.likeCommentButtons_view, feed_style.likeCommentButtons_view]}>
						{/* LikeCommentInfo */}
						<View style={[organism_style.likeCommentInfo_view_feed]}>
							<View style={organism_style.like48}>
								<Text>LIKE 48</Text>
							</View>
							<View style={organism_style.like_count_view_feed}>
								<View style={[organism_style.like_count_feed, feed_style.like_count]}>
									<Text>like_count</Text>
								</View>
							</View>
							<View style={organism_style.like48}>
								<Text>COMMENT 48</Text>
							</View>
							<View style={organism_style.comment_count_view_feed}>
								<View style={[organism_style.comment_count_feed, feed_style.comment_count]}>
									<Text>comment_count</Text>
								</View>
							</View>
						</View>

						{/* 댓글 comment_count개 모두 보기 */}
						<View style={[organism_style.allCommentCount]}>
							<Text>댓글 comment_count개 모두 보기</Text>
						</View>
					</View>

					{/* RecentComment */}
					<View style={[organism_style.recentComment_view, feed_style.recentComment_view]}>
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
			</ScrollView>
		</View>
	);
};
