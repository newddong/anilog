import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import FeedContent from '../organism/FeedContent';
import CommentList from '../organism_ksw/CommentList';
import ReplyWriteBox from '../organism_ksw/ReplyWriteBox';
import { feedCommentList, login_style } from './style_templete';

export default FeedCommentList = props => {
	// console.log('그림들' + props.route.params);
	const navigation = useNavigation();
	const [editComment, setEditComment] = React.useState(false); //답글 쓰기 클릭 state
	const [privateComment, setPrivateComment] = React.useState(false); // 공개 설정 클릭 state
	// const [postPhoto, setPostPhoto] = React.useState(false);

	const dummy_ParentComment = [1, 2];

	//답글 쓰기 => Input 작성 후 보내기 클릭 콜백 함수
	const onWrite = () => {
		console.log('onWrite');
	};

	// 답글 쓰기 -> 자물쇠버튼 클릭 콜백함수
	const onLockBtnClick = () => {
		setPrivateComment(!privateComment);
		!privateComment ? alert('비밀댓글로 설정되었습니다.') : alert('댓글이 공개설정되었습니다.');
	};

	// 답글 쓰기 -> 이미지버튼 클릭 콜백함수
	const onAddPhoto = () => {
		navigation.push('MultiPhotoSelect', props.route.name);
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		console.log(text);
	};

	// 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = () => {
		setEditComment(!editComment);
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수
	const onChildReplyBtnClick = comment => {
		setEditComment(!editComment);
	};

	return (
		<View style={[login_style.wrp_main, feedCommentList.container]}>
			<ScrollView>
				<View style={[feedCommentList.feedContent]}>
					<FeedContent />
				</View>
				<View style={[feedCommentList.commentList]}>
					{/* CommentList 안에는 ParentComent와 ChildComments 데이터가 필요 */}
					<CommentList onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={comment => onChildReplyBtnClick(comment)} />
				</View>
			</ScrollView>
			{/* Parent Comment 혹은 Child Comment 에서 답글쓰기를 클릭할 시 화면 최하단에 등장 */}
			{editComment ? (
				<ReplyWriteBox
					onAddPhoto={onAddPhoto}
					onChangeReplyInput={text => onChangeReplyInput(text)}
					onLockBtnClick={onLockBtnClick}
					onWrite={onWrite}
					privateComment={privateComment}
				/>
			) : null}
		</View>
	);
};