import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View} from 'react-native';
import DP from 'Root/config/dp';
import {TextInput} from 'react-native-gesture-handler';
import {APRI10, GRAY10, GRAY30} from 'Root/config/color';
export default InputLongText = props => {
	const [content, setContent] = React.useState('');
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
	const setBorderColor = () => {
		return content.length > 0 ? APRI10 : GRAY30;
	};
	const onChange = text => {
		setContent(text);
		props.onChange(text);
	};
	return (
		<View style={{flexDirection: 'row'}}>
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
				<View style={{width: 654 * DP, height: 344 * DP}}>
					<TextInput
						style={[txt.noto24, {width: 654 * DP, height: 314 * DP, textAlignVertical: 'top'}]}
						onChangeText={text => onChange(text)}
						placeholder={props.placeholder}
						multiline={true}
						ref={inputRef}
					/>
					<View style={{width: 95 * DP, height: 30 * DP, alignSelf: 'flex-end'}}>
						<Text style={[txt.roboto24, {color: GRAY10}]}>
							{content.length}/{props.maxLength}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
InputLongText.defaultProps = {
	placeholder: 'placeholder',
	value: 'value',
	maxlength: 500,
};
