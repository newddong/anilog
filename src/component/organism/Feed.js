import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {organism_style, feed_style} from './style_organism';
import FeedContent from './FeedContent';
import {Comment48_Border, Like48_Border} from '../atom/icon';
import FeedMedia from '../molecules/FeedMedia';
import {useNavigation} from '@react-navigation/core';
import {txt} from 'Root/config/textstyle';
import {GRAY10} from 'Root/config/color';
import Swiper from 'react-native-swiper';

export default Feed = React.memo(props => {
	console.log('Feed', props.data);
	const navigation = useNavigation();
	const {
		feed_content,
		feed_thumbnail,
		feed_medias,
		feed_location,
		feed_date,
		feed_update_date,
		feed_type,
		feed_is_protect_diary,
		feed_recent_comment,
		missing_animal_species,
		missing_animal_species_detail,
		missing_animal_sex,
		missing_animal_age,
		missing_animal_lost_location,
		missing_animal_contact,
		missing_animal_features,
		missing_animal_date,
		report_witness_date,
		report_witness_location,
		report_animal_species,
		report_animal_species_detail,
		report_animal_sex,
		report_animal_age,
		report_animal_contact,
		report_animal_features,
		feed_like_count,
		feed_favorite_count,
		feed_comment_count,
		feed_writer_id,
		feed_avatar_id,
	} = props.data;
	// console.log(props.data);
	const moveToCommentList = () => {
		navigation.push('FeedCommentList', {feedobject: props.data});
	};

	return (
		<View style={[organism_style.feed]}>
			<FeedContent data={props.data} />
			{/* 270DP */}
			<View style={[organism_style.feedMedia_feed]}>
				<FeedMedia data={props.data} />
			</View>
			<View style={organism_style.comment_feed_view}>
				<View style={[organism_style.likeCommentButtons_view, feed_style.likeCommentButtons_view]}>
					<View style={[organism_style.likeCommentInfo_view_feed]}>
						<View style={organism_style.like48}>
							<Like48_Border />
						</View>
						<View style={organism_style.like_count_view_feed}>
							<View style={[organism_style.like_count_feed, feed_style.like_count]}>
								<Text style={[txt.roboto24]}>{feed_like_count}</Text>
							</View>
						</View>
						<View style={organism_style.like48}>
							<Comment48_Border />
						</View>
						<View style={organism_style.comment_count_view_feed}>
							<View style={[organism_style.comment_count_feed, feed_style.comment_count]}>
								<Text style={[txt.roboto24]}>{feed_comment_count}</Text>
							</View>
						</View>
					</View>

					{/* 댓글 comment_count개 모두 보기 */}
					<View style={[organism_style.allCommentCount]}>
						<TouchableOpacity onPress={moveToCommentList}>
							<Text style={[txt.noto24]}>{feed_comment_count > 0 ? `댓글 ${feed_comment_count}개 모두 보기` : '댓글 쓰기'}</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* RecentComment */}
				<View style={[organism_style.recentComment_view, feed_style.recentComment_view]}>
					<View style={[organism_style.writerID_feed_view]}>
						<View style={[organism_style.writerID_feed, {flex: 1}, {alignItems: 'flex-start'}]}>
							<Text style={[txt.roboto24, {color: GRAY10}]}>{feed_recent_comment?.comment_user_nickname}</Text>
						</View>
						<View style={(organism_style.commentText_view, {flex: 3})}>
							<Text style={[txt.noto24]} numberOfLines={2} ellipsizeMode="tail">
								{feed_recent_comment?.comment_contents}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
});
