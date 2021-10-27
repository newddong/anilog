import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Calendar48Border} from '../atom/icon';
import {APRI10} from 'Root/config/color';
import Calendar from 'Root/test_sangwoo/calendar';
export default DatePicker = props => {

	const [btnStatus, setBtnStatus] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState('2021.07.10');

	const onDateChange = date => {
		setSelectedDate(date);
		setBtnStatus(false);
		props.onDateChange(date)
	};

	const openCalendar = () => {
		setBtnStatus(true);
	};
	return (
		<View style={{height: 82 * DP}}>
			<View style={{width: 520 * DP, borderBottomColor: APRI10, borderBottomWidth: 2 * DP, flexDirection: 'row', alignItems: 'center'}}>
				<Text
					style={[
						txt.roboto28,
						{
							lineHeight: 44 * DP,
							paddingLeft: 14 * DP,
							paddingVertical: 18 * DP, // Value와 최상위 View와의 paddingVertical 16px
						},
					]}>
					{selectedDate}
				</Text>
				<TouchableOpacity onPress={openCalendar} style={{marginLeft: 294 * DP}}>
					<Calendar48Border />
				</TouchableOpacity>
			</View>
			<Calendar modalOn={btnStatus} modalOff={() => setBtnStatus(false)} selectDate={date => onDateChange(date)} />
		</View>
	);
};
DatePicker.defaultProps = {
	value: null,
	onDateChange : (e) =>console.log(e)
};
