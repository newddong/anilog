import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Paw48Mixed, Paw48Yell20, Paw48_APRI10, Private62, Public62} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ProfileImageLarge160 = props => {
	// ProfileImageLarge 기능
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	// Props
	// imgUri - 이미지의 uri
	// userType - 유저타입('shelter, pet, user)'
	// shelterType - ‘public’, ‘private’,’none’ 중 선택 가능
	// petStatus - ’normal’, ‘protected’, ’adopted’, ’none’ 중 선택 가능
	const petStatus = () => {
		console.log('petStatus  ' + props.petStatus);
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
		console.log('petStatus  ' + props.shelterType);
		switch (props.shelterType) {
			case 'public':
				return <Public62 />;
				break;
			case 'private':
				return <Private62 />;
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
				return <View style={{position: 'absolute', right: 0, bottom: 0}}>{shelter_type()}</View>;
				break;
			default:
				return <></>;
		}
	};
	return (
		<View style={styles.img_round_160}>
			<Image source={{uri: props.imgUri}} style={styles.img_round_160} />
			{userType()}
		</View>
	);
};
