import React from 'react';
import {txt} from 'Root/config/textstyle';
import { Text, View, } from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {BLACK} from 'Root/screens/color';
import { Cross52 } from '../atom/icon';
import { TouchableOpacity } from 'react-native';
export default Input30 = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState();
	const inputRef = React.useRef();
	
	const onChange = txt => {
		validator(txt);
		setInput(txt);
		props.onChange(txt);
	};
	
	//Validator 조건확인이 안되었기에 테스트용으로 입력된 텍스트가
	// 10자 이상일 때 confirmed가 되도록 작성
	const validator = txt => {
		txt.length < 10 ? setConfirm(false) : setConfirm(true);
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
	const showTitle = () => {
		return props.showTitle 
		? <View><Text style={[txt.noto30b, {color: APRI10, }]}> {props.title} </Text>
		<Text style={[txt.noto22, {color: GRAY20,}]}> {props.description} </Text>
		</View>
		: 
		<></>
	}
	return (
		<View style={{flexDirection: 'row'}}>
			<View >
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				{showTitle()}
				<View style={{height: 80 * DP, borderBottomWidth: 2 * DP, borderBottomColor: input.length == 0 ? GRAY30: APRI10, flexDirection:'row' , alignItems:'center'}}>
					<TextInput
						ref={inputRef}
						onChangeText={txt => onChange(txt)}
						placeholder={props.placeholder}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 Text View크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
								textAlignVertical: 'top',
								color: confirm ?  BLACK : 'red' ,

							},
						]}
					/>
					<TouchableOpacity onPress={onClear} style={{marginLeft: 120 * DP, paddingBottom:14*DP}}>
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
	showTitle : 'true',
	placeholder: 'placeholder',
	description: 'description',
	value: 'value',
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
	onClear: {},
	onChange: {},
};