import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {dummy_ShelterList} from 'Root/config/dummyDate_json';
import ShelterVerticalLabel from './ShelterVerticalLabel';
import {shelterList} from './style_organism';

export default ShelterList = props => {
	// console.log('props.items', props.items);

	const renderItem = (item, index) => {
		// console.log('item', item);
		return (
			<View style={[shelterList.shelterLabel]}>
				<ShelterVerticalLabel data={item} onLabelClick={() => props.onShelterLabelClick(item)} />
			</View>
		);
	};
	return (
		<View style={[shelterList.container]}>
			<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} nestedScrollEnabled />
		</View>
	);
};
ShelterList.defaultProps = {
	items: dummy_ShelterList,
	onShelterLabelClick: e => console.log(e),
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
