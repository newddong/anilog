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
		width: 280 * DP,
		height: 60 * DP,
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
	privateInfo: {
		flexDirection: 'column',
		width: 750 * DP,
		height: 152 * DP,
		alignItems: 'center',
		backgroundColor: '#B3EBB5',
	},
	title: {
		width: 200 * DP,
		height: 46 * DP,
		alignItems: 'center',
		backgroundColor: '#AFBCE1',
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
});
