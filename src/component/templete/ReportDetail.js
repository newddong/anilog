import React from 'react';
import {LogBox, ScrollView, Image} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, reportDetail, temp_style} from './style_templete';
import FeedContent from '../organism/FeedContent';
import {useNavigation} from '@react-navigation/core';

export default ReportDetail = props => {
	const navigation = useNavigation();

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	const [photo, setPhoto] = React.useState(props.route.params != null ? props.route.params : []); //PhotoSelect에서 사진 선택이 됐을 경우 photo에 담김
	const [editComment, setEditComment] = React.useState(false); //답글 작성란 View 보이기 T/F
	const [privateComment, setPrivateComment] = React.useState(false); // 공개 설정 클릭 state
	const [replyText, setReplyText] = React.useState(); //댓글 텍스트 state

	React.useEffect(() => {
		setPhoto(props.route.params);
	}, [props.route.params]);

	React.useEffect(() => {
		navigation.addListener('blur', () => {
			setPhoto([]);
		});
	});

	//답글 쓰기 => Input 작성 후 보내기 클릭 콜백 함수
	const onWrite = () => {
		console.log('onWrite', replyText);
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
		setReplyText(text);
	};

	// 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = () => {
		setEditComment(!editComment);
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수
	const onChildReplyBtnClick = comment => {
		setEditComment(!editComment);
	};

	// 답글 이미지 등록 후 지우기 버튼 클릭 콜백함수
	const onDeleteImage = () => {
		setPhoto([]);
	};

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[reportDetail.container]}>
				{/* Img_square_750 */}
				<View style={[temp_style.img_square_750, reportDetail.img_square_750]}>
					<Image
						source={{
							uri: 'https://cdn.mkhealth.co.kr/news/photo/202102/52163_52859_5928.jpg',
						}}
						style={[temp_style.img_square_750]}
					/>
				</View>
				<View style={[temp_style.feedContent, reportDetail.feedContent]}>
					<FeedContent />
				</View>
				<View style={[temp_style.commentList, reportDetail.commentList]}>
					<CommentList onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={comment => onChildReplyBtnClick(comment)} />
				</View>
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
