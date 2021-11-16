import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {dummy_myPetList} from 'Root/config/dummyDate_json';
import AddPet from '../molecules/AddPet';
import PetImageLabel from '../molecules/PetImageLabel';
import {myPetList} from './style_organism';

export default MyPetList = props => {
	const renderItem = (item, index) => {
		//List의 마지막 Pet 출력 시 반려동물 추가 Icon 붙임
		if (dummy_myPetList.length - 1 == index) {
			return (
				<View style={{flexDirection: 'row'}}>
					<View style={[myPetList.petImageLabel]}>
						<TouchableOpacity onPress={() => props.onLabelClick(item)}>
							<PetImageLabel img_uri={item.img_uri} petStatus={item.petStatus} petNickname={item.petNickname} />
						</TouchableOpacity>
					</View>
					{/* 반려동물 추가 */}
					<View style={[myPetList.addPet]}>
						<AddPet onAdd={() => props.addPet()} />
					</View>
				</View>
			);
		} else
			return (
				//PetImageLAbel
				<View style={[myPetList.petImageLabel]}>
					<TouchableOpacity onPress={() => props.onLabelClick(item)}>
						<PetImageLabel img_uri={item.img_uri} petStatus={item.petStatus} petNickname={item.petNickname} />
					</TouchableOpacity>
				</View>
			);
	};

	return (
		<View style={[myPetList.container]}>
			<FlatList data={dummy_myPetList} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
		</View>
	);
};

MyPetList.defaultProps = {
	onLabelClick: e => console.log(e),
	addPet: e => console.log('AddpetPressd'),
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// petStatus: 'normal', // normal protected adopted
// petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임
