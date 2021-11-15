import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Calendar48_Border} from '../atom/icon';
import {APRI10} from 'Root/config/color';
import Calendar from 'Root/test_sangwoo/calendar';
/**
 *
 * @param {{
 * width : 'number / 전체 DatePicker의 너비',
 * onDateChange : '달력에서 날짜가 선택되었을 때 실행되는 CallBack',
 * defaultDate : 'ex) 2021.05.01  처음 설정되어 있는 날짜'
 * }} props
 */
export default DatePicker = props => {
	const [btnStatus, setBtnStatus] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState(props.defaultDate);

	const onDateChange = date => {
		setSelectedDate(date);
		setBtnStatus(false);
		props.onDateChange(date);
	};

	const openCalendar = () => {
		setBtnStatus(true);
	};
	return (
		<View
			style={{
				width: props.width * DP,
				height: 82 * DP,
			}}>
			<View
				style={{
					borderBottomColor: APRI10,
					borderBottomWidth: 2 * DP,
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<Text
					style={[
						txt.roboto28,
						{
							lineHeight: 44 * DP,
							paddingLeft: 24 * DP,
							paddingVertical: 18 * DP, // Value와 최상위 View와의 paddingVertical 16px
						},
					]}>
					{selectedDate}
				</Text>
				<TouchableOpacity onPress={openCalendar} style={{position: 'absolute', right: 15 * DP}}>
					<Calendar48_Border />
				</TouchableOpacity>
			</View>
			<Calendar modalOn={btnStatus} modalOff={() => setBtnStatus(false)} selectDate={date => onDateChange(date)} />
		</View>
	);
};
DatePicker.defaultProps = {
	value: null,
	width: 520, //전체 DatePicker의 너비
	onDateChange: e => console.log(e),
	defaultDate: '2021.05.01',
};
