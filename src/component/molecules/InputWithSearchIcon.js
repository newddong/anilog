import React from 'react';
import {txt} from 'Root/config/textstyle';
import {View, TouchableOpacity, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY30} from 'Root/config/color';
import {Cross48, Search48} from '../atom/icon';
export default InputWithSearchIcon = props => {
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef();

	const onChange = text => {
		setInput(text);
		props.onChange(text);
	};

	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setInput('');
	};

	const onSearch = () => {
		alert('검색시도 ' + input);
		props.onSearch();
	};

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	return (
		<View style={{flexDirection: 'row'}}>
			{/* 하단테두리는 2px, APRI설정 */}
			<View
				style={{
					height: 82 * DP,
					borderBottomWidth: 2 * DP,
					borderBottomColor: input.length == 0 ? GRAY30 : APRI10,
					width: props.width * DP,
					alignItems: 'center',
					flexDirection: 'row',
				}}>
				<TextInput
					// value={props.value}
					onChangeText={text => onChange(text)}
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
				<View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
					<TouchableOpacity onPress={onClear}>
						<Cross48 />
					</TouchableOpacity>
					{/* SearchIcon은 X 마크와 14px 차이 */}
					<TouchableOpacity onPress={onSearch} style={{marginHorizontal: 20 * DP}}>
						<Search48 />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
//120 , 12
InputWithSearchIcon.defaultProps = {
	value: 'Value',
	placeholder: 'placeholder',
	width: 654, //전체View Width
	onChange: e => console.log(e),
	onSearch: e => console.log(e),
	onClear: e => console.log(e),
};
