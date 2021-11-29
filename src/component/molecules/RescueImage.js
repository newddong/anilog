import React from 'react';
import {Text, View, Image} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {ADOPT, DEFAULT_PROFILE, DISCUSS, NEAR_RAINBOWBRIDGE, PROTECT, RESCUE} from 'Root/i18n/msg';
import {styles} from '../atom/image/imageStyle';
export default RescueImage = props => {
	const getStatusText = () => {
		switch (props.status) {
			case 'rescue':
				return RESCUE;
			case 'discuss':
				return DISCUSS;
			case 'nearrainbow':
				return NEAR_RAINBOWBRIDGE;
			case 'adopt':
				return ADOPT;
			case 'protect':
				return PROTECT;
		}
	};

	return (
		<View style={styles.img_rect_654x542}>
			{/* <Image source={{uri:props.img_uri}} style={styles.img_rect_654x542} /> */}
			<Image source={{uri: props.img_uri}} style={styles.img_rect_654x542} />

			<View style={{width: 480 * DP, height: 64 * DP, borderBottomLeftRadius: 30 * DP, backgroundColor: APRI10, position: 'absolute', right: 0}}>
				<Text style={[txt.noto36, {textAlign: 'center', color: 'white'}]}>{getStatusText()}</Text>
			</View>
		</View>
	);
};

RescueImage.defaultProps = {
	text: '',
	img_uri: DEFAULT_PROFILE,
};
