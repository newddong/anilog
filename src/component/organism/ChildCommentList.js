import React from 'react';
import {View, FlatList} from 'react-native';
import {organism_style} from './style_organism';
import ChildComment from 'Root/component/organism_ksw/ChildComment';

export default ChildCommentList = props => {
	const testArray = [
		{
			comment: '감사해요 ^^',
			likecount: 80,
		},
		{
			comment: '별로 귀엽지 않네요 ~',
			likecount: 50,
		},
		{
			comment: '빠릅니다.',
			likecount: 150,
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[organism_style.childCommentList]}>
				<ChildComment data={item} />
			</View>
		);
	};
	return <FlatList data={testArray} renderItem={({item, index}) => renderItem(item, index)} />;
};
