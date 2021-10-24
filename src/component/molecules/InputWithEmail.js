import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY30, Arrow_Up_GRAY30, Cross52} from '../atom/icon';
import {TextInput} from 'react-native-gesture-handler';
import {APRI10, GRAY30} from 'Root/config/color';
export default InputWithEmail = props => {
	// Dropdown 화살표의 state - True일 경우 opened 상태 / False일 경우 closed 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);

	const [clearBtnPressed, setClearBtnPressed] = React.useState(false);
	const [email, setEmail] = React.useState();

	//BtnStatus가 true일 경우 아래방향 화살표, false일 경우 위방향 화살표
	const getArrow = () => {
		return btnStatus ? <Arrow_Up_GRAY30 /> : <Arrow_Down_GRAY30 />;
	};

	//현재는 txtInput형태, 차후 Dropdown으로 바꿀 시 다른 방식
	const handleChange = txt => {
		setEmail(txt);
	};

	//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
	//우선 width를 가변적으로 주는 방식으로 해결
	const getWidth = () => {
		if (!email) {
			return 190 * DP;
		} else if (clearBtnPressed) {
			//X버튼을 누를 때마다 placeholder의 fontPadding이 적용되는 현상이 간헐적으로 발생
			// 우선 X버튼 클릭이벤트 발생 시에도 강제적으로 width를 적용하여 해결
			return 190 * DP;
		}
	};

	//SelectedITem에 값이 있는 경우 APRI10으로 바뀐다
	const getBorderColor = () => {
		if (!email) {
			return GRAY30;
		} else {
			return APRI10;
		}
	};

	const inputRef = React.useRef();
	// React.useEffect(() => {
	// 	inputRef.current.focus();
	// 	setTimeout(() => {
	// 		inputRef.current.blur();
	// 	}, 2000);
	// });
	const handleClear = () => {
		inputRef.current.clear();
		setEmail(null); //email state를 null로 해주어야 borderColor가 GRAY30으로 반응한다
		setClearBtnPressed(true);
		//X버튼을 누를 때마다 placeholder의 fontPadding이 적용되는 현상이 간헐적으로 발생
		// 우선 X버튼 클릭이벤트 발생 시에도 강제적으로 width를 적용하여 해결
	};
	return (
		<View style={{flexDirection: 'row', height: 82 * DP}}>
			<View style={{flexDirection: 'row', borderBottomWidth: 2 * DP, borderColor: getBorderColor(), alignItems: 'center'}}>
				<View style={{alignItems: 'center', flexDirection: 'row'}}>
					<TextInput
						placeholder={props.placeholder}
						value={props.value}
						ref={inputRef}
						onChangeText={txt => handleChange(txt)}
						style={[txt.noto28, {paddingLeft: 24 * DP, includeFontPadding: false, lineHeight: 44 * DP, width: getWidth()}]}
					/>
					<TouchableOpacity onPress={handleClear}>
						<View style={{marginLeft: 40 * DP}}>
							<Cross52 />
						</View>
					</TouchableOpacity>
				</View>
				<View style={{marginHorizontal: 24 * DP, includeFontPadding: false, lineHeight: 36 * DP}}>
					<Text style={txt.roboto24b}>@</Text>
				</View>
				<Text style={[txt.roboto28, {paddingHorizontal: 24 * DP, includeFontPadding: false, lineHeight: 37 * DP}]}> {selectedItem} </Text>
				<View style={{marginLeft: 12 * DP}}>
					<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)}>{getArrow()}</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
InputWithEmail.defaultProps = {
	placeholder: 'placeholder',
	defaultIndex: 0,
	value: null,
};
