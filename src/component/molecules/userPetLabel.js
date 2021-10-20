import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
export default UserPetLabel = props => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<View style={{ paddingVertical: 5 * DP}}>
				{/* Text Box 2 Height 86 - profileImage height 76 = 10 = PaddingVertical 5*2 */}
				<TouchableOpacity onPress={props.onLabelClick}>
					<Image source={{uri: props.userInfo.user_image}} style={{width:76*DP, height:76*DP, borderRadius:70 }} />
				{/* image_round_76이 없으므로 style 작성 */}
				</TouchableOpacity>
			</View>
			<View style={{marginLeft: 20 * DP, width: 300 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 30 */}
				{/* width 300은 비정상적인 길이에 대한 처리 */}
				{/* img_round_94의 height94이며 Text Box 2개의 height 총합은 86이었으므로 paddingVertical을 4씩 준다*/}
				<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
					{props.userInfo.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
			 		pet_nickname
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};