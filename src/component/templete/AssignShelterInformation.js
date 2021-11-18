import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { APRI10, GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { btn_w654 } from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import Input24 from '../molecules/Input24';
import { login_style, btn_style, temp_style, progressbar_style, assignShelterInformation_style } from './style_templete';
import InputWithSelect from '../molecules/InputWithSelect';
import { initial_number } from 'Root/config/dummyDate_json';
import InputWithEmail from '../molecules/InputWithEmail';
import DatePicker from '../molecules/DatePicker';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignShelterInformation = props => {

	console.log(props.route.params)

	const moveToCheckShelterPassword = () => {
		props.navigation.push('CheckShelterPassword');
	};

	const onChangeHp = hp => {
		console.log(hp)
	}
	return (
		<View style={[login_style.wrp_main, { flex: 1 }]}>
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
					insideBarStyle={{ height: 20 * DP, backgroundColor: APRI10, borderRadius: 5 * DP }} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={3} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, { marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10 }]} //text의 스타일
				/>
			</View>

			{/* InputForm */}
			<View>
				{/* (M)InputWithSelect */}
				<View style={[temp_style.inputWithSelect_assignShelterInformation, assignShelterInformation_style.input24A]}>
					<InputWithSelect
						placeholder={'전화번호 입력란'}
						title={'전화번호'}
						title_star={true}
						alert_msg={'등록한 전화번호로 로그인이 가능합니다.'}
						items={initial_number}
					/>
				</View>

				{/* (M)InputWithEmail */}
				<View style={[temp_style.inputWithSelect_assignShelterInformation, assignShelterInformation_style.inputWithEmail]}>
					<InputWithEmail
						placeholder={'이메일 입력란'}
						title={'E-mail'}
						title_star={true}
						items={initial_number}
					/>
				</View>

				{/* (M)Input24A */}
				<View style={[temp_style.inputWithSelect_assignShelterInformation, assignShelterInformation_style.input24A,]}>
					<Input24 title={'홈페이지'} placeholder={'내용 입력...'} onChange={hp => onChangeHp(hp)} descriptionType={'none'} showHttp={true} />
				</View>

				{/* (M)DatePicker */}
				<View style={[temp_style.datePicker_assignShelterInformation, assignShelterInformation_style.datePicker]}>
					<DatePicker width={654} />
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<TouchableWithoutFeedback onPress={moveToCheckShelterPassword}>
				<View style={[btn_style.btn_w654, assignShelterInformation_style.btn_w654]}>
					<Text>(A)Btn_w654(다음)</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
