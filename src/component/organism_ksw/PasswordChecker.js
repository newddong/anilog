import React from 'react';
import {View} from 'react-native';
import PasswordInput from '../molecules/PasswordInput';
import {passwordChecker} from './style_organism';

export default PasswordChecker = props => {
	//resetPwd가 true일 경우 pwdInput이 3개 출현 (현재암호 / 바꿀 암호 / 바꿀 암호 확인)
	const [resetPwd, setResetPwd] = React.useState(props.isResetPwdMode);
	const [isClear, setIsClear] = React.useState(false);

	//ResetPwd관련 처리 필요
	const onChangePwd = pwd => {
		console.log('PRW' + pwd);
		setPwdValid(true);
	};
	const onPressClear = () => {
		setIsClear(true);
		props.onPressClear();
	};
	const passwordValidator = pwd => {
		props.passwordValidator(pwd);
	};

	return !resetPwd ? (
		//비밀번호 처음 설정 루트로 온 경우 두가지 input
		<View style={[passwordChecker.container_initMode]}>
			<View style={[passwordChecker.passwordInput_initMode]}>
				<PasswordInput
					title={'비밀번호'}
					description={'최소 8자 이상, 영문과 숫자만 입력 가능합니다.'}
					placeholder={'현재 비밀번호'}
					information={'최소 8자 이상, 영문과 숫자만 입력 가능합니다.'}
					alert_msg={'비밀번호 작성 양식에 맞지 않습니다.'}
					confirm_msg={'비밀번호 작성 양식과 일치합니다!'}
					onChange={pwd => passwordValidator(pwd)}
					confirm={props.pwdValid}
					onClear={onPressClear}
				/>
			</View>
			<View style={[passwordChecker.passwordInput_doubleCheck]}>
				<PasswordInput
					title={'비밀번호 확인'}
					placeholder={'비밀번호를 한 번 더 적어주세요.'}
					alert_msg={'비밀번호가 일치하지 않습니다.'}
					confirm_msg={'비밀번호가 서로 일치합니다!'}
					information={''}
					onChange={pwd => props.passwordChecker(pwd)}
					confirm={props.pwdCheck}
					clear={isClear}
				/>
			</View>
		</View>
	) : (
		//비밀번호 재설정 루트로 온 경우 세가지 PasswordInput
		<View style={[passwordChecker.container_resetMode]}>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput title={'현재 비밀번호'} placeholder={'현재 비밀번호'} onChange={pwd => props.passwordValidator(pwd)} confirm={pwdValid} />
			</View>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput
					title={'새로운 비밀번호'}
					description={'최소 8자 이상, 영문과 숫자만 입력 가능합니다.'}
					placeholder={'새로운 비밀번호'}
					onChange={pwd => onChangePwd(pwd)}
					confirm={pwdValid}
				/>
			</View>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput title={'새로운 비밀번호 확인'} placeholder={'새로운 비밀번호'} onChange={pwd => onChangePwd(pwd)} confirm={pwdValid} />
			</View>
		</View>
	);
};

PasswordChecker.defaultProps = {
	isResetPwdMode: false,
	passwordValidator: e => console.log(e),
	passwordChecker: e => console.log(e),
	pwdValid: false,
	pwdCheck: false,
	onPressClear: e => console.log(e),
};
// 	title: 'title', //비밀번호란 상단 타이틀
// 	placeholder: 'placeholder', //placeholder
// 	information: 'information', // confirm state가 'normal'일 경우 출력될 하단 메시지
// 	value: 'value', // pwd input 값
// 	alert_msg: 'alert_msg', // confrim state가 false일 경우 출력될 하단 메시지
// 	confirm_msg: 'confirm_msg', // confirm state가 true일 경우 출력될 하단 메시지
// 	onChange: (e) => console.log(e), // pwd input 값이 변할 때마다 수행되는 함수
// 	onClear: (e) => console.log(e), // X마크로 input값을 clear할 때마다 수행되는 함수
// 	onShowPassword: (e) => console.log(e), // 눈마크를 Press하여 별표(*)화된 pwd값을 보이게 할 경우
