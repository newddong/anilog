import React from 'react';
import {View, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import Input24 from '../molecules/Input24';
import {login_style, btn_style, temp_style, progressbar_style, assignShelterInformation_style} from './style_templete';
import InputWithSelect from '../molecules/InputWithSelect';
import {initial_number, email_supplier} from 'Root/config/dummyDate_json';
import InputWithEmail from '../molecules/InputWithEmail';
import DatePicker from '../molecules/DatePicker';
import {stagebar_style} from '../organism_ksw/style_organism';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignShelterInformation = props => {
	const [data, setData] = React.useState({
		...props.route.params.data,
		shelter_delegate_contact_number: '',
		user_email: '',
		shelter_homepage: '',
		shelter_foundation_date: '',
	});

	const [phoneConfirmed, setPhoneConfirmed] = React.useState(false);
	const [emailConfirmed, setEmailConfirmed] = React.useState(false);

	//확인버튼 클릭
	const goToNextStep = () => {
		// console.log(data);
		props.navigation.push('CheckShelterPassword', data);
	};

	//홈페이지
	const onChangeHp = hp => {
		// console.log(hp);
		setData({...data, shelter_homepage: hp});
	};

	//전화번호
	const onChangePhoneNumber = num => {
		// console.log(num);
		setData({...data, shelter_delegate_contact_number: num});
	};

	//이메일
	const onChangeEmail = email => {
		// console.log(email);
		setData({...data, user_email: email});
	};

	//설립일
	const onChangeDate = date => {
		// console.log(date);
		setData({...data, shelter_foundation_date: date});
	};

	const onValidEmail = isValid => {
		setEmailConfirmed(isValid);
	};

	const onValidPhoneNumber = isValid => {
		setPhoneConfirmed(isValid);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
					current={3} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
				/>
			</View>
			<TouchableWithoutFeedback onPress={() => console.log(data)}>
				<View
					style={{
						backgroundColor: 'red',
						height: 30,
						width: 30,
						position: 'absolute',
						borderWidth: 1,
						borderColor: 'blue',
						top: 0,
						left: 0,
					}}></View>
			</TouchableWithoutFeedback>
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
						keyboardType={'number-pad'}
						onChange={onChangePhoneNumber}
						onValid={onValidPhoneNumber}
					/>
				</View>

				{/* (M)InputWithEmail */}
				<View style={[temp_style.inputWithSelect_assignShelterInformation, assignShelterInformation_style.inputWithEmail]}>
					<InputWithEmail
						placeholder={'이메일 입력란'}
						title={'E-mail'}
						title_star={true}
						dropdownItems={email_supplier}
						onChange={onChangeEmail}
						onValid={onValidEmail}
					/>
				</View>

				{/* (M)Input24A */}
				<View style={[temp_style.inputWithSelect_assignShelterInformation, assignShelterInformation_style.input24A]}>
					<Input24
						title={'홈페이지'}
						placeholder={'내용 입력...'}
						descriptionType={'none'}
						showHttp={true}
						showCrossMark={false}
						onChange={onChangeHp}
						value={data.shelter_homepage}
					/>
				</View>

				{/* (M)DatePicker */}
				<View style={[temp_style.datePicker_assignShelterInformation, assignShelterInformation_style.datePicker]}>
					<DatePicker width={654} title={'설립일'} onDateChange={onChangeDate} />
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignShelterInformation_style.btn_w654]}>
				<AniButton
					btnTitle={'확인'}
					btnTheme={'shadow'}
					disable={!phoneConfirmed || !emailConfirmed}
					btnLayout={btn_w654}
					titleFontStyle={32}
					onPress={goToNextStep}
				/>
			</View>
		</View>
	);
};
