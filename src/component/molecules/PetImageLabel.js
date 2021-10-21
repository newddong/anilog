import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';
import {Paw62_APRI10, Paw62_Mixed, Paw62_YELL20, } from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default PetImageLabel = props => {
// 	PetImageLabel 기능
// 반려동물의 프로필 이미지를 표시, 상태(임시보호중,입양)에 따라 아이콘을 표시 
// Props
// imgUri - 이미지의 uri
// petStatus - ’normal’, ‘protected’, ’adopted’ 중 선택 가능
// petNickname - NICKNAME에 표시될 해당 펫의 이름


	const petStatus = () => {
		console.log('petStatus  ' + props.petStatus);
		switch (props.petStatus) {
			case 'normal':
				return (
					<View style={{position: 'absolute'}}>
						<Paw62_APRI10 />
					</View>
				);
				break;
			case 'protected':
				return (
					<View style={{position: 'absolute'}}>
						<Paw62_YELL20 />
					</View>
				);
				break;
			case 'adopted':
				return (
					<View style={{position: 'absolute'}}>
						<Paw62_Mixed />
					</View>
				);
				break;
			default:
				return <></>;
		}
	};
	
	return (
		<View style={styles.img_round_180}>
			<Image source={{uri: props.imgUri}} style={styles.img_round_180} />
			<View style={{position: 'absolute'}}>{petStatus()}</View>
		</View>
	);
};
