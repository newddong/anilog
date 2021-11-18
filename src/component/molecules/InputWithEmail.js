import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';

/**
 *
 *@param {{
 *itemList: 'Array 도메인 사이트 리스트',
 *placeholder: string,
 *defaultIndex: number,
 *value: string,
 *width : number,
 *title : string,
 *title_star: boolean,
 *onClear: '지우기 버튼(x) 클릭 Callback',
 *onChange: 'Input Value Change Callback',
 * }} props
 */
export default InputWithEmail = props => {
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef();

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt);
	};

	const onClear = () => {
		inputRef.current.clear();
		setInput(''); //email state를 null로 해주어야 borderColor가 GRAY30으로 반응한다
		props.onClear();
	};

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	return (
		<View style={{}}>
			{props.title != null ? (
				<View style={{flexDirection: 'row'}}>
					<Text style={[txt.noto24, {color: APRI10}]}>{props.title}</Text>
					<Text style={[txt.noto24, {color: RED10, marginLeft: 30 * DP}]}>{props.title_star ? '*' : null}</Text>
				</View>
			) : null}
			<View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2 * DP, borderColor: input.length == 0 ? GRAY30 : APRI10}}>
				<TextInput
					placeholder={props.placeholder}
					value={props.value}
					ref={inputRef}
					onChangeText={text => onChange(text)}
					style={[
						txt.noto28,
						{
							height: 82 * DP,

							paddingLeft: 24 * DP,
							// lineHeight: 44 * DP,
							width: props.width * DP,

							// width: input.length == 0 ? 190 * DP : null,
							//X버튼을 누를 때마다 placeholder의 fontPadding이 적용되는 현상이 간헐적으로 발생
							// 우선 X버튼 클릭이벤트 발생 시에도 강제적으로 width를 적용하여 해결
						},
					]}
				/>
				{input.length > 0 ? (
					<View style={{marginLeft: 40 * DP}}>
						<Cross52 onPress={onClear} />
					</View>
				) : (
					false
				)}
				<View style={{position: 'absolute', right: 10 * DP, flexDirection: 'row'}}>
					<Text style={[txt.roboto24b, {marginHorizontal: 24 * DP, lineHeight: 36 * DP}]}>@</Text>
					<Text style={[txt.roboto28, {marginHorizontal: 24 * DP, lineHeight: 36 * DP}]}> {selectedItem} </Text>
					<View style={{marginLeft: 12 * DP}}>
						{btnStatus ? (
							<Arrow_Up_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />
						) : (
							<Arrow_Down_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />
						)}
					</View>
				</View>
			</View>
		</View>
	);
};
InputWithEmail.defaultProps = {
	itemList: ['naver.com', 'daum.net', 'nate.com'],
	placeholder: 'placeholder',
	defaultIndex: 0,
	width: 250,
	value: null,
	title: null,
	title_star: false,
	onClear: e => console.log(e),
	onChange: e => console.log(e),
};
