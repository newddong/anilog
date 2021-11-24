import React from 'react';
import {FlatList, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalNeedHelpList} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';

/**
 *
 *@param {{
 *nowRoute: parentName,
 *onLabelClick: 'void / Label클릭 콜백함수 '
 * }} props
 */
export default AnimalNeedHelpList = props => {
	const onLabelClick = (status, id, item) => {
		props.onLabelClick(status, id, item);
	};

	const renderItem = (item, index) => {
		return (
			//marginBottom: 40 * DP,
			<View style={[animalNeedHelpList.itemContainer]}>
				{/* {console.log('AnimalNeedHelpList:props.borderMode=>' + props.borderMode)} */}
				<AnimalNeedHelp
					data={item}
					checkBoxMode={props.checkBoxMode}
					borderMode={props.borderMode}
					onLabelClick={(status, id) => onLabelClick(status, id, item)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
				/>
			</View>
		);
	};

	return (
		//  width: 702 * DP
		<View style={[animalNeedHelpList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true}>
					<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} nestedScrollEnabled />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	data: dummy_AnimalNeedHelpList,
	onLabelClick: e => console.log(e),
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
