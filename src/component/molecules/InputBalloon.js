import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY30, RED10} from 'Root/config/color';

/**
 *
 * @param {{
 *placeholder : string,
 *value : 'string',
 *title : string,
 *onChange : 'Input Value Change Callback'
 * }} props
 */
export default InputBalloon = props => {
	const inputRef = React.useRef();

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	const clear = () => {
		inputRef.current.clear();
	};

	const onChange = txt => {
		props.onChange(txt);
	};

	return (
		<View style={{width: 654 * DP}}>
			<Text style={[txt.noto24, {color: APRI10, lineHeight: 34 * DP}]}>
				{/* Title을 props로 받을 것인지 Input으로 컴포넌트 내에서 처리할 것인지 확인 필요 */}
				{props.title}
			</Text>
			<View
				style={{
					color: RED10,
					width: 654 * DP,
					height: 230 * DP,
					marginTop: 12 * DP,
					borderRadius: 30 * DP,
					borderWidth: 2 * DP,
					borderColor: GRAY30,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<TextInput
					style={[txt.noto24, {width: 606 * DP, height: 182 * DP, textAlignVertical: 'top'}]}
					onChangeText={text => onChange(text)}
					placeholder={props.placeholder}
					multiline={true}
					ref={inputRef}
				/>
			</View>
		</View>
	);
};
InputBalloon.defaultProps = {
	placeholder: 'placeholder',
	value: 'value',
	title: 'title',
	onChange: e => console.log(e),
};
