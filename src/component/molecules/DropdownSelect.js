import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, View, TouchableOpacity } from 'react-native';
import DP from 'Root/config/dp';
import { Arrow_Down_GRAY20, Arrow_Up_GRAY20 } from '../atom/icon';
import { APRI10, BLACK, GRAY40 } from 'Root/config/color';
import Dropdown from './Dropdown';
import { Modal } from 'Component/modal/Modal';
/**
 *
 * @param {{
 *	value: object,
 *	items: object,
 *	defaultIndex: number,
 *  selectedIndex : number,
 *	width: number,
 * 	onPress : 'void',
 *	onChange: 'Callback',
 *	textStyle: 'Text Style',
 * }} props
 */
export default DropdownSelect = React.forwardRef((props,ref) => {
	React.useImperativeHandle(ref,()=>({
		press:()=>{
			onPress();
		}
	}));
	

	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);

	const onPress = () => {
		console.log('DropdownSelect onPress');
		// setBtnStatus(!btnStatus);
		// Modal.popupSelect();
		(btnStatus && (onClose() || true)) || onOpen();
	}
	const onOpen = () => {
		console.log('DropdownSelect onOpen');
		setBtnStatus(true);
		props.onOpen();
	}

	const onClose = () => {
		console.log('DropdownSelect onClose');
		setBtnStatus(false);
		props.onClose();
	}

	return (
		<TouchableOpacity onPress={onPress} style={{ height: 82 * DP, flexDirection: 'row' }}>
			<View
				style={{
					width: props.width * DP,
					borderBottomColor: APRI10,
					borderBottomWidth: 2 * DP,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Text
					style={[
						txt.noto24b,
						props.textStyle,
						{
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							// textAlign: 'center',
							marginRight: 40 * DP,
						},
					]}>
					{props.value}
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
					{btnStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
				</View>
			</View>
		</TouchableOpacity>
	);
});
DropdownSelect.defaultProps = {
	value: '',
	width: 180, //Select+Text 부분의 width Default=180(5글자)
	onChange: e => console.log('DropdownSelect Default onChange', e),
	onPress: e => console.log('DropdownSelect Default onPress', e),
	onClose: e => console.log('DropdownSelect Default onClose  ',e),
	onOpen: e => console.log('DropdownSelect Default onOpen',e),
	textStyle: null,
};
