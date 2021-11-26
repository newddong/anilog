import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30, GREEN, RED10} from 'Root/config/color';
import {Cross52, Eye52_APRI10, Eye52_GRAY20} from '../atom/icon';
import {BackgroundColor} from 'chalk';

/**
 *
 *@param {{
 *title: 'string / 비밀번호 상단 타이틀',
 *placeholder: string,
 *information: 'confirm state가 normal일 경우 출력될 하단 메시지',
 *value: string,
 *alert_msg: 'string / confrim state가 false일 경우 출력될 하단 메시지',
 *confirm_msg: 'string / confirm state가 true일 경우 출력될 하단 메시지',
 *confirm : boolean,
 *onChange: 'Inut Value Change Callback',
 *onClear: '지우기 버튼(X) 클릭 Callback',
 *onShowPassword: 'Password 보이기 설정 Callback',
 *description : 'String / title 우측 비밀번호 설정 포맷에 대한 설명'
 *width : 'number / input의 크기 default = 654'
 *validator : return 값이 boolean인 함수, T/F상태에 따라 confirm이 바뀜,
 *clear : 'boolean / 상단 비밀번호 Input에서 x마크 클릭 시 하단 비밀번화 확인란도 Clear시키는 조건 T/F',
 * }} props
 */
export default PasswordInput = React.forwardRef((props, ref) => {
	React.useImperativeHandle(ref, () => ({
		blur: () => {
			inputRef.current.blur();
		},
		focus: () => {
			inputRef.current.focus();
		},
		clear: () => {
			onClear();
		},
		valid: text => {
			validator(text);
		},
	}));

	React.useEffect(() => {
		props.confirm ? setConfirm(true) : setConfirm(false);
	}, [props.confirm]);

	const [input, setInput] = React.useState(''); // 암호 input text state
	const [confirm, setConfirm] = React.useState(props.confirm); // 암호 validation state
	const [pwdSecureState, setPwdSecureState] = React.useState(true); // 암호 별표화 state
	const inputRef = React.useRef();

	React.useEffect(() => {
		// console.log('clear' + props.clear);
		inputRef.current.clear();
		setInput('');
	}, [props.clear]);

	//Input 하단 메시지 출력 분기
	const getMsg = () => {
		if (input.length == 0) {
			return <Text style={(txt.noto22, {color: GRAY20, lineHeight: 36 * DP})}>{props.information}</Text>;
		} else if (confirm == true) {
			return <Text style={(txt.noto22, {color: GREEN, lineHeight: 36 * DP})}>{props.confirm_msg}</Text>;
		} else if (confirm == false) {
			return <Text style={(txt.noto22, {color: RED10, lineHeight: 36 * DP})}>{props.alert_msg}</Text>;
		} else return null;
	};

	//Input 언더라인 색깔 분기
	const getBorderColor = () => {
		if (input.length == 0) {
			return GRAY30;
		} else if (confirm == false) {
			return APRI10;
		} else if (confirm == true) {
			return GREEN;
		} else return null;
	};

	//Input Value Change Callback
	const onChange = text => {
		setInput(text);
		props.onChange && props.onChange(text);
		props.validator && validator(text); //부모에서 validator함수를 정의해주어야 validator를 실행
	};

	//Validator인데 onChange가 있는데 굳이 있어야 하는가 의문? onChange내부에 validator루틴을 넣을수 있도록 해서 사용자가 값을 입력시마다 validator가 true인지 false인지 판단하여
	//검증 로직을 외부(부모)에서 넣을수 있도록 함
	const validator = text => {
		console.log('props.validator text', props.validator(text));
		setConfirm(props.validator(text));
	};

	//지우기
	//forwardRef를 통해 PasswordInput컴포넌트의 레퍼런스를 부모 영역에서 참조 ref.current.clear() 같은 명령형으로 사용 가능
	//onClear의 경우 x버튼을 눌렸을 경우 부모 컴포넌트에게 내용을 삭제했다는 알림을 보내기 위한 용도임
	const onClear = () => {
		inputRef.current.clear();
		setInput('');
		props.onClear('');
	};

	//비밀번호 보이기 설정
	const onShowPassword = () => {
		setPwdSecureState(!pwdSecureState);
		props.onShowPassword();
	};

	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{}}>
				{/* 모든 text에 fontPadding false 적용 잊지말것 */}
				{/* parent에서 title이 props로 명시되어 있지 않을 경우 'title' string 으로 받음. */}
				<View style={props.title == null ? {flexDirection: 'row', height: 0} : {flexDirection: 'row'}}>
					{props.title != '' && props.title != 'title' && <Text style={[txt.noto24, {color: APRI10, lineHeight: 40 * DP}]}> {props.title} </Text>}
					{/* Description 아래는 height 90으로 고정 */}
					{/* 하단테두리는 2px, APRI설정 */}

					{/* Title 우측 description. props에서 받아오는 경우 출력, or null */}
					{props.description != null ? <Text style={[txt.noto24, {color: GRAY20, position: 'absolute', right: 0}]}>*{props.description}</Text> : null}
				</View>

				<View
					style={{
						height: 82 * DP,
						flexDirection: 'row',
						borderBottomWidth: 2 * DP,
						borderBottomColor: getBorderColor(),
						alignItems: 'center',
					}}>
					<TextInput
						maxLength={30}
						ref={inputRef}
						placeholder={props.placeholder}
						onChangeText={onChange}
						secureTextEntry={pwdSecureState} //암호 별모양 표시 boolean
						style={[
							txt.noto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
								minWidth: 190 * DP,
								width: props.width * DP,
								//placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
							},
						]}
					/>
					{/* /* X버튼은 TextInput과 28px 차이, 최하단 View테두리와는 14px 차이, 텍스트 길이가 1 이상일 경우에만 보여짐(입력값이 없을때 보여질 필요 없음) */}
					{input.length > 0 && (
						<View style={{position: 'absolute', right: 0, paddingBottom: 7 * DP, flexDirection: 'row'}}>
							<View style={{marginRight: 10 * DP}}>
								{pwdSecureState ? <Eye52_GRAY20 onPress={onShowPassword} /> : <Eye52_APRI10 onPress={onShowPassword} />}
							</View>
							<Cross52 onPress={onClear} />
						</View>
					)}
				</View>
				{getMsg()}
			</View>
		</View>
	);
});

PasswordInput.defaultProps = {
	title: 'title', //비밀번호란 상단 타이틀
	placeholder: 'placeholder', //placeholder
	information: 'information', // confirm state가 'normal'일 경우 출력될 하단 메시지
	value: null, // pwd input 값
	alert_msg: 'alert_msg', // confrim state가 false일 경우 출력될 하단 메시지
	confirm: false,
	confirm_msg: 'confirm_msg', // confirm state가 true일 경우 출력될 하단 메시지
	onChange: e => console.log('onChange' + e), // pwd input 값이 변할 때마다 수행되는 함수
	onClear: e => console.log('PasswordInput onClear : ' + e), // X마크로 input값을 clear할 때마다 수행되는 함수
	onShowPassword: e => console.log('PasswordInput onShowPassword' + e), // 눈마크를 Press하여 별표(*)화된 pwd값을 보이게 할 경우 수행되는 함수
	description: null, // 암호 포맷에 관한 설명, title 우측에 붙는다
	width: 654,
	clear: false,
	validator: e => console.log('PasswordInput validator' + e),
};
