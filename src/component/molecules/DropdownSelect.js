import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, View, TouchableOpacity } from 'react-native';
import DP from 'Root/config/dp';
import { Arrow_Down_GRAY20, Arrow_Up_GRAY20 } from '../atom/icon';
import { APRI10, GRAY40 } from 'Root/config/color';
import Dropdown from './Dropdown';

/**
 *
 * @param {{
 *	value: object,
 *	items: object,
 *	defaultIndex: number,
 *	width: number,
 *	onChange: 'Callback',
 *	textStyle: 'Text Style',
 * }} props
 */
export default DropdownSelect = props => {
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.items[props.defaultIndex]);

	React.useEffect(() => {
		//selectedItem이 DropDown 선택으로 인해 바뀌면 수행되는 함수
		//현재 Dropdown은 미구현 상태
		onChange = () => {
			props.onChange(txt);
		};
	}, [selectedItem]);

	return (
		<View style={{ height: 82 * DP, flexDirection: 'row' }}>
			<View
				style={{
					width: props.width * DP,
					borderBottomColor: selectedItem == props.items[0] ? GRAY40 : APRI10,
					borderBottomWidth: 2 * DP,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Text
					style={[
						txt.noto28,
						props.textStyle,
						{
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							// textAlign: 'center',
							marginRight: 40 * DP,
							color: selectedItem == props.items[0] ? GRAY40 : null,
						},
					]}>
					{selectedItem}
				</Text>
				<View
					style={{
						height: 82 * DP,
						width: 48 * DP,
						position: 'absolute',
						justifyContent: 'center',
						alignItems: 'center',
						right: 2 * DP,
					}}>
					{/* 버튼staus가 true일 경우 위화살표 방향, false일 경우 아래 화살표 방향 */}
					{btnStatus ? <Arrow_Up_GRAY20 onPress={() => setBtnStatus(!btnStatus)} /> : <Arrow_Down_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />}
				</View>
			</View>
		</View>
	);
};
DropdownSelect.defaultProps = {
	value: null,
	items: [1, 2, 3, 4], //DropDown될 리스트 목록
	defaultIndex: 0, // DropDown Default상태의 index
	width: 180, //Select+Text 부분의 width Default=180(5글자)
	onChange: e => console.log(e),
	textStyle: null,
};
