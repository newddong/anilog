import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import {GRAY10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import { btn_w226 } from '../atom/btn/btn_style';
import { Arrow_Down_GRAY10, Arrow_Up_GRAY10,} from '../atom/icon';
export default FilterButton = props => {
	
	const [btnStatus, setBtnStatus] = React.useState(false);

	//클릭 이벤트
	const onPress = e => {
		setBtnStatus(!btnStatus);
		if (btnStatus) {
			props.onOff();
		} else if (!btnStatus) {
			props.onOn();
		}
	};

	//btn의 초기상태 - false는 아직 버튼이 오픈되지 않은 상태
	
	return (
		<TouchableOpacity onPress={onPress}>
			{/* 각각 필요한 스타일들(배경색, 테두리, 그림자효과)을 함수에서 얻어와 더해갑니다 */}
			<View style={[props.btnLayout, {flexDirection: 'row', justifyContent: 'center', alignItems:'center', borderWidth:4*DP, borderColor:GRAY10,}]}>
				<Text
					style={[
						txt.noto24,
						{
							fontSize: props.titleFontStyle * DP,
							color: GRAY10,
							lineHeight: props.btnLayout.height - 4 * DP, //noto는 lineHeight가 필요한 글꼴이며 Lineheight는 버튼layout의 height를 활용
						},
					]}>
					{props.btnTitle}
				</Text>
				<View style={{alignSelf: 'center'}}>
                { btnStatus ? <Arrow_Up_GRAY10/>: <Arrow_Down_GRAY10/>}
                </View>
			</View>
		</TouchableOpacity>
	);
};
FilterButton.defaultProps = {
	btnTitle : 'title',
	titleFontSize : 24 *DP,
	btnLayout : btn_w226,
	onOn : {},
	onOff : {}
}