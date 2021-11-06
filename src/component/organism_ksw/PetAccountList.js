import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {organism_style} from './style_organism';
import PetLabel from '../molecules/PetLabel';

export default PetAccountList = props => {
	const _dummyData = [
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
	];
	const renderItem = item => {
		console.log(item);
		return (
			<View style={[organism_style.petAccountList]}>
				<View style={[organism_style.petLabel]}>
					<PetLabel img_uri={item.img_uri} petStatus={item.petStatus} petNickname={null} />
				</View>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />;
};
