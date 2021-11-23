import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { APRI10, GRAY20, GRAY30, WHITE } from 'Root/config/color';
import DP from 'Root/config/dp';
import { txt } from 'Root/config/textstyle';
import { btn_w226 } from '../atom/btn/btn_style';
/**
 *
 * @param {{btnTitle : string,
 * btnTheme: 'shadow' | 'noShadow' | 'gray' | undefined,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : Component ,
 * disable : boolean,
 * titleFontStyle : 'Title 글꼴크기 , default = 24',
 * onPress : Function   }} props
 */
export default AniButton = props => {
	const btnTheme = () => {
		//btnTheme이 shadow일 경우 Button의 View에 아래의 style을 추가한다
		if (props.btnTheme == 'shadow') {
			return {
				shadowColor: '#000000',
				shadowOpacity: 0.27,
				shadowRadius: 4.65,
				shadowOffset: {
					width: 1 * DP,
					height: 2 * DP,
				},
				elevation: 2,
			};
		}
	};

	//txt Color의 종류는 3가지 - white, APRI10, GRAY20
	const btnTxtColor = () => {
		if (props.disable || props.btnStyle == 'filled') {
			return WHITE;
		} else if (props.btnTheme == 'gray' && props.btnStyle == 'border') {
			return GRAY20;
		} else return APRI10;
	};

	//default는 APRI10, Gray의 경우 GRAY20
	const border = () => {
		if (props.btnStyle == 'border' && props.btnTheme == 'gray') {
			return { borderColor: GRAY20, borderWidth: 4 * DP };
		} else if (props.btnStyle == 'border') {
			return { borderColor: APRI10, borderWidth: 4 * DP };
		}
	};

	const btnStyle = () => {
		if (props.disable) {
			return GRAY30;
		} //disable일 경우 배경색 GRAY30
		else if (props.btnStyle == 'filled') {
			return APRI10;
		} //FILLED일 경우 배경색 APRI10
		else {
			return WHITE;
		} //이외의 경우 WHITE
	};
	const onPress = () => {
		props.disable ? false : props.onPress(props.btnTitle);
	};

	const insideView = () => {
		return (
			<View style={[props.btnLayout, btnTheme(), border(), { backgroundColor: btnStyle(), justifyContent: 'center' }]}>
				<Text
					style={[
						txt.noto24b,
						{
							fontSize: props.titleFontStyle * DP,
							color: btnTxtColor(),
							textAlign: 'center',
							// lineHeight: lineHeight(),
						},
					]}>
					{props.btnTitle}
				</Text>
			</View>
		);
	};
	return props.disable ? (
		<TouchableWithoutFeedback onPress={onPress}>{insideView()}</TouchableWithoutFeedback>
	) : (
		<TouchableOpacity onPress={onPress}>{insideView()}</TouchableOpacity>
	);
};

AniButton.defaultProps = {
	btnTitle: 'title', //버튼의 제목
	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
	titleFontStyle: 24, // titleFontStyle - title의 폰트 크기
	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
	onPress: e => console.log(e), // 버튼을 탭했을때 발생하는 콜백
};
