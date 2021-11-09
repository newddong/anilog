import React from 'react';
import {LogBox, ScrollView} from 'react-native';
import {FlatList, Text, View} from 'react-native';
import {testArray} from 'Root/i18n/msg';
import FeedContent from '../organism/FeedContent';
import ParentComment from '../organism/ParentComment';
import {feedCommentList, login_style} from './style_templete';

export default FeedCommentList = props => {
	// React.useEffect(() => {
	// 	LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	// }, []);
	const [editComment, setEditComment] = React.useState(false);

	const dummy_ParentComment = [1, 2, 3, 4];
	//DummyData
	const getFlat = item => {
		return (
			<View>
				<Text>{item}</Text>
				<Text>{item}</Text>
			</View>
		);
	};

	//댓글 수정 시 발생하는 이벤트 함수, 현재 보류 상태
	const getEditCommentContainer = () => {
		return editComment ? (
			<View style={[feedCommentList.editComment_expanded]}>
				<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
			</View>
		) : (
			<View style={[]}>
				<Text>(O)EditComment</Text>
			</View>
		);
	};

	const renderItem = item => {
		return <ParentComment />;
	};

	return (
		<View style={[login_style.wrp_main, feedCommentList.container]}>
			<View style={[feedCommentList.feedContent]}>
				<FeedContent />
			</View>
			<View style={[feedCommentList.commentList]}>
				<Text style={[feedCommentList.comment_number]}>댓글 {dummy_ParentComment.length}개</Text>
				<FlatList data={dummy_ParentComment} renderItem={({item}) => renderItem(item)} />
				{/* <View style={[feedCommentList.editComment]}>{getEditCommentContainer()}</View> */}
			</View>
		</View>
	);
};
