import React from 'react';

import {View, Image, Text} from 'react-native';
import {Paw48_Mixed, Paw48_YELL20, Paw48_APRI10, Private62, Public62} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
/**
 *
 *@param {{
 * img_uri : string,
 * userType: 'user' | 'pet' | 'shelter',
 *shelterType: 'public' | 'private' ,
 *petStatus: 'normal' | 'protected' | 'adopted' | 'none',
 * }} props
 */
export default ProfileImageLarge160 = props => {
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	const petStatus = () => {
		switch (props.petStatus) {
			case 'normal':
				return <Paw48_APRI10 />;
			case 'protected':
				return <Paw48_YELL20 />;
			case 'adopted':
				return <Paw48_Mixed />;
			default:
				return <></>;
		}
	};
	const shelter_type = () => {
		switch (props.shelterType) {
			case 'public':
				return <Public62 />;
			case 'private':
				return <Private62 />;
			default:
				return <></>;
		}
	};
	const userType = () => {
		switch (props.userType) {
			case 'pet':
				return <View style={{position: 'absolute'}}>{petStatus()}</View>;
			case 'shelter':
				return <View style={{position: 'absolute', right: 0, bottom: 0}}>{shelter_type()}</View>;
			default:
				return <></>;
		}
	};
	return (
		<View style={styles.img_round_160}>
			<Image source={{uri: props.img_uri}} style={styles.img_round_160} />
			{userType()}
		</View>
	);
};

ProfileImageLarge160.defaultProps = {
	img_uri: 'https://hobbyen.co.kr/news/data/20200320/p1065592519623812_956_thum.jpg', //image uri
	userType: 'user', //required - 유저타입 pet user shelter
	shelterType: 'none', // public private
	petStatus: 'none', // normal protected adopted none
};
