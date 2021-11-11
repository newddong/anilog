import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import PetImageLabel from '../molecules/PetImageLabel';
import {animalInfo} from './style_organism';

export default AnimalInfo = props => {
	const dummy_data = {
		img_uri: 'https://pbs.twimg.com/profile_images/378800000001640185/58d3ed41b88cadb9083e5b986758fd16_400x400.jpeg',
		petStatus: 'protected',
		petNickname: 'Fizz',
	};

	return (
		<View style={[animalInfo.container]}>
			<PetImageLabel img_uri={dummy_data.img_uri} petStatus={dummy_data.petStatus} />
			<View style={[animalInfo.infoContainer]}>
				<Text style={[animalInfo.infoContainer_petNickname, txt.noto30b]}>{props.data.petName}</Text>
				<Text style={[animalInfo.infoContainer_petDetail, txt.noto24, {color: GRAY20}]}>
					{props.data.kind}/{props.data.breed}
				</Text>
				<Text style={[animalInfo.infoContainer_petDetail, txt.noto24, {color: GRAY20}]}>임시보호 {props.data.duration}일 째</Text>
			</View>
		</View>
	);
};

AnimalInfo.defaultProps = {
	data: {
		petName: '카아르',
		kind: '개냥이',
		breed: '시고르자브종',
		duration: 25,
	},
};

// PetImageLabel.defaultProps = {
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	petStatus: 'normal', // normal protected adopted
// 	petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임
// };
