import {StyleSheet} from 'react-native';
import DP from 'Root/config/dp';

export const organism_style = StyleSheet.create({
	feedContent: {
		flexDirection: 'column',
		width: 750 * DP,
		height: 330 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userLocationLabel_view_feedContent: {
		flexDirection: 'row',
		width: 654 * DP,
	},
	userLocationLabel_feedContent: {
		flexDirection: 'row',
		width: 448 * DP,
	},
	feed: {
		flexDirection: 'column',
		width: 750 * DP,
		// alignItems: 'center',
		// justifyContent: 'center',
		// backgroundColor: 'yellow',
	},
	feedMedia: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	likeCommentInfo: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	recentComment: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	meatball: {
		width: 50 * DP,
		height: 50 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content_feedContent: {
		flexDirection: 'row',
		width: 654 * DP,
	},
	time_view_feedContent: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	time_feedContent: {
		flexDirection: 'row',
		width: 110 * DP,
		height: 36 * DP,
	},
	addMore_view_feedContent: {
		flexDirection: 'row',
		width: 108 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addMore_feedContent: {
		width: 70 * DP,
		height: 36 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	braket: {
		width: 48 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tipOff_feedContent: {
		width: 654 * DP,
		justifyContent: 'center',
	},
	button_view_feedContent: {
		flexDirection: 'row',
		width: 126 * DP,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	favoriteTag_view_feedContent: {
		flexDirection: 'column',
		width: 48 * DP,
		height: 84 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	favoriteTag_feedContent: {
		width: 48 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	like_count_feedContent: {
		width: 44 * DP,
		height: 35 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	share48_view_feedContent: {
		width: 48 * DP,
		height: 84 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	share48_feedContent: {
		width: 48 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	share_feedContent: {
		width: 50 * DP,
		height: 35 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	feedMedia_feed: {
		width: 750 * DP,
		height: 750 * DP,
		marginTop: 45 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	comment_feed_view: {
		width: 750 * DP,
		marginTop: 20 * DP,
		alignItems: 'center',
	},
	likeCommentButtons_view: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	likeCommentInfo_view_feed: {
		flexDirection: 'row',
		width: 256 * DP,
		height: 48 * DP,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	recentComment_view: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 76 * DP,
		justifyContent: 'space-between',
	},
	likeCommentInfo_view: {
		width: 256 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	like48: {
		width: 48 * DP,
		height: 48 * DP,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	like_count_view_feed: {
		width: 92 * DP,
		height: 48 * DP,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	like_count_feed: {
		width: 56 * DP,
		height: 30 * DP,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	comment48: {
		width: 48 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	comment_count_view_feed: {
		width: 68 * DP,
		height: 48 * DP,
		// alignItems: 'center',
		justifyContent: 'center',
	},
	comment_count_feed: {
		width: 56 * DP,
		height: 30 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#F8DDDD',
	},
	writerID_feed_view: {
		width: 116 * DP,
		height: 76 * DP,
		// backgroundColor: '#FF00FF',
	},
	writerID_feed: {
		width: 96 * DP,
		height: 36 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#AAE8B6',
	},
	commentText_view: {
		width: 538 * DP,
		height: 76 * DP,
		marginLeft: 20 * DP,
		// backgroundColor: '#AAE8B6',
	},
	allCommentCount: {
		width: 360 * DP,
		height: 44 * DP,
		alignItems: 'flex-end',
		// backgroundColor: '#F8DDDD',
	},
	profileInfo_main: {
		width: 750 * DP,
		height: 416 * DP,
	},
	profileImageLarge_view_profileInfo: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 172 * DP,
		backgroundColor: 'wheat',
	},
	profileImageLarge_profileInfo: {
		width: 160 * DP,
		height: 160 * DP,
		backgroundColor: 'white',
	},
	socialInfo_profileInfo: {
		width: 366 * DP,
		height: 84 * DP,
		backgroundColor: '#D7D7F5',
	},
	content_view_profileInfo: {
		flexDirection: 'row',
		width: 700 * DP,
		height: 80 * DP,
	},
	content_profileInfo: {
		width: 492 * DP,
		height: 80 * DP,
		backgroundColor: '#F5D7F5',
	},
	addMore_profileInfo: {
		width: 114 * DP,
		height: 48 * DP,
		backgroundColor: '#D7F4F5',
	},
	btn_w280_view_profileInfo: {
		flexDirection: 'row',
		width: 680 * DP,
		height: 60 * DP,
	},
	btn_w280_profileInfo: {
		width: 280 * DP,
		height: 60 * DP,
		backgroundColor: '#D7F4F5',
	},
	ActionButton_profileInfo: {
		width: 280 * DP,
		height: 60 * DP,
		backgroundColor: '#E3AAB8',
	},
	parentComment: {
		flexDirection: 'column',
		width: 654 * DP,
		alignItems: 'flex-end',
		// backgroundColor: '#ECFCDD',
	},
	userLocationTimeLabel: {
		width: 472 * DP,
		height: 68 * DP,
	},
	UserLocationTimeLabel_view_parentComment: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 68 * DP,
		justifyContent: 'space-between',
	},
	meatball_50_vertical: {
		width: 50 * DP,
		height: 50 * DP,
	},
	img_square_round_574: {
		width: 574 * DP,
		height: 574 * DP,
		// backgroundColor: '#ADAFE5',
	},
	childCommentList: {
		width: 574 * DP,
		marginBottom: 30 * DP,
		// backgroundColor: '#B4EAD3',
	},
});

export const feedContent_style = StyleSheet.create({
	status: {
		marginLeft: 14 * DP,
	},
	meatball: {
		marginLeft: 12 * DP,
	},
	content: {
		marginTop: 20 * DP,
	},
	tipOff: {
		marginTop: 16 * DP,
	},
	like_count: {
		marginTop: 1 * DP,
	},
	share: {
		marginTop: 1 * DP,
	},
});

export const feed_style = StyleSheet.create({
	like_count: {
		marginLeft: 12 * DP,
		marginTop: 9 * DP,
	},
	recentComment_view: {
		marginVertical: 24 * DP,
	},
	likeCommentButtons_view: {
		marginTop: 24 * DP,
	},
	comment_count: {
		marginLeft: 12 * DP,
	},
	likeCommentButton: {
		width: 654 * DP,
		height: 48 * DP,
		backgroundColor: 'wheat',
		flexDirection: 'row',
		alignSelf: 'center',
	},
	like_comment_info: {
		width: 256 * DP,
		height: 48 * DP,
		backgroundColor: 'red',
	},
	showMoreComment: {
		width: 360 * DP,
		height: 44 * DP,
		marginLeft: 38 * DP,
		backgroundColor: 'yellow',
	},
});

export const profileInfo_style = StyleSheet.create({
	profileImageLarge: {
		marginTop: 9 * DP,
		marginLeft: 48 * DP,
	},
	socialInfo: {
		marginTop: 64 * DP,
		marginLeft: 80 * DP,
	},
	content_view: {
		marginTop: 30 * DP,
	},
	content: {
		marginLeft: 48 * DP,
	},
	addMore: {
		marginLeft: 46 * DP,
		marginTop: 32 * DP,
	},
	btn_w280_view: {
		marginTop: 40 * DP,
	},
	btn_w280: {
		marginLeft: 70 * DP,
	},
});

export const parentComment_style = StyleSheet.create({
	img_square_round_574: {
		marginTop: 20 * DP,
	},
});
