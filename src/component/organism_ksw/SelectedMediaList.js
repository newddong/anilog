import React from 'react';
import {FlatList, Text, View} from 'react-native';
import SelectedMedia190 from '../molecules/SelectedMedia190';
import {selectedMediaList} from './style_organism';

export default SelectedMediaList = props => {
	const dummyData = [
		{
			media_uri: 'https://opgg-static.akamaized.net/images/lol/champion/Teemo.png?image=c_scale,q_auto,w_140&v=1635906101',
		},
		{
			media_uri: 'https://i.ytimg.com/vi/kZJYqUoTinA/maxresdefault.jpg',
		},
		{
			media_uri: 'https://opgg-static.akamaized.net/images/lol/champion/Kled.png?image=c_scale,q_auto,w_140&v=1635906101',
		},
		{
			media_uri: 'https://opgg-static.akamaized.net/images/lol/champion/KogMaw.png?image=c_scale,q_auto,w_140&v=1635906101',
		},
		{
			media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[selectedMediaList.itemContainer]}>
				<SelectedMedia190 media_uri={item.media_uri} />
			</View>
		);
	};

	return (
		<View style={[selectedMediaList.container]}>
			<FlatList data={dummyData} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
		</View>
	);
};

// media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
