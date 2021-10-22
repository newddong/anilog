import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import { round_style, styles } from '../atom/image/imageStyle';
export default UserTimeLabel = props => {
	const handleLabelClick = e => {
		props.onLabelClick(props.data.user_id);
	};
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={handleLabelClick}>
				<Image source={{uri: props.data.user_image}} style={styles.img_round_46} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP, flexDirection: 'row', paddingBottom: 10 * DP, height: 36 * DP}}>
				{/* profile Image와 총 height가 10차이가 난다 => paddingBottom 10 */}
				<View>
					<Text style={[txt.roboto24, {lineHeight: 30 * DP, color: props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname}
					</Text>
				</View>
				<View style={{paddingLeft: 16 * DP}}>
					<Text style={[txt.noto24, {lineHeight: 30 * DP, color: GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
						· {props.data.time}일 전
					</Text>
				</View>
			</View>
		</View>
	);
};
