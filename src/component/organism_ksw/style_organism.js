import {StyleSheet} from 'react-native';
import {APRI10, GRAY10, GRAY20, GRAY30, GRAY40, WHITE} from 'Root/config/color';
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
	},
	userDescriptionLabel: {
		width: 590 * DP,
		height: 94 * DP,
		marginBottom: 40 * DP,
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
		marginTop: 30 * DP,
		alignSelf: 'center',
		// backgroundColor: BGCOLOR,
	},
	userAccount: {
		width: 654 * DP,
		height: 94 * DP,
		marginBottom: 40 * DP,
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
		// backgroundColor: 'yellow',
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
		flexDirection: 'row',

		// backgroundColor: BGCOLOR,
	},
	socialInfo: {
		width: 164 * DP,
		height: 106 * DP,
		marginRight: 4 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'pink',
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
		marginTop: 10 * DP,
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
		justifyContent: 'center',
		alignItems: 'center',
		width: 100 * DP,
		height: 50 * DP,
		right: 30 * DP,
		backgroundColor: 'red',
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
	},
	btn_w226: {
		marginLeft: 202 * DP,
	},
	interestingTagList: {
		width: 606 * DP,
		height: 102 * DP,
		marginLeft: 44 * DP,
		marginTop: 20 * DP,
	},
	tagContainer: {
		height: 68 * DP,
		paddingHorizontal: 20 * DP,
		borderRadius: 30 * DP,
		borderWidth: 2 * DP,
		borderColor: GRAY30,
		marginRight: 15 * DP,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	cross52: {
		marginLeft: 20 * DP,
	},
});

export const addressInput = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 238 * DP,
	},
	upperContainer: {
		width: 654 * DP,
		height: 132 * DP,
		flexDirection: 'row',
	},
	titleContainer: {
		width: 118 * DP,
		height: 46 * DP,
	},
	lowerContainer: {},
	input24A: {
		width: 388 * DP,
		height: 80 * DP,
		justifyContent: 'flex-start',
		alignSelf: 'flex-start',
	},
	btn_w226: {
		marginLeft: 40 * DP,
		marginTop: 60 * DP,
	},
	inputNoTitle: {
		marginTop: 24 * DP,
	},
});

export const vaccination = StyleSheet.create({
	container: {
		width: 654 * DP,
		backgroundColor: GRAY30,
	},
	insideContainer: {
		marginVertical: 40 * DP,
	},
	titleContainer: {
		width: 654 * DP,
		height: 46 * DP,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	title: {
		width: 216 * DP,
		height: 46 * DP,
		marginRight: 14 * DP,
	},
	titleMenu: {
		width: 186 * DP,
		height: 38 * DP,
		marginLeft: 26 * DP,
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgray',
	},
	itemContainer: {
		width: 654 * DP,
		height: 46 * DP,
		marginTop: 20 * DP,
		alignSelf: 'center',
		backgroundColor: 'yellow',
		flexDirection: 'row',
	},
	item_name: {
		width: 216 * DP,
		height: 46 * DP,
		marginRight: 14 * DP,
		backgroundColor: 'pink',
	},
	current_dueDate: {
		width: 186 * DP,
		height: 38 * DP,
		marginLeft: 26 * DP,
		borderRadius: 10 * DP,
		backgroundColor: APRI10,
		alignSelf: 'center',
		alignItems: 'center',
	},
	next_dueDate: {
		width: 186 * DP,
		height: 38 * DP,
		marginLeft: 26 * DP,
		borderRadius: 10 * DP,
		backgroundColor: GRAY20,
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgray',
	},
});

export const shelterLabel = StyleSheet.create({
	container: {
		width: 178 * DP,
		height: 260 * DP,
	},
	profileImageMedium: {
		alignSelf: 'center',
	},
	shelterInfo: {
		width: 178 * DP,
		height: 120 * DP,
		alignItems: 'center',
	},
});

export const shelterList = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 260 * DP,
	},
	shelterLabel: {
		marginRight: 22 * DP,
	},
});

