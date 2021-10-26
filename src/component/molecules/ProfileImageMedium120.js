import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Paw48Mixed, Paw48Yell20, Paw48_APRI10, Private48, Private62, Public48, Public62} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ProfileImageMedium120 = props => {
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	const petStatus = () => {
		switch (props.petStatus) {
			case 'normal':
				return (
					<View style={{position: 'absolute'}}>
						<Paw48_APRI10 />
					</View>
				);
				break;
			case 'protected':
				return (
					<View style={{position: 'absolute'}}>
						<Paw48Yell20 />
					</View>
				);
				break;
			case 'adopted':
				return (
					<View style={{position: 'absolute'}}>
						<Paw48Mixed />
					</View>
				);
				break;
			default:
				return <></>;
		}
	};
	const shelter_type = () => {
		switch (props.shelterType) {
			case 'public':
				return <Public48 />;
				break;
			case 'private':
				return <Private48 />;
				break;
			default:
				return <></>;
		}
	};
	const userType = () => {
		switch (props.userType) {
			case 'pet':
				return <View style={{position: 'absolute'}}>{petStatus()}</View>;
				break;
			case 'shelter':
				return <View style={{position: 'absolute',}}>{shelter_type()}</View>;
				break;
			default:
				return <></>;
		}
	};
	return (
		<View style={styles.img_round_120}>
			<Image source={{uri: props.img_uri}} style={styles.img_round_120} />
			{userType()}
		</View>
	);
};

ProfileImageMedium120.defaultProps = {
	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
	userType: 'user', //required - 유저타입 pet user shelter
	shelterType: 'none', // public private
	petStatus: 'none', // normal protected adopted none
};

