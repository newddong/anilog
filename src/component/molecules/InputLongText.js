import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {TextInput} from 'react-native-gesture-handler';
import {APRI10, GRAY10, GRAY30} from 'Root/config/color';
import {BLACK} from 'Root/screens/color';
export default InputLongText = props => {
	// 텍스트 입력에 텍스트를 입력하여 입력값이 변화할 때마다 onChange콜백이 발생하고 입력 value를
	// 매개변수로 넘김, 오른쪽 아래에 최대 입력 글자수와 현재 입력한 글자수를 숫자로 표시, 글자를 입력
	// 하면 Balloon에 하이라이트 효과 발생

	// Props
	// placeholder - textinput의 입력 힌트
	// value - textinput의 입력값
	// maxlength - textinput에 입력 가능한 글자의 최대수

	// onChange - textinput의 값이 변경될 때마다 textinput에 입력된 값과 현재 입력 글자수를 매개변수로
	// 넘김
	// //TODO : clear 버튼을 포함할지 여부를 결정
	// //TODO : onClear - textinput의 clear버튼이 눌러졌을때 실행되는 콜백함수

	// Method
	// //TODO : clear() - textinput의 값을 초기화
	// focus() - textinput으로 커서를 강제 포커싱
	// blur() - textinput에서 포커스를 해제

	const [content, setContent] = React.useState('');
	const inputRef = React.useRef();
	// React.useEffect(() => {
	// 	inputRef.current.focus();
	// 	setTimeout(() => {
	// 		inputRef.current.blur();
	// 	}, 2000);
	// });
	
	const handleClear = () => {
		inputRef.current.clear()
	};
	const setBorderColor = () => {
		// console.log("Length"+content.length)
		if(content.length > 0){
			return APRI10
		} else {
			return GRAY30
		}
	}
	const handleChange = text => {
		setContent(text)
		props.onChange(text)
	}
	return (
		<View style={{flexDirection:'row'}}>
		<View
			style={{
				width: 710 * DP,
				height: 424 * DP,
				borderWidth: 2 * DP,
				borderRadius: 30 * DP,
				borderColor: setBorderColor(),
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<View style={{width: 654 * DP, height: 344 * DP, backgroundColor: 'yellow'}}>
				<TextInput
					style={[txt.noto24, {width: 654 * DP, height: 314 * DP, textAlignVertical: 'top', includeFontPadding: false, backgroundColor: GRAY30}]}
					onChangeText={text => handleChange(text)}
					placeholder={props.placeholder}
					defaultValue={
						'안녕하세요! 저는 중학생 때 부터 키웠던 댕댕이 한 마리를 떠나보내고, 지금은 고양이 한 마리를 모시고 있는 집사입니다.한 달 뒤에 조금 더 큰 집으로 이사할 계획이라 우리 레미 동생 만들어 주고 싶어서 신청하게 되었습니다. '
					}
					multiline={true}
					ref={inputRef}
				/>
				<View style={{width:95*DP, height:30*DP, alignSelf:'flex-end'}}>
					<Text style={[txt.roboto24,{color:GRAY10}]}>{content.length}/{props.maxLength}</Text>
				</View>
			</View>
		</View>
		<View style={{width:10, marginLeft:10,height:424*DP, backgroundColor:'red'}}/>
		</View>
	);
};
