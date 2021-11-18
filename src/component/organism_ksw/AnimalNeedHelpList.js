import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalNeedHelpList} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';

export default AnimalNeedHelpList = props => {
	AnimalNeedHelpList;
	const navigation = useNavigation();

	const renderItem = (item, index) => {
		// console.log('index=>' + item.thumbnailData.status);
		return (
			// <TouchableOpacity
			// style={[animalNeedHelpList.itemContainer]}
			// 	onPress={() => {
			// 		props.onItemClick(item);
			// 		console.log('item.thumbnailData.status=>' + item.thumbnailData.status);
			// 		// if (item.thumbnailData.status == 'missing') {
			// 		// 	navigation.navigate('MissingAnimalDetail');
			// 		// } else if (item.thumbnailData.status == 'reported') {
			// 		// 	navigation.navigate('ReportDetail');
			// 		// }
			// 		// //다른 route가 있을 경우 else if 확장 할 것
			// 		// else {
			// 		// }
			// 	}}>s

			//marginBottom: 40 * DP,
			<View style={[animalNeedHelpList.itemContainer]}>
				<AnimalNeedHelp data={item} />
			</View>
			// </TouchableOpacity>
		);
	};

	return (
		//width: 702 * DP
		<View style={[animalNeedHelpList.container]}>
			<FlatList data={dummy_AnimalNeedHelpList} renderItem={({item, index}) => renderItem(item, index)} nestedScrollEnabled />
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	onItemClick: e => console.log(e),
};
// AnimalNeedHelp.defaultProps = {
// 	temp_protection_request: true,
// 	adoption_days_remain: 10,
// 	registered_date: '2021-06-17',
// 	location: '자운',
// 	saved_location: '경기도 강정동',
// 	data: {
// 		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
// 		gender: 'female',
// 		status: 'protected', , // protected, missing, reported, onNegotiation, adoption_available
// 	},
// };
