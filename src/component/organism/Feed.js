import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {organism_style, feed_style} from './style_organism';
import FeedContent from './FeedContent';
import {Comment48_Border, Like48_Border} from '../atom/icon';
import FeedMedia_temp from '../molecules/FeedMedia_temp';
import {useNavigation} from '@react-navigation/core';
import {txt} from 'Root/config/textstyle';
import {GRAY10} from 'Root/config/color';

export default Feed = props => {
	console.log(props.data);
	const navigation = useNavigation();
	//FeedMedia 관련 정보
	const _dummyData = {
		feed_id: null,
		isVideo: true,
		medias: [1, 2, 3, 'video'],
		emergency: true,
		alert_title: '실 종',
	};

	return (
		<View style={organism_style.feed}>
			{/* (O)FeedContent */}
			<FeedContent />
			{/* FeedMedia */}
			<View style={organism_style.feedMedia_feed}>
				<FeedMedia_temp
					data={_dummyData}
					img_uri={'https://static-cdn.jtvnw.net/jtv_user_pictures/586d3387-d926-4f20-b207-12a4a600d237-profile_image-300x300.jpg'}
				/>
			</View>
			{/* comment*/}
			<View style={organism_style.comment_feed_view}>
				{/* LikeCommentButtons */}
				<View style={[organism_style.likeCommentButtons_view, feed_style.likeCommentButtons_view]}>
					{/* LikeCommentInfo */}
					<View style={[organism_style.likeCommentInfo_view_feed]}>
						<View style={organism_style.like48}>
							{/* <Text>LIKE 48</Text> */}
							<Like48_Border />
						</View>
						<View style={organism_style.like_count_view_feed}>
							<View style={[organism_style.like_count_feed, feed_style.like_count]}>
								<Text style={[txt.roboto24]}>109</Text>
							</View>
						</View>
						<View style={organism_style.like48}>
							{/* <Text>COMMENT 48</Text> */}
							<Comment48_Border />
						</View>
						<View style={organism_style.comment_count_view_feed}>
							<View style={[organism_style.comment_count_feed, feed_style.comment_count]}>
								<Text style={[txt.roboto24]}>60</Text>
							</View>
						</View>
					</View>

					{/* 댓글 comment_count개 모두 보기 */}
					<View style={[organism_style.allCommentCount]}>
						<TouchableOpacity onPress={() => navigation.push('FeedCommentList')}>
							<Text style={[txt.noto24]}>댓글 6개 모두 보기</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* RecentComment */}
				<View style={[organism_style.recentComment_view, feed_style.recentComment_view]}>
					<View style={organism_style.writerID_feed_view}>
						<View style={organism_style.writerID_feed}>
							<Text style={[txt.roboto24, {color: GRAY10}]}>태리우스</Text>
						</View>
					</View>
					<View style={organism_style.commentText_view}>
						<Text style={[txt.noto24]}>아아악 너무 귀요워용! 넘 평화로운게 느껴지는 순간이예요 진짜로 너무너무 같이 있고 싶어요!</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

// FeedMedia_temp.defaultProps = {
// 	//
// 	data: {
// 		feed_id: null,
// 		isVideo: false,
// 		medias: [1, 2, 3, 4],
// 		alert_title: 'alert_msg',
// 	},
// 	onSelect: e => console.log(e),
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
// };
