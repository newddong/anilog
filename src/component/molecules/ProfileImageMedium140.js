import React from 'react';
import { View, Image, } from 'react-native';
import {Paw48_Mixed, Paw48_YELL20, Paw48_APRI10, Private48, Public48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default ProfileImageMedium140 = props => {
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	const petStatus = () => {
		switch (props.petStatus) {
			case 'normal': return <Paw48_APRI10 />
			case 'protected': return <Paw48_YELL20 />
			case 'adopted':	return <Paw48_Mixed />
			default: return <></>;
		}
	};

	const shelter_type = () => {
		switch (props.shelterType) {
			case 'public': return <Public48 />;
			case 'private':	return <Private48 />;
			default: return <></>;
		}
	};

	const userType = () => {
		switch (props.userType) {
			case 'pet':
				return <View style={{position: 'absolute'}}>{petStatus()}</View>;
			case 'shelter':
				return <View style={{position: 'absolute',}}>{shelter_type()}</View>;
			default: 
				return <></>;
		}
	};
	
	return (
		<View style={styles.img_round_140}>
			<Image source={{uri: props.img_uri}} style={styles.img_round_140} />
			{userType()}
		</View>
	);
};

ProfileImageMedium140.defaultProps = {
	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
	userType: 'user', //required - 유저타입 pet user shelter
	shelterType: 'none', // public private
	petStatus: 'none', // normal protected adopted none
};

