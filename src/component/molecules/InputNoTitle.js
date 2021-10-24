import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {BLACK} from 'Root/screens/color';
import {Cross52} from '../atom/icon';
export default InputNoTitle = props => {
	// 텍스트 입력에 텍스트를 입력하여 입력값이 변화할 때마다 onChange콜백이 발생하고 입력 value를
	// 매개변수로 넘김, onChange콜백이 발생할 때마다 입력값에 대해 validator를 실행 false 반환시 경고
	// 메시지를 출력, true반환시 confirm메시지 출력

	// Props
	// placeholder - textinput의 입력 힌트
	// value - textinput의 입력값

	// alert_msg - validator가 false일때 출력되는 메시지
	// confirm_msg - validator가 true일때 출력되는 메시지

	// //TODO : validation 조건이 한가지 이상 단계적으로 이루어질 경우 validator정의 및 msg표시
	// validator - 입력값으로 textinput의 value를 받고 true, false를 반납하는 유효성 검사 함수
	// onChange - textinput의 값이 변경될 때마다 textinput에 입력된 값을 매개변수로 반환
	// onClear - textinput의 clear버튼이 눌러졌을때 실행되는 콜백함수

	// Method
	// clear() - textinput의 값을 초기화
	// focus() - textinput으로 커서를 강제 포커싱
	// blur() - textinput에서 포커스를 해제

	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState(false);
	const handleChange = txt => {
		setInput(txt);
		props.onChange(txt);
		input_valid(txt);
	};
	const input_valid = txt => {
		if (txt.length > 10) {
			setConfirm(true);
		}
	};
	const getMsg = () => {
		if (confirm) {
			return <Text style={(txt.noto22, {color: '#13BE00', lineHeight: 36 * DP, includeFontPadding: false})}>{props.confirm_msg}</Text>;
		} else if (!confirm) {
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP, includeFontPadding: false})}>{props.alert_msg}</Text>;
		}
	};
	const getTextColor = () => {
		if(confirm){
			return BLACK
		} else if(!confirm){
			return 'red'
		}
	}
	const inputRef = React.useRef();
	// React.useEffect(() => {
	// 	inputRef.current.focus();
	// 	setTimeout(() => {
	// 		inputRef.current.blur();
	// 	}, 2000);
	// });
	const handleClear = () => {
		inputRef.current.clear();
	};
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 118 * DP}}>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View style={{height: 82 * DP, borderBottomWidth: 2 * DP, borderBottomColor: APRI10, }}>
					<TextInput
						ref={inputRef}
						onChangeText={txt => handleChange(txt)}
						placeholder={props.placeholder}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								includeFontPadding: false,
								lineHeight: 44 * DP,
								textAlignVertical: 'top',
								color:getTextColor(),

							},
						]}
					/>
				</View>
				{getMsg()}
			</View>
			<View>
				<View style={{height: 82 * DP, backgroundColor: 'red', width: 10}}></View>
				<View style={{height: 36 * DP, backgroundColor: 'blue', width: 10}}></View>
			</View>
			<View style={{height: 118 * DP, backgroundColor: 'purple', width: 10}}></View>
		</View>
	);
};
