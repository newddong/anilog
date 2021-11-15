import React from 'react';
import {Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {APRI10, GRAY20, GRAY30, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {btn_w176, btn_w226} from '../atom/btn/btn_style';
import {useNavigation} from '@react-navigation/core';
import SelectStat from '../organism_ksw/SelectStat';
import {Location54_APRI10} from '../atom/icon';
/**
 *
 * @param {{btnTitle : string,
 * btnTheme: 'shadow' | 'noShadow' | 'gray' | undefined,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : Component ,
 * disable : boolean,
 * titleFontStyle : number,
 * onPress : Function   }} props
 */
export default AniButton = props => {
	//default는 APRI10, Gray의 경우 GRAY20
	const border = () => {
		if (props.btnStyle == 'border' && props.btnTheme == 'gray') {
			return {borderColor: GRAY20, borderWidth: 4 * DP};
		} else if (props.btnStyle == 'border') {
			return {borderColor: APRI10, borderWidth: 4 * DP};
		}
	};

	const onPress = () => {
		props.disable ? false : props.onPress(props.btnTitle);
	};

	const insideView = () => {
		return (
			<View style={[btn_w176, {backgroundColor: WHITE, justifyContent: 'center', borderColor: APRI10, borderWidth: 4 * DP}]}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 5 * DP}}>
					<Location54_APRI10 />
					<Text
						style={[
							txt.noto24b,
							{
								marginLeft: 12 * DP,
								fontSize: props.titleFontStyle * DP,
								color: APRI10,
								textAlign: 'center',
								textAlignVertical: 'center',
								// lineHeight: lineHeight(),
							},
						]}>
						{props.btnTitle}
					</Text>
				</View>
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
