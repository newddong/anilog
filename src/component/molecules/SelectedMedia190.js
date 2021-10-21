import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Cancel48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default SelectedMedia190 = props => {
	return (
		<View>
			<View style={styles.img_square_round_190}>
				<Image source={{uri: props.uri}} style={styles.img_square_round_190} />
				<TouchableOpacity onPress={props.onDelete} style={{position: 'absolute', right: 6 * DP, top: 6 * DP}}>
					<View >
						<Cancel48 />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
