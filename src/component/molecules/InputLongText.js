import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, View, TextInput } from 'react-native';
import DP from 'Root/config/dp';
import { APRI10, GRAY10, GRAY30 } from 'Root/config/color';
/**
 *
 * @param {{
 *placeholder : string,
 *value : 'string',
 *maxLength : 'number / 최대 글자 수 제한'
 *onChange : 'Input Value Change Callback'
 * }} props
 */
export default InputLongText = props => {
	const [content, setContent] = React.useState('');
	const inputRef = React.useRef();

	React.useEffect(() => {
		props.value != null ? setContent(props.value) : null
	}, [props.value])

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	const clear = () => {
		inputRef.current.clear();
	};

	const onChange = text => {
		setContent(text);
		props.onChange(text);
	};

	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={{
					width: 710 * DP,
					height: 424 * DP,
					borderWidth: 2 * DP,
					borderRadius: 30 * DP,
					borderColor: content.length > 0 ? APRI10 : GRAY30,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<View style={{ width: 654 * DP, height: 344 * DP }}>
					<TextInput
						style={[txt.noto24, { width: 654 * DP, height: 314 * DP, textAlignVertical: 'top' }]}
						onChangeText={text => onChange(text)}
						placeholder={props.placeholder}
						multiline={true}
						ref={inputRef}
						defaultValue={props.value}
					/>
					<View style={{ width: 95 * DP, height: 30 * DP, alignSelf: 'flex-end' }}>
						<Text style={[txt.roboto24, { color: GRAY10 }]}>
							{content.length}/{props.maxlength}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
InputLongText.defaultProps = {
	placeholder: 'placeholder',
	value: null,
	maxlength: 500,
	onChange: e => console.log(e),
};
