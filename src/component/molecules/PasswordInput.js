import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30, GREEN, RED10} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {Cross52, Eye52_APRI10, Eye52_GRAY20} from '../atom/icon';
export default PasswordInput = props => {
	const [input, setInput] = React.useState(''); // 암호 별표화 State
	const [clearBtnPressed, setClearBtnPressed] = React.useState(false); //Clear 버튼 Press state
	const [confirm, setConfirm] = React.useState('normal'); // 암호 validation state
	const [pwdSecureState, setPwdSecureState] = React.useState(true); // 암호 별표화 state
	const inputRef = React.useRef();

	const getMsg = () => {
		if(confirm == 'normal'){ return <Text style={(txt.noto22, {color: GRAY20, lineHeight: 36 * DP})}>{props.information}</Text> }
		if(confirm == true){ return  <Text style={(txt.noto22, {color: GREEN, lineHeight: 36 * DP})}>{props.confirm_msg}</Text>}
		if(confirm == false){ return <Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}>{props.alert_msg}</Text> }
		return null
	};
	const getBorderColor = () => {
		if(confirm == 'normal'){ return GRAY30 }
		if(confirm == false){ return APRI10}
		if(confirm == true){ return GREEN }
		return null
	};

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt)
		validator(txt);
	};
	const validator = txt => {
		txt.length > 10 ? setConfirm(true) : setConfirm(false);
	};
	const onClear = () => {
		inputRef.current.clear();
		props.onClear();
		setConfirm('normal');
		setClearBtnPressed(true);
		setInput('');
	};
	const blur = () => {
		inputRef.current.blur();
	};
	const focus = () => {
		inputRef.current.focus();
	};
	const onShowPassword = () => {
		setPwdSecureState(!pwdSecureState);
		props.onShowPassword()
	};
	const getWidth = () => {
		if(input.length > 0){ return null }
		if (!input || clearBtnPressed) { return 190 * DP } 
	};
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 158 * DP}}>
				{/* 모든 text에 fontPadding false 적용 잊지말것 */}
				<Text style={[txt.noto24, {color: APRI10, lineHeight: 40 * DP}]}> {props.title} </Text>
				{/* Description 아래는 height 90으로 고정 */}
				{/* 하단테두리는 2px, APRI설정 */}
				<View style={{height: 82 * DP, flexDirection: 'row', borderBottomWidth: 2 * DP, borderBottomColor: getBorderColor(), alignItems: 'center'}}>
					<TextInput
						ref={inputRef}
						placeholder={props.placeholder}
						onChangeText={txt => onChange(txt)}
						secureTextEntry={pwdSecureState}
						style={[
							txt.noto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
								width: getWidth(),
								//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
								//우선 width를 가변적으로 주는 방식으로 해결
								textAlignVertical: 'center',
							},
						]}
					/>
					{/* X버튼은 TextInput과 28px 차이, 최하단 View테두리와는 14px 차이 */}
					<View style={{marginLeft: 120 * DP, paddingBottom: 7 * DP, flexDirection: 'row'}}>
						<TouchableOpacity onPress={onShowPassword}>
							<View style={{marginRight: 10 * DP}}>{pwdSecureState ? <Eye52_GRAY20 /> : <Eye52_APRI10 />}</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={onClear}>
							<Cross52 />
						</TouchableOpacity>
					</View>
				</View>
				{getMsg()}
			</View>
		</View>
	);
};
PasswordInput.defaultProps = {
	title: 'title', //비밀번호란 상단 타이틀
	placeholder: 'placeholder', //placeholder
	information: 'information', // confirm state가 'normal'일 경우 출력될 하단 메시지
	value: 'value', // pwd input 값
	alert_msg: 'alert_msg', // confrim state가 false일 경우 출력될 하단 메시지
	confirm_msg: 'confirm_msg', // confirm state가 true일 경우 출력될 하단 메시지
	onChange: (e) => console.log(e), // pwd input 값이 변할 때마다 수행되는 함수
	onClear: (e) => console.log(e), // X마크로 input값을 clear할 때마다 수행되는 함수
	onShowPassword: (e) => console.log(e), // 눈마크를 Press하여 별표(*)화된 pwd값을 보이게 할 경우 수행되는 함수
};
