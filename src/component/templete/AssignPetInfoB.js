import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import Stagebar from '../molecules/Stagebar';
import AniButton from '../molecules/AniButton';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style} from './style_templete';
import DatePicker from '../molecules/DatePicker';
import Modal from '../modal/Modal';
import Input30 from '../molecules/Input30';
import {assignPet} from 'Root/api/userapi';
import {stagebar_style} from '../organism_ksw/style_organism';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default AssignPetInfoB = props => {
	console.log(props.route.params);
	const navigation = useNavigation();

	const [data, setData] = React.useState({
		...props.route.params,
		pet_birthday: '2021.01.01',
		pet_weight: '0',
	});
	const [selectedBirthDate, setSelectedBirthDate] = React.useState('2021.03.01');

	//생녈월일 계산 함수
	const getBirthDate = () => {
		const today = new Date().getTime();
		let split = selectedBirthDate.split('.');
		const selectDate = new Date(split[0], split[1] - 1, split[2]);
		const duration = (today - selectDate.getTime()) / 1000;
		// console.log(duration / 86400); //하루단위
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

	//생일이 지정되었을 때
	const onSelectBirthDate = date => {
		setSelectedBirthDate(date);
		setData({...data, pet_birthday: date});
	};

	//체중 Input Value 바뀌었을 때
	const onChangeKg = kg => {
		setData({...data, pet_weight: kg});
	};

	const e = {
		pet_birthday: '2021.11.18',
		pet_is_temp_protection: true,
		pet_neutralization: 'unknown',
		pet_sex: 'male',
		pet_species: '기타',
		pet_species_detail: '토끼',
		pet_status: 'protect',
		pet_weight: '1',
		user_nickname: '우사기',
		user_profile_uri:
			'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/DF4BC943-9D90-4DC6-ACF2-18B4AD440006/tmp/3AD4B6FE-9E25-435D-ACED-AE9BD7235449.jpg',
		userobject_id: undefined,
	};
	//등록 완료
	const onRegister = async () => {

		Modal.popNoBtn('반려동물 등록 중입니다.');
		console.log('data before assiginPet', data);
		assignPet(
			{...data, userobject_id: data.userobject_id},
			success => {
				console.log('success', success);
				Modal.close();
				Modal.popOneBtn('반려동물 등록이 완료되었습니다.', '확인', () => {
					Modal.close();
					props.navigation.reset({
						index: 0,
						routes: [{name: data.previousRouteName}],
					});
				});
			},
			error => {
				console.log('error', error);
				Modal.close();

				Modal.popOneBtn(error, '확인', () => Modal.close());
			},
		);
	};

	const weigthValid = e => {
		var regExp = /^[\D]{1,20}$/;
		return regExp.test(e);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
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
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={3} //현재 단계를 정의
					maxstage={3} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
				/>
			</View>

			{/* 안내문 */}
			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>반려 동물의 생일과 체중, 중성화 여부를 적어주세요.</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoB, assignPetInfo_style.inputForm]}>
				{/* InputForm 생일 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[txt.noto28, temp_style.text_assignPetInfo, {color: GRAY10}]}>생일</Text>
					<View style={[temp_style.datePicker_assignPetInfo_depth1, assignPetInfo_style.datePicker_depth1]}>
						<DatePicker width={290} onDateChange={onSelectBirthDate} defaultDate={selectedBirthDate} />
					</View>
					<Text style={[temp_style.text218_assignPetInfo, assignPetInfo_style.text218]}>{getBirthDate()}</Text>
				</View>

				{/* InputForm 체중 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[txt.noto28, temp_style.text_assignPetInfo, {color: GRAY10}]}>체중</Text>
					<View style={[temp_style.inputNoTitle_assignPetInfo, assignPetInfo_style.inputNoTitle]}>
						<Input30
							alert_msg={'숫자 0 이상의 값을 입력하세요'}
							showmsg={false}
							confirm={true}
							showTitle={false}
							width={200}
							placeholder={'몸무게 입력'}
							clearMark={false}
							onChange={onChangeKg}
							value={data.pet_weight}
							validator={weigthValid}
							keyboardType={'number-pad'}
						/>
					</View>
					<Text style={[temp_style.text68_assignPetInfo, assignPetInfo_style.text68, txt.noto28]}>kg</Text>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewB]}>
				<View style={[btn_style.btn_w226]}>
					<AniButton btnTitle={'뒤로'} btnTheme={'shadow'} btnStyle={'border'} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
					<AniButton btnTitle={'등록'} btnTheme={'shadow'} onPress={onRegister} />
				</View>
			</View>
		</View>
	);
};
