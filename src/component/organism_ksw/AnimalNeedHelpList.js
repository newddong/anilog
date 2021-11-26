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
				{/* {console.log('item:item._id=>' + item._id)} */}
				<AnimalNeedHelp
					data={item}
					checkBoxMode={props.checkBoxMode}
					borderMode={props.borderMode}
					onLabelClick={(status, id) => onLabelClick(status, id, item)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
					onFavoriteTag={e => props.onFavoriteTag(e, index)}
				/>
			</View>
		);
	};

	return (
		//  width: 702 * DP
		<View style={[animalNeedHelpList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true}>
					<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	data: dummy_AnimalNeedHelpList,
	onLabelClick: e => console.log(e),
};
