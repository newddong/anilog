import React from 'react';
import {Text, View, Image} from 'react-native';
import {GRAY10, RED10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Mercy_Killing, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * data: 'Object - img_uri, gender(female, male), status(protected, missing, reported, onNegotiation, adoption_available, adopted'
 * }} props
 */
export default ProtectedThumbnail = props => {
	console.log('protected ' + JSON.stringify(props.data));
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

	const getStatusContainerStyle = () => {
		if (props.data.status == 'missing') {
			return RED10;
		} else if (props.data.status == 'reported') {
			return 'pink';
		} else return GRAY10;
	};

	const getStatusText = () => {
		switch (props.data.status) {
			case 'adoption_available':
				return '입양가능';
			case 'missing':
				return '실종';
			case 'reported':
				return '제보';
			case 'onNegotiation':
				return '협의 중';
			case 'adopted':
				return '입양완료';
		}
	};

	return (
		<View style={styles.img_square_round_214}>
			<Image source={{uri: props.data.img_uri}} style={[styles.img_square_round_214, borderByStatus()]} />
			{/* 펫 성별마크 */}
			<View style={{position: 'absolute', right: 10 * DP, top: 10 * DP}}>{props.data.gender == 'male' ? <Male48 /> : <Female48 />}</View>
			{/* 펫 보호상태 */}
			<View
				style={{
					position: 'absolute',
					width: '100%',
					height: 36 * DP,
					opacity: 1,
					bottom: 0,
					borderBottomLeftRadius: 30 * DP,
					borderBottomRightRadius: 30 * DP,
					backgroundColor: getStatusContainerStyle(),
				}}>
				<Text style={[txt.noto24, {color: WHITE, textAlign: 'center', lineHeight: 32 * DP}]}>{getStatusText()}</Text>
			</View>
			{getEmergencyMsg()}
		</View>
	);
};

ProtectedThumbnail.defaultProps = {
	data: {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'female',
		status: 'adoption_available', // protected, missing, reported, onNegotiation, adoption_available, adopted
	},
};
