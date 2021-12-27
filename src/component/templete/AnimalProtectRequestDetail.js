import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {btn_w226, btn_w276} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, temp_style, animalProtectRequestDetail_style, feedCommentList, accountPicker} from './style_templete';
import RescueImage from '../molecules/RescueImage';
import {ScrollView} from 'react-native-gesture-handler';

import {txt} from 'Root/config/textstyle';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import ShelterSmallLabel from '../molecules/ShelterSmallLabel';
import {BackArrow32, FavoriteTag48_Filled, Share48_Filled} from '../atom/icon';
import DP from 'Root/config/dp';
import CommentList from '../organism_ksw/CommentList';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import ReplyWriteBox from '../organism_ksw/ReplyWriteBox';
import {dummy_AnimalNeedHelpList_various_status, dummy_CommentObject, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {organism_style, profileInfo_style} from '../organism/style_organism';
import {Bracket48} from '../atom/icon';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import {getCommentListByProtectId} from 'Root/api/commentapi';
import {createComment} from 'Root/api/commentapi';
import ImagePicker from 'react-native-image-crop-picker';

//AnimalProtectRequestDetail 호출 경로
// - ProtectRequestList(보호활동탭) , AnimalFromShelter(게시글보기) , Profile(보호활동)

export default AnimalProtectRequestDetail = ({route}) => {
	// console.log('AnimalProtectRequestDetail', route.params);

	const navigation = useNavigation();
	// 보호소 data는 ShelterSmallLabel에서 사용,  보호동물 Data는 RescueSummary, 임시보호 신청, 입양 신청 등에서 사용됨
	const data = route.params ? route.params.item : ''; // ProtectRequestObject, ShelterProtectAnimalObject 정보가 담겨 있는 상태
	const [writersAnotherRequests, setWritersAnotherRequests] = React.useState(route.params.list ? route.params.list : []);
	const [loading, setLoading] = React.useState(true); //로딩상태
	const [editComment, setEditComment] = React.useState(false); // 댓글 쓰기 클릭
	const [privateComment, setPrivateComment] = React.useState(false); // 팝업된 댓글창에서 비밀글 상태
	const [photo, setPhoto] = React.useState(); // PhotoSelect에서 가져온 Photo uri
	const [replyData, setReplyData] = React.useState();
	const [showMore, setShowMore] = React.useState(false); //더보기 클릭 State
	const [commentDataList, setCommentDataList] = React.useState(); //comment list 정보
	const [writeCommentData, setWriteCommentData] = React.useState(); //입력한 댓글 정보
	const [replyPressed, setReplyPressed] = React.useState(false);
	const [token, setToken] = React.useState();
	const debug = false;

	debug && console.log('AnimalProtectRequestDetail data:', data);

	React.useEffect(() => {
		//현재 보고 있는 보호요청게시글의 작성자(보호소)의 모든 보호요청게시글이 담겨 있는 writersAnotherRequests
		//그러나 현재 보고 있는 보호요청게시글은 해당 리스트에 출력이 되어서는 안됨 => Filter처리
		const filteredList = writersAnotherRequests.filter(e => e._id != data._id);
		setWritersAnotherRequests(filteredList);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	//대댓글 달기 버튼 누르면 대댓글 작성
	React.useEffect(() => {
		if (replyPressed == true) {
			createComment(
				{...writeCommentData},

				callback => {
					debug && console.log('write commnet success', callback);
					getCommnetList();
				},
				err => {
					console.log('write comment error', err);
				},
			);
			// setWriteCommentData();
			delete writeCommentData.comment_photo_uri;
			onDeleteImage();
			setEditComment(!editComment);
			setReplyPressed(false);
		}
	}, [replyPressed]);

	//댓글 목록 불러오기
	const getCommnetList = () => {
		getCommentListByProtectId(
			{
				feedobject_id: data._id,
				commentobject_id: '',
				request_number: 10,
			},
			commentdata => {
				debug && console.log('AnimalProtectRequestDetail / getCommentListByProtectId:', commentdata.msg);
				commentdata.msg.map((v, i) => {
					//1depth를 올려준다.
					commentdata.msg[i].user_address = commentdata.msg[i].comment_writer_id.user_address;
					commentdata.msg[i].user_profile_uri = commentdata.msg[i].comment_writer_id.user_profile_uri;
					commentdata.msg[i].user_nickname = commentdata.msg[i].comment_writer_id.user_nickname;
					commentdata.msg[i].comment_date = moment(JSON.stringify(commentdata.msg[i].comment_date).replace(/\"/g, '')).format('YYYY.MM.DD hh:mm:ss');
					//일반 피드글과 구분하기 위해 feed_type 속성 추가 (다른 템플릿들과 시간 표기가 달라서 실종/제보에만 feed_type을 추가하고 시간 표기시 해당 속성 존재 여부만 판단)
					commentdata.msg[i].feed_type = 'report';
				});

				//댓글과 대댓글 작업 (부모 댓글과 자식 댓글 그룹 형성- 부모 댓글에서 부모의 childArray 속성에 자식 댓글 속성들을 추가)
				//부모 댓글은 실제 삭제불가하며 필드로 삭제 여부 값 형성 필요. (네이버나 다음 까페에서도 대댓글 존재시 댓글은 삭제해도 댓글 자리는 존재하고 그 밑으로 대댓글 그대로 노출됨)
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
				// console.log(`commentArray -${JSON.stringify(commentArray)}`);
				setCommentDataList(commentArray);
				debug && console.log('commentArray refresh', commentArray);
			},
			errcallback => {
				console.log(`Comment errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	};

	//댓글 불러오기 (상단의 useEffect와 합칠지는 추후 결정)
	React.useEffect(() => {
		console.log(' - AnimalProtectRequestDetail getCommnetList -');
		getCommnetList();
	}, []);

	//답글 최종 확인(SendIcon 클릭)
	const onWrite = () => {
		// setReplyData({
		// 	...replyData,
		// 	comment_photo_uri: photo ? photo : null,
		// 	comment_like_count: 0,
		// 	comment_dislike_count: 0,
		// 	comment_report_count: 0,
		// 	comment_report_block: false,
		// 	comment_date: new Date(),
		// 	comment_update_date: new Date(),
		// 	comment_writer_id: token,
		// 	comment_protect_request_id: data.protect_request_id,
		// 	comment_protect_request_writer_id: data.protect_animal_writer_id,
		// 	comment_is_secure: privateComment,
		// 	comment_is_delete: false,
		// });
		// setPhoto();
		setWriteCommentData({...writeCommentData, comment_contents: replyText, comment_is_secure: privateComment});
		setReplyPressed(true);
		setPrivateComment(false);
	};

	// 부모 댓글에서 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = parent => {
		console.log('답글쓰기를 클릭한 댓글의 고유 _id', parent.comment_contents);
		setEditComment(!editComment);
		setWriteCommentData({...writeCommentData, commentobject_id: parent._id, feedobject_id: parent.comment_feed_id});
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수
	const onChildReplyBtnClick = comment => {
		console.log('답글쓰기를 클릭한 댓글의 고유 _id', comment);
		// setReplyData({...replyData, comment_parent: comment.comment_parent, comment_parent_writer_id: comment.comment_parent_writer_id});
		setEditComment(!editComment);
	};

	// 답글 쓰기 -> 자물쇠버튼 클릭 콜백함수
	const onLockBtnClick = () => {
		setPrivateComment(!privateComment);
		!privateComment ? alert('비밀댓글로 설정되었습니다.') : alert('댓글이 공개설정되었습니다.');
	};

	// 답글 쓰기 -> 이미지버튼 클릭 콜백함수
	const onAddPhoto = () => {
		// navigation.push('SinglePhotoSelect', route.name);
		ImagePicker.openPicker({
			compressImageQuality: 0.8,
			cropping: true,
			cropperCircleOverlay: true,
		})
			.then(images => {
				setPhoto(images.path || data.user_profile_uri);
				setReplyData({...replyData, comment_photo_uri: images.path});
				Modal.close();
			})
			.catch(err => console.log('err / ImageOpenPicker / ChangeUserProfile', err));
		Modal.close();
		// launchImageLibrary(
		// 	{
		// 		mediaType: 'photo',
		// 		selectionLimit: 1,
		// 	},
		// 	responseObject => {
		// 		console.log('선택됨', responseObject);
		// 		setPhoto(responseObject.assets[responseObject.assets.length - 1].uri);
		// 		setReplyData({...replyData, comment_photo_uri: responseObject.assets[responseObject.assets.length - 1].uri});
		// 	},
		// );
	};

	// 답글 쓰기 -> 이미지버튼 클릭 -> 이미지 가져오기 -> X마크 클릭
	const onDeleteImage = () => {
		setPhoto([]);
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		console.log('답글쓰기 ', text);
		// setReplyData({...replyData, comment_contents: text});
		setReplyData(text);
	};

	//보호요청 더보기의 Thumnail클릭
	const onClick_ProtectedThumbLabel = (status, user_id, item) => {
		if (route.name == 'ProtectRequestManage') {
			navigation.push('ProtectRequestManage', {item: item, list: route.params.list});
		} else {
			navigation.push('AnimalProtectRequestDetail', {item: item, list: route.params.list});
		}
	};

	//좋아요 숫자 출력 함수
	const count_to_K = cnt => {
		if (cnt > 1000000) {
			let count = (cnt / 1000000).toFixed(0) + 'm';
			return count;
		} else if (cnt > 1000) {
			let count = (cnt / 1000).toFixed(0) + 'k';
			return count;
		} else {
			return cnt;
		}
	};

	//보호요청 더보기의 리스트 중 한 아이템의 좋아요 태그 클릭
	const onPressFavoriteTag = (item, index) => {
		console.log('FavoriteTag', index, item);
	};

	//보호요청 게시글 작성 보호소 라벨의 좋아요 태그 클릭
	const onPressShelterLabelFavorite = () => {
		console.log('d');
	};

	//보호소 라벨 공유 클릭
	const onPressShare = () => {
		console.log('공유클릭');
	};

	//더보기 클릭
	const onPressShowMore = () => {
		setShowMore(!showMore);
	};

	//댓글 리스트 표출 개수 제어
	const checkDataLength = () => {
		let tempList = [];
		if (!showMore) {
			if (dummy_CommentObject.length > 2) {
				tempList = [...dummy_CommentObject.slice(0, 2)];
				return tempList;
			} else return dummy_CommentObject;
		} else return dummy_CommentObject;
	};

	//임시보호 버튼 클릭
	const onPressProtectRequest = () => {
		navigation.push('ApplyProtectActivityA', {protect_request_pet_data: data});
	};

	//입양하기 버튼 클릭
	const onPressAdoptionRequest = () => {
		navigation.push('ApplyAnimalAdoptionA', {protect_request_pet_data: data});
	};

	if (loading) {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'} />
			</View>
		);
	}
	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[animalProtectRequestDetail_style.container]}>
				{/* 임시보호 후보자 협의 중 사진 */}
				<View style={[temp_style.rescueImage]}>
					<RescueImage status={data.protect_request_status || 'adopt'} img_uri={data.protect_request_photos_uri || DEFAULT_PROFILE} />
				</View>
				<View style={[temp_style.requestProtect_view]}>
					<Text style={[txt.noto24, temp_style.requestProtect, {color: GRAY10}]}>보호요청</Text>
				</View>
				{/* RescueContentTitle */}
				<View style={[temp_style.rescueContentTitle]}>
					<Text style={[txt.noto28b]}>{data.protect_request_title || ''}</Text>
				</View>
				{/* 보호소 라벨 */}
				<View style={[temp_style.shelterSmallLabel_view_animalProtectRequestDetail]}>
					<View style={[temp_style.shelterSmallLabel_animalProtectRequestDetail]}>
						<ShelterSmallLabel data={data.protect_request_writer_id} />
					</View>
					{/* Buttons */}
					<View style={[temp_style.button_animalProtectRequestDetail]}>
						<View>
							<FavoriteTag48_Filled onPress={onPressShelterLabelFavorite} />
							<Text style={[txt.roboto24, {color: APRI10, alignSelf: 'center'}]}>
								{data ? count_to_K(data.protect_request_writer_id.user_follow_count) : ''}
							</Text>
						</View>
						<View style={{marginLeft: 30 * DP}}>
							<Share48_Filled onPress={onPressShare} />
							<Text style={[txt.roboto24, {color: APRI10}]}>공유</Text>
						</View>
					</View>
				</View>

				{/* RescueSummary */}
				<View style={[temp_style.rescueSummary, animalProtectRequestDetail_style.rescueSummary]}>
					<View style={[animalProtectRequestDetail_style.rescueSummary_insideContainer]}>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>분류</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? data.protect_animal_id.protect_animal_species : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>품종</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? data.protect_animal_id.protect_animal_species_detail : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>성별</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_sex && data.protect_animal_sex == 'male' ? '수컷' : '암컷'}
							</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>예상연령</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? data.protect_animal_id.protect_animal_estimate_age : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>체중</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? data.protect_animal_id.protect_animal_weight : ''} kg
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>중성화</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? (data.protect_animal_id.protect_animal_neutralization == 'yes' ? 'O' : 'X') : ''}
							</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>발견장소</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_id ? data.protect_animal_id.protect_animal_rescue_location : ''}
							</Text>
						</View>
					</View>
				</View>

				{/* RescueText */}
				<View style={[animalProtectRequestDetail_style.rescueText]}>
					<Text style={[txt.noto24]}>{data.protect_request_content || ''}</Text>
				</View>

				<View style={[temp_style.commentList]}>
					{/* CommentList에 필요한 데이터 - CommentObject, WriterObejct(UserObject), FeedObject(FeedObject), LikeCommentObject */}
					{/* 위의 모든 데이터가 CommentList items에 담겨져 있어야 함 */}
					{/* <CommentList
						items={commentDataList}
						onPressReplyBtn={onReplyBtnClick}
						onPress_ChildComment_ReplyBtn={comment => onChildReplyBtnClick(comment)}
					/> */}
				</View>

				{/* 더보기 버튼 - 기본 2개 표출되며, 더보기 누르면 모두 보이도록 함. (hjs - 추후에 5개씩 더 보이게 한다거나 등등의 개수 제어 필요) */}
				<TouchableOpacity onPress={onPressShowMore} style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>더보기 </Text>
					<View style={showMore ? {transform: [{rotate: '180deg'}]} : null}>
						<Bracket48 />
					</View>
				</TouchableOpacity>
				{/* 보호요청 더 보기addMoreRequest */}
				<View style={[temp_style.addMoreRequest_view]}>
					<Text style={[txt.noto24, temp_style.addMoreRequest, {color: GRAY20}]}>보호요청 더보기</Text>
				</View>

				{/* AnimalNeedHelpList */}
				<View style={[accountPicker.accountList]}>
					<AnimalNeedHelpList
						data={writersAnotherRequests}
						onClickLabel={(status, user_id, item) => onClick_ProtectedThumbLabel(status, user_id, item)}
						onFavoriteTag={onPressFavoriteTag}
					/>
				</View>
				{/* 보호소 계정이 나의 보호요청 게시글을 통해 들어왔을 경우 버튼 출력 X */}
			</ScrollView>
			{/* ScrollView 바깥에 둬야 Scroll의 현재 위치에 상관없이 아래에 출력 */}
			{route.name == 'ProtectRequestManage' ? (
				<></>
			) : (
				<View style={[animalProtectRequestDetail_style.btnContainer]}>
					<AniButton onPress={onPressProtectRequest} btnTitle={'임시보호 신청'} btnStyle={'border'} btnLayout={btn_w276} titleFontStyle={30} />
					<AniButton onPress={onPressAdoptionRequest} btnTitle={'입양 신청'} btnLayout={btn_w276} titleFontStyle={30} />
				</View>
			)}
			{editComment ? (
				<ReplyWriteBox
					onAddPhoto={onAddPhoto}
					onChangeReplyInput={text => onChangeReplyInput(text)}
					onChildReplyBtnClick
					onLockBtnClick={onLockBtnClick}
					onDeleteImage={onDeleteImage}
					onWrite={onWrite}
					privateComment={privateComment}
					photo={photo}
				/>
			) : null}
		</View>
	);
};

AnimalProtectRequestDetail.defaultProps = {};
