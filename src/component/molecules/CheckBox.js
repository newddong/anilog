import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import DP from 'Root/config/dp';
import { Check50, Rect48_GRAY30, Rect50_Border } from '../atom/icon';
import { GRAY10, GRAY20 } from 'Root/config/color';
import AniButton from './AniButton';
/**
 *
 * @param {{
 * isCheck : boolean ,
 * value : 'string / CheckBox 우측 텍스트',
 * disable : 'boolean / 버튼 사용 가능 여부,
 * onCheck : '박스가 체크될 시 수행되는 callBack함수'
 * }} props
 */
export default CheckBox = props => {
	const [checked, setChecked] = React.useState(props.isCheck); //체크상태 여부 boolean isCheck값에 따라 초기상태 결정됨
	const onCheck = () => {
		setChecked(!checked);
	};

	React.useEffect(()=>{
		props.onCheck(checked); //onCheck에 변화된 checked 값을 매개변수로 보냄
	},[checked]);

	React.useEffect(()=>{
		setChecked(props.isCheck);
	},[props.isCheck])

	// React.useEffect(() => {
		// setChecked(props.state); //useEffect의 dependency에 포함되는 state값을 useEffect내부에서 다시 set하는 경우 무한루프에 빠질 수 있음
	// }, [props.state]);

	return (
		<View style={{ flexDirection: 'row' }}>
			{props.disable ? <Rect48_GRAY30 /> : checked ? <Check50 onPress={onCheck} /> : <Rect50_Border onPress={onCheck} />}
			<Text
				style={[
					txt.noto24,
					{
						// 사용불가 boolean에 따른 style 적용
						color: props.disable ? GRAY20 : GRAY10,
						paddingLeft: 12 * DP,
					},
				]}>
				{props.value}
			</Text>
		</View>
	);
};

CheckBox.defaultProps = {
	isCheck: false,
	value: '',
	disable: false,
	onCheck: e => console.log(e),
};
