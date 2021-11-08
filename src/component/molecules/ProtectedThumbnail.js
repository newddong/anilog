import React from 'react';
import {Text, View, Image} from 'react-native';
import {GRAY10, RED10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Mercy_Killing, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default ProtectedThumbnail = props => {
	const borderByStatus = () => {
		if (props.data.status == 'emergency') {
			return {
				borderWidth: 8 * DP,
				borderColor: RED10,
				borderRadius: 30 * DP,
			};
		} else return false;
	};

	const getEmergencyMsg = () => {
		return props.data.status == 'emergency' ? (
			<View style={{position: 'absolute', alignSelf: 'center', bottom: 46 * DP}}>
				<Mercy_Killing /> {/* 안락사임박 마크 */}
			</View>
		) : (
			false
		);
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
					backgroundColor: props.data.status == 'protected' ? GRAY10 : RED10,
				}}>
				<Text style={[txt.noto24, {color: WHITE, textAlign: 'center', lineHeight: 32 * DP}]}>{props.data.status}</Text>
			</View>
			{getEmergencyMsg()}
		</View>
	);
};

ProtectedThumbnail.defaultProps = {
	data: {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'female',
		status: 'protected', // protected, missing, reported, onNegotiation, adoption_available
	},
};
