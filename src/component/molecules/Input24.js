import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30, GREEN, RED10} from 'Root/config/color';

/**
 *
 * @param {{
 *title: string,
 *placeholder: string,
 *descriptionType: 'star' | 'info' | 'none',
 *value: string,
 *alert_msg: 'String / 긴급메시지 ',
 *confirm_msg: 'String / 확인메시지 ',
 *info: string,
 *width: 'number / Input24의 전체 너비 default = 300',
 *showmsg : 'boolean / input 하단 alert_msg',
 *style:'StyleSheet',
 *defaultValue : string
 * }} props
 */
export default Input24 = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState(false);
	const inputRef = React.useRef();

	//Validator 조건확인이 안되었기에 테스트용으로 입력된 텍스트가
	// 10자 이상일 때 confirmed가 되도록 작성
	const validator = text => {
		text.length > 10 ? setConfirm(true) : setConfirm(false);
	};

	const setBorderColor = () => {
		if (input.length == 0) {
			return GRAY30;
		} else return confirm ? GRAY30 : APRI10;
	};

	const onChange = text => {
		setInput(text);
		//props.onChange(text);
		validator(text);
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

	const getDescription = () => {
		if (props.descriptionType == 'info') {
			return <Text style={[txt.noto22, {color: GRAY20, marginLeft: 20 * DP}]}> *{props.info} </Text>;
		} else if (props.descriptionType == 'star') {
			return <Text style={[txt.noto28, {color: RED10, marginLeft: 120 * DP}]}>*</Text>;
		} else if (props.descriptionType == 'none') {
			return null;
		}
	};

	const getMsg = () => {
		if (props.showmsg) {
			if (input.length == 0) {
				return <Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}></Text>;
			} else
				return confirm ? (
					<Text style={(txt.noto22, {color: GREEN, lineHeight: 36 * DP})}>{props.confirm_msg}</Text>
				) : (
					<Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}>{props.alert_msg}</Text>
				);
		}
	};

	return (
		
		<View style={[props.width&&{width:props.width*DP},{flexDirection: 'column'}]}>{/* width props를 입력하지 않을 경우 Input컴포넌트의 부모의 width를 따라 넓이가 정해지도록 수정*/}
			{/* height 를 title과 alert_msg가 없을 때에는 공간을 차지하지 않도록 가변이 되도록 style을 수정*/}

			{console.log(typeof props.title)}
			{console.log('props.title=' + props.title + props.width)}
			{/* parent에서 title이 props로 명시되어 있지 않을 경우 'title' string 으로 받음. */}
			{props.title != '' && props.title != 'title' && (
				<View style={{flexDirection: 'row'}}>
					<Text style={[txt.noto24, {color: APRI10}]}> {props.title}</Text>
					{getDescription()}
				</View>
			)}
			{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
			<View style={{height: 80 * DP, borderBottomWidth: 2 * DP, borderBottomColor: setBorderColor()}}>
				<TextInput
					ref={inputRef}
					onChangeText={text => onChange(text)}
					placeholder={props.placeholder}
					defaultValue={props.defaultValue}
					style={[
						txt.noto28,
						props.style,
						{
							paddingLeft: 24 * DP,
							height:'100%', //ios에서 안드로이드와 동작 일치시키기 위함
							lineHeight: 44 * DP,
							minWidth: 300 * DP,
						},
					]}
				/>
			</View>

			{getMsg()}
		</View>
	);
};
Input24.defaultProps = {
	title: 'title', // input title
	placeholder: 'placeholder',
	descriptionType: 'star', // star , info , none - title 오른쪽 description을 별표형식 / Info형식 구분
	value: 'value',
	showMsg: false,
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
	info: null, //
	defaultValue: null,
};
