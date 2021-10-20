import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { APRI10 } from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
export const UserLocationLabel = props => {
	return (
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<View style={{paddingTop: 4 * DP,}}>
                 {/* Text Box 2개의 Height 총합 78 - profileImage height는 70 = 8 이므로 paddingVertical 4로 top bottom 4씩 Padding을 줍니다  */}
                    <TouchableOpacity onPress={props.onLabelClick}>
					<Image source={{uri: props.userInfo.user_image}} style={styles.img_round_70} />
                    </TouchableOpacity>
				</View>
				<View style={{marginLeft: 20 * DP, width:300*DP}}>
					{/* Text부분과 프로필이미지 사이의 거리 20 */}
					<Text style={[txt.roboto28b, {color:props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">{props.userInfo.user_nickname}</Text>
					<Text style={[txt.noto24, {lineHeight: 36 * DP}]} numberOfLines={1} ellipsizeMode="tail">{props.userInfo.location}</Text>
					{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
				</View>
			</View>
	);
};