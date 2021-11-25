import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';
import NormalDropDown from './NormalDropDown';

/**
 *
 *@param {{
 *placeholder: string,
 *items: 'Array / Select 목록',
 *defaultIndex: number,
 *defaultInput : string,
 *value: string,
 *title : string,
 *title_star : boolean,
 *alert_msg : string,
 *onChange: 'Input Value Chgange Callback',
 *onClear: '지우기 버튼(X) 클릭 Callback',
 *onSelectDropDown : '드롭다운 선택 콜백',
 *width: 'number / TextInput 너비 , default=200',
 *keyboardType : 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad',
 * }} props
 */
export default InputWithSelect = props => {
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

	const onSelectDropDown = (v, i) => {
		console.log('드롭다운 선택확인 ', v, i);
		props.onSelectDropDown(v, i);
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
					alignItems: 'center',
				}}>
				<NormalDropDown
					menu={props.items}
					width={200}
					defaultIndex={props.defaultIndex ? props.defaultIndex : null}
					onSelect={(v, i) => onSelectDropDown(v, i)}
				/>
				<TextInput
					placeholder={props.placeholder}
					value={props.value}
					ref={inputRef}
					defaultValue={props.defaultInput}
					keyboardType={props.keyboardType}
					onChangeText={text => onChange(text)}
					style={[
						txt.roboto28,
						{
							width: props.width * DP,
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							paddingLeft: 15 * DP, // Arrow버튼과 Value란 12px 차이
							marginLeft: 20 * DP,
							marginTop: 15 * DP,
							borderBottomWidth: 2 * DP,
							borderColor: input.length == 0 ? GRAY30 : APRI10,
						},
					]}
				/>
				{input.length > 0 ? (
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
	defaultInput: null,
	onChange: e => console.log(e),
	onClear: e => console.log(e),
	onSelectDropDown: e => console.log(e),
	width: 480,
	keyboardType: 'default',
};
