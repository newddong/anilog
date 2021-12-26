import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View, FlatList} from 'react-native';
import FeedContent from '../organism/FeedContent';
import CommentList from '../organism_ksw/CommentList';
import ReplyWriteBox from '../organism_ksw/ReplyWriteBox';
import {feedCommentList, login_style} from './style_templete';
import {createComment, getCommentListByFeedId, getCommentListByProtectId} from 'Root/api/commentapi';
import {txt} from 'Root/config/textstyle';
import Modal from '../modal/Modal';
import ImagePicker from 'react-native-image-crop-picker';
import userGlobalObject from 'Root/config/userGlobalObject';

export default FeedCommentList = props => {
	// console.log('그림들' + props.route.params);
	const navigation = useNavigation();
	const [editComment, setEditComment] = React.useState(false); //답글 쓰기 클릭 state
	const [privateComment, setPrivateComment] = React.useState(false); // 공개 설정 클릭 state
	const [photo, setPhoto] = React.useState();
	const [data, setData] = React.useState({});
	const [comments, setComments] = React.useState([]);
	const [content, setContent] = React.useState('');

	React.useEffect(() => {
		if (props.route.name == 'FeedCommentList') {
			getCommentListByFeedId(
				{
					feedobject_id: props.route.params.feedobject._id,
					request_number: 1000,
				},
				comments => {
					setComments(comments.msg);
				},
				err =>console.log(err),
			);
		}
	}, []);

	//답글 쓰기 => Input 작성 후 보내기 클릭 콜백 함수
	const onWrite = () => {
		let param = {
			comment_photo_uri: photo, //사진uri
			comment_contents: content, //내용
			// commentobject_id: undefined, //부모댓글
			feedobject_id: props.route.params.feedobject._id, //피드id
			// protect_request_object_id: undefined, //요청게시물id
			comment_is_secure: privateComment, //공개여부
		}
		console.log(userGlobalObject.userInfo);
		createComment(param,(result)=>{
			console.log(result);
			setPhoto();
			setComments([{...result.msg,comment_writer_id:userGlobalObject.userInfo}].concat(comments));
		},(err)=>Modal.alert(err));
	};

	// 답글 쓰기 -> 자물쇠버튼 클릭 콜백함수
	const onLockBtnClick = () => {
		setPrivateComment(!privateComment);
		!privateComment ? Modal.alert('비밀댓글로 설정되었습니다.') : Modal.alert('댓글이 공개설정되었습니다.');
	};

	// 답글 쓰기 -> 이미지버튼 클릭 콜백함수
	const onAddPhoto = () => {
		// navigation.push('SinglePhotoSelect', props.route.name);
		ImagePicker.openPicker({
			compressImageQuality:0.8,
			cropping: true,
		  }).then(images => {
			setPhoto(images.path);
			Modal.close();
		  }).catch(err=>Modal.alert(err+''));Modal.close();
	};

	const onDeleteImage = () => {
		setPhoto();
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		setContent(text);
	};

	// 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = (parentCommentId) => {
		console.log(parentCommentId)
		// setEditComment(!editComment);
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수(자식 답글에답글다는건 안함)
	const onChildReplyBtnClick = comment => {
		// setEditComment(!editComment);
	};

	const render = ({item, index}) => {
		if (index == 0)
			return (
				<View style={{justifyContent: 'flex-end', paddingBottom: 10 * DP, height: 60 * DP, backgroundColor: '#FFF', paddingHorizontal: 48 * DP}}>
					<Text style={[txt.noto28]}>댓글 {comments.length}개 </Text>
				</View>
			);
		if (index > 0) return <CommentList items={item} onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={onChildReplyBtnClick} />;
	};

	return (
		<View style={[login_style.wrp_main, feedCommentList.container]}>
			<FlatList
				data={[{}, comments]}
				renderItem={render}
				ListHeaderComponent={
					<>
						<View style={[feedCommentList.feedContent]}>
							<FeedContent data={props.route.params.feedobject} />
						</View>
						{/* <View style={{justifyContent: 'flex-end', paddingBottom: 10 * DP, height: 60 * DP, backgroundColor: '#FFF', paddingHorizontal: 48 * DP}}>
							<Text style={[txt.noto28]}>댓글 {comments.length}개 </Text>
						</View> */}
					</>
				}
				stickyHeaderIndices={[0]}
			/>

			{/* <View style={[feedCommentList.commentList]}> */}
			{/* CommentList 안에는 ParentComent와 ChildComments 데이터가 필요 */}

			{/* </View> */}

			{/* Parent Comment 혹은 Child Comment 에서 답글쓰기를 클릭할 시 화면 최하단에 등장 */}
			{editComment || props.route.name == 'FeedCommentList' ? (
				<ReplyWriteBox
					onAddPhoto={onAddPhoto}
					onChangeReplyInput={onChangeReplyInput}
					onLockBtnClick={onLockBtnClick}
					onWrite={onWrite}
					onDeleteImage={onDeleteImage}
					privateComment={privateComment}
					photo={photo}
				/>
			) : (
				false
			)}
		</View>
	);
};
