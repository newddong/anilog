import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';
import NormalDropDown from './NormalDropDown';
import Input24 from 'Molecules/Input24';

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
 *onValid : (boolean)=>void
 *defaultValue: string
 * }} props
 */
export default InputWithSelect = props => {
	const [dropdownVal, setDropdownVal] = React.useState(props.items ? props.items[props.defaultIndex] : '');
	const [input, setInput] = React.useState(props.defaultValue || '');
	const inputRef = React.useRef();

	const onChange = text => {
		props.onChange(dropdownVal + text);
		setInput(text);
	};

	const onSelectDropDown = (v, i) => {
		console.log('드롭다운 선택확인 ', v, i);
		props.onChange(v + input);
		setDropdownVal(v);
	};

	const validator = text => {
		return text.length > 0;
	};

	const onValid = isValid => {
		props.onValid(isValid);
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
				<NormalDropDown menu={props.items} width={200} defaultIndex={props.defaultIndex ? props.defaultIndex : 0} onSelect={onSelectDropDown} />

				<Input24
					placeholder={props.placeholder}
					value={input}
					ref={inputRef}
					keyboardType={props.keyboardType}
					// defaultValue={props.defaultValue}
					onChange={onChange}
					validator={validator}
					onValid={onValid}
					width={props.width || 450}
				/>
			</View>
		</View>
	);
};
InputWithSelect.defaultProps = {
	placeholder: 'placeholder',
	items: ['default1', 'default2', 'default3', 'test3', 'test5'],
	defaultIndex: 0, // props로 받은 itemList의 디폴트 인덱스
	value: '',
	title: '',
	title_star: false,
	alert_msg: '',
	defaultInput: '',
	onChange: e => console.log('InputWithSelect Default onChange   ', e),
	onClear: e => console.log('InputWithSelect Default onClear   ', e),
	onSelectDropDown: e => console.log('InputWithSelect Default onSelectDropDown   ', e),
	onValid: e => {},
	width: 454,
	keyboardType: 'default',
};
