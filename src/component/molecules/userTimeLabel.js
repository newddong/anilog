import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
export default UserTimeLabel = props => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={props.onLabelClick}>
				<Image source={{uri: props.userInfo.user_image}} style={{width: 46 * DP, height: 46 * DP, borderRadius: 40}} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP, flexDirection: 'row', paddingBottom: 10 * DP, height: 36 * DP, backgroundColor:'yellow'}}>
				{/* profile Image와 총 height가 10차이가 난다 => paddingBottom 10 */}
				<View>
					<Text style={[txt.roboto24, {lineHeight: 30 * DP, color: props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">
						{props.userInfo.user_nickname}
					</Text>
				</View>
				<View style={{paddingLeft: 16 * DP}}>
					<Text style={[txt.noto24, {lineHeight: 30 * DP, color: GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
						· {props.time}일 전
					</Text>
				</View>
			</View>
		</View>
	);
};
