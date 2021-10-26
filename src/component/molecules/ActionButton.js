import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import {APRI10, GRAY20, GRAY30} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import { btn_w226 } from '../atom/btn/btn_style';
import {Arrow_Down_APRI10, Arrow_Down_GRAY30, Arrow_Down_White, Arrow_Up_APRI10, Arrow_Up_GRAY30, Arrow_Up_White} from '../atom/icon';


export default ActionButton = props => {
	
	const btnTxtColor = () => {
		//txt Color의 종류는 3가지 - white, APRI10, GRAY20
		if (props.btnTheme == 'gray' && props.btnStyle == 'border') {
			return GRAY20;
		}
		if (props.btnStyle == 'filled') {
			return 'white';
		} 
        if (props.disable){
            return GRAY30;
        }
		return APRI10;
	};

	const border = () => {
		//border은 btnStyle이 border인 경우 모두 발생
		//default는 APRI10, Gray의 경우 GRAY20
		if (props.btnStyle == 'border' && props.btnTheme == 'gray') {
			return {borderColor: GRAY20, borderWidth: 4 * DP};
		} else if (props.btnStyle == 'border') {
			return {borderColor: APRI10, borderWidth: 4 * DP};
		} else if (props.disable){
            return {borderColor: GRAY30, borderWidth: 4 * DP}
        }
	};

	const btnStyle = () => {
		//filled인 경우 APRI10
		//Border 혹은 noBorder일 경우 white
		//Disable값이 true인 경우 GRAY30
		if (props.btnStyle == 'filled') {
			return {
				backgroundColor: APRI10,
			};
		} else if (props.disable) {
			return {
				backgroundColor: 'GRAY30',
			};
		} else {
			return {
				backgroundColor: 'white',
			};
		}
	};

	//클릭 이벤트
	const handlePress = e => {
		setBtnStatus(!btnStatus);
		if (btnStatus) {
			props.onClose();
		} else if (!btnStatus) {
			props.onOpen();
		}
	};

	//btn의 초기상태 - false는 아직 버튼이 오픈되지 않은 상태
	const [btnStatus, setBtnStatus] = React.useState(false);
	const arrowStyle = () => {
		if (props.btnStyle == 'filled') {
			return btnStatus ? <Arrow_Up_White /> : <Arrow_Down_White />;
		} else if(props.btnStyle =='border' || props.btnStyle == 'noBorder') {
			return btnStatus ? <Arrow_Up_APRI10 /> : <Arrow_Down_APRI10 />;
		} else if(props.disable) {
            return btnStatus ? <Arrow_Up_GRAY30 /> : <Arrow_Down_GRAY30 />;
        }
	};

	//Border 설정으로 인한 안쪽 Text Line 내려가는 현상 처리
	const lineHeight = () => {
		//Border가 설정되는 disable=true , btnStyle='border'의 경우 border의 width만큼 lineheight에서 빼준다
		if (props.btnStyle == 'border' || props.disable) {
			return props.btnLayout.height - 4 * DP;
		} else {
			return props.btnLayout.height;
		}
	};
	return (
		<TouchableOpacity onPress={handlePress}>
			{/* 각각 필요한 스타일들(배경색, 테두리, 그림자효과)을 함수에서 얻어와 더해갑니다 */}
			<View style={[props.btnLayout, border(), btnStyle(), {flexDirection: 'row', justifyContent: 'center', alignItems:'center'}]}>
				<Text
					style={[
						txt.noto24b,
						{
							fontSize: props.titleFontStyle * DP,
							color: btnTxtColor(), //TXT_COLOR가 다양하므로 함수로 분기처리
							textAlign: 'center',
							lineHeight : lineHeight(),
						},
					]}>
					{props.btnTitle}
				</Text>
				{arrowStyle()}
			</View>
		</TouchableOpacity>
	);
};


ActionButton.defaultProps = {
	btnTitle:'BTN_W654', //버튼의 제목
	disable: false, // 버튼탭 사용불가 상태 boolean
	value: null, // 
	btnLayout:btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
	titleFontStyle:24, // 버튼 title의 폰트 크기
	btnStyle:'border', // 버튼스타일 filled border noBorder
	onOpen:{},
	onClose:{},
};