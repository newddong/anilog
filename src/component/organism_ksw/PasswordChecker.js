import React from 'react';
import { View } from 'react-native';
import PasswordInput from '../molecules/PasswordInput';
import { passwordChecker_style } from './style_organism';


/**
 *
 * @param {{
 *isResetPwdMode: 'boolean / true일 경우 비밀번호 리셋 모드 - 3개의 input 출력, false일 경우 일반 비밀번호 설정 모드 - 2개의 input',
 *passwordValidator: 'void / 비밀번호 양식 확인 ',
 *passwordChecker: 'void / 비밀번호 더블체크 확인',
 *checkPresentPwd : 'void / 인자 - password 텍스트 비밀번호 변경 모드 => 현재 비밀번호 입력 발생 콜백함수 '  ,
 *pwdValid: 'boolean / 양식 통과 상태 ',,
 *presentPwdValid: 'boolean / 현재 비밀번호 값과 DB값의 일치 상태'
 *pwdCheck: 'boolean / 비밀번호 확인 통과 상태',
 *onPressClear: 'void 지우기 마크 클릭 콜백함수',
 * }} props
 */
export default PasswordChecker = props => {

	//비밀번호 혹은 새로운 비밀번호에서 지우기를 할 경우 아래의 비밀번호 확인, 새로운비밀번호 확인도 함께 Clear시키기 위한 state
	const [isClear, setIsClear] = React.useState(false);

	//비밀번호 입력 콜백함수 or 새로운 비밀번호(암호 변경 모드일 경우) 입력 콜백함수
	const onChangePwd = pwd => {
		props.passwordValidator(pwd)
	};

	// Input 우측 지우기 마크 클릭 콜백함수
	const onPressClear = () => {
		setIsClear(true);
		props.onPressClear();
	};

	//비밀번호 입력, 새로운 비밀번호 입력 콜백 
	const passwordValidator = pwd => {
		props.passwordValidator(pwd);
	};

	//비밀번호 확인, 새로운 비밀번호 확인 입력 콜백 
	const passwordChecker = pwd => {
		props.passwordChecker(pwd)
	}

	//props.isResetPwdMode가 true일 경우 pwdInput이 3개 출현 (현재암호 / 바꿀 암호 / 바꿀 암호 확인)
	return !props.isResetPwdMode ? (
		//비밀번호 처음 설정 루트로 온 경우 두가지 input
		<View style={[passwordChecker_style.container_initMode]}>
			<View style={[passwordChecker_style.passwordInput_initMode]}>
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
			<View style={[passwordChecker_style.passwordInput_doubleCheck]}>
				<PasswordInput
					title={'비밀번호 확인'}
					placeholder={'비밀번호를 한 번 더 적어주세요.'}
					alert_msg={'비밀번호가 일치하지 않습니다.'}
					confirm_msg={'비밀번호가 서로 일치합니다!'}
					information={''}
					onChange={pwd => passwordChecker(pwd)}
					confirm={props.pwdCheck}
					clear={isClear}
				/>
			</View>
		</View>
	) : (
		//비밀번호 재설정 루트로 온 경우 세가지 PasswordInput
		<View style={[passwordChecker_style.container_resetMode]}>
			<View style={[passwordChecker_style.passwordInput_resetMode]}>
				<PasswordInput
					title={'현재 비밀번호'}
					placeholder={'현재 비밀번호'}
					onChange={pwd => props.checkPresentPwd(pwd)}
					confirm={props.presentPwdValid}
					information={'현재 비밀번호를 적어주세요'}

				/>
			</View>
			<View style={[passwordChecker_style.passwordInput_resetMode]}>
				<PasswordInput
					title={'새로운 비밀번호'}
					description={'최소 8자 이상, 영문과 숫자만 입력 가능합니다.'}
					placeholder={'새로운 비밀번호'}
					alert_msg={'비밀번호 작성 양식에 맞지 않습니다.'}
					confirm_msg={'비밀번호 작성 양식과 일치합니다!'}
					information={''}
					onChange={pwd => passwordValidator(pwd)}
					confirm={props.pwdValid}
					onClear={onPressClear}
				/>
			</View>
			<View style={[passwordChecker_style.passwordInput_resetMode]}>
				<PasswordInput
					title={'새로운 비밀번호 확인'}
					placeholder={'새로운 비밀번호'}
					onChange={pwd => passwordChecker(pwd)}
					confirm={props.pwdValid}
					information={'비밀번호를 다시 한 번 적어주세요.'}
				/>
			</View>
		</View>
	);
};

PasswordChecker.defaultProps = {
	isResetPwdMode: false, // 일반 비밀번호 설정 모드로 호출? or 비밀번호 변경 모드
	passwordValidator: e => console.log(e), // 비밀번호, 새로운 비밀번호 입력 콜백함수
	passwordChecker: e => console.log(e), // 비밀번호 확인, 새로운 비밀번화 확인(변경 모드) 입력 콜백함수
	checkPresentPwd: e => console.log(e), // 비밀번호 변경 모드일 떄 - 현재 비밀번호 값 입력 콜백함수,
	presentPwdValid: false, // 비밀번호 변경 모드에서 현재 비밀번호 입력값이 DB값과 일치하는지 T/F
	pwdValid: false, // 부모 컴포넌트에서 보내는 비밀번호, 새로운비밀번호의 입력값이 양식에 맞게 작성되었는지 T/F
	pwdCheck: false, // 부모 컴포넌트에서 보내는 비밀번호 확인, 새로운 비밀번호 확인란의 입력값이 위의 비밀번호 값과 정확히 일치하는지 T/F
	onPressClear: e => console.log(e), //  지우기가 클릭되었을 경우
};
