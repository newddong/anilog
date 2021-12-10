import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {dummy_myPetList} from 'Root/config/dummyDate_json';
import AddPet from '../molecules/AddPet';
import PetImageLabel from '../molecules/PetImageLabel';
import {myPetList} from './style_organism';

/**
 *
 * @param {{
 *items: ' List 배열',
 * }} props
 */
export default MyPetList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[myPetList.petImageLabel]}>
				{index == 0 ? (
					<AddPet onAdd={() => props.addPet()} />
				) : (
					<TouchableOpacity onPress={() => props.onLabelClick(item)}>
						<PetImageLabel data={item} showNickname={true} />
					</TouchableOpacity>
				)}
			</View>
		);
	};

	return (
		<View style={[myPetList.container]}>
			<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
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
