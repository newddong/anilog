import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {APRI10, GRAY30} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Arrow_Down_APRI10, Arrow_Down_GRAY30, Arrow_Down_White, Arrow_Up_APRI10, Arrow_Up_GRAY30, Arrow_Up_White} from '../atom/icon';
/**
 *
 * @param {{btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * onOpen : Function,
 * onClose : Function,
 * initState : '버튼의 초기상태 false이면 close, true이면 open',
 * noStateChange : '버튼의 on, off를 변경하지 않음, initState가 false이면 onOpen, true이면 onClose만 실행'
 * }} props
 */
export default ActionButton = props => {
	//btn의 초기상태 - false는 아직 버튼이 오픈되지 않은 상태
	const [btnStatus, setBtnStatus] = React.useState(props.initState);

	const btnTxtColor = () => {
		//txt Color의 종류는 3가지 - white, APRI10, GRAY20
		if (props.disable) {
			return GRAY30;
		} //disable 상태
		else if (props.btnStyle == 'filled') {
			return 'white';
		} //filled상태
		return APRI10; //border 상태
	};

	const border = () => {
		//border는 btnStyle='border' or disable=true 인 경우 발생
		if (props.disable) {
			return {borderColor: GRAY30, borderWidth: 4 * DP};
		} else if (props.btnStyle == 'border') {
			return {borderColor: APRI10, borderWidth: 4 * DP};
		}
	};

	//버튼 안쪽 화살표 모양 설정, btnStatus에 따라 바뀜
	const arrowStyle = () => {
		if (props.disable) {
			return btnStatus ? <Arrow_Up_GRAY30 /> : <Arrow_Down_GRAY30 />;
		} else if (props.btnStyle == 'filled') {
			return btnStatus ? <Arrow_Up_White /> : <Arrow_Down_White />;
		} else if (props.btnStyle == 'border' || props.btnStyle == 'noBorder') {
			return btnStatus ? <Arrow_Up_APRI10 /> : <Arrow_Down_APRI10 />;
		}
	};

	//클릭 이벤트
	const onPress = e => {
		!props.noStateChange&&setBtnStatus(!btnStatus);
		// btnStatus ? props.onOpen() : props.onClose();
		btnStatus&&(props.onClose()||true)||props.onOpen();
	};

	//액션버튼 본체
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={[
					props.btnLayout, // 버튼 레이아웃
					border(), // 버튼 테두리
					{
						//이외 스타일 적용
						backgroundColor: props.btnStyle == 'filled' ? APRI10 : 'white',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					},
				]}>
				<Text
					style={[
						txt.noto24b,
						{
							fontSize: props.titleFontStyle * DP,
							color: btnTxtColor(), //TXT_COLOR가 다양하므로 함수로 분기처리
							textAlign: 'center',
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
	noStateChange : false,
	initState: false,
	btnTitle: 'BTN_W654', //버튼의 제목
	disable: false, // 버튼탭 사용불가 상태 boolean
	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
	titleFontStyle: 24, // 버튼 title의 폰트 크기
	btnStyle: 'border', // 버튼스타일 filled border noBorder
	onOpen: e => console.log('ActionButtonOpen'),
	onClose: e => console.log('ActionButtonClose'),
};
