import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {dummy_selectedMediaList} from 'Root/config/dummyDate_json';
import SelectedMedia190 from '../molecules/SelectedMedia190';
import {selectedMediaList} from './style_organism';

export default SelectedMediaList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[selectedMediaList.itemContainer]}>
				<SelectedMedia190 media_uri={item.media_uri} />
			</View>
		);
	};

	return (
		<View style={[selectedMediaList.container]}>
			<FlatList data={dummy_selectedMediaList} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
		</View>
	);
};

// media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
