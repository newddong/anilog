import {StyleSheet} from 'react-native';
import {APRI10, GRAY20, GRAY30, GRAY40, WHITE} from 'Root/config/color';
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
	container_initMode: {
		width: 654 * DP,
		height: 406 * DP,
		backgroundColor: 'yellow',
	},
	container_resetMode: {
		width: 654 * DP,
		height: 634 * DP,
		backgroundColor: 'yellow',
	},
	passwordInput_resetMode: {
		marginBottom: 80 * DP,
	},
	passwordInput_initMode: {
		marginBottom: 90 * DP,
	},
});

export const socialInfoA = StyleSheet.create({
	container: {
		width: 366 * DP,
		height: 84 * DP,
		backgroundColor: BGCOLOR,
		flexDirection: 'row',
	},
	socialInfo: {
		width: 82 * DP,
		height: 84 * DP,
		marginRight: 60 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	number: {
		height: 38 * DP,
	},
	title: {
		height: 46 * DP,
	},
});

export const socialInfoB = StyleSheet.create({
	container: {
		width: 500 * DP,
		height: 106 * DP,
		backgroundColor: BGCOLOR,
		flexDirection: 'row',
	},
	socialInfo: {
		width: 164 * DP,
		height: 106 * DP,
		marginRight: 4 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	number: {
		width: 80 * DP,
		height: 50 * DP,
		textAlign: 'center',
	},
	title: {
		height: 46 * DP,
	},
});

export const profileMenu = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 630 * DP,
	},
	upperMenu: {},
	lowerMenu: {
		marginTop: 76 * DP,
	},
	titleContainer: {
		height: 82 * DP,
		flexDirection: 'row',
		borderBottomWidth: 2 * DP,
		borderBottomColor: APRI10,
		alignItems: 'center',
		paddingLeft: 48 * DP,
	},
	title: {
		width: 200 * DP,
		height: 42 * DP,
		marginLeft: 6 * DP,
		backgroundColor: 'powderblue',
	},
	bottomeContainer: {},
	itemContainer: {
		paddingHorizontal: 32 * DP,
	},
	item_step1: {
		flexDirection: 'row',
		height: 76 * DP,
		// backgroundColor: 'pink',
	},
	item_step2: {
		flexDirection: 'row',
		height: 76 * DP,
		backgroundColor: 'yellow',
	},
	item: {
		width: 310 * DP,
		height: 48 * DP,
		marginLeft: 16 * DP,
		flexDirection: 'row',
		alignSelf: 'center',
	},
	item_text: {
		width: 210 * DP,
		height: 36 * DP,
		marginRight: 52 * DP,
		alignSelf: 'center',
	},
	item_bracket: {
		alignSelf: 'center',
	},
	horizon_separator: {
		width: 362 * DP,
		height: 2 * DP,
		marginLeft: 5 * DP,
		marginRight: 7 * DP,
		backgroundColor: GRAY40,
	},
	vertical_separator: {
		width: 2 * DP,
		height: 64 * DP,
		marginTop: 6 * DP,
		marginHorizontal: 16 * DP,
		backgroundColor: GRAY40,
	},
});

export const myPetList = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 270 * DP,
		paddingLeft: 28 * DP,
		flexDirection: 'row',
		backgroundColor: 'yellow',
	},
	petImageLabel: {
		width: 180 * DP,
		height: 270 * DP,
		marginLeft: 20 * DP,
	},
	addPet: {
		marginLeft: 20 * DP,
	},
});

export const interestTagList = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 236 * DP,
		backgroundColor: BGCOLOR,
	},
	titleContainer: {
		width: 654 * DP,
		height: 70 * DP,
		marginTop: 44 * DP,
		flexDirection: 'row',
	},
	title: {
		width: 226 * DP,
		height: 48 * DP,
		alignSelf: 'center',
		backgroundColor: 'powderblue',
	},
	btn_w226: {
		marginLeft: 202 * DP,
	},
	interestingTagList: {
		width: 606 * DP,
		height: 102 * DP,
		backgroundColor: 'yellow',
		marginLeft: 48 * DP,
		marginTop: 20 * DP,
	},
});

export const addressInput = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 238 * DP,
		backgroundColor: 'white',
	},
	upperContainer: {
		width: 654 * DP,
		height: 132 * DP,
		flexDirection: 'row',
	},
	lowerContainer: {},
	input24A: {
		width: 388 * DP,
		height: 90 * DP,
		justifyContent: 'flex-start',
		alignSelf: 'flex-start',
		backgroundColor: 'yellow',
	},
	btn_w226: {
		marginLeft: 40 * DP,
		marginTop: 60 * DP,
		backgroundColor: 'white',
	},
	inputNoTitle: {
		marginTop: 24 * DP,
	},
});
