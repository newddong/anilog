import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import ParentComment from '../organism/ParentComment';
import DP from 'Root/config/dp';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {GRAY10} from 'Root/config/color';

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

	const renderItem = ({item,index}) => {
		
		return (
			<ParentComment
				parentComment={item}
				onPressReplyBtn={() => props.onPressReplyBtn(item)} // 부모 댓글의 답글쓰기 클릭 이벤트
				onPress_ChildComment_ReplyBtn={() => onPress_ChildComment_ReplyBtn(item)} // 자식 댓글의 답글쓰기 클릭 이벤트
			/>
		);
	};

	const whenEmpty = () => {
		return (
			<View style={[{height: 100 * DP, width: '100%', marginVertical: 30 * DP, alignItems: 'center', justifyContent: 'center'}]}>
				<Text style={[txt.roboto30b, {color: GRAY10}]}> 댓글이 없습니다.</Text>
			</View>
		);
	};

	return (
		<View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 48 * DP}}>
			<FlatList
				data={props.items}
				renderItem={renderItem}
				ListEmptyComponent={whenEmpty}
				// ListHeaderComponent={<Text style={[txt.noto28, {marginBottom: 10 * DP,height:60*DP,textAlignVertical:'bottom'}]}>댓글 {props.items.length}개 </Text>}
				stickyHeaderIndices={[0]}
			/>
		</View>
	);
};

CommentList.defaultProps = {
	items: [],
	onPressReplyBtn: e => console.log(e),
	onPress_ChildComment_ReplyBtn: e => console.log(e),
};
