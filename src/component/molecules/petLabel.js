import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import { Paw30_APRI10, Paw30_YELL20 } from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default PetLabel = props => {
	console.log('PROPS' + JSON.stringify(props));
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<View> 
				<TouchableOpacity onPress={props.onLabelClick}>
					<Image source={{uri: props.userInfo.user_image}} style={styles.img_round_94} />
                    <View style={{position:'absolute'}}>
                    {props.protected 
                    ? <Paw30_APRI10/>
                    : <Paw30_YELL20/>
                    }
                    </View>
				</TouchableOpacity>
			</View>
			<View style={{marginLeft: 30 * DP, width: 300 * DP, paddingVertical: 4 * DP}}>
				{/* Text Box 2개의 Height 총합 86 - profileImage height는 94 = -8 이므로 textBox쪽에 PaddingVertical 4를 줍니다 */}
				{/* Text부분과 프로필이미지 사이의 거리 30 */}

				<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
					{props.userInfo.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					text_intro
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
