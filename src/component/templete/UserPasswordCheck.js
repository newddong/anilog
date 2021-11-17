import React from 'react';

import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import PasswordChecker from '../organism_ksw/PasswordChecker';
import {login_style, btn_style, temp_style, progressbar_style, userPasswordCheck} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserPasswordCheck = props => {
	const [pwd, setPwd] = React.useState(); // 비밀번호
	const [pwdValid, setPwdValid] = React.useState(false); // 비밀번호 양식 체크 (8자이상~~)
	const [pwdCheck, setPwdCheck] = React.useState(false); // 비밀번호 더블 체크 통과 여부
	const [data, setData] = React.useState({
		...props.route.params,
		user_password: pwd,
	});

	const goToNextStep = () => {
		setData({...data, user_password: pwd});
		console.log(data);

		props.navigation.push('AssignUserHabitation', data);
	};

	//암호 양식
	const passwordValidator = pwd => {
		console.log(pwd);
		// '최소 8자 이상(~30자 이하), 영문과 숫자만 입력 가능합니다.'
		var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,30}$/;
		if (regExp.test(pwd)) {
			setPwd(pwd);
			setPwdValid(true);
		} else {
			setPwdValid(false);
		}
	};

	//비밀번호 더블체크, 비밀번호와 비밀번호 확인이 일치하며, 비밀번호 작성양식에도 통과한 경우에만 pwdCheck값이 True
	const passwordChecker = pwd_double => {
		pwd == pwd_double && pwdValid ? setPwdCheck(true) : setPwdCheck(false);
	};

	const onPressClear = () => {
		setPwdCheck('');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 10 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{height: 20 * DP, backgroundColor: APRI10, borderRadius: 5 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={3} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>

			{/* (O)PasswordChecker */}
			<View style={[temp_style.passwordChecker, userPasswordCheck.passwordChecker]}>
				<PasswordChecker
					passwordValidator={pwd => passwordValidator(pwd)}
					passwordChecker={pwd => passwordChecker(pwd)}
					pwdValid={pwdValid}
					pwdCheck={pwdCheck}
					onPressClear={onPressClear}
				/>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, userPasswordCheck.btn_w654]}>
				{pwdValid && pwdCheck ? (
					<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w654} onPress={goToNextStep} />
				) : (
					<AniButton btnTitle={'확인'} titleFontStyle={'32'} disable={true} btnLayout={btn_w654} />
				)}
			</View>
		</View>
	);
};
