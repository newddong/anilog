import React from 'react';
import {Text, View} from 'react-native';
import {login_style, setPetInformation, temp_style} from './style_templete';
import {txt} from 'Root/config/textstyle';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import DatePicker from '../molecules/DatePicker';
import Input30 from '../molecules/Input30';
import RadioBox from '../molecules/RadioBox';
import moment from 'moment';

export default SetPetInformation = ({route, navigation}) => {
	const [selectedBirthDate, setSelectedBirthDate] = React.useState('2021.11.01');

	const [data, setData] = React.useState(route.params);

	React.useEffect(() => {
		navigation.setParams({route_name: route.name, data: data});
	}, [data]);

	//생일 TypeParsing / 차후 정리 예정
	const parseBirth = () => {
		if (data.pet_birthday.length < 15) {
			return data.pet_birthday;
		} else {
			let date = moment(data.pet_birthday).format('YYYY.MM.DD');
			date = date.toString();
			return date;
		}
	};

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
		return <Text style={[txt.noto22]}>{birthDate()}</Text>;
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

	//체중
	const weigthValid = e => {
		var regExp = /^[\D]{1,20}$/;
		return regExp.test(e);
	};

	//성별 변경 발생
	const onSexChange = e => {
		let gender = '';
		e == 0 ? (gender = 'male') : (gender = 'female');
		setData({...data, pet_sex: gender});
	};

	//중성화 선택
	const onSelectNeutralization = index => {
		let neutralization = '';
		if (index == 0) {
			neutralization = 'yes';
		} else if (index == 1) {
			neutralization = 'no';
		} else if (index == 2) {
			neutralization = 'unknown';
		}
		setData({...data, pet_neutralization: neutralization});
	};

	const getNeutralizationDefault = () => {
		let index = 0;
		switch (data.pet_neutralization) {
			case 'yes':
				index = 0;
				break;
			case 'no':
				index = 1;
				break;
			case 'unknown':
				index = 2;
				break;
			default:
				break;
		}
		return index;
	};

	return (
		<View style={[login_style.wrp_main, setPetInformation.container]}>
			<View style={[setPetInformation.inputForm]}>
				{/* 성별 */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>성별</Text>
						</View>
					</View>
					<View style={[temp_style.tabSelectFilled_Type1]}>
						<TabSelectFilled_Type1 items={['남아', '여아']} defaultIndex={data.pet_sex == 'male' ? 0 : 1} onSelect={onSexChange} width={520} />
					</View>
				</View>
				{/* 생일 */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>생일</Text>
						</View>
					</View>
					<View style={[setPetInformation.datePicker]}>
						<DatePicker onDateChange={onSelectBirthDate} defaultDate={parseBirth()} width={290} />
					</View>
					<View style={[setPetInformation.birthTime]}>{getBirthDate()}</View>
				</View>
				{/* 체중 */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>체중</Text>
						</View>
					</View>
					<View style={[setPetInformation.inputNoTitle]}>
						<Input30
							alert_msg={'숫자 0 이상의 값을 입력하세요'}
							showmsg={false}
							confirm={true}
							showTitle={false}
							width={154}
							placeholder={'몸무게 입력'}
							clearMark={false}
							onChange={onChangeKg}
							value={data.pet_weight}
							validator={weigthValid}
							keyboardType={'number-pad'}
						/>
					</View>
					<View style={[setPetInformation.kg]}>
						<Text style={[txt.noto28]}> kg </Text>
					</View>
				</View>
				{/* 중성화 */}
				<View style={[setPetInformation.radioBoxForm]}>
					<View style={[setPetInformation.radioBox_left]}>
						<Text style={[txt.noto28]}>중성화</Text>
					</View>
					<View style={[setPetInformation.radioBox_right]}>
						<RadioBox items={['예', '아니오', '모름']} onSelect={onSelectNeutralization} defaultSelect={getNeutralizationDefault()} />
					</View>
				</View>
			</View>
		</View>
	);
};
