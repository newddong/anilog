import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, TouchableWithoutFeedback} from 'react-native';
import {GRAY10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import { Arrow_Down_GRAY10, Arrow_Up_GRAY10,} from '../atom/icon';
export default FilterButton = props => {
	// Props
	// btnTitle - 버튼의 제목
	//TODO : disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바꿈(Disable되는 상황이 있는지?)
	// titleFontSize - title의 폰트 크기
	// btnLayout - 버튼의 레이아웃(width, layout, borderRadius를 결정)

	// onOn - 버튼이 on될때 발생하는 콜백
	// onOff - 버튼이 off될때 발생하는 콜백
	const [btnStatus, setBtnStatus] = React.useState(false);

	//클릭 이벤트
	const handlePress = e => {
		setBtnStatus(!btnStatus);
		if (btnStatus) {
			props.onOff();
		} else if (!btnStatus) {
			props.onOn();
		}
	};

	//btn의 초기상태 - false는 아직 버튼이 오픈되지 않은 상태
	
	return (
		<TouchableOpacity onPress={handlePress}>
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
