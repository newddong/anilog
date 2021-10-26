import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {TextInput} from 'react-native-gesture-handler';
import {APRI10, GRAY30} from 'Root/config/color';
import {BLACK} from 'Root/screens/color';
export default InputBalloon = props => {
	// 텍스트 입력에 텍스트를 입력하여 입력값이 변화할 때마다 onChange콜백이 발생하고 입력 value를 매개변수로 넘김
	// Props
	// placeholder - textinput의 입력 힌트
	// value - textinput의 입력값
	// onChange - textinput의 값이 변경될 때마다 textinput에 입력된 값을 매개변수로 반환

	// //TODO : 입력내용 삭제 버튼을 포함할지 여부 결정
	// //TODO : onClear - textinput의 clear버튼이 눌러졌을때 실행되는 콜백함수

	// Method
	// //TODO : clear() - textinput의 값을 초기화
	// focus() - textinput으로 커서를 강제 포커싱
	// blur() - textinput에서 포커스를 해제
	const [title, setTitle] = React.useState();
	const [content, setContent] = React.useState();
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
		<View style={{width:654*DP, }}>
			<Text style={[txt.noto24, {color: APRI10, lineHeight: 34 * DP, includeFontPadding: false}]} >
				Title
			</Text>
			<View
				style={{
					color: 'red',
					width:654*DP,
					height: 230 * DP,
					marginTop: 12 * DP,
					borderRadius: 30 * DP,
					borderWidth: 2 * DP,
					borderColor: GRAY30,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<TextInput
					style={[txt.noto24, {width: 606 * DP, height: 182 * DP,  textAlignVertical: 'top', includeFontPadding: false}]}
					onChangeText={text => props.onChange(text)}
					placeholder={props.placeholder}
					defaultValue={'너에게 응답하라 '}
					multiline={true}
					ref={inputRef}
				/>
			</View>
		</View>
	);
};
