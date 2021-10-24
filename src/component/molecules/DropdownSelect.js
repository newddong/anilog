import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY30, Arrow_Up_GRAY30} from '../atom/icon';
import {APRI10, GRAY30} from 'Root/config/color';
export default DropdownSelect = props => {
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);

	//BtnStatus가 true일 경우 아래방향 화살표, false일 경우 위방향 화살표
	const getArrow = () => {
		return btnStatus ? <Arrow_Up_GRAY30 /> : <Arrow_Down_GRAY30 />;
	};

	//현재는 txtInput형태, 차후 Dropdown으로 바꿀 시 다른 방식
	const onChange = txt => {
		setSelectedItem(txt);
	};

	//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
	//우선 width를 가변적으로 주는 방식으로 해결

	return (
		<View style={{height: 82 * DP, flexDirection: 'row'}}>
			<View style={{alignItems: 'center', borderBottomColor: APRI10, borderBottomWidth: 2 * DP}}>
				<Text
					onChangeText={txt => onChange(txt)}
					style={[
						txt.noto28,
						{
							includeFontPadding: false,
							lineHeight: 44 * DP,
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							textAlign: 'center',
							paddingHorizontal: 169 * DP,
						},
					]}>
					{selectedItem}
				</Text>
			</View>
			<View style={{borderBottomColor: APRI10, borderBottomWidth: 2 * DP, height: 82 * DP, justifyContent: 'center'}}>
				<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)}>{getArrow()}</TouchableOpacity>
			</View>
		</View>
	);
};
InputWithSelect.defaultProps = {
	defaultIndex: 0,
	value: null,
};
