import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ProtectedThumbnail = props => {

	const statusColor = e => {
		switch (props.data.status) {
			case 'red':
				return 'red';
				break;
			case 'protected':
				return '#707070';
				break;
			case 'emergency':
				return 'red';
				break;
			default:
				return '#707070';
		}
	};
	const borderByStatus = () => {
		if (props.data.status == 'emergency') {
			return {
				borderWidth: 8 * DP,
				borderColor: 'red',
				borderRadius: 30 * DP,
			};
		}
	};
	return (
		<View style={styles.img_square_round_214}>
			<Image source={{uri: props.data.img_uri}} style={[styles.img_square_round_214, borderByStatus()]} />
			<View style={{position: 'absolute', right: 10 * DP, top: 10 * DP}}>{props.data.gender == 'male' ? <Male48 /> : <Female48 />}</View>
			<View
				style={{
					position: 'absolute',
					width: '100%',
					height: 36 * DP,
					opacity: 0.8,
					bottom: 0,
					borderBottomLeftRadius: 30 * DP,
					borderBottomRightRadius: 30 * DP,
					backgroundColor: statusColor(),
				}}>
				<Text style={[txt.noto24, {color: 'white', includeFontPadding: false, textAlign: 'center', lineHeight: 32 * DP}]}>{props.data.status}</Text>
			</View>
		</View>
	);
};

ProtectedThumbnail.defaultProps = {
        data: {
            img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
            gender: 'female',
            status: 'protected',
        },
    
    
};