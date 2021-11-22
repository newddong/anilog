import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FeedThumnail from '../molecules/FeedThumnail';

export default FeedThumbnailList = props => {
	const NUMCOLUMNS = 3;

	const renderItem = (item, index) => {
		// FavoriteFeeds에서 SelectStat로부터 받은 받은 선택모드 값을 selectMode 변수로 넘겨줌. FeedThumail에서 투명도 조절과 체크 사항을 표기하기 위함
		return <FeedThumnail data={item} onSelect={e => props.onClickThumnail(e)} selectMode={props.selectMode} />;
	};

	return <FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} numColumns={NUMCOLUMNS} />;
};
