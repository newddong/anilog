import React from 'react';
import {txt} from 'Root/config/textstyle';
import PropsTypes, {any, func, oneOf, oneOfType} from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20} from '../atom/icon';
import {APRI10, BLACK, GRAY40} from 'Root/config/color';
import Dropdown from './Dropdown';
import Modal from 'Component/modal/Modal';
import {string} from 'prop-types';

/**
 * 드롭다운 선택 버튼
 * @type {React.ForwardRefRenderFunction<React.FunctionComponent,DropdownSelectProps>}
 */
const DropdownSelect = React.forwardRef((props, ref) => {
	React.useImperativeHandle(ref, () => ({
		press: () => {
			onPress();
		},
	}));

	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);

	const onPress = () => {
		console.log('DropdownSelect onPress');
		// setBtnStatus(!btnStatus);
		// Modal.popupSelect();
		(btnStatus && (onClose() || true)) || onOpen();
	};
	const onOpen = () => {
		console.log('DropdownSelect onOpen');
		setBtnStatus(true);
		props.onOpen();
	};

	const onClose = () => {
		console.log('DropdownSelect onClose');
		setBtnStatus(false);
		props.onClose();
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					height: 80 * DP, //border가 있으므로 80DP로 수정
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

const DropdownSelectProps = {
	/** @type {string} 버튼에 표시되는 값 */
	value: string,
	/** @type {()=>void} 닫힐때의 콜백 */
	onClose: func,
	/** @type {()=>void} 열릴 때 콜백 */
	onOpen: func,
	/** @type {object} 표시되는 글의 글꼴 */
	textStyle: object,
	/** @type {number} 버튼의 너비 숫자만 입력, DP는 컴포넌트 내부에서 자동으로 계산됨 */
	width: number,
	// ref : oneOf(shape({current:any}),func),
	
};

DropdownSelect.propTypes = DropdownSelectProps;

DropdownSelect.defaultProps = {
	value: '',
	// width: 0, //Select+Text 부분의 width Default=180(5글자)
	// onChange: e => console.log('DropdownSelect Default onChange', e),
	// onPress: e => console.log('DropdownSelect Default onPress', e),
	onClose: e => console.log('DropdownSelect Default onClose  ', e),
	onOpen: e => console.log('DropdownSelect Default onOpen', e),
	textStyle: null,
};

export default DropdownSelect;
