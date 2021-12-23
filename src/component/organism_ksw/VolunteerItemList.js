import React from 'react';
import {FlatList, View, ScrollView, TouchableOpacity} from 'react-native';
import {volunteerItemList} from './style_organism';
import VolunteerItem from './VolunteerItem';

export default VolunteerItemList = props => {
	const renderItem = (item, index) => {
		return (
			<TouchableOpacity onPress={() => props.onClickItem(item)} style={[volunteerItemList.itemContainer]}>
				<VolunteerItem data={item} type={props.type} />
			</TouchableOpacity>
		);
	};

	return (
		<View style={[volunteerItemList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true} scrollEnabled={false}>
					<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} scrollEnabled={false} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

VolunteerItemList.defaultProps = {
	onClickItem: e => console.log(e),
};
