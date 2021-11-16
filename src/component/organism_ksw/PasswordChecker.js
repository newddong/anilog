import React from 'react';
import {View} from 'react-native';
import PasswordInput from '../molecules/PasswordInput';
import {passwordChecker} from './style_organism';

export default PasswordChecker = props => {
	//resetPwd가 true일 경우 pwdInput이 3개 출현 (현재암호 / 바꿀 암호 / 바꿀 암호 확인)
	const [resetPwd, setResetPwd] = React.useState(true);
	return resetPwd ? (
		<View style={[passwordChecker.container_resetMode]}>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput title={'현재 비밀번호'} />
			</View>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput title={'비밀번호'} description={'최소 8자 이상, 영문과 숫자만 입력 가능합니다.'} />
			</View>
			<View style={[passwordChecker.passwordInput_resetMode]}>
				<PasswordInput title={'비밀번호 확인'} />
			</View>
		</View>
	) : (
		<View style={[passwordChecker.container_initMode]}>
			<View style={[passwordChecker.passwordInput_initMode]}>
				<PasswordInput title={'비밀번호'} />
			</View>
			<View style={[passwordChecker.passwordInput_doubleCheck]}>
				<PasswordInput title={'비밀번호 확인'} />
			</View>
		</View>
	);
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