export const childComment = StyleSheet.create({
	container: {
		width: 574 * DP,
		alignSelf: 'center',
		// backgroundColor: 'yellow',
	},
	profileContainer: {
		width: 574 * DP,
		height: 50 * DP,
		flexDirection: 'row',
	},
	commentMark: {
		width: 14 * DP,
		height: 14 * DP,
		borderLeftWidth: 2 * DP,
		borderBottomWidth: 2 * DP,
		borderLeftColor: GRAY10,
		borderBottomColor: GRAY10,
	},
	userTimeLabel: {
		width: 442 * DP,
		height: 46 * DP,
		marginLeft: 10 * DP,
		// backgroundColor: 'lightblue',
	},
	meatBall50_vertical: {
		width: 50 * DP,
		height: 50 * DP,
		marginLeft: 58 * DP,
	},
	img_square_round_484: {
		alignSelf: 'flex-end',
		marginBottom: 12 * DP,
	},
	commentContainer: {
		width: 484 * DP,
		height: 40 * DP,
		marginLeft: 90 * DP,
		// backgroundColor: 'lightblue',
	},
	commentText: {},
	likeReplyButton: {
		width: 222 * DP,
		height: 34 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	heart30: {
		width: 30 * DP,
		height: 30 * DP,
		backgroundColor: 'lightgray',
	},
	likeCount: {
		width: 50 * DP,
		height: 30 * DP,
		marginLeft: 12 * DP,
	},
	likeCountText: {
		color: GRAY10,
		textAlignVertical: 'center',
		textAlign: 'center',
		lineHeight: 30 * DP,
	},
	writeComment: {
		width: 130 * DP,
		height: 34 * DP,
	},
	writeCommentText: {
		color: GRAY20,
		includeFontPadding: false,
	},
});

export const companionForm = StyleSheet.create({
	container: {
		width: 702 * DP,
		height: 324 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	insideContainer: {
		width: 634 * DP,
		height: 234 * DP,
	},
	upperMenu: {
		width: 634 * DP,
		height: 122 * DP,
		flexDirection: 'row',
	},
	lowerMenu: {
		width: 634 * DP,
		height: 82 * DP,
		marginTop: 30 * DP,
		alignItems: 'center',
	},
	inputItem: {
		width: 204 * DP,
		marginRight: 11 * DP,
	},
	fieldName: {
		width: 204 * DP,
		height: 40 * DP,
	},
	dropDownSelect: {
		width: 204 * DP,
		height: 82 * DP,
	},
});

export const companionFormList = StyleSheet.create({
	container: {
		width: 702 * DP,
		height: 853 * DP,
		backgroundColor: 'pink',
	},
	companionFormContainer: {
		marginBottom: 26 * DP,
		backgroundColor: '#D7F1C1',
	},
});

export const assignCheckListItem = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 72 * DP,
		flexDirection: 'row',
	},
	check50: {
		width: 50 * DP,
		height: 50 * DP,
	},
	textContainer: {
		width: 592 * DP,
		height: 72 * DP,
		marginLeft: 12 * DP,
	},
});

export const assignCheckList = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 72 * DP,
		flexDirection: 'row',
	},
	assignCheckListItem: {
		marginBottom: 40 * DP,
	},
});

export const protectedPetList = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 252 * DP,
		backgroundColor: GRAY40,
		justifyContent: 'center',
	},
	insideContainer: {
		width: 750 * DP,
	},
	itemContainer: {
		width: 184 * DP,
		height: 204 * DP,
		marginRight: 30 * DP,
		alignItems: 'center',
	},
	petProfileImageMedium: {
		width: 120 * DP,
		height: 120 * DP,
	},
	petProfileInfo: {
		width: 184 * DP,
		height: 84 * DP,
		alignItems: 'center',
	},
});

export const petList = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 220 * DP,
		backgroundColor: GRAY40,
		justifyContent: 'center',
	},
	insideContainer: {
		width: 750 * DP,
		marginLeft: 30 * DP,
		marginRight: 22 * DP,
	},
	itemContainer: {
		width: 152 * DP,
		height: 196 * DP,
		marginRight: 30 * DP,
		alignItems: 'center',
	},
	petProfileImageMedium: {
		width: 120 * DP,
		height: 120 * DP,
	},
	petProfileInfo: {
		width: 152 * DP,
		height: 76 * DP,
		backgroundColor: 'lightblue',
		alignItems: 'center',
	},
});

