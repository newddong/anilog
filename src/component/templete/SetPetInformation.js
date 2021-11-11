import React from 'react';
import {Text, View} from 'react-native';
import {login_style, setPetInformation, temp_style, temp_txt} from './style_templete';
import {txt} from 'Root/config/textstyle';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import DatePicker from '../molecules/DatePicker';

export default SetPetInformation = props => {
	const [selectedBirthDate, setSelectedBirthDate] = React.useState();
	const getBirthDate = () => {};
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
						<TabSelectFilled_Type1 items={['남아', '여아']} onSelect={e => alert(e)} />
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
						<DatePicker width={290} onDateChange={e => console.log(e)} />
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
					<View style={[setPetInformation.inputNoTitle]}>{/* <Text style={[temp_txt.small]}>inputNoTitle</Text> */}</View>
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
						<Text> RadioBox</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
