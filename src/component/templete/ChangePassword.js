import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { btn_w654 } from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import PasswordChecker from '../organism_ksw/PasswordChecker';
import { login_style, btn_style, temp_style, changePassword_style } from './style_templete';

export default ChangePassword = props => {
	const [confirmed, setConfirmed] = React.useState(false)
	const [pwd, setPwd] = React.useState(); // 비밀번호
	const [pwdValid, setPwdValid] = React.useState(false); // 비밀번호 양식 체크 (8자이상~~)
	const [pwdCheck, setPwdCheck] = React.useState(false); // 비밀번호 더블 체크 통과 여부
	const [presentPwdValid, setPresentPwdValid] = React.useState(false); // 현재 비밀번호 입력값이 실제 DB와 일치하는지 여부


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

	//현재 비밀번호 입력값이 실제 DB와 일치하는지 여부
	const checkPresentPwd = pwd => {
		setPresentPwdValid(true)
	}

	//지우기버튼
	const onPressClear = () => {
		setPwdCheck('');
	};

	return (
		<View style={[login_style.wrp_main,]}>
			<ScrollView contentContainerStyle={{ flex: 1 }} >
				<View style={[temp_style.passwordChecker_changePassword, changePassword_style.passwordChecker]}>
					<PasswordChecker
						isResetPwdMode={true}
						passwordValidator={pwd => passwordValidator(pwd)}
						passwordChecker={pwd => passwordChecker(pwd)}
						checkPresentPwd={pwd => checkPresentPwd(pwd)}
						pwdValid={pwdValid}
						pwdCheck={pwdCheck}
						onPressClear={onPressClear}
						presentPwdValid={presentPwdValid}
					/>
				</View>
				<View style={[btn_style.btn_w654, changePassword_style.btn_w654]}>
					{confirmed
						? <AniButton btnTitle={'확인'} btnLayout={btn_w654} titleFontStyle={32} />
						: <AniButton btnTitle={'확인'} btnLayout={btn_w654} disable={true} titleFontStyle={32} />
					}
				</View>
			</ScrollView>

		</View>
	);
};
