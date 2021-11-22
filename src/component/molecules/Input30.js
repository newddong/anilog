import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, View, TextInput } from 'react-native';
import DP from 'Root/config/dp';
import { BLACK, APRI10, GRAY20, GRAY30, RED10, GREEN } from 'Root/config/color';
import { Cross52 } from '../atom/icon';
import { TouchableOpacity } from 'react-native';

/**
 *
 *@param {{
 *showTitle: true, // true - title과 description 출력 , false - 미출력
 *title: 'showTitle True일 시 출력되는 inputTitle',
 *description: 'showTitle True일 시 출력되는 안내메시지',
 *placeholder: 'placeholder',
 *value: 'value',
 *showmsg : 'boolean / 하단 메시지 출력여부'
 *alert_msg: 'alert_msg',
 *confirm_msg: 'confirm_msg',
 *clearMark: boolean,
 *onClear: '지우기(X)버튼 클릭 callback',
 *onChange: 'Input Value Change Callback',
 *width: 'TextInput의 너비',
 * }} props
 */
export default Input30 = props => {
	const [input, setInput] = React.useState();
	const [confirmed, setConfirmed] = React.useState(false); //Confirm Msg 출력 Boolean
	const inputRef = React.useRef();

	// Validator는 부모 컴포넌트에서 실시 결과값 props.confirm  => prop.confirm의 변동에 따라 input30의 confirm state 변경 -
	React.useEffect(() => {
		props.confirm ? setConfirmed(true) : setConfirmed(false);
	}, [props.confirm]);

	// Input 값 변동 콜백
	const onChange = text => {
		// validator(text);
		setInput(text);
		props.onChange(text);
	};

	//Validator 조건확인이 안되었기에 테스트용으로 입력된 텍스트가
	// 10자 이상일 때 confirmed가 되도록 작성
	const validator = text => {
		// text.length < 10 ? setConfirm(false) : setConfirm(true);
	};

	const getMsg = () => {
		if (props.showmsg) {

			if (input == undefined || input.length == 0) {
				return null;
			} else if (confirmed == true) {
				return <Text style={(txt.noto22, { color: GREEN, lineHeight: 36 * DP })}>{props.confirm_msg}</Text>;
			} else if (confirmed == false) {
				return <Text style={(txt.noto22, { color: RED10, lineHeight: 36 * DP })}>{props.alert_msg}</Text>;
			}
		}
	};

	const onClear = () => {
		inputRef.current.clear();
		//지우기에서도 onChange에 빈 값을 넣어주어야 부모의 Confirmed값이 false로 바뀐다
		//부모는 onChange로 넘어오는 값을 통해 Validator를 수행하기 때문
		props.onChange('');
		setInput('');
		props.onClear();
	};

	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	const showTitle = () => {
		return props.showTitle ? (
			<View>
				<Text style={[txt.noto30b, { color: APRI10 }]}> {props.title} </Text>
				<Text style={[txt.noto22, { color: GRAY20 }]}> {props.description} </Text>
			</View>
		) : (
			false
		);
	};

	return (
		<View style={{ flexDirection: 'row' }}>
			<View>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				{showTitle()}
				<View
					style={{
						height: 80 * DP,
						borderBottomWidth: 2 * DP,
						borderBottomColor: input == undefined || input.length == 0 ? GRAY30 : APRI10,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<TextInput
						ref={inputRef}
						onChangeText={text => onChange(text)}
						placeholder={props.placeholder}
						value={input}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 Text View크기와 일치
								paddingLeft: 16 * DP,
								textAlignVertical: 'bottom',
								color: props.confirm ? BLACK : RED10,
								width: props.width * DP,
								// textAlign: 'center',
							},
						]}
					/>
					{props.clearMark ? (
						<TouchableOpacity onPress={onClear} style={{ position: 'absolute', right: 0 }}>
							<Cross52 />
						</TouchableOpacity>
					) : null}
				</View>
				{getMsg()}
			</View>
		</View>
	);
};

Input30.defaultProps = {
	showTitle: true, // true - title과 description 출력 , false - 미출력
	title: 'title',
	description: 'description',
	placeholder: 'placeholder',
	value: 'value',
	showmsg: true,
	alert_msg: 'alert_msg',
	confirm_msg: 'confirm_msg',
	confirm: false,
	clearMark: true,
	onClear: e => console.log(e),
	onChange: e => console.log(e),
	width: 300, // TextInput 너비
};
