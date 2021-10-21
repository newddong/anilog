import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Cancel62} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default SelectedMedia410 = props => {
	return (
		<View>
			<View style={styles.img_square_round_410}>
				<Image source={{uri: props.uri}} style={styles.img_square_round_410} />
				<TouchableOpacity onPress={props.onDelete} style={{position: 'absolute', right: 20 * DP, top: 20 * DP}}>
					<View >
						<Cancel62 />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
