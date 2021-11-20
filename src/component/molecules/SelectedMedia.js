import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import DP from 'Root/config/dp';
import { Cancel48, Cancel62 } from '../atom/icon';
import { styles } from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * media_uri: string,
 * onDelete: '삭제 버튼 클릭 Callback',
 * layout : 'imageStyle 정보 예) styles.img_square_round_190 '
 * }} props
 */
export default SelectedMedia = props => {
	const onDelete = e => {
		props.onDelete(e);
	};
	return (
		<View style={props.layout}>
			<Image source={{ uri: props.media_uri }} style={props.layout} />
			<View style={{ position: 'absolute', right: 6 * DP, top: 6 * DP }}>
				{/* 190 크기의 selectMedia를 호출한 경우 Cancel 마크 크기는 더 작게 */}
				{props.layout == styles.img_square_round_190
					? <Cancel48 onPress={onDelete} />
					: <Cancel62 onPress={onDelete} />
				}
			</View>
		</View>
	);
};

SelectedMedia.defaultProps = {
	media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	onDelete: e => console.log(e),
	layout: styles.img_square_round_190,
};
