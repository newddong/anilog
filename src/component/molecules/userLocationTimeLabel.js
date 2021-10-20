import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { GRAY20 } from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import { styles } from '../atom/image/imageStyle';
export const UserLocationTimeLabel = props => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<View style={{paddingBottom:8*DP}}>
				{/* Text Box 2 Height 68 - profileImage height 60 하지만 profileImage가 위로 치우쳐져있음 => bottom Padding으로 8 처리   */}
				<TouchableOpacity onPress={props.onLabelClick}>
					<Image source={{uri: props.userInfo.user_image}} style={styles.img_round_60} />
				{/* image_round_76이 없으므로 style 작성 */}
				</TouchableOpacity>
			</View>
			<View style={{marginLeft: 20 * DP, width: 300 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 30 */}
				{/* width 300은 비정상적인 길이에 대한 처리 */}
				{/* img_round_94의 height94이며 Text Box 2개의 height 총합은 86이었으므로 paddingVertical을 4씩 준다*/}
				<Text style={[txt.roboto24, {color:props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">
					{props.userInfo.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 36 * DP, color:GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
			 		{props.userInfo.location} · {props.time}일 전
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};