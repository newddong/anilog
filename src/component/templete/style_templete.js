import {StyleSheet} from 'react-native';
import {
	MAINCOLOR,
	LINK,
	GRAY,
	GRAY_TXT_INPUT,
	GRAY_PLACEHOLDER,
	WHITE,
	RED,
	GRAY_BRIGHT,
	RED10,
	GRAY20,
	BLUE20,
	APRI10,
	GRAY10,
} from 'Root/config/color';
import DP from 'Root/config/dp';

export const login_style = StyleSheet.create({
	wrp_main: {
		// flex: 1,
		alignItems: 'center',
		backgroundColor: WHITE,
	},
	contents: {
		// flex: 1,
		flexDirection: 'column',
		// marginHorizontal: 48 * DP,
		backgroundColor: WHITE,
	},
	txt_msg: {
		width: 654 * DP,
		height: 214 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	verification: {
		width: 654 * DP,
		height: 402 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#A07A7A',
	},
	form: {
		width: 654 * DP,
		marginBottom: 70 * DP,
	},
	pass_form: {
		width: 654 * DP,
	},
	shelter_form: {
		width: 654 * DP,
	},
	cntr_txt_input: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	tab: {
		marginTop: 58 * DP,
		height: 88 * DP,
		flexDirection: 'row',
	},
	input_num_verify: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	msg_pop: {
		width: 550 * DP,
		height: 126 * DP,
		backgroundColor: WHITE,
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30 * DP,
		borderBottomRightRadius: 0,
		position: 'absolute',
		top: 390 * DP,
		left: 52 * DP,
	},
	confirm_status: {
		height: 114 * DP,
		borderTopWidth: 2 * DP,
	},
	sctn_shelter_first: {
		alignItems: 'center',
		marginBottom: 132 * DP,
		justifyContent: 'flex-end',
	},
	assign_profile: {},
	petTypeSelection: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 40 * DP,
		marginTop: 70 * DP,
		justifyContent: 'space-between',
	},
	petSexSelection: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	basic_info: {
		flexDirection: 'row',
		width: 562 * DP,
		height: 40 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#A07A7A',
	},
	social_info: {
		width: 410 * DP,
		height: 130 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DEB5B5',
	},
});

