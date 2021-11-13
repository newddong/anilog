import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {AddItem92} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * selectedImageUri: string,
 * defaultImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
 * onClick: 'Image Click Callback'
 * }} props
 */
export default ProfileImageSelect = props => {
	const onClick = e => {
		props.onClick();
	};

	return (
		<TouchableOpacity onPress={onClick} style={styles.img_round_294}>
			{/* ProfileImage uri가 null일 경우와 아닌 경우의 분기 */}
			<Image style={styles.img_round_294} source={{uri: props.selectedImageUri == null ? props.defaultImageUri : props.selectedImageUri}} />
			<View style={{position: 'absolute', right: 0, bottom: 0}}>
				<AddItem92 />
			</View>
		</TouchableOpacity>
	);
};

ProfileImageSelect.defaultProps = {
	selectedImageUri: null,
	defaultImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	onClick: e => console.log(e),
};
