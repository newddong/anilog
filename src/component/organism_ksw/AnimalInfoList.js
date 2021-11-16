import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import AnimalInfo from './AnimalInfo';
import {animalInfoList} from './style_organism';

export default AnimalInfoList = props => {
	const testData = [
		{
			img_uri: 'https://pbs.twimg.com/profile_images/378800000001640185/58d3ed41b88cadb9083e5b986758fd16_400x400.jpeg',
			petStatus: 'protected',
			petNickname: 'Fizz',
		},
		{
			img_uri: 'https://pbs.twimg.com/profile_images/378800000001640185/58d3ed41b88cadb9083e5b986758fd16_400x400.jpeg',
			petStatus: 'protected',
			petNickname: 'Fizz',
		},
		{
			img_uri: 'https://images.mypetlife.co.kr/content/uploads/2019/09/09153001/dog-panting-1024x683.jpg',
			petStatus: 'protected',
			petNickname: '피즈',
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[animalInfoList.itemContainer]}>
				<AnimalInfo />
			</View>
		);
	};

	return (
		<View style={[animalInfoList.container]}>
			<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

// PetImageLabel.defaultProps = {
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	petStatus: 'normal', // normal protected adopted
// 	petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임
// };
