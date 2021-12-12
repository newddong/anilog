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
	const [userName, setUserName] = React.useState('');
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
		setUserName(text);
		props.onNameInputChange(text);
	};
	const onPhoneNumberInputChange = number => {
		props.onPhoneNumberInputChange(number);
	};
	const onMobileCompanyInputChange = (company, index) => {
		props.onMobileCompanyInputChange(company, index);
	};
	const onVerificationNumberChange = verified_num => {
		props.onVerificationNumberChange(verified_num);
	};
	return (
		<View style={[phoneNumVerification.container]}>
			<View style={[temp_style.input30, phoneNumVerification.input30]}>
				<Input30 showTitle={false} width={654} placeholder={'이름 입력'} onChange={onNameInputChange} value={userName} />
			</View>
			<View style={[temp_style.inputWithSelect, phoneNumVerification.inputWithSelect]}>
				<InputWithSelect
					width={654}
					items={mobile_carrier}
					placeholder={'휴대폰 번호 입력(-제외)'}
					onChange={onPhoneNumberInputChange}
					onSelectDropDown={onMobileCompanyInputChange}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<View style={[phoneNumVerification.inputTimeLimit]}>
					<InputTimeLimit
						width={400}
						timelimit={5}
						onEndTimer={onEndTimer}
						onChange={onVerificationNumberChange}
						placeholder={'인증번호 입력'}
						timeout_msg={'인증 가능한 시간이 초과되었습니다.'}
						alert_msg={'인증번호가 일치하지 않습니다.'}
					/>
				</View>
				<View style={[btn_style.btn_w226, phoneNumVerification.btn_w226]}>
					{timeOut ? (
						<AniButton btnTitle={'인증 재요청'} btnStyle={'border'} onPress={requestReVerification} />
					) : (
						<AniButton btnTitle={'인증 요청'} onPress={requestVerification} />
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
	onMobileCompanyInputChange: e => console.log(e),
};
