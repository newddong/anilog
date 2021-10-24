import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/screens/dp';
import {CameraLinkIcon} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default CameraLink = props => {
	return (
		<View style={styles.img_square_186}>
			<TouchableOpacity onPress={props.onClick}>
				<View style={{paddingVertical: 58 * DP, paddingHorizontal: 50 * DP}}>
					<CameraLinkIcon />
				</View>
			</TouchableOpacity>
		</View>
	);
};