export const ownerList = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 220 * DP,
		backgroundColor: GRAY40,
		justifyContent: 'center',
	},
	insideContainer: {
		width: 750 * DP,
		marginLeft: 30 * DP,
		marginRight: 22 * DP,

		backgroundColor: 'yellow',
	},
	itemContainer: {
		width: 152 * DP,
		height: 172 * DP,
		marginRight: 30 * DP,
		alignItems: 'center',
	},
	petProfileImageMedium: {
		width: 120 * DP,
		height: 120 * DP,
	},
	petProfileInfo: {
		width: 152 * DP,
		height: 40 * DP,
		backgroundColor: 'lightblue',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const aidRequest = StyleSheet.create({
	container: {
		width: 672 * DP,
		height: 192 * DP,
		justifyContent: 'center',
	},
	numberContainer: {
		width: 56 * DP,
		height: 56 * DP,
		position: 'absolute',
		right: 0,
		top: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: 'red',
	},
	insideContainer: {
		width: 654 * DP,
		height: 174 * DP,
		marginTop: 18 * DP,
		borderRadius: 30 * DP,
		borderColor: APRI10,
		borderWidth: 2 * DP,
		flexDirection: 'row',
	},
	leftContainer: {},
	img_irregular_174: {
		width: 174 * DP,
		height: 174 * DP,
	},
	gender: {
		position: 'absolute',
		right: 10 * DP,
		top: 10 * DP,
		zIndex: 1,
	},
	rightContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	right_insideContainer: {
		width: 440 * DP,
		height: 138 * DP,
		marginHorizontal: 20 * DP,
		backgroundColor: 'pink',
	},
	right_upperMenu: {
		width: 440 * DP,
		height: 44 * DP,
		backgroundColor: GRAY30,
	},
	right_middleMenu: {
		width: 440 * DP,
		height: 36 * DP,
		marginTop: 12 * DP,
		flexDirection: 'row',
		backgroundColor: 'wheat',
	},
	right_middleMenu_title: {
		height: 36 * DP,
		backgroundColor: 'lavender',
	},
	right_middleMenu_content: {
		height: 36 * DP,
		backgroundColor: 'palegreen',
		paddingRight: 15 * DP,
		marginLeft: 10 * DP,
		marginRight: 10 * DP,
	},
	right_lowerMenu: {
		width: 440 * DP,
		height: 36 * DP,
		marginTop: 12 * DP,
		flexDirection: 'row',
		backgroundColor: 'lightgray',
	},
});

export const aidRequestList = StyleSheet.create({
	container: {
		width: 672 * DP,
		height: 816 * DP,
		backgroundColor: 'lightcyan',
	},
	itemContainer: {
		flexDirection: 'row',
	},
	addProtectedPetContainer: {
		width: 654 * DP,
		height: 174 * DP,
		borderRadius: 30 * DP,
		borderColor: APRI10,
		borderWidth: 2 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	addProtectedPet_insideContainer: {
		height: 64 * DP,
		flexDirection: 'row',
	},
	addProtectedPetText: {
		marginLeft: 10 * DP,
		textAlign: 'center',
		textAlignVertical: 'center',
		color: APRI10,
	},
});

export const volunteerItem = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 94 * DP,
		flexDirection: 'row',
	},
	labelContainer: {
		width: 542 * DP,
	},
	expected_activityDate: {
		width: 112 * DP,
		height: 70 * DP,
		alignItems: 'flex-end',
		alignSelf: 'center',
	},
});

export const volunteerItemList = StyleSheet.create({
	container: {
		width: 654 * DP,
	},
	itemContainer: {
		width: 654 * DP,
		height: 94 * DP,
		marginBottom: 40 * DP,
	},
});

export const animalInfo = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 180 * DP,
		flexDirection: 'row',
	},
	infoContainer: {
		width: 434 * DP,
		height: 132 * DP,
		marginLeft: 40 * DP,
		alignSelf: 'center',
	},
	infoContainer_petNickname: {
		height: 46 * DP,
	},
	infoContainer_petDetail: {
		height: 38 * DP,
	},
});

export const animalInfoList = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 723 * DP,
		backgroundColor: 'pink',
	},
	title: {
		width: 177 * DP,
		height: 35 * DP,
		marginBottom: 45 * DP,
		backgroundColor: 'lightcyan',
	},
	itemContainer: {
		width: 654 * DP,
		height: 180 * DP,
		marginBottom: 30 * DP,
		backgroundColor: 'white',
	},
});

