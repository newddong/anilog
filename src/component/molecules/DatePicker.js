import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY30, Arrow_Up_GRAY30, Calendar48Border} from '../atom/icon';
import {APRI10, GRAY30} from 'Root/config/color';
import Calendar from 'Root/test_sangwoo/calendar';
export default DatePicker = props => {
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState('2021.07.08');

	//현재는 txtInput형태, 차후 Dropdown으로 바꿀 시 다른 방식
	const onDateChange = date => {
		setSelectedItem(date);
		setBtnStatus(false)
	};

	const openCalendar = () => {
		setBtnStatus(true)
	}
	return (
		<View style={{height: 82 * DP,}}>
			<View style={{alignItems: 'center', width:520*DP,borderBottomColor: APRI10, borderBottomWidth: 2 * DP, flexDirection:'row'}}>
				<Text
					onChangeText={txt => onChange(txt)}
					style={[
						txt.roboto28,
						{
							includeFontPadding: false,
							lineHeight: 44 * DP,
							paddingLeft:14*DP,
							paddingVertical: 18 * DP, // Value와 최상위 View와의 paddingVertical 16px
						},
					]}>
					{selectedItem}
				</Text>
				<TouchableOpacity onPress={openCalendar} style={{marginLeft:294*DP}}><Calendar48Border/></TouchableOpacity>
			</View>
			<Calendar modalOn={btnStatus} modalOff={()=> setBtnStatus(false)} selectDate={ date => onDateChange(date)}/>
		</View>
	);
};
InputWithSelect.defaultProps = {
	value: null,
};
