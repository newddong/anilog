import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {Cross52} from '../atom/icon';
export default Input30 = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState();
	const inputRef = React.useRef();

	//Validator 조건확인이 안되었기에 테스트용으로 입력된 텍스트가
	// 10자 이상일 때 confirmed가 되도록 작성
	const validator = txt => {
		txt.length < 10 ? setConfirm(false) : setConfirm(true);
	};
	const getMsg = () => {
		if (input.length == 0) {
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP})}></Text>
		} 
		return confirm 
			?  <Text style={(txt.noto22, {color: '#13BE00', lineHeight: 36 * DP})}>{props.confirm_msg}</Text>
		 	:  <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP})}>{props.alert_msg}</Text>
	}

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt);
		validator(txt);
	};
	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setInput('')
	};
	const blur = () => {
		inputRef.current.blur();
	};
	const focus = () => {
		inputRef.current.focus();
	};
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 204 * DP}}>
				{/* 모든 text에 fontPadding false 적용 잊지말것 */}
				<Text style={[txt.noto30b, {color: APRI10, includeFontPadding: false}]}> {props.title} </Text>
				<Text style={[txt.noto22, {color: GRAY20, includeFontPadding: false}]}> {props.description} </Text>
				{/* Description 아래는 height 90으로 고정 */}
				{/* 하단테두리는 2px, APRI설정 */}
				<View style={{height: 90 * DP, flexDirection: 'row', borderBottomWidth: 2 * DP, borderBottomColor: APRI10, alignItems: 'center'}}>
					<TextInput
						ref={inputRef}
						placeholder={props.placeholder}
						onChangeText={txt => onChange(txt)}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 28 * DP,
								textAlignVertical: 'top',
							},
						]}
					/>
					{/* X버튼은 TextInput과 28px 차이, 최하단 View테두리와는 14px 차이 */}
					<TouchableOpacity onPress={onClear} style={{marginLeft: 28 * DP, paddingBottom: 14 * DP}}>
						<Cross52 />
					</TouchableOpacity>
				</View>
				{getMsg()}
			</View>
		</View>
	);
};
Input30.defaultProps = {
	title: 'title',
	placeholder: 'placeholder',
	description: 'description',
	value: 'value',
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
};
