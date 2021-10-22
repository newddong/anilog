import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Private48, Public48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ShelterLabel = props => {
	const handleLabelClick = e => {
		props.onLabelClick(props.data.user_id);
	};
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={handleLabelClick}>
				<Image source={{uri: props.data.shelter_image}} style={styles.img_round_94} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{position: 'absolute', left: 66 * DP, top: 46 * DP}}>
				{props.data.shelter_type == 'private' 
					? <Private48 /> 
					: <Public48 />}
			</View>
			<View style={{marginLeft: 50 * DP, paddingVertical: 4 * DP}}>
				{/* Text Box 2 Height 86 - profileImage height 94 = -8  ==> PaddingVertical 4씩 textBox View에 준다 */}
				{/* Text부분과 프로필이미지 사이의 거리 50 */}
				<Text style={[txt.roboto28b, {color: props.nameColor}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.shelter_name}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.location}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
