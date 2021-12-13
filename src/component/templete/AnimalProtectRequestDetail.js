import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
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

//AnimalProtectRequestDetail에서 접근해야하는 데이터 테이블
//  ProtectRequestObject(보호요청 게시글에 대한 데이터)
// 	ShelterProtectAnimalObject(보호요청된 동물에 대한 데이터 ex)중성화 여부, 성별 품종 등
//  CommentObject(댓글쓰기 및 댓글 대댓글에 대한 데이터)
//  FeedObject (댓글 Data Write할 시 comment_feed_id, comment_feed_writer_id가 필요)

//AnimalProtectRequestDetail 호출 경로
// - AnimalNeedHelp Item의 썸네일을 클릭할 경우 호출.
// - AnimalNeedHelp Item의 BorderMode=true 에서 게시글보기를 클릭하였을 경우 호출

export default AnimalProtectRequestDetail = ({route}) => {
	// console.log('AnimalProtectRequestDetail', route.params);
	const navigation = useNavigation();
	// 보호소 data는 ShelterSmallLabel에서 사용,  보호동물 Data는 RescueSummary, 임시보호 신청, 입양 신청 등에서 사용됨
	const [data, setData] = React.useState(route.params); // ProtectRequestObject, ShelterProtectAnimalObject 정보가 담겨 있는 상태

	const [editComment, setEditComment] = React.useState(false); // 댓글 쓰기 클릭
	const [privateComment, setPrivateComment] = React.useState(false); // 팝업된 댓글창에서 비밀글 상태
	const [photo, setPhoto] = React.useState(); // PhotoSelect에서 가져온 Photo uri
	const [replyData, setReplyData] = React.useState();
	const [token, setToken] = React.useState();
	const [showMore, setShowMore] = React.useState(false); //더보기 클릭 State

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res ? setToken(res) : setToken(null);
		});
	}, []);

	//답글 최종 확인(SendIcon 클릭)
	const onWrite = () => {
		setReplyData({
			...replyData,
			comment_photo_uri: photo ? photo : null,
			comment_like_count: 0,
			comment_dislike_count: 0,
			comment_report_count: 0,
			comment_report_block: false,
			comment_date: new Date(),
			comment_update_date: new Date(),
			comment_writer_id: token,
			comment_protect_request_id: data.protect_request_id,
			comment_protect_request_writer_id: data.protect_animal_writer_id,
			comment_is_secure: privateComment,
			comment_is_delete: false,
		});
		setPhoto();
		setPrivateComment(false);
	};

	// 부모 댓글에서 답글 쓰기 버튼 클릭 콜백함수
	const onReplyBtnClick = comment => {
		console.log('답글쓰기를 클릭한 댓글의 고유 _id', comment.comment_contents);
		setEditComment(!editComment);
	};

	// 자식 답글에서 답글쓰기 버튼 클릭 콜백함수
	const onChildReplyBtnClick = comment => {
		console.log('답글쓰기를 클릭한 댓글의 고유 _id', comment);
		setReplyData({...replyData, comment_parent: comment.comment_parent, comment_parent_writer_id: comment.comment_parent_writer_id});
		setEditComment(!editComment);
	};

	//임시보호 버튼 클릭
	const onPressProtectRequest = () => {
		navigation.push('ApplyProtectActivityA', {protect_request_pet_data: data});
	};

	//입양하기 버튼 클릭
	const onPressAdoptionRequest = () => {
		navigation.push('ApplyAnimalAdoptionA', {protect_request_pet_data: data});
	};

	// 답글 쓰기 -> 자물쇠버튼 클릭 콜백함수
	const onLockBtnClick = () => {
		setPrivateComment(!privateComment);
		!privateComment ? alert('비밀댓글로 설정되었습니다.') : alert('댓글이 공개설정되었습니다.');
	};

	// 답글 쓰기 -> 이미지버튼 클릭 콜백함수
	const onAddPhoto = () => {
		// navigation.push('SinglePhotoSelect', route.name);
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 1,
			},
			responseObject => {
				console.log('선택됨', responseObject);
				setPhoto(responseObject.assets[responseObject.assets.length - 1].uri);
				setReplyData({...replyData, comment_photo_uri: responseObject.assets[responseObject.assets.length - 1].uri});
			},
		);
	};

	// 답글 쓰기 -> 이미지버튼 클릭 -> 이미지 가져오기 -> X마크 클릭
	const onDeleteImage = () => {
		setPhoto();
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		console.log('답글쓰기 ', text);
		setReplyData({...replyData, comment_contents: text});
	};

	//보호요청 더보기의 Thumnail클릭
	const onClick_ProtectedThumbLabel = (status, user_id, item) => {
		navigation.push('AnimalProtectRequestDetail', item);
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

	const onPressFavoriteTag = (item, index) => {
		console.log('FavoriteTag', index, item);
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

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[animalProtectRequestDetail_style.container]}>
				{/* 임시보호 후보자 협의 중 사진 */}
				<View style={[temp_style.rescueImage]}>
					<RescueImage status={data.protect_request_status || 'adopt'} img_uri={data.protect_animal_photos[0] || DEFAULT_PROFILE} />
				</View>
				<View style={[temp_style.requestProtect_view]}>
					<Text style={[txt.noto24, temp_style.requestProtect, {color: GRAY10}]}>보호요청</Text>
				</View>
				{/* RescueContentTitle */}
				<View style={[temp_style.rescueContentTitle]}>
					<Text style={[txt.noto28b]}>{data.protect_request_content ? data.protect_request_content : ''}</Text>
				</View>
				{/* ShelterSmallLabel */}
				<View style={[temp_style.shelterSmallLabel_view_animalProtectRequestDetail]}>
					<View style={[temp_style.shelterSmallLabel_animalProtectRequestDetail]}>
						<ShelterSmallLabel data={data} />
					</View>
					{/* Buttons */}
					<View style={[temp_style.button_animalProtectRequestDetail]}>
						<View>
							<FavoriteTag48_Filled />
							<Text style={[txt.roboto24, {color: APRI10}]}>{data ? count_to_K(data.user_follow_count) : ''}</Text>
						</View>
						<View style={{marginLeft: 30 * DP}}>
							<Share48_Filled />
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
								{data.protect_animal_species ? data.protect_animal_species : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>품종</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_species_detail ? data.protect_animal_species_detail : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>성별</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_sex && data.protect_animal_sex == 'male' ? '수컷' : '암컷'}
							</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>예상연령</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_estimate_age ? data.protect_animal_estimate_age : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>체중</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_weight ? data.protect_animal_weight : ''}
							</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>중성화</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_neutralization && data.protect_animal_neutralization == 'yes' ? 'O' : 'X'}
							</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>발견장소</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>
								{data.protect_animal_rescue_location ? data.protect_animal_rescue_location : ''}
							</Text>
						</View>
					</View>
				</View>

				{/* RescueText */}
				<View style={[temp_style.rescueText, animalProtectRequestDetail_style.rescueText]}>
					<Text style={[txt.noto24]}>{data.protect_request_content ? data.protect_request_content : ''}</Text>
				</View>

				<>
					<View style={[temp_style.commentList]}>
						{/* CommentList에 필요한 데이터 - CommentObject, WriterObejct(UserObject), FeedObject(FeedObject), LikeCommentObject */}
						{/* 위의 모든 데이터가 CommentList items에 담겨져 있어야 함 */}
						<CommentList items={checkDataLength()} onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={onChildReplyBtnClick} />
					</View>

					{/* 더보기 버튼 - 기본 2개 표출되며, 더보기 누르면 모두 보이도록 함. (hjs - 추후에 5개씩 더 보이게 한다거나 등등의 개수 제어 필요) */}
					<TouchableOpacity onPress={onPressShowMore} style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
						<Text style={[txt.noto24, {color: GRAY10}]}>더보기 </Text>
						<View style={showMore ? {transform: [{rotate: '180deg'}]} : null}>
							<Bracket48 />
						</View>
					</TouchableOpacity>
				</>
				{/* 보호요청 더 보기addMoreRequest */}
				<View style={[temp_style.addMoreRequest_view]}>
					<Text style={[txt.noto24, temp_style.addMoreRequest, {color: GRAY20}]}>보호요청 더보기</Text>
				</View>

				{/* AnimalNeedHelpList */}
				<View style={[accountPicker.accountList]}>
					<AnimalNeedHelpList
						data={dummy_AnimalNeedHelpList_various_status}
						onClickLabel={(status, user_id, item) => onClick_ProtectedThumbLabel(status, user_id, item)}
						onFavoriteTag={onPressFavoriteTag}
					/>
				</View>
				{/* 보호소 계정이 나의 보호요청 게시글을 통해 들어왔을 경우 버튼 출력 X */}
				{route.name == 'ProtectRequestManage' ? (
					<></>
				) : (
					<View style={[animalProtectRequestDetail_style.btnContainer]}>
						<AniButton btnStyle={'border'} btnTitle={'임시보호 신청'} titleFontStyle={30} onPress={onPressProtectRequest} />
						<AniButton btnTitle={'입양 신청'} titleFontStyle={30} onPress={onPressAdoptionRequest} />
					</View>
				)}
			</ScrollView>
			{/* ScrollView 바깥에 둬야 Scroll의 현재 위치에 상관없이 아래에 출력 */}
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
