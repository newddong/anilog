//Status 내용 추가 必


import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
export default UserDescriptionLabel = props => {
	const handleLabelClick = e => {
		props.onLabelClick(props.data.user_id);
	};
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={handleLabelClick}>
				<Image source={{uri: props.data.user_image}} style={styles.img_round_94} />
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP, }}>
				{/* Text부분과 프로필이미지 사이의 거리 30 */}
				{/* img_round_94의 height94이며 Text Box 2개의 height 총합은 86이었으므로 paddingVertical을 4씩 준다*/}
				{props.status ? (
					<View style={{flexDirection: 'row'}}>
						<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
							{props.data.user_nickname}
						</Text>
						<Text style={[txt.noto22, {color: APRI10, lineHeight: 34 * DP, paddingTop: 4 * DP}]}> STATUS</Text>
						{/* user_nickname Text박스에 비해 y축이 4가 크다 => paddingTop : 4 *  DP  */}
					</View>
				) : (
					<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname}
					</Text>
				)}
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.text_intro}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
