import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {  HashLabel46,  HashLabel60,  HashLabel70, HashLabel76,	HashLabel94, Paw30_APRI10,	Paw30_Mixed, Paw30_YELL20, Private48, Public48, } from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default ProfileImageSmall = props => {
	// ProfileImageLarge 기능
	// 유저의 프로필 이미지를 표시,  유저의 종류(일반유저, 반려동물, 보호소)와 상태(임시보호중,입양,공립,사립)에 따라 아이콘을 표시
	// Props
	// imgUri - 이미지의 uri
	// userType - 유저타입('shelter, pet, user)'
	// shelterType - ‘public’, ‘private’,’none’ 중 선택 가능
	// petStatus - ’normal’, ‘protected’, ’adopted’, ’none’ 중 선택 가능
    // small은 size가 존재 : variation 94 76 70 60 46
	const petStatus = () => {
		console.log('petStatus  ' + props.petStatus);
		switch (props.petStatus) {
			case 'normal':
				return (
					<View style={{position: 'absolute'}}>
						<Paw30_APRI10 />
					</View>
				);
				break;
			case 'protected':
				return (
					<View style={{position: 'absolute'}}>
						<Paw30_YELL20 />
					</View>
				);
				break;
			case 'adopted':
				return (
					<View style={{position: 'absolute'}}>
						<Paw30_Mixed />
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
				return <View style={{position: 'absolute', right: 0, bottom: 0}}>{shelter_type()}</View>;
				break;
			default:
				return <></>;
		}
	};
	const getSize = () => {
		switch (props.size) {
			case 94:
				return styles.img_round_94;
				break;
			case 76:
				return styles.img_round_76;
				break;
			case 70:
				return styles.img_round_70;
				break;
			case 60:
				return styles.img_round_60;
				break;
			case 46:
				return styles.img_round_46;
				break;
		}
	};
    const getHash = () => {
        switch (props.size) {
			case 94:
				return ( <HashLabel94/>);
				break;
			case 76:
				return (<HashLabel76/>);
				break;
			case 70:
				return (<HashLabel70/>);
				break;
			case 60:
				return (<HashLabel60/>);
				break;
			case 46:
				return (<HashLabel46/>);
				break;
		}
    }
	return (
		<View style={getSize()}>
            {props.userType=='hash' 
                ? 
                getHash()
                : 
                <Image source={{uri: props.imgUri}} style={getSize()} />
            }
            {userType()}

		</View>
	);
};
