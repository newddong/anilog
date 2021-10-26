import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {BLACK} from 'Root/screens/color';
import {Cross48, Cross52, Search48} from '../atom/icon';
export default InputWithSearchIcon = props => {
	// 텍스트 입력에 텍스트를 입력하여 입력값이 변화할 때마다 onChange콜백이 발생하고 입력 value를
	// 매개변수로 넘김, 돋보기 아이콘을 클릭하면 onSearch콜백이 발생하고 입력 value를 매개변수로 넘

	// Props
	// placeholder - textinput의 입력 힌트
	// value - textinput의 입력값
	// onChange - textinput의 값이 변경될 때마다 textinput에 입력된 값을 매개변수로 넘김
	// onSearch - 입력창 우측의 아이콘을 클릭하였을 때 실행, textinput에 입력된 값을 매개변수로 넘김
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

	const inputRef = React.useRef();
	const handleClear = () => {
		inputRef.current.clear();
	};
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 82 * DP}}>
				{/* 하단테두리는 2px, APRI설정 */}
				<View style={{height: 80 * DP, flexDirection: 'row', borderBottomWidth: 2 * DP, borderBottomColor: APRI10, alignItems: 'center'}}>
					<TextInput
						// value={props.value}
						onChangeText={txt => handleChange(txt)}
						placeholder={props.placeholder}
						ref={inputRef}
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
					<TouchableOpacity onPress={handleClear}>
					<View style={{marginLeft: 28 * DP, paddingBottom: 14 * DP}}>
						<Cross48 />
					</View>
					</TouchableOpacity>
					{/* SearchIcon은 X 마크와 14px 차이 */}
					<View style={{marginLeft: 14 * DP, paddingBottom: 14 * DP}}>
						<Search48 />
					</View>
				</View>
			</View>
			{/* 비교용 View  */}
			<View>
				<View style={{height: 16 * DP, backgroundColor: 'red', width: 10}}></View>
				<View style={{height: 48 * DP, backgroundColor: 'blue', width: 10}}></View>
				<View style={{height: 18 * DP, backgroundColor: 'yellow', width: 10}}></View>
			</View>
			<View style={{height: 82 * DP, backgroundColor: 'purple', width: 10}}></View>
		</View>
	);
};
