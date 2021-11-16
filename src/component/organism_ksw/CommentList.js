import React from 'react';
import { FlatList } from 'react-native';
import ParentComment from '../organism/ParentComment';
import { dummy_ParentComment } from './dummyDate_json';

/**
 *
 * @param {{
 * data : Object,
 * onPress_ChildComment_ReplyBtn : void,
 * onPressReplyBtn : void,
 * }} props
 */
export default CommentList = props => {

	//자식 댓글의 답글쓰기 클릭 이벤트
	const onPress_ChildComment_ReplyBtn = (comment) => {
		props.onPress_ChildComment_ReplyBtn(comment)
	}

	const renderItem = item => {
		return <ParentComment
			parentComment={item}
			onPressReplyBtn={() => props.onPressReplyBtn()} // 부모 댓글의 답글쓰기 클릭 이벤트
			onPress_ChildComment_ReplyBtn={(comment) => onPress_ChildComment_ReplyBtn(comment)} // 자식 댓글의 답글쓰기 클릭 이벤트
		/>;
	};
	return <FlatList data={dummy_ParentComment} renderItem={({ item }) => renderItem(item)} />;
};

CommentList.defaultProps = {
	onPressReplyBtn: e => console.log(e),
	onPress_ChildComment_ReplyBtn: e => console.log(e)
};
