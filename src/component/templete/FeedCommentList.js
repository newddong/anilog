import React from 'react';
import {LogBox, ScrollView, TextInput} from 'react-native';
import {FlatList, Text, View} from 'react-native';
import {testArray} from 'Root/i18n/msg';
import {Lock60_Border, Photo60, Send60} from '../atom/icon';
import FeedContent from '../organism/FeedContent';
import ParentComment from '../organism/ParentComment';
import CommentList from '../organism_ksw/CommentList';
import {feedCommentList, login_style} from './style_templete';

export default FeedCommentList = props => {
	// React.useEffect(() => {
	// 	LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	// }, []);
	const [editComment, setEditComment] = React.useState(false);
	//DummyData

	const dummy_ParentComment = [1, 2, 3, 4];

	return (
		<View style={[login_style.wrp_main, feedCommentList.container]}>
			<View style={[feedCommentList.feedContent]}>
				<FeedContent />
			</View>
			<View style={[feedCommentList.commentList]}>
				<Text style={[feedCommentList.comment_number]}>댓글 {dummy_ParentComment.length}개</Text>
				<CommentList onPressReplyBtn={() => setEditComment(!editComment)} />
			</View>
			{editComment ? (
				<View style={[feedCommentList.editComment]}>
					<View>
						<Lock60_Border />
					</View>
					<View>
						<Photo60 />
					</View>
					<TextInput style={[feedCommentList.replyTextInput]} />
					<Send60 />
				</View>
			) : null}
		</View>
	);
};
