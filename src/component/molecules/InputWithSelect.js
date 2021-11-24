import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';

/**
 *
 *@param {{
 *placeholder: string,
 *items: 'Array / Select 목록',
 *defaultIndex: number,
 *value: string,
 *title : string,
 *title_star : boolean,
 *alert_msg : string,
 *onChange: 'Input Value Chgange Callback',
 *onClear: '지우기 버튼(X) 클릭 Callback',
 *width: 'number / TextInput 너비 , default=200',
 *keyboardType : 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad',
 * }} props
 */
export default InputWithSelect = props => {
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.items[props.defaultIndex]);
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef();

	const onChange = text => {
		props.onChange(text);
		setInput(text);
	};

	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setInput('');
	};

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	return (
		<View style={{height: 82 * DP}}>
			{props.title != null ? (
				<View style={{flexDirection: 'row'}}>
					<Text style={[txt.noto24, {color: APRI10}]}>{props.title}</Text>
					<Text style={[txt.noto24, {color: RED10, marginLeft: 30 * DP}]}>{props.title_star ? '*' : null}</Text>
					<Text style={[txt.noto24, {color: RED10, marginLeft: 30 * DP}]}>{props.alert_msg}</Text>
				</View>
			) : null}
			<View
				style={{
					flexDirection: 'row',
					borderBottomWidth: 2 * DP,
					// 현재 선택상태인 드롭다운아이템이 itemList props의 defaultIndex와 일치하는지 여부
					borderColor: input.length == 0 ? GRAY30 : APRI10,
					alignItems: 'center',
				}}>
				<Text
					style={[
						txt.roboto28,
						{
							paddingLeft: 24 * DP,
							lineHeight: 44 * DP,
						},
					]}>
					{selectedItem}
				</Text>
				<View style={{marginLeft: 43 * DP}}>
					{/* BtnStatus가 true일 경우 아래방향 화살표, false일 경우 위방향 화살표 */}
					{btnStatus ? <Arrow_Up_GRAY20 onPress={() => setBtnStatus(!btnStatus)} /> : <Arrow_Down_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />}
				</View>
				<TextInput
					placeholder={props.placeholder}
					value={props.value}
					ref={inputRef}
					keyboardType={props.keyboardType}
					onChangeText={text => onChange(text)}
					style={[
						txt.roboto28,
						{
							//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
							//우선 width를 가변적으로 주는 방식으로 해결
							width: props.width * DP,
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							paddingLeft: 12 * DP, // Arrow버튼과 Value란 12px 차이
						},
					]}
				/>
				{input.length>0 ? (
					<View style={{position: 'absolute', right: 0}}>
						<Cross52 onPress={onClear} />
					</View>
				) : (
					false
				)}
			</View>
		</View>
	);
};
InputWithSelect.defaultProps = {
	placeholder: 'placeholder',
	items: ['default1', 'default2', 'default3', 'test3', 'test5'],
	defaultIndex: 0, // props로 받은 itemList의 디폴트 인덱스
	value: null,
	title: null,
	title_star: false,
	alert_msg: null,
	onChange: e => console.log(e),
	onClear: e => console.log(e),
	width: 480,
	keyboardType: 'default',
};
