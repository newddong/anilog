import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import DP from 'Root/config/dp';
import {Check50, Rect48_GRAY30, Rect50_Border} from '../atom/icon';
import {GRAY10, GRAY20} from 'Root/config/color';
import AniButton from './AniButton';
/**
 *
 * @param {{
 * state : boolean ,
 * value : 'string / CheckBox 우측 텍스트',
 * disable : 'boolean / 버튼 사용 가능 여부,
 * onCheck : '박스가 체크될 시 수행되는 callBack함수'}} props
 */
export default CheckBox = props => {
	const [checked, setChecked] = React.useState(props.state); //체크상태 여부 boolean
	const onCheck = () => {
		setChecked(!checked);
		props.onCheck(!checked);
	};

	React.useEffect(() => {
		setChecked(props.state);
	}, [props.state]);

	return (
		<View style={{flexDirection: 'row'}}>
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
	state: false,
	value: '',
	disable: false,
	onCheck: e => console.log(e),
};