export const selectedMediaList = StyleSheet.create({
	container: {
		width: 750 * DP,
		height: 190 * DP,
	},
	itemContainer: {
		width: 190 * DP,
		height: 190 * DP,
		marginRight: 30 * DP,
		backgroundColor: 'white',
	},
});

export const animalNeedHelp = StyleSheet.create({
	container: {
		width: 654 * DP,
		// height: 214 * DP,
		flexDirection: 'column',
	},
	checkBoxContainer: {
		width: 80 * DP,
		justifyContent: 'center',
	},
	protectedThumbnail_container: {
		width: 214 * DP,
		height: 214 * DP,
	},
	gender: {
		width: 48 * DP,
		height: 48 * DP,
		position: 'absolute',
		right: 10 * DP,
		top: 10 * DP,
	},
	detailContainer: {
		width: 410 * DP,
		height: 214 * DP,
		marginLeft: 30 * DP,
	},
	detail_upperMenu: {
		width: 410 * DP,
		height: 48 * DP,
		flexDirection: 'row',
	},
	detail_upper_petStateContainer: {
		height: 38 * DP,
		flexDirection: 'row',
	},
	detail_upper_petState: {
		height: 38 * DP,
		borderRadius: 15 * DP,
		borderWidth: 2 * DP,
		borderColor: GRAY10,
		paddingHorizontal: 10 * DP,
		marginRight: 12 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	petStatusContainer_text: {
		color: GRAY10,
		lineHeight: 30 * DP,
	},
	detail_upper_tag: {
		position: 'absolute',
		right: 0,
	},
	detail_lowerMenu: {
		marginTop: 6 * DP,
		width: 410 * DP,
		height: 160 * DP,
	},
	lowerMenu_kindAndBreed: {
		height: 46 * DP,
		flexDirection: 'row',
	},
	breedText: {
		alignSelf: 'center',
		marginLeft: 20 * DP,
	},
	lowerMenu_helpDetail: {
		height: 38 * DP,
	},
	container_with_Line: {
		width: 705 * DP,
		height: 500 * DP,
		borderRadius: 30 * DP,
		borderWidth: 5 * DP,
		borderColor: APRI10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginLeft: 100 * DP,
	},
	sideBtn_view: {
		width: 614 * DP,
		height: 70 * DP,
		marginTop: 30 * DP,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	container_basicInfo: {
		flexDirection: 'row',
	},
});

export const animalNeedHelpList = StyleSheet.create({
	container: {
		width: 654 * DP,
	},
	itemContainer: {
		marginBottom: 40 * DP,
	},
});

export const animalProtectDetail = StyleSheet.create({
	container: {
		alignSelf: 'center',
	},
	animalNeedHelp_container: {
		marginBottom: 10 * DP,
	},
	details_container: {
		width: 654 * DP,
		paddingBottom: 100 * DP,
	},
	detail: {
		width: 654 * DP,
		marginTop: 40 * DP,
	},
	detail_icon48: {
		width: 48 * DP,
		height: 48 * DP,
	},
	detail_title: {
		width: 590 * DP,
		height: 40 * DP,
		marginLeft: 16 * DP,
		alignSelf: 'center',
	},
	detail_content: {
		width: 590 * DP,
		marginTop: 6 * DP,
		marginLeft: 64 * DP,
		minHeight: 50 * DP,
	},
});

export const familyAccountList = StyleSheet.create({
	itemContainer: {
		width: 654 * DP,
		height: 94 * DP,
		marginBottom: 30 * DP,
		flexDirection: 'row',
	},
	profileImageSmall: {
		width: 94 * DP,
		height: 94 * DP,
	},
	userIDContainer: {
		width: 456 * DP,
		height: 42 * DP,
		marginLeft: 30 * DP,
		alignSelf: 'center',
	},
	cross52: {
		marginLeft: 24 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const userAccount = StyleSheet.create({
	container: {
		width: 654 * DP,
		height: 94 * DP,
		flexDirection: 'row',
	},
	checkBox: {
		width: 80 * DP,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	userProfileContainer: {
		width: 442 * DP,
		height: 94 * DP,
	},
	followingBtnContainer: {
		justifyContent: 'center',
		marginLeft: 20 * DP,
	},
	followingBtnContainer_noneCheckBox: {
		justifyContent: 'center',
		marginLeft: 100 * DP,
	},
});
