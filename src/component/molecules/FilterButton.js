import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Arrow_Down_GRAY10, Arrow_Up_GRAY10} from '../atom/icon';

export default FilterButton = props => {

	const [btnStatus, setBtnStatus] = React.useState(false);

	//클릭 이벤트
	const onPress = e => {
		setBtnStatus(!btnStatus);
		btnStatus ? props.onOff(btnStatus) : props.onOn(btnStatus);
	};

	return (
		<TouchableOpacity onPress={onPress}>
			{/* 각각 필요한 스타일들(배경색, 테두리, 그림자효과)을 함수에서 얻어와 더해갑니다 */}
			<View
				style={[
					props.btnLayout,
					{
						borderWidth: 4 * DP,
						borderColor: GRAY10,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					},
				]}>
				<Text
					style={[
						txt.noto24,
						{
							fontSize: props.titleFontStyle * DP,
							color: GRAY10,
						},
					]}>
					{props.btnTitle}
				</Text>
				{btnStatus ? <Arrow_Up_GRAY10 /> : <Arrow_Down_GRAY10 />}
			</View>
		</TouchableOpacity>
	);
};

FilterButton.defaultProps = {
	btnTitle: 'title',
	titleFontSize: 24 * DP,
	btnLayout: btn_w226,
	onOn: e => console.log(e),
	onOff: e => console.log(e),
};
