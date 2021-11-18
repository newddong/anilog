import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import TabSelectBorder_Type1 from '../molecules/TabSelectBorder_Type1';
import EmailVerification from '../organism_ksw/EmailVerification';
import PhoneNumVerification from '../organism_ksw/PhoneNumVerification';
import {login_style, btn_style, temp_style, progressbar_style, userAssign} from './style_templete';

// DropDown 컴포넌트 해결될 시 props처리와 data처리 추가해야함
// 이메일부분 삭제 컨펌 나면 삭제 실시 예정

export default UserVerification = props => {
	const [data, setData] = React.useState({
		...props.route.params,
		user_name: 'name',
		user_phone_number: '01096450422',
		user_mobile_company: 'SKT',
	});

	const [tabState, setTabState] = React.useState(0);
	const [verified, setVerified] = React.useState(false);
	const [verified_num, setVerified_num] = React.useState();

	const goToNextStep = () => {
		console.log(data);
		props.navigation.push('UserPasswordCheck', data);
	};

	const changeTabState = state => {
		setTabState(state);
	};
	const onVerificationNumberChange = num => {
		console.log(num);
		setVerified_num(num);
	};
	const onNameInputChange = name => {
		setData({...data, user_name: name});
		console.log(name);
	};
	const onPhoneNumberInputChange = phone_num => {
		console.log(phone_num);
		setData({...data, user_phone_number: phone_num});
	};
	const verificationRequest = () => {
		console.log(verified_num);
		setVerified(true);

		console.log('requestVerification');
	};
	const reVerificationRequest = () => {
		console.log('requestReVerification');
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView>
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
						current={2} //현재 단계를 정의
						maxstage={4} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
					/>
				</View>

				{/* (M)TabSelectBorder_Type1 */}
				<View style={[temp_style.tabSelectBorder_Type1, userAssign.tabSelectBorder_Type1]}>
					<TabSelectBorder_Type1 items={['휴대폰 인증', '이메일 인증']} width={650} onSelect={state => changeTabState(state)} />
				</View>

				<View style={temp_style.textMassage}>
					<Text style={[userAssign.textMessageInside]}>휴대폰 번호나 이메일 주소로 </Text>
					<Text style={[userAssign.textMessageInside]}>가입이 가능합니다.</Text>
				</View>

				{tabState == 0 ? (
					<View style={[temp_style.phoneNumVerification]}>
						<PhoneNumVerification
							requestVerification={() => verificationRequest()}
							requestReVerification={() => reVerificationRequest()}
							onVerificationNumberChange={verifed_num => onVerificationNumberChange(verifed_num)}
							onNameInputChange={name => onNameInputChange(name)}
							onPhoneNumberInputChange={phone_num => onPhoneNumberInputChange(phone_num)}
						/>
					</View>
				) : (
					<View style={[temp_style.phoneNumVerification]}>
						<EmailVerification />
					</View>
				)}

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, userAssign.btn_w654]}>
					{verified ? (
						<AniButton btnTitle={'인증 완료'} btnLayout={btn_w654} btnTheme={'shadow'} titleFontStyle={32} onPress={goToNextStep} />
					) : (
						<AniButton btnTitle={'인증 완료'} btnLayout={btn_w654} disable={true} titleFontStyle={32} onPress={goToNextStep} />
					)}
				</View>
			</ScrollView>
		</View>
	);
};
