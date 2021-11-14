import React from 'react';
import {FlatList} from 'react-native';
import ParentComment from '../organism/ParentComment';

export default CommentList = props => {
	const testArray = [1, 2];
	const renderItem = item => {
		return <ParentComment onPressReplyBtn={() => props.onPressReplyBtn()} />;
	};
	return <FlatList data={testArray} renderItem={({item}) => renderItem(item)} />;
};

CommentList.defaultProps = {
	onPressReplyBtn: e => console.log(e),
};
