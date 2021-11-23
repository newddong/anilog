import React from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback, Text} from 'react-native';
import {APRI10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {Modal} from 'Component/modal/Modal';
import {txt} from 'Root/config/textstyle';
import {Meatball50_APRI10_Horizontal, Meatball50_GRAY20_Horizontal, Meatball50_GRAY20_Vertical, Meatball50_APRI10_Vertical} from 'Atom/icon';

/**
 *
 * @param {{
 * disable : boolean,
 * initState : '버튼의 초기상태 false이면 close, true이면 open',
 * noStateChange : '버튼의 on, off를 변경하지 않음, initState가 false이면 onOpen, true이면 onClose만 실행',
 * horizontal : '버튼 방향 true일경우 horizon, false는 vertical'
 * onOpen : Function,
 * onClose : Function,
 * onPress : Function,
 * }} props
 */
export default MeatballButton =React.forwardRef( (props,ref) => {
	React.useImperativeHandle(ref,()=>({
		press:()=>{
			onPress();
		}
	}))
	const [isOpen, setOpen] = React.useState(props.initState);
	const onPress = e => {
        // setOpen(!isOpen);
        console.log('MeatBallButton onPress');
		// !props.noStateChange && setOpen(!isOpen);
		// isOpen ? props.onOpen() : props.onClose();
		(isOpen && (onClose() || true)) || onOpen();
	};
	
	const onOpen = () => {
		console.log('MeatBallButton onOpen');
		!props.noStateChange&&setOpen(true);
		props.onOpen();
	}

	const onClose = () => {
		console.log('MeatBallButton onClose');
		!props.noStateChange&&setOpen(false);
		props.onClose();
	}

	return (
		<TouchableOpacity onPress={onPress} >
			{isOpen ? (
				props.horizontal ? (
					<Meatball50_APRI10_Horizontal />
				) : (
					<Meatball50_APRI10_Vertical />
				)
			) : props.horizontal ? (
				<Meatball50_GRAY20_Horizontal />
			) : (
				<Meatball50_GRAY20_Vertical />
			)}
		</TouchableOpacity>
	);
});

MeatballButton.defaultProps = {
	disable: false, // 버튼탭 사용불가 상태 boolean
	initState: false,
	noStateChange: false,
	horizontal: true, // 버튼 방향 true일경우 horizon, false는 vertical
	onOpen: e => console.log('MeatBallButton onOpen Default'),
	onClose: e => console.log('MeatBallButton onClose Default'),
	onPress: e => console.log('MeatBallButton onPress Default')
};
