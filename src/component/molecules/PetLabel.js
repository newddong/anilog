import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Paw30_APRI10, Paw30_YELL20} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default PetLabel = props => {
	//props 목록
	// onLabelClick : Label 클릭시 수행되는 메소드
	// petInfo :
	//    	pet_name: 펫이름
	// 	  	pet_id: 펫Id
	// 		pet_image: pet image path
	// 		location: 위치정보
	// 		owner: 오너 정보(이름)

	const handleLabelClick = e => {
		props.onLabelClick(props.data.user_id);
	};
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={handleLabelClick}>
				<Image source={{uri: props.data.user_image}} style={styles.img_round_94} />
				<View style={{position: 'absolute'}}>
					{/* 임시보호중 여부에 따른 분기  */}
					{props.protected 
						? <Paw30_APRI10 /> 
						: <Paw30_YELL20 />}
				</View>
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP, width: 300 * DP, paddingVertical: 4 * DP}}>
				{/* Text Box 2개의 Height 총합 86 - profileImage height는 94 = -8 이므로 textBox쪽에 PaddingVertical 4를 줍니다 */}
				{/* Text부분과 프로필이미지 사이의 거리 30 */}

				<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.owner}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
