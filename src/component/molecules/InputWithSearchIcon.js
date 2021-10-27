import React from 'react';
import {txt} from 'Root/config/textstyle';
import {View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {Cross48, Search48} from '../atom/icon';
export default InputWithSearchIcon = props => {
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef();

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt);
	};
	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setInput('');
	};
	const onSearch = () => {
		alert("검색시도 "+input)
		props.onSearch()
	}
	const blur = () => {
		inputRef.current.blur();
	};
	const focus = () => {
		inputRef.current.focus();
	};
	return (
		<View style={{flexDirection: 'row'}}>
				{/* 하단테두리는 2px, APRI설정 */}
				<View style={{height: 82 * DP, flexDirection: 'row', borderBottomWidth: 2 * DP, borderBottomColor: APRI10, alignItems: 'center'}}>
					<TextInput
						// value={props.value}
						onChangeText={txt => onChange(txt)}
						placeholder={props.placeholder}
						ref={inputRef}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 48 * DP,
							},
						]}
					/>
					<TouchableOpacity onPress={onClear} style={{marginLeft: 120 * DP,  }}>
						<Cross48 />
					</TouchableOpacity>
					{/* SearchIcon은 X 마크와 14px 차이 */}
					<TouchableOpacity onPress={onSearch} style={{marginLeft: 14 * DP,}}>
						<Search48 />
					</TouchableOpacity>
				</View>
		</View>
	);
};
InputWithSearchIcon.defaultProps = {
	value: 'Value',
	placeholder: 'placeholder',
	onChange: {},
	onSearch: {},
	onClear: {},
};
