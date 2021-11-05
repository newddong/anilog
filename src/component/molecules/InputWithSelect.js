import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30} from 'Root/config/color';

export default InputWithSelect = props => {
	const [btnStatus, setBtnStatus] = React.useState(false);
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);
	const [input, setInput] = React.useState('');
	const inputRef = React.useRef();

	const onChange = text => {
		props.onChange(text);
		setInput(text);
	};

	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setInput('');
	};

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	return (
		<View style={{flexDirection: 'row', height: 82 * DP}}>
			<View
				style={{
					flexDirection: 'row',
					borderBottomWidth: 2 * DP,
					// 현재 선택상태인 드롭다운아이템이 itemList props의 defaultIndex와 일치하는지 여부
					borderColor: input.length == 0 ? GRAY30 : APRI10,
					alignItems: 'center',
				}}>
				<Text
					style={[
						txt.roboto28,
						{
							paddingLeft: 24 * DP,
							lineHeight: 44 * DP,
						},
					]}>
					{selectedItem}
				</Text>
				<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)} style={{marginLeft: 43 * DP}}>
					{/* BtnStatus가 true일 경우 아래방향 화살표, false일 경우 위방향 화살표 */}
					{btnStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
				</TouchableOpacity>
				<TextInput
					placeholder={props.placeholder}
					value={props.value}
					ref={inputRef}
					onChangeText={text => onChange(text)}
					style={[
						txt.noto28,
						{
							lineHeight: 44 * DP,
							//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
							//우선 width를 가변적으로 주는 방식으로 해결
							width: input.length == 0 ? 190 * DP : false, //Input란이 비었을 시 width 고정을 줌
							paddingVertical: 16 * DP, // Value와 최상위 View와의 paddingVertical 16px
							paddingLeft: 12 * DP, // Arrow버튼과 Value란 12px 차이
						},
					]}
				/>
				{input.length > 0 ? (
					<TouchableOpacity onPress={onClear} style={{marginLeft: 120 * DP}}>
						<Cross52 />
					</TouchableOpacity>
				) : false}
			</View>
		</View>
	);
};
InputWithSelect.defaultProps = {
	placeholder: 'placeholder',
	itemList: null,
	defaultIndex: 0, // props로 받은 itemList의 디폴트 인덱스
	value: null,
	onChange: e => console.log(e),
	onClear: e => console.log(e),
};
