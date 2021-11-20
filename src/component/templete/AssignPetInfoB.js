import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { APRI10, GRAY10, GRAY20 } from 'Root/config/color';
import DP from 'Root/config/dp';
import { txt } from 'Root/config/textstyle';
import Stagebar from '../molecules/Stagebar';
import { btn_w226 } from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import { login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style } from './style_templete';
import DatePicker from '../molecules/DatePicker';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetInfoB = props => {
	const navigation = useNavigation();

	const moveToMainTab = () => {
		props.navigation.push('MainTab');
	};

	//생녈월일 계산 함수
	const [selectedBirthDate, setSelectedBirthDate] = React.useState('2021.03.01');
	const getBirthDate = () => {
		const today = new Date().getTime();
		let split = selectedBirthDate.split('.');
		const selectDate = new Date(split[0], split[1] - 1, split[2]);
		const duration = (today - selectDate.getTime()) / 1000;
		console.log(duration / 86400); //하루단위
		const birthDate = () => {
			let year = parseInt(duration / 86400 / 365) + '년 ';
			let month = parseInt(((duration / 86400) % 365) / 30) + '개월';
			if (parseInt(duration / 86400 / 365) == 0) {
				year = '';
			}
			return year + month;
		};
		return <Text>{birthDate()}</Text>;
	};

	const onRegister = () => {
		alert('등록이 완료되었습니다');
		navigation.navigate('MainTab');
	}

	return (
		<View style={[login_style.wrp_main, { flex: 1 }]}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 20 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{ width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP }} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={3} //현재 단계를 정의
					maxstage={3} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, { marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10 }]} //text의 스타일
				/>
			</View>

			{/* 안내문 */}
			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text style={[txt.noto24, { color: GRAY10 }]}>반려 동물의 생일과 체중, 중성화 여부를 적어주세요.</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoB, assignPetInfo_style.inputForm]}>
				{/* InputForm 생일 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[txt.noto28, temp_style.text_assignPetInfo, { color: GRAY10 }]}>생일</Text>
					<View style={[temp_style.datePicker_assignPetInfo_depth1, assignPetInfo_style.datePicker_depth1]}>
						<DatePicker width={290} onDateChange={e => setSelectedBirthDate(e)} defaultDate={selectedBirthDate} />
					</View>
					<Text style={[temp_style.text218_assignPetInfo, assignPetInfo_style.text218]}>{getBirthDate()}</Text>
				</View>

				{/* InputForm 체중 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[txt.noto28, temp_style.text_assignPetInfo, { color: GRAY10 }]}>체중</Text>
					<View style={[temp_style.inputNoTitle_assignPetInfo, assignPetInfo_style.inputNoTitle]}>
						<Input30 showTitle={false} width={200} placeholder={'몸무게 입력'} />
					</View>
					<Text style={[temp_style.text68_assignPetInfo, assignPetInfo_style.text68, txt.noto28]}>kg</Text>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewB]}>
				<TouchableWithoutFeedback onPress={props.navigation.goBack}>
					<View style={[btn_style.btn_w226]}>
						<AniButton
							btnTitle={'뒤로'}
							btnTheme={'shadow'}
							btnStyle={'border'}
							btnLayout={btn_w226}
							titleFontStyle={24}
							onPress={() => navigation.goBack()}
						/>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={moveToMainTab}>
					<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
						<AniButton
							btnTitle={'등록'}
							btnTheme={'shadow'}
							btnStyle={'filled'}
							btnLayout={btn_w226}
							titleFontStyle={24}
							onPress={onRegister}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};
