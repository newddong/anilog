import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20} from '../atom/icon';
import {APRI10} from 'Root/config/color';

export default DropdownSelect = props => {
	
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);

	React.useEffect(()=>{
		//selectedItem이 DropDown 선택으로 인해 바뀌면 수행되는 함수
		//현재 Dropdown은 미구현 상태
		onChange = () => {
			props.onChange(txt)
		}
	},[selectedItem])
	

	return (
		<View style={{height: 82 * DP, flexDirection: 'row'}}>
			<View style={{alignItems: 'center', borderBottomColor: APRI10, borderBottomWidth: 2 * DP}}>
				<Text
					style={[
						txt.noto28,
						{
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							textAlign: 'center',
							paddingHorizontal: 169 * DP,
						},
					]}>
					{selectedItem}
				</Text>
			</View>
			<TouchableOpacity
				onPress={() => setBtnStatus(!btnStatus)}
				style={{borderBottomColor: APRI10, borderBottomWidth: 2 * DP, height: 82 * DP, justifyContent: 'center'}}>
				{/* 버튼staus가 true일 경우 위화살표 방향, false일 경우 아래 화살표 방향 */}
				{btnStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
			</TouchableOpacity>
		</View>
	);
};
DropdownSelect.defaultProps = {
	value: null,
	itemList: null,
	onChange: e => console.log(e),
};
