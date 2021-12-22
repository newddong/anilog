import React from 'react';
import {LogBox, ScrollView, Image} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, reportDetail, temp_style} from './style_templete';
import FeedContent from '../organism/FeedContent';
import {useNavigation} from '@react-navigation/core';
// import {_dummy_MissingReportDetail} from 'Root/config/dummy_data_hjs';
import {_dummy_ReportDetail} from 'Root/config/dummy_data_hjs';
import {dummy_CommentObject} from 'Root/config/dummyDate_json';
import {getFeedDetailById} from 'Root/api/feedapi';
import {getCommentListByFeedId} from 'Root/api/commentapi';
import moment from 'moment';

export default ReportDetail = props => {
	const navigation = useNavigation();

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	const [photo, setPhoto] = React.useState(props.route.params != null ? props.route.params : []); //PhotoSelect에서 사진 선택이 됐을 경우 photo에 담김
	const [editComment, setEditComment] = React.useState(false); //답글 작성란 View 보이기 T/F
	const [privateComment, setPrivateComment] = React.useState(false); // 공개 설정 클릭 state
	const [replyText, setReplyText] = React.useState(); //댓글 텍스트 state
	const [showMore, setShowMore] = React.useState(false); //더보기 클릭 State
	const [commentDataList, setCommentDataList] = React.useState(); //더보기 클릭 State
	const debug = false;
	React.useEffect(() => {
		setPhoto(props.route.params);
	}, [props.route.params]);

	React.useEffect(() => {
		navigation.addListener('blur', () => {
			setPhoto([]);
		});
	});

	//api 실제 작업 후 하단에 있는 data로 변경 예정 (현재는 에러 방지 코드)
	const [data, setData] = React.useState({});

	// 제보 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		console.log(' - ReportDetail -');
		getFeedDetailById(
			{
				feedobject_id: '61c288f97be07611b0094b43',
			},
			data => {
				// console.log(`ReportDetail data:${JSON.stringify(data.msg)}`);
				let dateValue = data.msg.report_witness_date;
				if (dateValue != undefined && dateValue.length > 10) {
					data.msg.report_witness_date = JSON.stringify(data.msg.report_witness_date).split('T')[0].replace(/\"/, '');
				}
				setData(data.msg);
			},
			errcallback => {
				console.log(`errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	}, []);

	//댓글 불러오기 (상단의 useEffect와 합칠지는 추후 결정)
	React.useEffect(() => {
		console.log(' - ReportDetail Comment -');
		getCommentListByFeedId(
			{
				feedobject_id: '61c288f97be07611b0094b43',
				commentobject_id: '61c2c0de7be07611b0094ffd',
				request_number: 10,
			},
			commentdata => {
				commentdata.msg.map((v, i) => {
					commentdata.msg[i].user_address = commentdata.msg[i].comment_writer_id.user_address;
					commentdata.msg[i].user_profile_uri = commentdata.msg[i].comment_writer_id.user_profile_uri;
					commentdata.msg[i].user_nickname = commentdata.msg[i].comment_writer_id.user_nickname;
					commentdata.msg[i].comment_date = moment(JSON.stringify(commentdata.msg[i].comment_date).replace(/\"/g, '')).format('YYYY.MM.DD hh:mm:ss');
					commentdata.msg[i].feed_type = 'report';
				});
				let commentArray = [];
				let tempComment = commentdata.msg;
				tempComment.map((v, i) => {
					// comment_parent가 없으면 일반 댓글
					if (v.comment_parent == undefined) {
						commentArray.push(v);
						//push한 JSON에 대댓글이 달릴 수 있으므로 childArray 배열 속성을 추가.
						commentArray[commentArray.length - 1].childArray = [];
					} else if (v.comment_parent != undefined && v.comment_parent != '') {
						//부모 댓글값이 존재할 경우 대댓글임, 원래 댓글의 childArray 배열에 push 함.
						for (let j = 0; j < commentArray.length; j++) {
							if (commentArray[j]._id == v.comment_parent) {
								commentArray[j].childArray.push(v);
								break;
							}
						}
					}
				});
				setCommentDataList(commentArray);
			},
			errcallback => {
				console.log(`Comment errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	}, []);

	// [hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요
	const [data1, setData1] = React.useState({
		//user object (게시글 작성자의 db 고유 아이디를 통해 조회)
		user_profile_uri: '',
		user_nickname: '',
		user_address: '',

		//feed object
		feed_object_id: '', //피드 아이디
		feed_writer_id: '', //게시글 작성자의 db 고유 아이디
		feed_medias: '', //피드 첨부된 미디어 매체
		feed_location: '',
		report_witness_date: '', //제보 게시날짜
		report_witness_location: '', //제보 장소
		feed_content: '', //컨텐츠 내용
		feed_date: '', //피드 최초 작성일자
		feed_update_date: '', //피드 최종 업로드 날자
		feed_favorite_count: 0, //게시글을 즐겨찾기로 등록한 수
		feed_comment_count: 0, //게시글에 달린 댓글의 수

		//comment object (배열 형식으로 받음)  댓글 사용자 정보
		comment: [
			{
				user_profile_uri: '',
				user_nickname: '',
				user_address: '',

				comment_contents: '', //댓글 내용
				comment_photo_uri: '', //댓글 첨부 이미지 uri
				comment_is_secure: '', //true일때는 writer와 댓글이 달린 게시글 작성자만 볼수있음,
				comment_date: '', //댓글 작성일시
				comment_update_date: '', //댓글 최정 수정일시
				comment_like_count: '', //댓글 좋아요 숫자
				comment_parent: '', //대댓글이 달린 댓글의 ID
				comment_parent_writer_id: '', //부모 댓글의 작성자 ID
			},
		],
	});

	//답글 쓰기 => Input 작성 후 보내기 클릭 콜백 함수
	const onWrite = () => {
		debug && console.log('onWrite', replyText);
		debug && console.log('commentData=>' + commentData.comment_contentsdsf);
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

	//더보기 클릭
	const onPressShowMore = () => {
		setShowMore(!showMore);
	};

	//댓글 리스트 표출 개수 제어
	// const checkDataLength = () => {
	// 	let tempList = [];
	// 	if (!showMore) {
	// 		if (dummy_CommentObject.length > 2) {
	// 			tempList = [...dummy_CommentObject.slice(0, 2)];
	// 			return tempList;
	// 		} else return dummy_CommentObject;
	// 	} else return dummy_CommentObject;
	// };

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[reportDetail.container]}>
				{/* Img_square_750 */}
				<View style={[temp_style.img_square_750, reportDetail.img_square_750]}>
					{/* 제보사진 */}
					<Image
						source={{
							uri: data.feed_thumbnail,
						}}
						style={[temp_style.img_square_750]}
					/>
				</View>
				<View style={[temp_style.feedContent, reportDetail.feedContent]}>
					{/* DB에서 가져오는 제보 피드글 데이터를 FeedContent에 넘겨준다. */}
					<FeedContent data={data} />
				</View>
				{/* [hjs] 이 화면 댓글도 AnimalProtectRequestDetail 같이 더보기 버튼이 있는것인지..아니면 쭉 늘어놓을 것인지 결정 필요. */}
				{/* 댓글에 관한 내용 - API에서 넘겨주는 값 확인 후 재수정 필요*/}
				<View style={[temp_style.commentList, reportDetail.commentList]}>
					<CommentList
						items={commentDataList}
						onPressReplyBtn={onReplyBtnClick}
						onPress_ChildComment_ReplyBtn={comment => onChildReplyBtnClick(comment)}
					/>
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
