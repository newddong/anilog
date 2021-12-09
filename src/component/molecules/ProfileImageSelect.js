import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {AddItem92} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

/**
 * 프로필 이미지 컨테이너
 * @param {object} props - Props Object
 * @param {string} props.selectedImageUri - 버튼 제목목
 * @param {()=>void} props.onClick - 이미지 눌렸을때 동작하는 콜백,
 */
const ProfileImageSelect = props => {
	const onClick = e => {
		props.onClick();
	};

	return (
		<TouchableOpacity onPress={onClick} style={styles.img_round_294}>
			{/* ProfileImage uri가 null일 경우와 아닌 경우의 분기 */}
			<Image style={styles.img_round_294} source={{uri: props.selectedImageUri || DEFAULT_PROFILE}} />
			<View style={{position: 'absolute', right: 0, bottom: 0}}>
				<AddItem92 />
			</View>
		</TouchableOpacity>
	);
};

ProfileImageSelect.defaultProps = {
	selectedImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	onClick: e => console.log(e),
};
export default ProfileImageSelect;
