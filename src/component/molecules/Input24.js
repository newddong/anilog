import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30, GREEN, RED10} from 'Root/config/color';
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
		if (input.length == 0) { return GRAY30 } 
		else return confirm ? GRAY30 : APRI10;
	};


	const onChange = text => {
		setInput(text);
		props.onChange(text);
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
		if(props.descriptionType == 'info'){
			return <Text style={[txt.noto22, {color: GRAY20, marginLeft: 75 * DP}]}> *{props.info} </Text>
		} else if(props.descriptionType == 'star'){
			return <Text style={[txt.noto28, {color: RED10, marginLeft: 120 * DP}]}>*</Text> 
		}
	}

	const getMsg = () => {
		if (input.length == 0) {
			return <Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}></Text>;
		}
		return confirm ? <Text style={(txt.noto22, {color: GREEN, lineHeight: 36 * DP})}>{props.confirm_msg}</Text>
		 			   : <Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}>{props.alert_msg}</Text>
		
	};

	return (
		<View style={{flexDirection: 'row'}}>
			{/* height는 168로 고정 */}
			<View style={{height: 168 * DP}}>
				<View style={{flexDirection: 'row',}}>
					<Text style={[txt.noto24, {color: APRI10,}]}> {props.title} </Text>
					{getDescription()}
				</View>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View style={{height: 80 * DP, borderBottomWidth: 2 * DP, borderBottomColor: setBorderColor()}}>
					<TextInput
						ref={inputRef}
						onChangeText={text => onChange(text)}
						placeholder={props.placeholder}
						style={[
							txt.noto28,
							{
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
							},
						]}
					/>
				</View>

				{getMsg()}
			</View>
		</View>
	);
};
Input24.defaultProps = {
	title: 'title', // input title
	placeholder: 'placeholder',
	descriptionType : 'star', // star , info - title 오른쪽 description을 별표형식 / Info형식 구분
	value: 'value',
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
	info: null, // 
};
