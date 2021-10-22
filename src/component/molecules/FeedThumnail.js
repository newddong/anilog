
//미완성 상태

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
export default FeedThumbnail = props => {
	//분기
	// 일반 사진 / 사진 리스트 / 동영상
	// alertTitle 존재유무
	// 선택상태
	return (
		<View style={styles.img_square_246}>
			<TouchableOpacity onPress={props.onClick}>
				<View>
					<Image source={{uri: props.img_uri}} style={styles.img_square_246} />
				</View>
				{props.feedInfo.alert_title != null || props.feedInfo.alert_title != undefined ? (
					<View
						style={{
							width: 124 * DP,
							height: 48 * DP,
							position: 'absolute',
							backgroundColor: 'red',
							borderTopEndRadius: 20 * DP,
							borderTopLeftRadius: 20 * DP,
							right: 0,
							bottom: 0,
						}}>
						<Text style={[txt.noto24, {width: 124 * DP, lineHeight: 36 * DP, color: 'white'}]} numberOfLines={1} ellipsizeMode="tail">
							{props.feedInfo.alert_title}
						</Text>
					</View>
				) : null}
			</TouchableOpacity>
		</View>
	);
};
