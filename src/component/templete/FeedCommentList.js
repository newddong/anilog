import {useIsFocused, useNavigation} from '@react-navigation/core';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {FlatList, Text, View} from 'react-native';
import {Lock60_Border, Lock60_Filled, Photo60, Send60} from '../atom/icon';
import FeedContent from '../organism/FeedContent';
import CommentList from '../organism_ksw/CommentList';
import {feedCommentList, login_style} from './style_templete';

export default FeedCommentList = props => {
	console.log('그림들' + props.route.params);
	const navigation = useNavigation();
	// React.useEffect(() => {
	// 	LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	// }, []);
	const [editComment, setEditComment] = React.useState(false);
	const [privateComment, setPrivateComment] = React.useState(false);
	const [postPhoto, setPostPhoto] = React.useState(false);
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
					<TouchableOpacity
						onPress={() => {
							setPrivateComment(!privateComment);
							!privateComment ? alert('비밀댓글로 설정되었습니다.') : alert('댓글이 공개설정되었습니다.');
						}}>
						{privateComment ? <Lock60_Filled /> : <Lock60_Border />}
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.push('MultiPhotoSelect', props.route.name)}>
						<Photo60 />
					</TouchableOpacity>
					<TextInput style={[feedCommentList.replyTextInput]} />
					<Send60 />
				</View>
			) : null}
		</View>
	);
};
