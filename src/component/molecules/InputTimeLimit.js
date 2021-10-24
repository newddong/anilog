import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import {TextInput} from 'react-native-gesture-handler';
import {BLACK} from 'Root/screens/color';
export default InputTimeLimit = props => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState('normal');
	const handleChange = txt => {
		setInput(txt);
		input_valid(txt);
	};
	const input_valid = txt => {
		//Validation 조건 아직 불분명하기에 length<10일 경우 false로 설정
		if(txt.length < 10){
			setConfirm(false)
		}
		if (txt.length > 10) {
			setConfirm(true);
		}
	};
	const getMsg = () => {
		if (timeOut) {
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP, includeFontPadding: false})}>{props.timeout_msg}</Text>;
		} else if (!confirm) {
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP, includeFontPadding: false})}>{props.alert_msg}</Text>;
		} else if(confirm=='normal'){
			return <Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP, includeFontPadding: false})}></Text>;
		}
	};
	const getTextColor = () => {
		if (!confirm) {
			return 'red';
		} else {
			return BLACK;
		}
	};
	const getBorderColor = () => {
		if (timeOut) {
			return 'red';
		} else if (!confirm) {
			return 'red';
		} else {
			return GRAY30;
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
	};

	let min = Math.floor((props.timelimit / 60) % 60); //184 나누기 60의 몫
	let sec = Math.floor(props.timelimit % 60); // 184 나누기 60의 나머지
	const [minutes, setMinutes] = React.useState(min);
	const [seconds, setSeconds] = React.useState(sec);
	const [timeOut, setTimeout] = React.useState(false);

	React.useEffect(() => {
		//onStartTimer
		if(minutes==min && seconds==sec){ 
			console.log("처음")
		}
		const countdown = setInterval(() => {  
			if (parseInt(seconds) > 0) {
				setSeconds(parseInt(seconds) - 1);
			}
			if (parseInt(seconds) === 0) {
				if (parseInt(minutes) === 0) {
					//onEndTimer
					setTimeout(true);
					clearInterval(countdown);
				} else {
					setMinutes(parseInt(minutes) - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [minutes, seconds]);

	const getTimeLimitTextColor = () => {
		if (timeOut) {
			return 'red';
		} else {
			return GRAY20;
		}
	};

	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 118 * DP}}>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View style={{height: 82 * DP, borderBottomWidth: 2 * DP, borderBottomColor: getBorderColor(), flexDirection: 'row'}}>
					<TextInput
						ref={inputRef}
						onChangeText={txt => handleChange(txt)}
						placeholder={props.placeholder}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								includeFontPadding: false,
								lineHeight: 44 * DP,
								textAlignVertical: 'top',
								color: getTextColor(),
							},
						]}
					/>
					<View style={{marginLeft: 106 * DP, alignSelf: 'center'}}>
						<Text style={[txt.roboto28, {color: getTimeLimitTextColor()}]}>
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</Text>
					</View>
				</View>
				{getMsg()}
			</View>
			<View>
				<View style={{height: 82 * DP, backgroundColor: 'red', width: 10}}></View>
				<View style={{height: 36 * DP, backgroundColor: 'blue', width: 10}}></View>
			</View>
			<View style={{height: 118 * DP, backgroundColor: 'purple', width: 10}}></View>
		</View>
	);
};
