import React from 'react';
import {FlatList, Text, View} from 'react-native';
import HashLabel from '../molecules/HashLabel';
import {hashTagList, organism_style} from './style_organism';

export default HashTagList = props => {
	const _dummyData = [
		{
			keyword: '#KEYWORD',
			keywordBold: true,
			count: 'Count한 게시물',
		},
		{
			keyword: '#KEYWORD',
			keywordBold: false,
			count: 'Count한 게시물2',
		},
		{
			keyword: '#KEYWORD',
			keywordBold: true,
			count: 'Count한 게시물3',
		},
	];
	const renderItem = item => {
		return (
			<View style={[hashTagList.container]}>
				<View style={[organism_style.hashLabel, hashTagList.hashLabel]}>
					<HashLabel keyword={item.keyword} keywordBold={item.keywordBold} count={item.count} />
				</View>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />;
};
