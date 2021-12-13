import React from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {volunteerItemList} from './style_organism';
import VolunteerItem from './VolunteerItem';

export default VolunteerItemList = props => {
	const renderItem = (item, index) => {
		// console.log('item', index, item);
		return (
			<View style={[volunteerItemList.itemContainer]}>
				<VolunteerItem data={item} onClickLabel={e => props.onClickItem(e)} type={props.type} />
			</View>
		);
	};

	return (
		<View style={[volunteerItemList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true}>
					<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} scrollEnabled={false} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

VolunteerItemList.defaultProps = {
	onClickItem: e => console.log(e),
};
