import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Cancel48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default SelectedMedia190 = props => {
	const handleDelete = (e) => {
		alert('삭제작업')
	}
	return (
		<View>
			<View style={styles.img_square_round_190}>
				<Image source={{uri: props.media_uri}} style={styles.img_square_round_190} />
				<TouchableOpacity onPress={handleDelete} style={{position: 'absolute', right: 6 * DP, top: 6 * DP}}>
					<View >
						<Cancel48 />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
