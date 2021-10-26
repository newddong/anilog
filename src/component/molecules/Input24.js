import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
export default Input24 = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState();
	const inputRef = React.useRef();

	//Validator 조건확인이 안되었기에 테스트용으로 입력된 텍스트가
	// 10자 이상일 때 confirmed가 되도록 작성
	const validator = txt => {
		txt.length > 10 ? setConfirm(true) : setConfirm(false);
	};

	const getMsg = () => {
		if (input.length == 0) {
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP})}></Text>;
		}
		return confirm ? (
			<Text style={(txt.noto22, {color: '#13BE00', lineHeight: 36 * DP})}>{props.confirm_msg}</Text>
		) : (
			<Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP})}>{props.alert_msg}</Text>
		);
	};
	const setBorderColor = () => {
		if (input.length == 0) {
			return GRAY30
		}
		return confirm ? GRAY30 : APRI10;
	};
	const getDescription = () => {
		if(props.descriptionType == 'info'){
			return <Text style={[txt.noto22, {color: GRAY20, marginLeft: 75 * DP}]}> *{props.info} </Text>
		} else if(props.descriptionType == 'star'){
			return <Text style={[txt.noto28, {color: APRI10, color: 'red', marginLeft: 100 * DP}]}>*</Text> 
		}
	}

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt);
		validator(txt);
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
		<View style={{flexDirection: 'row'}}>
			{/* height는 168로 고정 */}
			<View style={{height: 168 * DP}}>
				{/* 모든 text에 fontPadding false 적용 잊지말것 */}
				<View style={{flexDirection: 'row',}}>
					<Text style={[txt.noto24, {color: APRI10,}]}> {props.title} </Text>
					{getDescription()}
				</View>
				{/* 하단테두리는 2px, APRI설정 */}
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View style={{height: 80 * DP, borderBottomWidth: 2 * DP, borderBottomColor: setBorderColor()}}>
					<TextInput
						ref={inputRef}
						onChangeText={txt => onChange(txt)}
						placeholder={props.placeholder}
						style={[
							txt.noto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
								textAlignVertical: 'top',
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
	value: 'value',
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
	descriptionType : 'star', // star , info 
	info: null, // 
};
