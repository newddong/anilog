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

	const checkerRef = React.useRef();
	const passwordValue = React.useRef('');
	const passwordCheck = React.useRef('');

	//비밀번호 입력 콜백함수 or 새로운 비밀번호(암호 변경 모드일 경우) 입력 콜백함수
	const onChangePwd = pwd => {
		passwordValue.current = pwd; //불필요한 랜더링을 줄이기 위해 set을 쓰지않음
		props.onChangePwd(pwd);
	};

	//비밀번호 확인, 새로운 비밀번호 확인 입력 콜백 
	const passwordChecker = pwdcheck => {
		passwordCheck.current = pwdcheck;
		props.passwordChecker(pwdcheck);
	};

	// Input 우측 지우기 마크 클릭 콜백함수
	const onPressClear = () => {
		passwordValue.current='';
		passwordCheck.current='';
		checkerRef.current.clear();
		props.onConfirmAndChecked&&props.onConfirmAndChecked(false);
		//명령형으로 변경, 명령형은 리엑트에서 권장하지 않으나 특정 기능(패스워드 인풋의 클리어 버튼을 눌렸을 때 체크란의 입력 내용도 클리어하기 위한)만을 
		//위한 Props를 선언하여 Input컴포넌트 내부에서 처리하게 되면 상위 레벨에서 동작을 파악하기 어려움(PasswordInput끼리의 로직은 PasswordInput내부보다는 상위 레벨에 위치)
		props.onPressClear(); //클리어 동작에 대한 알림을 부모가 처리해야할 필요가 있는지?
	};

	//비밀번호 확인의 지우기 버튼 클릭
	const onPressCheckClear = () => {
		passwordCheck.current='';
		props.onConfirmAndChecked&&props.onConfirmAndChecked(false);
	}

	//비밀번호 입력 형식 검사
	const passwordValidator = password => {
		let isValid = props.passwordValidator(password);
		let isMatch = password === passwordCheck.current;
		checkerRef.current.valid(passwordCheck.current);
		props.onConfirmAndChecked&&props.onConfirmAndChecked(isValid&&isMatch);
		return isValid;
	};

	const passwordMatcher = pwdcheck => {
		let isValid = props.passwordValidator(passwordValue.current);
		let isMatch = passwordValue.current === pwdcheck;
		props.onConfirmAndChecked&&props.onConfirmAndChecked(isValid&&isMatch);
		return isMatch;
	};
	console.log('render');
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
					onChange={onChangePwd}
					validator={passwordValidator}
					// confirm={props.pwdValid} confirm은 validator의 값 반환여부에 따라 컴포넌트 내부에서 결정
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
					onChange={passwordChecker}
					validator={passwordMatcher}
					// confirm={props.pwdCheck}
					ref={checkerRef}
					onClear={onPressCheckClear}
					// clear={isClear} 삭제 onPressClear주석 참조
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
					onChange={props.checkPresentPwd}
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
					onChange={passwordValidator}
					confirm={props.pwdValid}
					onClear={onPressClear}
				/>
			</View>
			<View style={[passwordChecker_style.passwordInput_resetMode]}>
				<PasswordInput
					title={'새로운 비밀번호 확인'}
					placeholder={'새로운 비밀번호'}
					onChange={passwordChecker}
					confirm={props.pwdValid}
					information={'비밀번호를 다시 한 번 적어주세요.'}
				/>
			</View>
		</View>
	);
};

PasswordChecker.defaultProps = {
	isResetPwdMode: false, // 일반 비밀번호 설정 모드로 호출? or 비밀번호 변경 모드
	passwordValidator: e => console.log('passwordchecker Default Validator : '+e), // 비밀번호, 새로운 비밀번호 입력 콜백함수
	passwordChecker: e => console.log('passwordchecker Default passwordChecker : '+e), // 비밀번호 확인, 새로운 비밀번화 확인(변경 모드) 입력 콜백함수
	checkPresentPwd: e => console.log('passwordchecker Default checkPresentPwd : '+e), // 비밀번호 변경 모드일 떄 - 현재 비밀번호 값 입력 콜백함수,
	presentPwdValid: false, // 비밀번호 변경 모드에서 현재 비밀번호 입력값이 DB값과 일치하는지 T/F
	pwdValid: false, // 부모 컴포넌트에서 보내는 비밀번호, 새로운비밀번호의 입력값이 양식에 맞게 작성되었는지 T/F
	pwdCheck: false, // 부모 컴포넌트에서 보내는 비밀번호 확인, 새로운 비밀번호 확인란의 입력값이 위의 비밀번호 값과 정확히 일치하는지 T/F
	onPressClear: e => console.log('passwordchecker Default onPressClear : '+e), //  지우기가 클릭되었을 경우
	onConfirmAndChecked: e=> console.log('passwordchecker Default onConfirmAndChecked : '+e) //validation 검사, 입력값 체크가 완료되었는지 부모 컴포넌트에 전달.
};
