import React from 'react';
import {Text, View} from 'react-native';
import {mobile_carrier} from 'Root/i18n/msg';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import InputTimeLimit from '../molecules/InputTimeLimit';
import InputWithSelect from '../molecules/InputWithSelect';
import {btn_style, temp_style} from '../templete/style_templete';
import {phoneNumVerification} from './style_organism';

/**
 *
 *@param {{
 *requestVerification: void,
 *requestReVerification: void,
 *onNameInputChange: void,
 *onPhoneNumberInputChange: void,
 *onVerificationNumberChange: void,
 * }} props
 */
export default PhoneNumVerification = props => {
	const [timeOut, setTimeOut] = React.useState(false);
	const onEndTimer = () => {
		setTimeOut(true);
	};
	const requestReVerification = () => {
		props.requestReVerification();
	};
	const requestVerification = () => {
		props.requestVerification();
	};
	const onNameInputChange = text => {
		props.onNameInputChange(text);
	};
	const onPhoneNumberInputChange = number => {
		props.onPhoneNumberInputChange(number);
	};
	const onVerificationNumberChange = verified_num => {
		props.onVerificationNumberChange(verified_num);
	};
	return (
		<View style={[phoneNumVerification.container]}>
			<View style={[temp_style.input30, phoneNumVerification.input30]}>
				<Input30 showTitle={false} width={654} placeholder={'이름 입력'} onChange={text => onNameInputChange(text)} />
			</View>
			<View style={[temp_style.inputWithSelect, phoneNumVerification.inputWithSelect]}>
				<InputWithSelect
					width={654}
					items={mobile_carrier}
					placeholder={'휴대폰 번호 입력(-제외)'}
					onChange={phoneNum => onPhoneNumberInputChange(phoneNum)}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<View style={[phoneNumVerification.inputTimeLimit]}>
					<InputTimeLimit
						width={400}
						timelimit={5}
						onEndTimer={onEndTimer}
						onChange={verified_num => onVerificationNumberChange(verified_num)}
						placeholder={'인증번호 입력'}
						timeout_msg={'인증 가능한 시간이 초과되었습니다.'}
						alert_msg={'인증번호가 일치하지 않습니다.'}
					/>
				</View>
				<View style={[btn_style.btn_w226, phoneNumVerification.btn_w226]}>
					{timeOut ? (
						<AniButton
							btnLayout={btn_w226}
							btnTitle={'인증 재요청'}
							btnTheme={'shadow'}
							btnStyle={'border'}
							titleFontStyle={24}
							onPress={requestReVerification}
						/>
					) : (
						<AniButton btnLayout={btn_w226} btnTitle={'인증 요청'} btnTheme={'shadow'} titleFontStyle={24} onPress={requestVerification} />
					)}
				</View>
			</View>
		</View>
	);
};

PhoneNumVerification.defaultProps = {
	onNameInputChange: e => console.log(e),
	requestReVerification: e => console.log(e),
	requestVerification: e => console.log(e),
	onPhoneNumberInputChange: e => console.log(e),
	onVerificationNumberChange: e => console.log(e),
};

// btnTitle: 'title', //버튼의 제목
// 	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
// 	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
// 	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
// 	titleFontStyle: 24 * DP, // titleFontStyle - title의 폰트 크기
// 	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
// 	onPress: {}, // 버튼을 탭했을때 발생하는 콜백
