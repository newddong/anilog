import {StyleSheet} from 'react-native';
import {GRAY30, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';

export const BGCOLOR = '#B5DED8';
export const temp_text = StyleSheet.create({
	small: {
		fontSize: 10,
	},
});

export const organism_style = StyleSheet.create({
	feedContent: {
		width: 750 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EDE8A6',
	},
	userLocationLabel_view_feedContent: {
		width: 654 * DP,
		marginTop: 78 * DP,
		backgroundColor: '#0F0000',
	},
	userLocationLabel_feedContent: {
		width: 448 * DP,
		backgroundColor: '#0FA743',
	},
	feed: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	feedMedia: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C1DAF6',
	},
	likeCommentButtons: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C1DAF6',
	},
	likeCommentInfo: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C1DAF6',
	},
	recentComment: {
		width: 750 * DP,
		height: 1222 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C1DAF6',
	},
	petAccountList: {
		width: 654 * DP,
		backgroundColor: '#B5DED8',
	},
	petLabel: {
		marginBottom: 40 * DP,
		backgroundColor: 'yellow',
	},
	accountList: {
		width: 654 * DP,
		backgroundColor: '#B5DED8',
		marginBottom: 40 * DP,
	},
	userDescriptionLabel: {
		width: 654 * DP,
		height: 94 * DP,
		backgroundColor: 'yellow',
	},
	cross46: {
		width: 46 * DP,
		height: 46 * DP,
		marginLeft: 20 * DP,
		alignSelf: 'center',
		backgroundColor: 'yellow',
	},
	hashLabel: {
		width: 654 * DP,
		height: 94 * DP,
		backgroundColor: 'pink',
	},
});

export const controllableAccount = StyleSheet.create({
	container: {
		width: 654 * DP,
		backgroundColor: 'powderblue',
		flexDirection: 'row',
		marginBottom: 40 * DP,
		alignSelf: 'center',
	},
	userDescriptionLabel: {
		width: 460 * DP,
	},
	userDescriptionLabel_checked: {
		width: 446 * DP,
	},
	btn_w108_controllableAccount: {
		width: 108 * DP,
		height: 54 * DP,
		marginLeft: 20 * DP,
		backgroundColor: 'pink',
		alignSelf: 'center',
	},
	cross46: {
		marginLeft: 20 * DP,
	},
	check50: {
		width: 80 * DP,
		alignSelf: 'center',
	},
});

export const controllableAccountList = StyleSheet.create({
	container: {
		width: 654 * DP,
		backgroundColor: 'powderblue',
		alignSelf: 'center',
	},
	title: {
		width: 300 * DP,
		height: 42 * DP,
		marginBottom: 16 * DP,
		backgroundColor: GRAY30,
	},
});

export const controllableHashTag = StyleSheet.create({
	container: {
		width: 654 * DP,
		flexDirection: 'row',
		marginBottom: 40 * DP,
		alignSelf: 'center',
	},
	hashLabel: {
		width: 596 * DP,
		backgroundColor: 'pink',
	},
	hashLabel_uncheked: {
		width: 566 * DP,
		backgroundColor: 'pink',
	},
	check50: {
		width: 80 * DP,
		alignSelf: 'center',
	},
	cross46: {
		marginLeft: 20 * DP,
		alignSelf: 'center',
	},
});

export const controllableHashTagList = StyleSheet.create({
	container: {
		width: 654 * DP,
		backgroundColor: '#DEB5B5',
		alignSelf: 'center',
	},
	title: {
		width: 300 * DP,
		height: 42 * DP,
		marginBottom: 16 * DP,
		backgroundColor: GRAY30,
	},
});

export const accountHashList = StyleSheet.create({
	container: {
		width: 654 * DP,
		alignSelf: 'center',
		backgroundColor: BGCOLOR,
	},
	userAccount: {
		width: 654 * DP,
		height: 94 * DP,
		marginBottom: 40 * DP,
		backgroundColor: 'yellow',
	},
});

export const hashTagList = StyleSheet.create({
	container: {
		width: 654 * DP,
		alignSelf: 'center',
		backgroundColor: BGCOLOR,
	},
	hashLabel: {
		width: 654 * DP,
		height: 94 * DP,
		marginBottom: 40 * DP,
		backgroundColor: 'yellow',
	},
});

export const phoneNumVerification = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 402 * DP,
		backgroundColor: WHITE,
	},
	input30: {
		height: 82 * DP,
		marginBottom: 60 * DP,
		backgroundColor: 'yellow',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	inputWithSelect: {
		height: 82 * DP,
		marginBottom: 60 * DP,
		backgroundColor: 'yellow',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	inputTimeLimit: {
		width: 388 * DP,
		height: 118 * DP,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'yellow',
	},
	btn_w226: {
		marginLeft: 40 * DP,
		marginTop: 6 * DP,
		backgroundColor: WHITE,
	},
});

export const emailVerification = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 402 * DP,
		backgroundColor: WHITE,
	},
	input30: {
		height: 82 * DP,
		marginBottom: 60 * DP,
		backgroundColor: 'yellow',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	inputWithSelect: {
		height: 82 * DP,
		marginBottom: 60 * DP,
		backgroundColor: 'yellow',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	inputTimeLimit: {
		width: 388 * DP,
		height: 118 * DP,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'yellow',
	},
	btn_w226: {
		marginLeft: 40 * DP,
		marginTop: 6 * DP,
		backgroundColor: WHITE,
	},
});

export const passwordChecker = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 402 * DP,
		backgroundColor: WHITE,
	},
});
