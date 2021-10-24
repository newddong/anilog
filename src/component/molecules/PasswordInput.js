import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {Cross52, Eye52_APRI10, Eye52_GRAY20} from '../atom/icon';
export default PasswordInput = props => {
	// 탭을 클릭(선택) 할 때 해당 탭을 하이라이트 효과로 전환하고 기존에 선택된 탭의 하이라이트를 해제한다.
	// 보기 버튼(눈 모양)을 클릭하면 패스워드 보기가 활성화 되며 입력값이 유저에게 보여진다.
	// 다시 누르면 보기가 비활성화 되며 입력값이 가려진다.
	// 입력값이 변경될 때 유효성을 체크하며 유효하지 않을 경우에는 경고 메시지를,
	// 유효할 경우에는 유효한 메시지를 입력칸 아래에 출력한다.

	// Props
	// title - 입력의 제목
	// placeholder - textinput의 입력 힌트
	// information - textinput의 입력에 대한 설명
	// value - textinput의 입력값
	// alert_msg - validator가 false일때 출력되는 메시지
	// confirm_msg - validator가 true일때 출력되는 메시지

	// //TODO : validation 조건이 한가지 이상 단계적으로 이루어질 경우 validator정의 및 msg표시
	// validator - 입력값으로 textinput의 value를 받고 true, false를 반납하는 유효성 검사 함수
	// onChange - textinput의 값이 변경될 때마다 value를 매개변수로 받는 콜백
	// onClear -
	// onShowPassword -

	// Method
	// clear() - textinput의 값을 초기화
	// focus() - textinput으로 커서를 강제 포커싱
	// blur() - textinput에서 포커스를 해제

	const [input, setInput] = React.useState('');
    const [clearBtnPressed, setClearBtnPressed]=React.useState(false)
	const [confirm, setConfirm] = React.useState('normal');
	const [pwdSecureState, setPwdSecureState] = React.useState(true);
	const handleChange = txt => {
		setInput(txt);
		input_valid(txt);
	};
	const input_valid = txt => {
		if (txt.length < 10) {
			setConfirm(false);
		}
		if (txt.length > 10) {
			setConfirm(true);
		}
	};
	const getMsg = () => {
		if (confirm == 'normal') {
			
		} else if (confirm) {
			return <Text style={(txt.noto22, {color: '#13BE00', includeFontPadding: false, lineHeight: 36 * DP})}>{props.confirm_msg}</Text>;
		} else if (!confirm) {
			return <Text style={(txt.noto22, {color: 'red', includeFontPadding: false, lineHeight: 36 * DP})}>{props.alert_msg}</Text>;
		}
	};
	const getBorderColor = () => {
		if (confirm=='normal') {
			return GRAY30;
		} else if (confirm) {
			return '#13BE00';
		}
	};
	const inputRef = React.useRef();
	// React.useEffect(() => {
	// 	inputRef.current.focus();
	// 	setTimeout(() => {
	// 		inputRef.current.blur();
	// 	}, 2000);
	// });
	const handleClear = () => {
		inputRef.current.clear();
		setConfirm('normal');
        setClearBtnPressed(true)
	};
	const onShowPassword = () => {
		setPwdSecureState(!pwdSecureState);
	};
    const getWidth = () => {
        if(!input){
            return 190*DP
        } else if(clearBtnPressed){ //X버튼을 누를 때마다 placeholder의 fontPadding이 적용되는 현상이 간헐적으로 발생
                                    // 우선 X버튼 클릭이벤트 발생 시에도 강제적으로 width를 적용하여 해결
            return 190*DP
        }
    }
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 158 * DP}}>
				{/* 모든 text에 fontPadding false 적용 잊지말것 */}
				<Text style={[txt.noto24, {color: APRI10, lineHeight: 40 * DP}]}> {props.title} </Text>
				{/* Description 아래는 height 90으로 고정 */}
				{/* 하단테두리는 2px, APRI설정 */}
				<View style={{height: 82 * DP ,flexDirection: 'row', borderBottomWidth: 2 * DP, borderBottomColor: getBorderColor(), alignItems: 'center'}}>
					<TextInput
						ref={inputRef}
						placeholder={props.placeholder}
						onChangeText={txt => handleChange(txt)}
						secureTextEntry={pwdSecureState}
						style={[
							txt.noto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								includeFontPadding: false,
								lineHeight: 44 * DP,
                                width:getWidth(),
                                //placeholder 상태일때 글꼴의 영향인지 placeholde'r' 마지막글자가 짤리는 현상 발생
                                //우선 width를 가변적으로 주는 방식으로 해결
                                textAlignVertical: 'center',

							},
						]}
					/>
					{/* X버튼은 TextInput과 28px 차이, 최하단 View테두리와는 14px 차이 */}
					<View style={{marginLeft: 28 * DP, paddingBottom: 7 * DP, flexDirection: 'row'}}>
						<TouchableOpacity onPress={onShowPassword}>
							<View style={{marginRight: 10 * DP}}>{pwdSecureState ? <Eye52_GRAY20 /> : <Eye52_APRI10 />}</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={handleClear}>
							<Cross52 />
						</TouchableOpacity>
					</View>
				</View>
				{getMsg()}
			</View>
			{/* 비교용 View  */}
			<View>
				<View style={{height: 40 * DP, backgroundColor: 'red', width: 10}}></View>
				<View style={{height: 18 * DP, backgroundColor: 'blue', width: 10}}></View>
				<View style={{height: 44 * DP, backgroundColor: 'yellow', width: 10}}></View>
				<View style={{height: 18 * DP, backgroundColor: 'blue', width: 10}}></View>
				<View style={{height: 36 * DP, backgroundColor: 'yellow', width: 10}}></View>
			</View>
			<View style={{height: 158 * DP, backgroundColor: 'purple', width: 10}}></View>
		</View>
	);
};
