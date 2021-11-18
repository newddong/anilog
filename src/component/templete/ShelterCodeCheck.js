import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { GRAY20 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { btn_w654 } from '../atom/btn/btn_style';
import { NextMark } from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import { login_style, btn_style, temp_style, shelterCodeCheck_style } from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterCodeCheck = props => {

	const [confirmed, setConfirmed] = React.useState(false) //보호소 코드 인증 boolean

	const goToNextStep = () => {
		props.navigation.push('ShelterAssignEntrance');
	};
	const onInquery = () => {
		// props.navigation.push('');
		alert('문의하기')
	}

	const codeChecker = code => {
		console.log(code)
		code.length > 1 ? setConfirmed(true) : null
	}

	return (
		<View style={[login_style.wrp_main, { flex: 1 }]}>
			<View style={[temp_style.textMsg]}>
				<Text style={[txt.noto28]}>발급받은 코드를 입력해주세요.</Text>
			</View>

			<View style={[temp_style.input30]}>
				<Input24 placeholder={'보호소 코드를 입력해주세요.'} onChange={code => codeChecker(code)} />
			</View>

			<View style={[btn_style.queryBtn, shelterCodeCheck_style.queryBtn]}>
				<Text style={[txt.noto24, { color: GRAY20 }]}>보호소 등록을 하고 싶으신가요?     </Text>
				<Text style={[txt.noto24,]}>문의하기   </Text>
				<NextMark onPress={onInquery} />
			</View>

			<View style={[btn_style.btn_w654, shelterCodeCheck_style.btn_w654]}>
				<AniButton btnTitle={'다음'} btnTheme={'shadow'} disable={confirmed ? false : true} btnLayout={btn_w654} titleFontStyle={32} onPress={goToNextStep} />
			</View>
		</View>
	);
};
