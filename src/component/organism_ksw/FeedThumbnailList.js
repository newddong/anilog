import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import FeedThumnail from '../molecules/FeedThumnail';

/**
 *
 *@param {{
 * items: 'Array / 피드 목록',
 * onClickThumnail: void,
 * selectMode : boolean
 * }} props
 */
export default FeedThumbnailList = props => {
	const NUMCOLUMNS = 3;

	const renderItem = (item, index) => {
		// console.log('item index', index);
		// FavoriteFeeds에서 SelectStat로부터 받은 받은 선택모드 값을 selectMode 변수로 넘겨줌. FeedThumail에서 투명도 조절과 체크 사항을 표기하기 위함
		if (index == 0) {
			return props.tabMenu;
		}
		return <FlatList
				data={item}
				renderItem={({item, index}) => <FeedThumnail data={item} onSelect={feed_id => props.onClickThumnail(index, feed_id)} selectMode={props.selectMode} />}
				keyExtractor={(item, index) => index + ''}
				numColumns={NUMCOLUMNS}
		/>
	};

	return (
		<View style={{marginBottom: 0}}>
			<FlatList
				data={[{},props.items]}
				renderItem={({item, index}) => renderItem(item, index)}
				keyExtractor={(item, index) => index + ''}
				ListHeaderComponent={props.ListHeaderComponent}
				stickyHeaderIndices={[1]}
				nestedScrollEnabled
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
FeedThumbnailList.defaultProps = {};
