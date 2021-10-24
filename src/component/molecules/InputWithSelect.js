import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY30, Arrow_Up_GRAY30} from '../atom/icon';
import {TextInput} from 'react-native-gesture-handler';
import {APRI10, GRAY30} from 'Root/config/color';
export default InputWithSelect = props => {
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);

	//BtnStatus가 true일 경우 아래방향 화살표, false일 경우 위방향 화살표
	const getArrow = () => {
		return btnStatus ? <Arrow_Up_GRAY30 /> : <Arrow_Down_GRAY30 />;
	};

	//현재는 txtInput형태, 차후 Dropdown으로 바꿀 시 다른 방식
	const handleChange = txt => {
		setSelectedItem(txt);
	};

	//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
	//우선 width를 가변적으로 주는 방식으로 해결
	const getWidth = () => {
		if (selectedItem == props.itemList[props.defaultIndex]) {
			return 190 * DP;
		}
	};

	//SelectedITem에 값이 있는 경우 APRI10으로 바뀐다
	const getBorderColor = () => {
		if (selectedItem == props.itemList[props.defaultIndex]) {
			return GRAY30;
		} else {
			return APRI10;
		}
	};
	return (
		<View style={{flexDirection: 'row', height: 82 * DP}}>
			<View style={{flexDirection: 'row', borderBottomWidth: 2 * DP, borderColor: getBorderColor(), alignItems: 'center'}}>
				<Text style={[txt.roboto28, {paddingLeft: 24 * DP, includeFontPadding: false, lineHeight: 44 * DP}]}> {selectedItem} </Text>
				<View style={{marginLeft: 43 * DP}}>
					<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)}>{getArrow()}</TouchableOpacity>
				</View>
				<View style={{alignItems: 'center',}}>
					<TextInput
						placeholder={props.placeholder}
						value={selectedItem}
						onChangeText={txt => handleChange(txt)}
						style={[
							txt.noto28,
							{
								includeFontPadding: false,
								lineHeight: 44 * DP,
								width: getWidth(),
								paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
								paddingLeft: 12 * DP, // Arrow버튼과 Value란 12px 차이
							},
						]}
					/>
				</View>
			</View>
			<TouchableOpacity onPress={() => setSelectedItem(props.itemList[props.defaultIndex + 1])}>
				<View style={{backgroundColor: 'powderblue', borderColor: 'black', borderWidth: 5, alignContent: 'center', justifyContent: 'center'}}>
					<Text>Border 변화확인용 버튼</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
InputWithSelect.defaultProps = {
	placeholder: 'placeholder',
	defaultIndex: 0,
	value: null,
};
