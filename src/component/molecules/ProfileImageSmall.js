import React from 'react';
import {View, Image} from 'react-native';
import {
	HashLabel46,
	HashLabel60,
	HashLabel70,
	HashLabel76,
	HashLabel94,
	Paw30_APRI10,
	Paw30_Mixed,
	Paw30_YELL20,
	Private48,
	Public48,
} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default ProfileImageSmall = props => {
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	const petStatus = () => {
		switch (props.petStatus) {
			case 'normal':
				return <Paw30_APRI10 />
			case 'protected':
				return <Paw30_YELL20 />
			case 'adopted':
				return <Paw30_Mixed />
			default: return <></>;
		}
	};
	const shelter_type = () => {
		switch (props.shelterType) {
			case 'public': return <Public48 />
			case 'private': return <Private48 />
			default: return <></>;
		}
	};
	const userType = () => {
		switch (props.userType) {
			case 'pet':	
				return <View style={{position: 'absolute'}}>{petStatus()}</View>;
			case 'shelter':	
				return <View style={{position: 'absolute', right: 0, bottom: 0}}>{shelter_type()}</View>;
			default: return <></>;
		}
	};
	const getSize = () => {
		switch (props.size) {
			case 94: return styles.img_round_94;
			case 76: return styles.img_round_76;
			case 70: return styles.img_round_70;
			case 60: return styles.img_round_60;
			case 46: return styles.img_round_46;
		}
	};
	const getHash = () => {
		switch (props.size) {
			case 94: return <HashLabel94 />;
			case 76: return <HashLabel76 />;
			case 70: return <HashLabel70 />;
			case 60: return <HashLabel60 />;
			case 46: return <HashLabel46 />;
		}
	};
	return (
		<View style={getSize()}>
			{props.userType == 'hash' ? getHash() : <Image source={{uri: props.img_uri}} style={getSize()} />}
			{userType()}
		</View>
	);
};

ProfileImageSmall.defaultProps = {
	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
	userType: 'user', //required - 유저타입 pet user shelter hash
	shelterType: 'none', // public private
	petStatus: 'none', // normal protected adopted none
	size: 94, // icon size
};
