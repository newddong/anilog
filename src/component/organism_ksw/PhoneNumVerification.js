import React from 'react';
import {Text, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import InputTimeLimit from '../molecules/InputTimeLimit';
import InputWithSelect from '../molecules/InputWithSelect';
import {btn_style, temp_style} from '../templete/style_templete';
import {phoneNumVerification} from './style_organism';

export default PhoneNumVerification = props => {
	return (
		<View style={[phoneNumVerification.container]}>
			<View style={[temp_style.input30, phoneNumVerification.input30]}>
				<Input30 showTitle={false} />
			</View>
			<View style={[temp_style.inputWithSelect, phoneNumVerification.inputWithSelect]}>
				<InputWithSelect />
			</View>
			<View style={{flexDirection: 'row', backgroundColor: 'white'}}>
				<View style={[phoneNumVerification.inputTimeLimit]}>
					<InputTimeLimit />
				</View>
				<View style={[btn_style.btn_w226, phoneNumVerification.btn_w226]}>
					<AniButton btnLayout={btn_w226} btnTitle={'인증요청'} btnTheme={'shadow'} btnStyle={'filled'} titleFontStyle={24} />
				</View>
			</View>
		</View>
	);
};

// btnTitle: 'title', //버튼의 제목
// 	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
// 	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
// 	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
// 	titleFontStyle: 24 * DP, // titleFontStyle - title의 폰트 크기
// 	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
// 	onPress: {}, // 버튼을 탭했을때 발생하는 콜백
