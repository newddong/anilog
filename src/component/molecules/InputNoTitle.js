import React from 'react';
import {txt} from 'Root/config/textstyle';
import { Text, View, } from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {BLACK} from 'Root/screens/color';
import { Cross52 } from '../atom/icon';
import { TouchableOpacity } from 'react-native';
export default InputNoTitle = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState(false);
	const inputRef = React.useRef();
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
			<View style={{height: 118 * DP}}>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View style={{height: 82 * DP, borderBottomWidth: 2 * DP, borderBottomColor: input.length == 0 ? GRAY30: APRI10, flexDirection:'row' , alignItems:'center'}}>
					<TextInput
						ref={inputRef}
						onChangeText={txt => onChange(txt)}
						placeholder={props.placeholder}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
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
