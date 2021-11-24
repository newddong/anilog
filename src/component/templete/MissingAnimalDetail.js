import React from 'react';
import {View, ScrollView, LogBox} from 'react-native';
import {login_style, missingAnimalDetail, temp_style} from './style_templete';
import {SvgWrap} from 'Screens/svgwrapper';
import {Post_dog} from 'Asset/image';
import FeedContent from '../organism/FeedContent';
import CommentList from '../organism_ksw/CommentList';
import {useNavigation} from '@react-navigation/core';
import {dummy_missing_user_info} from 'Root/config/dummyDate_json';

export default MissingAnimalDetail = props => {
	const navigation = useNavigation();

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	const [photo, setPhoto] = React.useState(props.route.params != null ? props.route.params : []); //PhotoSelect에서 사진 선택이 됐을 경우 photo에 담김
	const [editComment, setEditComment] = React.useState(false); //답글 쓰기 클릭 state
	const [privateComment, setPrivateComment] = React.useState(false); // 공개 설정 클릭 state
	const [replyText, setReplyText] = React.useState();

	React.useEffect(() => {
		setPhoto(props.route.params);
	}, [props.route.params]);

	React.useEffect(() => {
		navigation.addListener('blur', () => {
			setPhoto([]);
		});
	});

	const [data, setData] = React.useState({
		comment_photo_uri: '', //댓글 첨부 이미지 uri
		comment_contents: '', //댓글 내용
		comment_is_secure: '', //true일때는 writer와 댓글이 달린 게시글 작성자만 볼수있음,
		comment_feed_id: '', //댓글이 작성된 피드 게시물
	});

	//답글 쓰기 => Input 작성 후 보내기 클릭 콜백 함수
	const onWrite = () => {
		console.log('onWrite', replyText);
		console.log('commentData=>' + commentData.comment_contentsdsf);
		setCommentData({...commentData, comment_contents: replyText, comment_is_secure: privateComment, comment_feed_id: ''});
	};

	// 답글 쓰기 -> 자물쇠버튼 클릭 콜백함수
	const onLockBtnClick = () => {
		setPrivateComment(!privateComment);
		!privateComment ? alert('비밀댓글로 설정되었습니다.') : alert('댓글이 공개설정되었습니다.');
	};

	// 답글 쓰기 -> 이미지버튼 클릭 콜백함수
	const onAddPhoto = () => {
		navigation.push('SinglePhotoSelect', props.route.name);
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		console.log('onChangeReplyInput');
		setReplyText(text);
	};

	// 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = () => {
		console.log('onReplyBtnClick');
		setEditComment(!editComment);
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수
	const onChildReplyBtnClick = comment => {
		console.log('onChildReplyBtnClick');
		setEditComment(!editComment);
	};

	// 답글 이미지 등록 후 지우기 버튼 클릭 콜백함수
	const onDeleteImage = () => {
		console.log('onDeleteImage');
		setPhoto([]);
	};

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={missingAnimalDetail.insideContainer}>
				{/* Poster */}
				<View style={[missingAnimalDetail.poster]}>
					<SvgWrap svg={<Post_dog />} />
				</View>
				<View style={[temp_style.feedContent, missingAnimalDetail.feedContent]}>
					{/* DB에서 가져오는 제보 피드글 데이터를 FeedContent에 넘겨준다. */}
					<FeedContent data={dummy_missing_user_info} />
				</View>
				<View style={missingAnimalDetail.horizontal_separator} />
				{/* 댓글에 관한 내용 - API에서 넘겨주는 값 확인 후 재수정 필요*/}
				<View style={[temp_style.commentList, missingAnimalDetail.commentList]}>
					<CommentList onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={comment => onChildReplyBtnClick(comment)} />
				</View>
				{/* Parent Comment 혹은 Child Comment 에서 답글쓰기를 클릭할 시 화면 최하단에 등장 */}
			</ScrollView>

			{editComment ? (
				<ReplyWriteBox
					onAddPhoto={onAddPhoto}
					onChangeReplyInput={text => onChangeReplyInput(text)}
					onLockBtnClick={onLockBtnClick}
					onWrite={onWrite}
					privateComment={privateComment}
					// isPhotoAdded={isPhotoAdded}
					photo={photo}
					onDeleteImage={onDeleteImage}
				/>
			) : null}
		</View>
	);
};
