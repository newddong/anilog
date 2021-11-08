import React from 'react';
import {FlatList, Text, View} from 'react-native';
import AnimalInfo from './AnimalInfo';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalInfoList, animalNeedHelpList} from './style_organism';

export default AnimalNeedHelpList = props => {
	const testData = [
		{
			img_uri: 'https://pbs.twimg.com/profile_images/378800000001640185/58d3ed41b88cadb9083e5b986758fd16_400x400.jpeg',
			petStatus: 'protected',
			petNickname: 'Fizz',
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[animalInfoList.itemContainer]}>
				<AnimalNeedHelp />
			</View>
		);
	};

	return (
		<View style={[animalNeedHelpList.container]}>
			<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	data: {
		petName: '카아르',
		kind: '개냥이',
		breed: '시고르자브종',
		duration: 25,
	},
};