export const btn_style = StyleSheet.create({
	btn_w194: {
		width: 194 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	btn_w654: {
		width: 654 * DP,
		height: 104 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	btn_w522: {
		width: 522 * DP,
		height: 92 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	queryBtn: {
		alignItems: 'flex-end',
		width: 654 * DP,
		height: 50 * DP,
		backgroundColor: '#707070',
	},
	btn_w242: {
		width: 242 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FBE0AF',
	},
	btn_w280: {
		width: 280 * DP,
	},
	btn_w114: {
		width: 114 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FBE0AF',
	},
	btn_w226: {
		width: 226 * DP,
		height: 70 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FBE0AF',
	},
	btn_w176: {
		width: 176 * DP,
		height: 70 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FBE0AF',
	},
});

export const temp_style = StyleSheet.create({
	passwordChecker: {
		width: 654 * DP,
		height: 406 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	without_login: {
		width: 750 * DP,
		height: 316 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7E94D0',
	},
	loginForm: {
		width: 522 * DP,
		height: 346 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#707070',
	},
	stageBar: {
		width: 654 * DP,
		height: 32 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C3F2B5',
	},
	agreementCheckList: {
		width: 654 * DP,
		height: 542 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	tabSelectBorder_Type1: {
		width: 654 * DP,
		height: 88 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	textMassage: {
		width: 654 * DP,
		height: 214 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E09595',
	},
	phoneNumVerification: {
		width: 654 * DP,
		height: 402 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	textMsg: {
		width: 654 * DP,
		height: 352 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	input30: {
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	textMsg_AssignUserHabitation: {
		width: 654 * DP,
		height: 128 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DBD3EB',
	},
	habitationForm: {
		width: 654 * DP,
		height: 366 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	textMsg_AssignUserProfileImage: {
		width: 512 * DP,
		height: 38 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DBD3EB',
	},
	input30_assignUserProfileImage: {
		width: 654 * DP,
		height: 204 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	inputForm_assignShelterAddress: {
		width: 654 * DP,
		height: 420 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	inputForm_ApplyCompanionA: {
		width: 654 * DP,
		height: 450 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	input24A_assignShelterAddress: {
		width: 654 * DP,
		height: 112 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EF9FE5',
	},
	addressInput: {
		width: 654 * DP,
		height: 238 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputWithSelect_assignShelterInformation: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	inputWithEmail_assignShelterInformation: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	input24A_assignShelterInformation: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	input24A_applyCompanionA: {
		width: 654 * DP,
		height: 122 * DP,
	},
	datePicker_assignShelterInformation: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	datePicker_assignShelterInformation: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	passwordChecker: {
		width: 654 * DP,
		height: 406 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	profileImageSelect: {
		width: 294 * DP,
		height: 294 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	profileNicknameChange: {
		width: 654 * DP,
		height: 380 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	input24_changeUserProfileImage: {
		width: 654 * DP,
		height: 168 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A3DCB2',
	},
	input30_changePetProfileImage: {
		width: 654 * DP,
		height: 118 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEB5B5',
	},
	passwordChecker_changePassword: {
		width: 654 * DP,
		height: 634 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	inputForm_userInfoDetailSettting: {
		width: 654 * DP,
		height: 616 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	text_userInfoDetailSettting: {
		width: 118 * DP,
		height: 46 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E0A8A8',
	},
	tabSelectFilled_Type1: {
		width: 520 * DP,
		height: 82 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EDEDED',
	},
	tabSelectFilled_Type2: {
		width: 750 * DP,
		height: 78 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#88BA88',
	},
	inputWithSearchIcon: {
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DBAFC2',
	},
	accountList: {
		width: 654 * DP,
		height: 496 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D4CEF3',
	},
	userInfo: {
		width: 654 * DP,
		height: 194 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#BCC0DC',
	},
	profileImageLarge: {
		width: 194 * DP,
		height: 194 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D1E7F1',
	},
	user_id: {
		width: 420 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D1E7F1',
	},
	contents: {
		width: 420 * DP,
		height: 92 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FBC5C5',
	},
	socialInfoB: {
		width: 500 * DP,
		height: 106 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#B0C0EC',
	},
	btn_w280__view_userMenu: {
		width: 610 * DP,
		height: 60 * DP,
		alignItems: 'center',
		backgroundColor: '#78BB95',
	},
	btn_w280_userMenu: {
		width: 280 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#BF9547',
	},
	userMenu_step1: {
		width: 750 * DP,
		height: 508 * DP,
		alignItems: 'center',
		backgroundColor: '#6F9B85',
	},
	userMenu_step2: {
		width: 750 * DP,
		height: 256 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7F8EF3',
	},
	userMenu_step3: {
		width: 750 * DP,
		height: 316 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7F8EF3',
	},
	userMenu_step4: {
		width: 750 * DP,
		height: 154 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7F8EF3',
	},
	userInfoSetting_step1: {
		width: 750 * DP,
		height: 364 * DP,
		alignItems: 'center',
		backgroundColor: '#94ACA0',
	},
	userInfoSetting_step2: {
		width: 750 * DP,
		height: 522 * DP,
		alignItems: 'center',
		backgroundColor: '#B3EBB5',
	},
	accountInfo: {
		flexDirection: 'column',
		width: 750 * DP,
		height: 152 * DP,
		backgroundColor: '#B3EBB5',
	},
	title: {
		width: 200 * DP,
		height: 46 * DP,
		alignItems: 'center',
		backgroundColor: '#AFBCE1',
	},
	petImageLabel: {
		width: 190 * DP,
		height: 190 * DP,
		alignItems: 'center',
		backgroundColor: '#DFB4B4',
	},
	feedThumbnailList: {
		width: 750 * DP,
		height: 1032 * DP,
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topTabNavigation_filled: {
		width: 750 * DP,
		height: 72 * DP,
		backgroundColor: '#F2C8C8',
		alignItems: 'center',
	},
	topTabNavigation_border: {
		width: 750 * DP,
		height: 70 * DP,
		backgroundColor: '#F09F9F',
		alignItems: 'center',
	},
	onOffSwitch: {
		width: 84 * DP,
		height: 36 * DP,
		backgroundColor: 'pink',
	},
	controllableAccountList: {
		width: 654 * DP,
		height: 414 * DP,
		backgroundColor: '#DEB5B5',
		alignItems: 'center',
	},
	petAccountList: {
		width: 654 * DP,
		height: 1108 * DP,
		alignItems: 'center',
		backgroundColor: '#B5DED8',
	},
	controllableHashTagList: {
		width: 654 * DP,
		height: 414 * DP,
		backgroundColor: '#DEB5B5',
		alignSelf: 'center',
		alignItems: 'center',
	},
	hashTagList: {
		width: 654 * DP,
		height: 696 * DP,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#B5DED8',
	},
	filterBtn: {
		width: 306 * DP,
		height: 60 * DP,
		backgroundColor: '#D891C7',
		alignItems: 'center',
		marginRight: 42 * DP,
	},
	animalNeedHelpList: {
		width: 654 * DP,
		height: 958 * DP,
		alignSelf: 'center',
		backgroundColor: '#B5DED8',
	},
	animalNeedHelp: {
		width: 654 * DP,
		height: 214 * DP,
		backgroundColor: '#B5DED8',
		marginBottom: 30 * DP,
	},
	shelterList: {
		width: 654 * DP,
		height: 260 * DP,
		backgroundColor: '#ACC9CB',
	},
	companionFormList: {
		width: 702 * DP,
		height: 853 * DP,
		backgroundColor: 'pink',
	},
	assignCheckList: {
		width: 654 * DP,
		height: 853 * DP,
	},
	inputLongText: {
		width: 710 * DP,
		height: 424 * DP,
		backgroundColor: 'white',
	},
	animalProtectDetails: {
		width: 654 * DP,
		height: 1316 * DP,
	},
	img_square_750: {
		width: 750 * DP,
		height: 750 * DP,
		backgroundColor: '#B0C7D8',
	},
	mediaSelect: {
		width: 750 * DP,
		height: 674 * DP,
		backgroundColor: GRAY20,
	},
	inputWithSelect: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	feedContent: {
		width: 654 * DP,
		height: 260 * DP,
		backgroundColor: '#A07A7A',
	},
	commentList: {
		width: 654 * DP,
		backgroundColor: '#95E29F',
	},
	floatingBtn: {
		flexDirection: 'column',
		width: 94 * DP,
		height: 94 * DP,
		backgroundColor: '#CC6D6D',
	},
	editComment: {},
	aidRequest: {
		width: 654 * DP,
		height: 174 * DP,
		backgroundColor: '#E1E8FF',
		accountInfo_depth2: {
			flexDirection: 'row',
		},
	},
	accountInfo_depth2: {
		flexDirection: 'row',
	},
	user_email_userInfoSetting: {
		width: 442 * DP,
		height: 36 * DP,
		backgroundColor: '#D19F9F',
	},
	changePassword_userInfoSetting: {
		width: 188 * DP,
		height: 36 * DP,
		backgroundColor: '#D19F9F',
	},
	vertical_border: {
		width: 750 * DP,
		borderBottomWidth: 2 * DP,
		borderBottomColor: '#EDEDED',
	},
	detailInfo: {
		flexDirection: 'row',
		width: 750 * DP,
		height: 126 * DP,
		backgroundColor: '#B3EBB5',
	},
	bracket48: {
		flexDirection: 'row',
		width: 50 * DP,
		height: 50 * DP,
		backgroundColor: '#8F8065',
	},
	introduceInfo: {
		flexDirection: 'column',
		width: 750 * DP,
		height: 126 * DP,
		backgroundColor: '#B3EBB5',
	},
	introduceInfo_depth1: {
		flexDirection: 'row',
		width: 750 * DP,
		height: 116 * DP,
		backgroundColor: '#B3EBB5',
	},
	userText_userInfoSetting: {
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#AFD5FB',
	},
	myPetList: {
		width: 750 * DP,
		height: 378 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7F8EF3',
	},
	myPetList_title: {
		width: 750 * DP,
		height: 116 * DP,
		backgroundColor: '#7F8EF3',
	},
	myPetList_myPetList: {
		width: 750 * DP,
		height: 262 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#AFBCE1',
	},
	title_userInfoSetting: {
		width: 200 * DP,
		height: 46 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#AFBCE1',
	},
	title_userInfoSetting: {
		width: 200 * DP,
		height: 46 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#AFBCE1',
	},
	textMsg_assignPetProfileImage: {
		width: 654 * DP,
		height: 76 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#707070',
	},
	inputForm_assignPetProfileImage: {
		width: 654 * DP,
		height: 172 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DEF4C9',
	},
	input30_assignPetProfileImage: {
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D3C9F4',
	},
	checkBox_assignPetProfileImage: {
		width: 526 * DP,
		height: 50 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D3C9F4',
	},
	textMsg_assignPetInfo: {
		width: 654 * DP,
		height: 36 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#707070',
	},
	assignPetInfoA: {
		width: 654 * DP,
		height: 330 * DP,
		backgroundColor: '#A07A7A',
	},
	assignPetInfoB: {
		width: 654 * DP,
		height: 224 * DP,
		backgroundColor: '#A07A7A',
	},
	inputForm_assignPetInfo_line1: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
	},
	inputForm_assignPetInfo_line2: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
	},
	inputForm_assignPetInfo_line3: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 46 * DP,
		alignItems: 'center',
	},
	text_assignPetInfo: {
		width: 118 * DP,
		height: 46 * DP,
		backgroundColor: '#E0A8A8',
	},
	dropdownSelect_assignPetInfo_depth1: {
		width: 204 * DP,
		height: 82 * DP,
		backgroundColor: '#A9B0D5',
	},
	dropdownSelect_assignPetInfo_depth2: {
		width: 292 * DP,
		height: 82 * DP,
		backgroundColor: '#A9B0D5',
	},
	feedMedia: {
		width: 750 * DP,
		height: 750 * DP,
		backgroundColor: '#B0C7D8',
	},
	feedTextEdit: {
		width: 654 * DP,
		height: 248 * DP,
		backgroundColor: 'pink',
	},
	selectedMediaList: {
		width: 750 * DP,
		height: 190 * DP,
		backgroundColor: '#FFE5E1',
	},
	dropdownSelect: {
		width: 292 * DP,
		height: 82 * DP,
		backgroundColor: '#A9B0D5',
	},
	input24: {
		width: 654 * DP,
		height: 122 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D8B5DE',
	},
	inputBalloon: {
		width: 654 * DP,
		height: 276 * DP,
		backgroundColor: '#CAC9ED',
	},
	inputNoTitle: {
		width: 438 * DP,
		height: 82 * DP,
	},
	profileInfo: {
		width: 750 * DP,
		height: 416 * DP,
		backgroundColor: '#B0C7D8',
	},
	animalNeedHelpList: {
		width: 750 * DP,
		height: 770 * DP,
	},
	radioBox_assignPetInfo: {
		width: 520 * DP,
		height: 46 * DP,
		backgroundColor: '#EDEDED',
	},
	btn_w226_assignPetInfo: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 70 * DP,
	},
	datePicker_assignPetInfo_depth1: {
		width: 290 * DP,
		height: 82 * DP,
		backgroundColor: '#B1B6F0',
	},
	text218_assignPetInfo: {
		width: 218 * DP,
		height: 36 * DP,
		backgroundColor: '#B1B6F0',
	},
	inputNoTitle_assignPetInfo: {
		width: 156 * DP,
		height: 82 * DP,
		backgroundColor: '#B1B6F0',
	},
	text68_assignPetInfo: {
		width: 68 * DP,
		height: 46 * DP,
		backgroundColor: '#B1B6F0',
	},
	selectedMediaList_assignProtectAnimal: {
		width: 654 * DP,
		height: 410 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	textMsg_assignProtectAnimal: {
		width: 654 * DP,
		height: 36 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#707070',
	},
	image_assignProtectAnimal: {
		width: 160 * DP,
		height: 54 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C8FBD2',
	},
	btn_w226_assignProtectAnimal: {
		width: 654 * DP,
		height: 70 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	inputForm_assignProtectAnimal_line1: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
	},
	text118_assignProtectAnimal: {
		width: 118 * DP,
		height: 46 * DP,
		backgroundColor: '#B1B6F0',
	},
	datePicker_assignProtectAnimal_depth1: {
		width: 520 * DP,
		height: 82 * DP,
		backgroundColor: '#EDEDED',
	},
	inputForm_assignProtectAnimal: {
		width: 654 * DP,
		height: 224 * DP,
		backgroundColor: '#A07A7A',
	},
	dropdownSelect_assignProtectAnimalInfo: {
		width: 160 * DP,
		height: 82 * DP,
		backgroundColor: '#B1B6F0',
	},
	text64_assignProtectAnimal: {
		width: 64 * DP,
		height: 46 * DP,
		backgroundColor: '#B1B6F0',
	},
	inputForm_assignProtectAnimal_line2: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 82 * DP,
		alignItems: 'center',
	},
	selectstat_view: {
		width: 750 * DP,
		height: 100 * DP,
		alignItems: 'center',
		backgroundColor: '#ACC4D6',
	},
	selectstat: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 42 * DP,
		backgroundColor: '#B5EAEC',
	},
	textBtn: {
		width: 120 * DP,
		height: 42 * DP,
		alignItems: 'center',
		backgroundColor: '#D9F5CD',
	},
	vertical_stick: {
		borderRightColor: '#FF0000',
		borderRightWidth: 2 * DP,
	},
	AnimalNeedHelpList: {
		width: 654 * DP,
		height: 1324 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F2C2C2',
	},
	FeedThumbnailList: {
		width: 750 * DP,
		height: 1324 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#669AC2',
	},
	baseFlatList: {
		width: 654 * DP,
		height: 1324 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D28888',
	},
	animalProtectDetails_protectApplyForm: {
		width: 654 * DP,
		height: 1316 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C4C483',
	},
	animalProtectDetails_adoptorInformation: {
		width: 654 * DP,
		height: 1386 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C4C483',
	},
	aidRequestList_aidRequestManage: {
		width: 654 * DP,
		height: 1384 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E1E8FF',
	},
	aidRequestList_aidRequestManage: {
		width: 654 * DP,
		height: 1384 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E1E8FF',
	},
	filterbutton_view: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#B5DED8',
	},
	filterbutton: {
		width: 306 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D891C7',
	},
	meatball50: {
		width: 50 * DP,
		height: 50 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D891C7',
	},
	baseFlatList_protectRequestList: {
		width: 654 * DP,
		height: 1286 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C4C483',
	},
});

export const loginTemplete_style = StyleSheet.create({
	passwordChecker: {
		width: 654 * DP,
		height: 406 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A07A7A',
	},
	without_login: {
		width: 750 * DP,
		height: 316 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7E94D0',
	},
	btn_w522_login: {
		marginTop: 62 * DP,
	},
	btn_w522_assign: {
		marginTop: 30 * DP,
	},
	basic_info: {
		marginTop: 32 * DP,
	},
	social_info: {
		marginTop: 38 * DP,
	},
});

export const findAccount_style = StyleSheet.create({
	tabSelectBorder_type1: {
		marginTop: 20 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const agreementCheck_style = StyleSheet.create({
	agreementCheckList: {
		marginTop: 61 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const userAssign = StyleSheet.create({
	tabSelectBorder_Type1: {
		marginTop: 30 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const progressbar_style = StyleSheet.create({
	stageBar: {
		marginTop: 20 * DP,
	},
});

export const userPasswordCheck = StyleSheet.create({
	passwordChecker: {
		marginTop: 112 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const tabSelectBorder_Type1 = StyleSheet.create({
	agreementCheckList: {
		marginTop: 61 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const suggestAssign_style = StyleSheet.create({
	txt_msg: {
		marginTop: 320 * DP,
	},
	btn_w522: {
		marginTop: 110 * DP,
	},
	basic_info: {
		marginTop: 32 * DP,
	},
	social_info: {
		marginTop: 38 * DP,
	},
});

export const passwordReset_style = StyleSheet.create({
	passwordChecker: {
		marginTop: 110 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const shelterCodeCheck_style = StyleSheet.create({
	queryBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: 12 * DP,
	},
	btn_w654: {
		marginTop: 106 * DP,
	},
});

export const assignUserHabitation_style = StyleSheet.create({
	btn_w654: {
		marginTop: 150 * DP,
	},
});

export const shelterAssignEntrance_style = StyleSheet.create({
	btn_w522_public: {
		marginTop: 200 * DP,
	},
	btn_w522_private: {
		marginTop: 30 * DP,
	},
});

export const assign_profile = StyleSheet.create({
	cntr_profile: {
		alignSelf: 'center',
		marginVertical: 70 * DP,
		width: 294 * DP,
	},
	img_profile: {
		alignSelf: 'center',
		width: 294 * DP,
		height: 294 * DP,
		borderRadius: 150 * DP,
		backgroundColor: GRAY,
	},
	btn_add: {
		position: 'absolute',
		opacity: 0.8,
		width: 92 * DP,
		height: 92 * DP,
		bottom: 10 * DP,
		right: 10 * DP,
	},
	container_stagebar: {
		width: 654 * DP,
		height: 32 * DP,
		marginTop: 28 * DP,
	},
	stagebar_backgroundBar: {
		borderWidth: 4 * DP,
		borderColor: MAINCOLOR,
		borderRadius: 8 * DP,
		height: 16 * DP,
		marginRight: 18 * DP,
	},
	stagebar_insideBar: {
		backgroundColor: MAINCOLOR,
		borderRadius: 8 * DP,
		height: 16 * DP,
		left: -4 * DP,
	},
});

export const buttonstyle = StyleSheet.create({
	wrp_main: {
		// flex: 1,
		alignItems: 'center',
		backgroundColor: WHITE,
	},

	notcheckButton: {
		width: 50 * DP,
		height: 50 * DP,
		borderRadius: 15 * DP,
		borderWidth: 4 * DP,
		borderColor: '#999999',
		marginRight: 12 * DP,
	},
	checkedButton: {
		width: 50 * DP,
		height: 50 * DP,
		borderRadius: 15 * DP,
		borderWidth: 4 * DP,
		borderColor: '#ff9888',
		marginRight: 12 * DP,
	},
	loginbutton: {
		height: 104 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: '#ff9888',
		marginBottom: 42 * DP,
	},
	assignbutton: {
		height: 104 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: 'white',
		borderColor: '#ff9888',
		borderWidth: 2,
		marginBottom: 42 * DP,
	},
	socialAppsButton: {
		width: 80 * DP,
		height: 80 * DP,
		marginHorizontal: 15 * DP,
	},
	autologinButton: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 32 * DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		elevation: 2,
	},
});

export const textstyles = StyleSheet.create({
	noto28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
		includeFontPadding: false,
	},
	noto24: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 42 * DP,
	},
	noto40b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40 * DP,
	},
	noto32b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 32 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
	},
	roboto28: {
		fontFamily: 'Roboto-Regular',
		fontSize: 28 * DP,
	},
	center: {
		textAlign: 'center',
	},
	link: {
		color: LINK,
	},
	gray: {
		color: GRAY,
	},
	white: {
		color: WHITE,
	},
	red: {
		color: RED,
	},
	salgoo: {
		color: '#ff9888',
	},
});

export const formstyles = StyleSheet.create({
	id_input: {
		width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		marginBottom: 20 * DP,
	},
	pass_input: {
		width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
	},
	fail_msg: {
		borderTopColor: 'red',
		borderTopWidth: 2 * DP,
		marginBottom: 32 * DP,
	},
	fail_description: {
		marginBottom: 14 * DP,
	},
	select_mobile: {
		flexDirection: 'row',
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
		width: 184 * DP,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	input_mobile: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export const layoutstyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: WHITE,
	},
	contents: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: WHITE,
	},
	inputform: {
		marginBottom: 70 * DP,
	},
	textinputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	autologinContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	socialLinkContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 22 * DP,
		flexDirection: 'row',
	},
	suggestion: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center',
	},
	container_recaptcha: {
		marginTop: 40 * DP,
		marginBottom: 32 * DP,
	},
	recaptcha: {
		backgroundColor: 'yellow',
		marginBottom: 24 * DP,
		height: 128 * DP,
	},
});

export const verifyuser = StyleSheet.create({
	tab: {
		marginTop: 190 * DP,
		height: 88 * DP,
		flexDirection: 'row',
	},
	btn_tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2 * DP,
		borderColor: MAINCOLOR,
	},
	btn_tab_notselected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
	},
	container_msg: {
		height: 234 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const assignUserProfileImage_style = StyleSheet.create({
	txt_msg: {
		marginTop: 80 * DP,
	},
	profileImageSelect: {
		marginTop: 70 * DP,
	},
	input30: {
		marginTop: 42 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const assignShelterAddress_style = StyleSheet.create({
	inputForm: {
		marginTop: 80 * DP,
	},
	input24A: {
		marginTop: 80 * DP,
	},
	addressInput: {
		marginTop: 60 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const assignShelterInformation_style = StyleSheet.create({
	input24A: {
		marginTop: 80 * DP,
	},
	inputWithEmail: {
		marginTop: 60 * DP,
	},
	input24A: {
		marginTop: 60 * DP,
	},
	datePicker: {
		marginTop: 60 * DP,
	},
	datePicker: {
		marginTop: 60 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const checkShelterPassword_style = StyleSheet.create({
	passwordChecker: {
		marginTop: 110 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const assignShelterProfileImage_style = StyleSheet.create({
	txt_msg: {
		marginTop: 80 * DP,
	},
	profileImageSelect: {
		marginTop: 70 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const changeUserProfileImage_style = StyleSheet.create({
	profileNicknameChange: {
		marginTop: 42 * DP,
	},
	profileImageSelect: {
		marginTop: 70 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
	input24: {
		marginBottom: 44 * DP,
	},
});

export const changePetProfileImage_style = StyleSheet.create({
	ProfileImageSelect: {
		marginTop: 110 * DP,
	},
	input30: {
		marginTop: 70 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const changePassword_style = StyleSheet.create({
	passwordChecker: {
		marginTop: 110 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const userInfoDetailSettting_style = StyleSheet.create({
	inputForm: {
		marginTop: 60 * DP,
	},
	inputForm_detail: {
		flexDirection: 'row',
		marginBottom: 40 * DP,
	},
	text: {
		marginTop: 18 * DP,
		marginRight: 16 * DP,
	},
	inputWithSelect: {
		flexDirection: 'row',
		marginBottom: 52 * DP,
	},
});

export const addFamilyAccount_style = StyleSheet.create({
	inputWithSearchIcon: {
		marginTop: 20 * DP,
	},
	accountList: {
		marginTop: 60 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
});

export const userMenu_style = StyleSheet.create({
	userInfo: {
		flexDirection: 'row',
		marginTop: 40 * DP,
	},
	profileImageLarge: {
		marginRight: 40 * DP,
	},
	socialInfoB: {
		marginTop: 38 * DP,
	},
	btn_w280_view: {
		flexDirection: 'row',
		marginTop: 30 * DP,
	},
	btn_w280: {
		flexDirection: 'row',
		marginRight: 50 * DP,
	},
	horizontalLine: {
		marginTop: 10 * DP,
	},
});

export const userInfoSetting_style = StyleSheet.create({
	profileImageLarge: {
		marginTop: 40 * DP,
	},
	btn_w242: {
		marginTop: 30 * DP,
	},
	user_email: {
		flexDirection: 'row',
		marginTop: 30 * DP,
		marginLeft: 48 * DP,
	},
	title: {
		marginLeft: 48 * DP,
	},
	changePassword: {
		marginTop: 30 * DP,
		marginLeft: 24 * DP,
	},
	bracket48: {
		marginTop: 38 * DP,
		marginLeft: 404 * DP,
	},
	title_detail: {
		marginLeft: 48 * DP,
		marginTop: 40 * DP,
	},
	userText: {
		marginLeft: 48 * DP,
	},
	btn_w114: {
		marginTop: 40 * DP,
		marginLeft: 340 * DP,
	},
});

export const assignPetProfileImage_style = StyleSheet.create({
	textMsg: {
		marginTop: 12 * DP,
	},
	profileImageSelect: {
		marginTop: 70 * DP,
	},
	inputForm: {
		marginTop: 70 * DP,
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
	input30: {
		marginTop: 110 * DP,
	},
	checkBox: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40 * DP,
	},
});

export const assignPetInfo_style = StyleSheet.create({
	textMsg: {
		marginTop: 12 * DP,
	},
	inputForm: {
		marginTop: 70 * DP,
	},
	dropdownSelect_depth1: {
		marginLeft: 16 * DP,
	},
	dropdownSelect_depth2: {
		marginLeft: 24 * DP,
	},
	line2: {
		marginTop: 60 * DP,
	},
	tabSelectFilled_Type1: {
		marginLeft: 16 * DP,
	},
	line3: {
		marginTop: 60 * DP,
	},
	btn_w226_viewA: {
		marginTop: 110 * DP,
	},
	btn_w226: {
		marginLeft: 202 * DP,
	},
	datePicker_depth1: {
		marginLeft: 16 * DP,
	},
	text218: {
		marginTop: 46 * DP,
		marginLeft: 12 * DP,
	},
	inputNoTitle: {
		marginLeft: 16 * DP,
	},
	text68: {
		marginLeft: 16 * DP,
	},
	btn_w226_viewB: {
		marginTop: 130 * DP,
	},
});

export const assignProtectAnimal_style = StyleSheet.create({
	textMsg: {
		marginTop: 12 * DP,
	},
	selectedMediaList: {
		marginTop: 70 * DP,
	},
	btn_w226_view_image: {
		marginTop: 110 * DP,
	},
	inputform: {
		marginTop: 60 * DP,
	},
	dropdownSelect_year: {
		marginLeft: 16 * DP,
	},
	text118: {
		marginLeft: 10 * DP,
	},
});

export const selectstat_view_style = StyleSheet.create({
	select_all: {
		marginLeft: 268 * DP,
	},
	vertical_stick: {
		marginLeft: 12 * DP,
	},
	delete_selected: {
		marginLeft: 12 * DP,
	},
	selectstat: {
		marginTop: 38 * DP,
	},
	selecting: {
		marginTop: 38 * DP,
		justifyContent: 'flex-end',
	},
});

export const baseInfo_style = StyleSheet.create({
	list: {
		marginTop: 40 * DP,
	},
	detail: {
		marginTop: 40 * DP,
	},
});

export const protectRequestList_style = StyleSheet.create({
	filterbutton_view: {
		marginTop: 40 * DP,
	},
});

export const requestLogin_style = StyleSheet.create({
	txt_msg: {
		marginTop: 326 * DP,
	},
	btn_w522: {
		marginTop: 24 * DP,
	},
	social_info: {
		marginTop: 70 * DP,
	},
});

export const temp_txt = StyleSheet.create({
	small: {
		fontSize: 20 * DP,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	medium: {
		fontSize: 40 * DP,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});

export const shelterMenu = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
	},
	shelterMenuStep1: {
		backgroundColor: '#6F9B85',
		width: 750 * DP,
		height: 550 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	shelterInfo: {
		backgroundColor: '#BCC0DC',
		width: 654 * DP,
		height: 194 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	shelterInfo_container: {
		flexDirection: 'row',
	},
	shelterInfo_container_left: {
		width: 194 * DP,
	},
	shelterInfo_container_right: {
		width: 460 * DP,
	},
	shelterInfo_profileImageLarge: {
		width: 194 * DP,
		height: 194 * DP,
		backgroundColor: '#D1E7F1',
		justifyContent: 'center',
		alignItems: 'center',
	},
	shelterInfo_user_id: {
		width: 420 * DP,
		height: 58 * DP,
		backgroundColor: '#D1E7F1',
		marginTop: 27 * DP,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	shelterInfo_contents: {
		width: 420 * DP,
		height: 82 * DP,
		backgroundColor: '#FBC5C5',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialInfoB_4Items: {
		backgroundColor: '#B0C0EC',
		width: 662 * DP,
		height: 106 * DP,
		marginTop: 38 * DP,
	},
	btnView: {
		backgroundColor: '#78BB95',
		width: 654 * DP,
		height: 92 * DP,
		marginTop: 40 * DP,
		flexDirection: 'row',
		alignItems: 'center',
	},
	btnView_btn_w280: {
		width: 280 * DP,
		height: 60 * DP,
		backgroundColor: '#BF9547',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnView_floadAddPet_126x92: {
		width: 126 * DP,
		height: 92 * DP,
		backgroundColor: '#BF9547',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 82 * DP,
	},
	btnView_floadArticle_126x92: {
		width: 126 * DP,
		height: 92 * DP,
		backgroundColor: '#BF9547',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 40 * DP,
	},
	profileMenu1: {
		backgroundColor: '#7F8EF3',
		width: 750 * DP,
		height: 206 * DP,
		marginTop: 10 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileMenu2: {
		backgroundColor: '#7F8EF3',
		width: 750 * DP,
		height: 316 * DP,
		marginTop: 10 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileMenu3: {
		backgroundColor: '#7F8EF3',
		width: 750 * DP,
		height: 316 * DP,
		marginTop: 10 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const shelterInfoSetting = StyleSheet.create({
	container: {
		flex: 1,
	},
	shelterInfoSetting_step1: {
		width: 750 * DP,
		height: 364 * DP,
		backgroundColor: '#94ACA0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn_w242: {
		width: 280 * DP,
		height: 60 * DP,
		backgroundColor: '#FBE0AF',
		marginTop: 30 * DP,
	},
	shelterInfoSetting_step2: {
		width: 750 * DP,
		height: 1060 * DP,
		backgroundColor: '#B3EBB5',
	},
});

export const editShelterInfo = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B3EBB5',
		alignItems: 'center',
	},
	shelterInfoForm: {
		width: 654 * DP,
		height: 858 * DP,
		backgroundColor: '#A07A7A',
		marginTop: 80 * DP,
	},
	btn_w654: {
		backgroundColor: '#DEB5B5',
		marginTop: 110 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	category: {
		width: 134 * DP,
		height: 82 * DP,
		backgroundColor: '#7F8EF3',
		justifyContent: 'center',
	},
	text: {
		width: 118 * DP,
		height: 46 * DP,
		backgroundColor: 'pink',
	},
	input30: {
		width: 520 * DP,
		height: 82 * DP,
		marginBottom: 40 * DP,
		backgroundColor: '#EDEDED',
	},
	addressInput: {
		width: 654 * DP,
		height: 236 * DP,
		backgroundColor: '#ADB5CE',
		marginBottom: 40 * DP,
		marginTop: 12 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const applicationFormVolunteer = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	shelterInfo: {
		width: 702 * DP,
		height: 246 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C4C483',
		marginTop: 30 * DP,
	},
	viewForm: {
		width: 654 * DP,
		height: 202 * DP,
		marginTop: 40 * DP,
		backgroundColor: 'pink',
	},
	viewForm_step1: {
		width: 654 * DP,
		height: 52 * DP,
		backgroundColor: 'yellow',
		flexDirection: 'row',
	},
	icon48: {
		width: 48 * DP,
		height: 48 * DP,
		backgroundColor: 'pink',
	},
	title: {
		width: 590 * DP,
		height: 42 * DP,
		backgroundColor: '#F5DDD2',
		marginLeft: 16 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 4 * DP,
		marginBottom: 10 * DP,
	},
	viewForm_step2: {
		width: 590 * DP,
		height: 148 * DP,
		backgroundColor: '#999EDF',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	participants: {
		width: 654 * DP,
		height: 376 * DP,
		marginTop: 40 * DP,
		backgroundColor: 'pink',
	},
	participants_step1: {
		width: 654 * DP,
		height: 52 * DP,
		backgroundColor: 'yellow',
		flexDirection: 'row',
	},
	participants_step2: {
		width: 590 * DP,
		height: 322 * DP,
		backgroundColor: '#999EDF',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn_w226: {
		marginTop: 110 * DP,
	},
});

export const animalAdoption = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	congratulatory_message: {
		width: 654 * DP,
		hegiht: 102 * DP,
		backgroundColor: WHITE,
		marginTop: 60 * DP,
	},
	instruction: {
		width: 654 * DP,
		height: 834 * DP,
		marginTop: 20 * DP,
		marginBottom: 60 * DP,
		backgroundColor: '#E2C6C6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn_w522: {
		marginBottom: 40 * DP,
		backgroundColor: WHITE,
		alignSelf: 'center',
	},
});

export const setPetInformation = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	inputForm: {
		width: 654 * DP,
		height: 472 * DP,
		backgroundColor: '#A07A7A',
		marginTop: 60 * DP,
	},
	inputForm_line_layout: {
		flexDirection: 'row',
		marginBottom: 60 * DP,
	},
	inputForm_line_left: {
		width: 136 * DP,
		height: 82 * DP,
	},
	inputForm_line_left_text: {
		width: 118 * DP,
		height: 46 * DP,
		backgroundColor: 'pink',
		marginTop: 16 * DP,
	},
	datePicker: {
		width: 290 * DP,
		backgroundColor: '#B1B6F0',
		flexDirection: 'row',
	},
	birthTime: {
		width: 218 * DP,
		height: 36 * DP,
		marginLeft: 12 * DP,
		backgroundColor: '#B1B6F0',
		alignSelf: 'flex-end',
	},
	inputNoTitle: {
		width: 156 * DP,
		backgroundColor: '#B1B6F0',
	},
	kg: {
		width: 68 * DP,
		height: 46 * DP,
		backgroundColor: '#B1B6F0',
		alignSelf: 'center',
		marginLeft: 16 * DP,
	},
	inputForm_text: {
		width: 134 * DP,
		backgroundColor: 'pink',
	},
	radioBoxForm: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	radioBox_right: {
		width: 520 * DP,
		height: 46 * DP,
		marginLeft: 16 * DP,
		backgroundColor: '#EDEDED',
	},
	radioBox_left: {
		width: 118 * DP,
		height: 46 * DP,
		backgroundColor: '#EDEDED',
	},
});

export const petInfoSetting = StyleSheet.create({
	container: {
		flex: 1,
	},
	profileContainer: {
		width: 750 * DP,
		height: 364 * DP,
		backgroundColor: '#A07A7A',
		justifyContent: 'center',
		alignItems: 'center',
	},
	petImageLabel: {
		marginTop: 44 * DP,
	},
	btn_w242: {
		marginTop: 30 * DP,
	},
	petAccountInfo: {
		container: {
			width: 750 * DP,
			height: 248 * DP,
			backgroundColor: '#A07A7A',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 10 * DP,
		},
		insideContainer: {
			width: 654 * DP,
			height: 178 * DP,
			backgroundColor: 'yellow',
		},
		accountInfo_header: {
			width: 200 * DP,
			height: 46 * DP,
			backgroundColor: '#ECCBCB',
		},
		information: {
			width: 654 * DP,
			height: 36 * DP,
			marginTop: 30 * DP,
			backgroundColor: '#D4CEF3',
		},
	},
	petProfileMenu: {
		container: {
			width: 750 * DP,
			height: 130 * DP,
			marginTop: 2 * DP,
			backgroundColor: '#A07A7A',
			justifyContent: 'center',
			alignItems: 'center',
		},
		insideContainer: {
			width: 654 * DP,
			height: 50 * DP,
			flexDirection: 'row',
			backgroundColor: 'yellow',
		},
		menuTitle: {
			width: 390 * DP,
			height: 46 * DP,
			backgroundColor: '#ECCBCB',
			alignSelf: 'center',
		},
		bracket50: {
			width: 50 * DP,
			height: 50 * DP,
			marginLeft: 214 * DP,
			backgroundColor: '#ECCBCB',
		},
	},
	familyAccountSetting: {
		container: {
			width: 750 * DP,
			height: 308 * DP,
			marginTop: 2 * DP,
			backgroundColor: '#A07A7A',
			justifyContent: 'center',
			alignItems: 'center',
		},
		insideContainer: {
			width: 654 * DP,
			height: 228 * DP,
			backgroundColor: 'yellow',
		},
		menuView: {
			flexDirection: 'row',
		},
		title: {}, //재활용 petProfileMenu.menuTitle
		bracket50: {}, //재활용 petProfileMenu.bracket50
		infoMessage: {
			width: 604 * DP,
			height: 68 * DP,
			backgroundColor: '#C9CAEC',
		},
		familyAccounts: {
			width: 654 * DP,
			height: 94 * DP,
			marginTop: 16 * DP,
			backgroundColor: 'pink',
		},
	},
	exposureSetting: {
		container: {
			width: 750 * DP,
			height: 200 * DP,
			marginTop: 2 * DP,
			backgroundColor: '#A07A7A',
			justifyContent: 'center',
			alignItems: 'center',
		},
		insideContainer: {
			width: 654 * DP,
			height: 124 * DP,
			backgroundColor: 'yellow',
		},
		menuView: {
			width: 654 * DP,
			height: 50 * DP,
			flexDirection: 'row',
		},
		privateSettingView: {
			flexDirection: 'row',
			width: 654 * DP,
			height: 44 * DP,
			marginTop: 30 * DP,
		},
		privateSettingMsg: {
			width: 550 * DP,
			height: 44 * DP,
			backgroundColor: 'pink',
		},
		privateSettingBtn: {
			width: 80 * DP,
			height: 36 * DP,
			marginLeft: 24 * DP,
			backgroundColor: '#FFFFFF',
			alignSelf: 'center',
		},
	},
});

export const vaccinationRecord = StyleSheet.create({
	container: {
		flex: 1,
	},
	vaccinationForm_container: {
		width: 654 * DP,
		height: 876 * DP,
		marginTop: 44 * DP,
		backgroundColor: '#A07A7A',
	},
	vaccination_category: {
		width: 654 * DP,
		height: 268 * DP,
		marginBottom: 2 * DP,
		backgroundColor: '#E2F2DB',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dueDateView: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		marginTop: 60 * DP,
		marginRight: 48 * DP,
	},
	dueDateText: {
		width: 194 * DP,
		height: 36 * DP,
		backgroundColor: 'yellow',
	},
	dueDateSwitch: {
		width: 80 * DP,
		height: 36 * DP,
		backgroundColor: 'pink',
	},
	guide_msg: {
		width: 654 * DP,
		height: 76 * DP,
		marginTop: 50 * DP,
		backgroundColor: 'pink',
	},
});

export const feedListForHashTag = StyleSheet.create({
	container: {
		flex: 1,
	},
	hashTagInfo: {
		width: 750 * DP,
		height: 232 * DP,
		backgroundColor: 'yellow',
		alignItems: 'center',
	},
	hashLabel: {
		width: 702 * DP,
		height: 150 * DP,
		marginTop: 12 * DP,
		backgroundColor: 'pink',
	},
	postCategory: {
		width: 346 * DP,
		height: 70 * DP,
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginRight: 24 * DP,
		backgroundColor: WHITE,
	},
});

export const searchFeed = StyleSheet.create({
	container: {
		flex: 1,
	},
	stateView: {
		width: 750 * DP,
		height: 130 * DP,
		backgroundColor: GRAY20,
	},
	showStateView: {
		width: 344 * DP,
		height: 36 * DP,
		flexDirection: 'row',
		backgroundColor: 'yellow',
		alignSelf: 'flex-end',
		marginRight: 48 * DP,
		marginTop: 24 * DP,
		text: {
			width: 244 * DP,
			height: 32 * DP,
			backgroundColor: 'pink',
			alignSelf: 'center',
		},
		onOffSwitch: {
			marginLeft: 16 * DP,
		},
	},
	postState: {
		width: 116 * DP,
		height: 38 * DP,
		backgroundColor: '#B5DED8',
		marginLeft: 48 * DP,
	},
	feedThumbnailList: {
		height: 980 * DP,
	},
});

export const searchAccountA = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
});

export const searchAccountB = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	petAccountList: {
		alignSelf: 'center',
	},
});

export const searchHashTag = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
});

export const searchProtectRequest = StyleSheet.create({
	container: {
		flex: 1,
	},
	filterView: {
		width: 750 * DP,
		height: 190 * DP,
		backgroundColor: '#A7A7EF',
		alignItems: 'center',
		justifyContent: 'center',
		inside: {
			width: 654 * DP,
			height: 126 * DP,
			backgroundColor: '#B5DED8',
		},
		onOffBtnView: {
			width: 344 * DP,
			height: 36 * DP,
			marginTop: 30 * DP,
			flexDirection: 'row',
			backgroundColor: 'yellow',
			alignSelf: 'flex-end',
		},
		onOffBtnMsg: {
			width: 244 * DP,
			height: 32 * DP,
			backgroundColor: 'pink',
			alignSelf: 'center',
		},
		onOffSwitch: {
			marginLeft: 16 * DP,
		},
	},
	animalNeedHelpList: {
		marginTop: 30 * DP,
		backgroundColor: 'yellow',
		width: 654 * DP,
		height: 958 * DP,
		alignSelf: 'center',
	},
});

export const appliesRecord = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	record: {
		width: 654 * DP,
		height: 924 * DP,
		backgroundColor: '#E2C6C6',
		marginTop: 30 * DP,
		alignItems: 'center',
		alignSelf: 'center',
	},
	animalNeedHelp: {
		container: {
			width: 654 * DP,
			height: 276 * DP,
			marginBottom: 30 * DP,
			backgroundColor: 'yellow',
		},
		headerContainer: {
			width: 654 * DP,
			height: 48 * DP,
			marginBottom: 14 * DP,
			backgroundColor: 'pink',
			flexDirection: 'row',
			title: {
				width: 214 * DP,
				height: 36 * DP,
				backgroundColor: 'powderblue',
				alignSelf: 'center',
			},
			moreTxt: {
				width: 214 * DP,
				height: 36 * DP,
				marginLeft: 226 * DP,
				paddingRight: 15 * DP,
				flexDirection: 'row',
				alignSelf: 'center',
				justifyContent: 'flex-end',
			},
			moreBtn: {
				alignSelf: 'center',
				marginLeft: 10 * DP,
			},
		},
	},
	shelterList: {
		container: {
			width: 654 * DP,
			height: 312 * DP,
			backgroundColor: '#ACC9CB',
		},
	},
});

export const protectRequestList = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
export const missingReportList = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	filterContainer: {
		width: 750 * DP,
		height: 110 * DP,
		backgroundColor: '#A7A7EF',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	insideContainer: {
		width: 654 * DP,
		height: 60 * DP,
		backgroundColor: 'yellow',
		marginBottom: 10 * DP,
	},
	animalNeedHelpList: {
		marginTop: 30 * DP,
		width: 654 * DP,
		height: 1082 * DP,
		alignSelf: 'center',
		backgroundColor: 'yellow',
	},
	urget_write1: {
		width: 110 * DP,
		height: 110 * DP,
		backgroundColor: '#E57E7E',
		position: 'absolute',
		bottom: 60 * DP,
		right: 20 * DP,
	},
});

export const activationList = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	activityContainer: {
		width: 654 * DP,
		height: 1112 * DP,
		marginTop: 70 * DP,
		alignSelf: 'center',
		backgroundColor: '#B5DED8',
	},
	activity: {
		width: 654 * DP,
		height: 258 * DP,
		backgroundColor: 'pink',
		marginBottom: 40 * DP,
	},
	activityNameContainer: {
		width: 654 * DP,
		height: 42 * DP,
		backgroundColor: BLUE20,
	},
	activityName: {
		marginLeft: 44.5 * DP,
	},
	activityImage: {
		width: 654 * DP,
		height: 204 * DP,
		marginTop: 12 * DP,
		backgroundColor: '#EBC5C5',
	},
});
export const activationDetail = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	imageContainer: {
		width: 654 * DP,
		height: 728 * DP,
		marginTop: 70 * DP,
		backgroundColor: '#A07A7A',
		alignSelf: 'center',
	},
	titleContainer: {
		width: 654 * DP,
		height: 84 * DP,
		marginTop: 40 * DP,
		flexDirection: 'row',
		alignSelf: 'center',
		backgroundColor: 'yellow',
	},
	titleText: {
		width: 518 * DP,
		height: 54 * DP,
		backgroundColor: '#A1C5A5',
	},

	heartContainer: {
		width: 48 * DP,
		height: 84 * DP,
		marginLeft: 10 * DP,
		backgroundColor: '#95E29F',
	},
	shareContainer: {
		width: 48 * DP,
		height: 84 * DP,
		marginLeft: 30 * DP,
		backgroundColor: '#95E29F',
	},
	contentContainer: {
		width: 654 * DP,
		height: 322 * DP,
		marginTop: 10 * DP,
		alignSelf: 'center',
		backgroundColor: 'pink',
	},
});

export const applyVolunteer = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: '#ACC4D6',
	},
	btn_w226: {
		marginTop: 110 * DP,
		alignSelf: 'flex-end',
		marginRight: 48 * DP,
		marginBottom: 68 * DP,
	},
});

export const applyCompanionA = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	stageBar: {
		marginTop: 20 * DP,
	},
	textMsg: {
		backgroundColor: WHITE,
		marginTop: 12 * DP,
	},
	inputForm: {
		marginTop: 80 * DP,
	},
	btn_w654: {
		marginTop: 70 * DP,
	},
	addressInput: {},
	input24A: {
		marginTop: 80 * DP,
		height: 132 * DP,
	},
});

export const applyCompanionB = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	inputForm: {
		marginTop: 40 * DP,
	},
	stageBar: {
		marginTop: 20 * DP,
	},
	textMsg: {
		backgroundColor: WHITE,
		marginTop: 12 * DP,
	},
	addPetBtnView: {
		marginTop: 60 * DP,

		width: 274 * DP,
		height: 64 * DP,
		flexDirection: 'row',
		backgroundColor: 'yellow',
	},
	addPetTextView: {
		marginLeft: 10 * DP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addPetText: {},
});

export const applyCompanionC = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	assignCheckList: {
		marginTop: 40 * DP,
	},
	stageBar: {
		marginTop: 20 * DP,
	},
	textMsg: {
		backgroundColor: WHITE,
		marginTop: 12 * DP,
	},
	btnContainer: {
		width: 654 * DP,
		height: 70 * DP,
		marginTop: 110 * DP,
		backgroundColor: '#D7F1C1',
		flexDirection: 'row',
	},
	btn_w176: {
		marginRight: 63 * DP,
	},
});

export const applyCompanionD = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
	InputLongText: {
		marginTop: 40 * DP,
	},
	stageBar: {
		marginTop: 20 * DP,
	},
	textMsg: {
		backgroundColor: WHITE,
		marginTop: 12 * DP,
	},
	btnContainer: {
		width: 654 * DP,
		height: 70 * DP,
		marginTop: 80 * DP,
		backgroundColor: '#D7F1C1',
		flexDirection: 'row',
	},
	btn_w176: {
		marginRight: 63 * DP,
	},
});

export const applyDetails = StyleSheet.create({
	container: {
		flex: 1,
	},
	animalProtectDetails: {
		marginTop: 40 * DP,
	},
	btn_w226: {
		marginRight: 202 * DP,
	},
	btnContainer: {
		width: 654 * DP,
		height: 70 * DP,
		marginTop: 80 * DP,
		marginBottom: 10 * DP,
		backgroundColor: '#D7F1C1',
		flexDirection: 'row',
	},
});

export const photoSelect = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ACC4D6',
	},
});

export const userIdentification = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	tabSelect: {
		marginTop: 20 * DP,
	},
	textMessage: {
		width: 654 * DP,
		height: 214 * DP,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputForm: {
		width: 654 * DP,
		height: 224 * DP,
		backgroundColor: '#A07A7A',
	},
	btn_w654: {
		marginTop: 110 * DP,
	},
	inputWithSelect: {
		height: 82 * DP,
		marginTop: 60 * DP,
	},
});

export const missingAnimalDetail = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	poster: {
		width: 618 * DP,
		height: 872 * DP,
		backgroundColor: WHITE,
		marginTop: 33 * DP,
	},
	feedContent: {
		marginTop: 40 * DP,
	},
	commentList: {
		marginTop: 62 * DP,
	},
});

export const reportDetail = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	img_square_750: {
		marginTop: 20 * DP,
		backgroundColor: 'yellow',
	},
	feedContent: {
		marginTop: 40 * DP,
	},
	commentList: {
		marginTop: 62 * DP,
	},
});

export const feedList = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	feedList: {
		width: 750 * DP,
		height: 2000 * DP,
		backgroundColor: '#B0C7D8',
	},
	floatingBtn: {
		position: 'absolute',
		right: 30 * DP,
		bottom: 40 * DP,
	},
});

export const feedCommentList = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	feedContent: {
		width: 750 * DP,
		height: 330 * DP,
		backgroundColor: 'powderblue',
	},
	commentList: {
		width: 750 * DP,
		height: 932 * DP,
		backgroundColor: 'yellow',
	},
	editComment: {
		width: 750 * DP,
		height: 108 * DP,
		backgroundColor: '#D9A0A0',
		position: 'absolute',
		bottom: 0,
	},
	editComment_expanded: {
		width: 750 * DP,
		height: 744 * DP,
		backgroundColor: '#D9A0A0',
		position: 'absolute',
		bottom: 0,
	},
});

export const socialRelation = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	topTabNavigation: {
		width: 654 * DP,
		height: 62 * DP,
		marginTop: 10 * DP,
		backgroundColor: '#88BA88',
	},
	inputWithSearchIcon: {
		marginTop: 38 * DP,
		marginBottom: 10 * DP,
	},
	controllableAccountList: {
		marginTop: 70 * DP,
	},
	controllableAccountListFull: {
		height: 992 * DP,
		marginTop: 70 * DP,
	},
	recommendList: {
		height: 508 * DP,
		marginTop: 70 * DP,
	},
	floatingBtn: {
		position: 'absolute',
		right: 30 * DP,
		bottom: 40 * DP,
	},
});

export const locationPicker = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	inputWithSearchIcon: {
		marginTop: 40 * DP,
	},
	locationList: {
		marginTop: 23 * DP,
		width: 654 * DP,
		height: 1280 * DP,
		backgroundColor: '#88BA88',
	},
});

export const accountPicker = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	accountList: {
		marginTop: 28 * DP,
		width: 654 * DP,
		height: 1224 * DP,
		backgroundColor: '#88BA88',
	},
});

export const selectAccount = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	accountList: {
		marginTop: 32 * DP,
		width: 654 * DP,
		height: 1380 * DP,
		backgroundColor: '#88BA88',
	},
});

export const aidRequestList = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	aidRequestList: {
		marginTop: 40 * DP,
		width: 654 * DP,
		height: 1384 * DP,
		backgroundColor: '#88BA88',
	},
});

export const manageVolunteer = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	volunteerList: {
		marginTop: 40 * DP,
		width: 654 * DP,
		height: 418 * DP,
		backgroundColor: '#C4C483',
	},
	separator: {
		width: 654 * DP,
		height: 2 * DP,
		marginVertical: 40 * DP,
		backgroundColor: APRI10,
	},
	showMoreContainer: {
		width: 214 * DP,
		height: 48 * DP,
		marginTop: 60 * DP,
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink',
	},
	showMoreContainer_text: {
		color: GRAY10,
		marginLeft: 17 * DP,
	},
});

export const writeAidRequest = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	aidRequest: {
		marginTop: 40 * DP,
	},
	feedTextEdit: {
		marginTop: 80 * DP,
	},
	addPhotoContainer: {
		width: 160 * DP,
		height: 54 * DP,
		marginLeft: 48 * DP,
		marginTop: 38 * DP,
		backgroundColor: 'powderblue',
		alignSelf: 'flex-start',
		flexDirection: 'row',
	},
	addPhotoText: {
		marginLeft: 12 * DP,
		width: 94 * DP,
		height: 38 * DP,
		backgroundColor: 'pink',
		alignSelf: 'center',
	},
});

export const feedMediaTagEdit = StyleSheet.create({
	container: {},
	feedMedia: {},
});

export const feedWrite = StyleSheet.create({
	container: {
		backgroundColor: '#ACC4D6',
		alignItems: 'center',
		flex: 1,
	},
	container_without_lostAnimal: {
		backgroundColor: '#96A8B5',
		alignItems: 'center',
		height: 1408 * DP,
	},
	feedTextEdit: {
		marginTop: 40 * DP,
		backgroundColor: '#FFE5E1',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: 654 * DP,
		height: 54 * DP,
		marginTop: 38 * DP,
		backgroundColor: '#C8E3FB',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btn_w194_container: {
		width: 654 * DP,
		flexDirection: 'row',
	},
	btn_w194: {
		marginRight: 266 * DP,
	},
	selectedMediaList: {
		marginTop: 42 * DP,
	},
	urgentBtnContainer: {
		position: 'absolute',
		width: 158 * DP,
		height: 332 * DP,
		right: 30 * DP,
		bottom: 60 * DP,
	},
	petAccountList: {
		width: 614 * DP,
		backgroundColor: '#CFCDCE',
		marginTop: 28 * DP,
	},
	lostAnimalForm: {
		width: 654 * DP,
		marginTop: 40 * DP,
		backgroundColor: '#6E8773',
	},
	lostAnimalForm_Form: {
		width: 654 * DP,
		height: 126 * DP,
		marginBottom: 40 * DP,
		backgroundColor: 'yellow',
	},
	formTitle: {
		width: 462 * DP,
		height: 34 * DP,
		backgroundColor: '#9EDEAC',
	},
	formContentContainer: {
		flexDirection: 'row',
		marginTop: 10 * DP,
	},
	dropdownSelect: {
		marginRight: 70 * DP,
	},
	datePicker: {
		height: 82 * DP,
		marginTop: 10 * DP,
	},
	tabSelectFilled_Type1: {
		width: 654 * DP,
	},
	input24: {
		height: 168 * DP,
		backgroundColor: '#9EF4E6',
		marginBottom: 4 * DP,
	},
	inputBalloon: {},
	reportForm_container: {
		height: 585 * DP,
	},
	reportForm: {
		width: 654 * DP,
		height: 456 * DP,
		backgroundColor: '#AD9898',
		marginTop: 40 * DP,
	},
	reportForm_form: {
		width: 654 * DP,
		height: 126 * DP,
		marginBottom: 40 * DP,
		backgroundColor: 'yellow',
	},
	reportLocation_form: {
		width: 654 * DP,
		height: 164 * DP,
		marginTop: 60 * DP,
		flexDirection: 'row',
		backgroundColor: 'yellow',
	},
	reportLocation_form_left: {
		width: 438 * DP,
		backgroundColor: 'powderblue',
	},
	reportLocation_form_left_title: {
		width: 248 * DP,
		height: 40 * DP,
		backgroundColor: 'pink',
	},
	reportLocation_form_left_inputNoTitle: {
		marginTop: 42 * DP,
	},
	reportLocation_form_right: {
		width: 176 * DP,
		marginLeft: 40 * DP,
		backgroundColor: 'pink',
	},
	btn_w176: {
		marginBottom: 24 * DP,
	},
	locationDetail: {
		width: 654 * DP,
		height: 82 * DP,
		marginTop: 24 * DP,
	},
});

export const profile = StyleSheet.create({
	container: {flex: 1},
	profileInfo: {
		width: 750 * DP,
		height: 416 * DP,
		backgroundColor: '#B0C7D8',
	},
	tabSelectFilled_Type2: {},
	feedListContainer: {
		backgroundColor: 'yellow',
	},
	feedThumbNailList: {
		backgroundColor: '#96A8B5',
		height: 2770 * DP,
	},
	floatingBtn: {
		position: 'absolute',
		right: 30 * DP,
		bottom: 40 * DP,
	},
	petList: {
		width: 750 * DP,
		height: 220 * DP,
		backgroundColor: 'pink',
	},
	protectedPetList: {
		width: 750 * DP,
		height: 252 * DP,
		backgroundColor: 'pink',
	},
	animalNeedHelpList: {
		backgroundColor: '#96A8B5',
		height: 1000 * DP,
	},
});
