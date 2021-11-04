import {StyleSheet} from 'react-native';
import {MAINCOLOR, LINK, GRAY, GRAY_TXT_INPUT, GRAY_PLACEHOLDER, WHITE, RED, GRAY_BRIGHT, RED10} from 'Root/config/color';
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
		backgroundColor: '#DEB5B5',
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
		backgroundColor: '#ADB5CE',
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
