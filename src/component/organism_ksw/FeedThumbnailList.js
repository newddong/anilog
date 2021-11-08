import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FeedThumnail from '../molecules/FeedThumnail';

export default FeedThumbnailList = props => {
	const _dummyData = [1, 2, 3, 4];
	const renderItem = (item, index) => {
		return <FeedThumnail onSelect={e => props.onClickThumnail(e)} />;
	};

	return <FlatList data={_dummyData} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />;
};
