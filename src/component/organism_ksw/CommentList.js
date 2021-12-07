import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import ParentComment from '../organism/ParentComment';
import {dummy_ParentComment} from '../../config/dummyDate_json';
import DP from 'Root/config/dp';

/**
 *
 * @param {{
 * items : '댓글 목록들',
 * onPress_ChildComment_ReplyBtn : void,
 * onPressReplyBtn : void,
 * }} props
 */
export default CommentList = props => {
	//자식 댓글의 답글쓰기 클릭 이벤트
	const onPress_ChildComment_ReplyBtn = comment => {
		props.onPress_ChildComment_ReplyBtn(comment);
	};

	const renderItem = item => {
		return (
			<ParentComment
				parentComment={item}
				onPressReplyBtn={() => props.onPressReplyBtn(item)} // 부모 댓글의 답글쓰기 클릭 이벤트
				onPress_ChildComment_ReplyBtn={() => onPress_ChildComment_ReplyBtn(item)} // 자식 댓글의 답글쓰기 클릭 이벤트
			/>
		);
	};
	return (
		<View>
			<Text style={{marginBottom: 10 * DP}}>댓글 {dummy_ParentComment.length}개 </Text>
			<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
				<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
					<FlatList data={props.items} renderItem={({item}) => renderItem(item)} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

CommentList.defaultProps = {
	items: [],
	onPressReplyBtn: e => console.log(e),
	onPress_ChildComment_ReplyBtn: e => console.log(e),
};
