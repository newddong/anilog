import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {dummy_ShelterList} from 'Root/config/dummyDate_json';
import ShelterLabel from './ShelterLabel';
import {shelterList} from './style_organism';

export default ShelterList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[shelterList.shelterLabel]}>
				<ShelterLabel
					img_uri={item.img_uri}
					shelterType={item.shelterType}
					name={item.name}
					location={item.location}
					onLabelClick={() => props.onShelterLabelClick(item)}
				/>
			</View>
		);
	};
	return (
		<View style={[shelterList.container]}>
			<FlatList data={dummy_ShelterList} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} nestedScrollEnabled />
		</View>
	);
};
ShelterList.defaultProps = {
	onShelterLabelClick: e => console.log(e),
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
