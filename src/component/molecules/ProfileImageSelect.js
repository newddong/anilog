import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {AddItem92} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ProfileImageSelect = props => {
	// 클릭시 이미지 선택 화면으로 이동,
	// Props
	// selectedImageUri - 선택된 이미지의 Local파일 경로 혹인 Uri
	// defaultImageUri - 기본으로 표시될 이미지의 Local파일 경로 혹은 Uri
	//TODO : 네비게이션 이동 및 복귀시 처리방법 결정
	const onClick = e => {
		alert('이미지 선택화면으로 이동');
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
	selectedImageUri : null,
	defaultImageUri : 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg'
}