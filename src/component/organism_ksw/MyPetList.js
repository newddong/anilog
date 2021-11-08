import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import PetImageLabel from '../molecules/PetImageLabel';
import {myPetList} from './style_organism';

export default MyPetList = props => {
	const testList = [
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: '구름이',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'adopted',
			petNickname: '하늘이',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'protected',
			petNickname: '썅썅이',
		},
	];

	const renderItem = (item, index) => {
		//List의 마지막 Pet 출력 시 반려동물 추가 Icon 붙임
		if (testList.length - 1 == index) {
			return (
				<View style={{flexDirection: 'row'}}>
					<View style={[myPetList.petImageLabel]}>
						<PetImageLabel img_uri={item.img_uri} petStatus={item.petStatus} petNickname={item.petNickname} />
					</View>
					{/* 반려동물 추가 */}
					<View style={[myPetList.addPet]}>
						<AddPet />
					</View>
				</View>
			);
		} else
			return (
				//PetImageLAbel
				<View style={[myPetList.petImageLabel]}>
					<PetImageLabel img_uri={item.img_uri} petStatus={item.petStatus} petNickname={item.petNickname} />
				</View>
			);
	};

	return (
		<View style={[myPetList.container]}>
			<FlatList data={testList} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
		</View>
	);
};

// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// petStatus: 'normal', // normal protected adopted
// petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임