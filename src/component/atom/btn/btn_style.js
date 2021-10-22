import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';

export const btn_w654 = {width: 654 * DP, height: 104 * DP, borderRadius: 40 * DP};
export const btn_w522 = {width:522 * DP, height: 92 * DP,  borderRadius: 40 * DP}
export const btn_w306 = {width:306 * DP, height: 60 * DP,  borderRadius: 30 * DP}
export const btn_w280 = {width:280 * DP, height: 60 * DP,  borderRadius: 30 * DP}
export const btn_w278 = {width:278 * DP, height: 70 * DP,  borderRadius: 40 * DP}
export const btn_w276 = {width:276 * DP, height: 70 * DP,  borderRadius: 40 * DP}
export const btn_w242 = {width:242 * DP, height: 60 * DP,  borderRadius: 30 * DP}
export const btn_w226 = {width:226 * DP, height: 70 * DP,  borderRadius: 40 * DP}
export const btn_w194 = {width:194 * DP, height: 60 * DP,  borderRadius: 30 * DP}
export const btn_w178 = {width:178 * DP, height: 70 * DP,  borderRadius: 40 * DP}

export const btn_w176 = {width:176 * DP, height: 70 * DP,  borderRadius: 40 * DP}
export const btn_w158_urgent = {width:158 * DP, height: 90 * DP,  borderRadius: 40 * DP, backgroundColor:'red'}
export const btn_w114 = {width:114 * DP, height: 60 * DP,  borderRadius: 30 * DP}
export const btn_w108 = {width:108 * DP, height: 54 * DP,  borderRadius: 30 * DP}

export const id = () => {
	return <View style={{}} />;
};

// const P = () => {
// 	return <AnilogButton btnLayout={style.btn_w999} />;
// };

// const btn_w999 = {width: 99, height: 99, borderRadius: 99, fontSize: 30};
// const AnilogButton = props => {
// 	const handlePress = e => {
// 		!props.disable && props.onPress();
// 	};
// 	const shadow = {};
// 	const noShadow = {};
// 	const Gray = {};
// 	const disable = {};
// 	return (
// 		<TouchableOpacity onPress={handlePress}>
// 			<View style={props.btnLayout}>
// 				<Text style={[txt.noto24b, {fontSize: props.btnLayout.fontSize, fontFamily: props.btnLayout.fontFamily}]}>{props.btnTitle}</Text>
// 			</View>
// 		</TouchableOpacity>
// 	);
// };
