import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { GRAY20 } from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import { styles } from '../atom/image/imageStyle';
export const UserTimeLabel = props => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
				{/* Text Box 2 Height 86 - profileImage height 76 = 10 = PaddingVertical 5*2 */}
				<TouchableOpacity onPress={props.onLabelClick}>
					<Image source={{uri: props.userInfo.user_image}} style={{}} />
					{/* image_round_76이 없으므로 style 작성 */}
				</TouchableOpacity>
				<View style={{flexDirection: 'row'}}>
					<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
						{props.userInfo.user_nickname}
					</Text>

					<Text style={[txt.noto24, {lineHeight: 36 * DP, color: GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
						{props.userInfo.location} · {props.time}일 전
					</Text>
				</View>
		</View>
	);
};
