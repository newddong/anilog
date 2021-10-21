import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
export default UserLocationLabel = props => {
	const handleLabelClick = e => {
		props.onLabelClick(props.data.user_id);
	};
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={handleLabelClick}>
				<Image source={{uri: props.data.user_image}} style={styles.img_round_70} />
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 20 */}
				<Text style={[txt.roboto28b, {color: props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 36 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.location}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
