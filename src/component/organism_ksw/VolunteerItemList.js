import React from 'react';
import {FlatList, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {volunteerItemList} from './style_organism';
import VolunteerItem from './VolunteerItem';

export default VolunteerItemList = props => {
	const renderItem = (item, index) => {
		console.log('item', index, item);
		return (
			<View style={[volunteerItemList.itemContainer]}>
				<VolunteerItem data={item} onClickLabel={e => props.onClickItem(e)} />
			</View>
		);
	};

	return (
		<View style={[volunteerItemList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true}>
					<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

VolunteerItemList.defaultProps = {
	onClickItem: e => console.log(e),
};
