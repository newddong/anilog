import React from 'react';
import {Text, View} from 'react-native';
import {login_style, setPetInformation, temp_style} from './style_templete';
import {txt} from 'Root/config/textstyle';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import DatePicker from '../molecules/DatePicker';
import Input30 from '../molecules/Input30';
import RadioBox from '../molecules/RadioBox';

export default SetPetInformation = props => {
	//생녈월일 계산 함수
	const [selectedBirthDate, setSelectedBirthDate] = React.useState('2021.11.01');
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
		return <Text style={[txt.noto22]}>{birthDate()}</Text>;
	};

	return (
		<View style={[login_style.wrp_main, setPetInformation.container]}>
			<View style={[setPetInformation.inputForm]}>
				{/* tabSelectFilled_Type1 */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>성별</Text>
						</View>
					</View>
					<View style={[temp_style.tabSelectFilled_Type1]}>
						{/* <Text>tabSelectFilled_Type1</Text> */}
						<TabSelectFilled_Type1 items={['남아', '여아']} onSelect={e => alert(e)} width={520} />
					</View>
				</View>
				{/* DatePicker And Birth Time */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>생일</Text>
						</View>
					</View>
					<View style={[setPetInformation.datePicker]}>
						<DatePicker width={290} onDateChange={e => setSelectedBirthDate(e)} />
					</View>
					<View style={[setPetInformation.birthTime]}>{getBirthDate()}</View>
				</View>
				{/* weight Input Form */}
				<View style={[setPetInformation.inputForm_line_layout]}>
					<View style={[setPetInformation.inputForm_line_left]}>
						<View style={[setPetInformation.inputForm_line_left_text]}>
							<Text style={[txt.noto28]}>체중</Text>
						</View>
					</View>
					<View style={[setPetInformation.inputNoTitle]}>
						<Input30 width={156} showTitle={false} placeholder={'체중'} />
					</View>
					<View style={[setPetInformation.kg]}>
						<Text style={[txt.noto28]}> kg </Text>
					</View>
				</View>
				{/* RadioBox */}
				<View style={[setPetInformation.radioBoxForm]}>
					<View style={[setPetInformation.radioBox_left]}>
						<Text style={[txt.noto28]}>중성화</Text>
					</View>
					<View style={[setPetInformation.radioBox_right]}>
						<RadioBox items={['예', '아니오', '모름']} onSelect={e => alert(e)} />
					</View>
				</View>
			</View>
		</View>
	);
};

// RadioBox.defaultProps = {
// 	items: [1, 2, 3],
// 	values: null,
// 	selectableNumber: 1,
// 	horizontal: true,
// 	onSelect: e => console.log(e),
// };
