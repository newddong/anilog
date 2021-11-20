import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import DP from 'Root/config/dp';
import { Cancel62 } from '../atom/icon';
import { styles } from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * media_uri: string,
 * onDelete: '삭제 버튼 클릭 Callback',
 * }} props
 */
export default SelectedMedia410 = props => {

	const onDelete = e => {
		props.onDelete();
	};

	return (
		<View style={styles.img_square_round_410}>
			<Image source={{ uri: props.media_uri }} style={styles.img_square_round_410} />
			<TouchableOpacity onPress={onDelete} style={{ position: 'absolute', right: 20 * DP, top: 20 * DP }}>
				<Cancel62 />
			</TouchableOpacity>
		</View>
	);
};
SelectedMedia410.defaultProps = {
	media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	onDelete: e => console.log(e),
};
