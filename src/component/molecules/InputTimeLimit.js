import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {GRAY20, GRAY30, BLACK, RED10} from 'Root/config/color';

export default InputTimeLimit = props => {

	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState();
	const inputRef = React.useRef();
	const interval = 1000 //1 sec
	
	let min = Math.floor((props.timelimit / 60) % 60); //184 나누기 60의 몫
	let sec = Math.floor(props.timelimit % 60); // 184 나누기 60의 나머지
	const [minutes, setMinutes] = React.useState(min);
	const [seconds, setSeconds] = React.useState(sec);
	const [timeOut, setTimeout] = React.useState(false);
	
	React.useEffect(() => {
		//onStartTimer
		if (minutes == min && seconds == sec) {
			console.log('처음');
			props.onStartTimer()
		}

		const countdown = setInterval(() => {
			if (parseInt(seconds) > 0) {
				setSeconds(parseInt(seconds) - 1);
			} else {
				if (parseInt(minutes) === 0) {
					//onEndTimer
					setTimeout(true);
					props.onEndTimer()
					clearInterval(countdown);
				} else {
					setMinutes(parseInt(minutes) - 1);
					setSeconds(59);
				}
			}
		}, interval);
		return () => clearInterval(countdown);
	}, [minutes, seconds]);

	const validator = text => {
		//Validation 조건 아직 불분명하기에 length<10일 경우 false로 설정
		text.length > 10 ? setConfirm(true) : setConfirm(false);
	};
	
	const blur = () => {
		inputRef.current.blur();
	};

	const focus = () => {
		inputRef.current.focus();
	};

	const onClear = () => {
		inputRef.current.clear();
		props.onClear()
	};

	const onChange = text => {
		setInput(text);
		validator(text)
		props.onChange(text);
	};

	const getMsg = () => {
		if(input.length == 0 && !timeOut){
			return false
		} else if(!confirm && !timeOut){
			return props.alert_msg
		} else if(timeOut){
			return props.timeout_msg
		}
	};

	const getBorderColor = () => {
		if(input.length == 0 && !timeOut){
			return GRAY30
		} else if(!confirm || timeOut){
			return RED10
		} 
	}

	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{height: 118 * DP}}>
				{/* 하단테두리 2px이 있기 때문에 inputValue와 82px가 차이가 나도 -2한 80값을 height로 줌 */}
				<View
					style={{
						height: 82 * DP,
						borderBottomWidth: 2 * DP,
						borderBottomColor:getBorderColor(),
						flexDirection: 'row',
					}}>
					<TextInput
						ref={inputRef}
						onChangeText={text => onChange(text)}
						placeholder={props.placeholder}
						style={[
							txt.roboto28,
							{
								//TextInput과 바깥 View와의 거리 24px, lineHeight는 글꼴크기와 일치
								paddingLeft: 24 * DP,
								lineHeight: 44 * DP,
								color: confirm ? BLACK : RED10,
							},
						]}
					/>
					<View style={{marginLeft: 106 * DP, alignSelf: 'center'}}>
						<Text
							style={[
								txt.roboto28,
								{
									color: timeOut ? RED10 : GRAY20,
								},
							]}>
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</Text>
					</View>
				</View>
				<Text style={(txt.noto22, {color: 'red', lineHeight: 36 * DP,})}>{getMsg()}</Text>
			</View>
		</View>
	);
};
InputTimeLimit.defaultProps = {
	value: null,
	placeholder: 'placeholder',
	timelimit: 180,
	alert_msg: 'alert_msg',
	timeout_msg: 'timeOut_msg',
	onChange: e => console.log(e),
	onClear: e => console.log(e),
	onStartTimer : e => console.log(e),
	onEndTimer : e => console.log(e)
};
