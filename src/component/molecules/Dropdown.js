import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Modal } from 'Component/modal/Modal';
import DP from 'Root/config/dp';
import AniButton from './AniButton';

export default Dropdown = props => {
	const container = React.useRef();
	const isClick = React.useRef(false);

	const onPressOverride = () => {
		click();
		props.buttonComponent.props.onPress();
		isClick.current = !isClick.current;
	};

	const onOpenOverride = () => {
		click();
		props.buttonComponent.props.onOpen();
	};
	const onCloseOverride = () => {
		Modal.close();
		console.log('close')
		props.buttonComponent.props.onClose();
	};

	const click = () => {
		!isClick.current &&
			container.current.measure((fx, fy, width, height, px, py) => {
				const dropdownList = React.cloneElement(props.dropdownList, {
					style: [{ position: 'absolute', top: py, left: px, paddingBottom: 15 * DP }, props.dropdownList.props.style],
				});
				Modal.popDrop(
					<TouchableWithoutFeedback onPress={Modal.close}>
						<View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#fff0' }}>
							{dropdownList}
						</View>
					</TouchableWithoutFeedback>,
				);
			});
		isClick.current && Modal.close();

	};

	const button = React.cloneElement(props.buttonComponent, {
		...props.buttonComponent.props,
		onPress: onPressOverride,
		onClose: onCloseOverride,
		onOpen: onOpenOverride,
	});

	return (
		<View ref={ref => (container.current = ref)} onLayout={e => { }}>
			{button}
		</View>
	);
};

Dropdown.defaultProps = {
	dropdownList: <View style={{ position: 'absolute', width: 100, height: 100, backgroundColor: 'blue' }} />,
	buttonComponent: <AniButton />,



};
