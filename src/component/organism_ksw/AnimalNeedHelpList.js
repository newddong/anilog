import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalNeedHelpList} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';

/**
 *
 *@param {{
 *nowRoute: parentName,
 * }} props
 */
export default AnimalNeedHelpList = props => {
	const navigation = useNavigation();

	const renderItem = (item, index) => {
		return (
			//marginBottom: 40 * DP,
			<View style={[animalNeedHelpList.itemContainer]}>
				<AnimalNeedHelp
					data={item}
					checkBoxMode={props.checkBoxMode}
					onLabelClick={e => props.onLabelClick(e)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
				/>
			</View>
		);
	};

	return (
		//width: 702 * DP
		<View style={[animalNeedHelpList.container]}>
			<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} nestedScrollEnabled />
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
