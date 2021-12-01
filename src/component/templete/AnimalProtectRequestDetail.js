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
import {
	dummy_AnimalNeedHelpList,
	dummy_AnimalNeedHelpList_various_status,
	dummy_CommentObject,
	dummy_ShelterProtectAnimalObject,
	dummy_user_shelter,
} from 'Root/config/dummyDate_json';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import AsyncStorage from '@react-native-async-storage/async-storage';

//AnimalProtectRequestDetail에서 접근해야하는 데이터 테이블
//  ProtectRequestObject(보호요청 게시글에 대한 데이터)
// 	ShelterProtectAnimalObject(보호요청된 동물에 대한 데이터 ex)중성화 여부, 성별 품종 등
//  CommentObject(댓글쓰기 및 댓글 대댓글에 대한 데이터)
//  FeedObject (댓글 Data Write할 시 comment_feed_id, comment_feed_writer_id가 필요)

//AnimalProtectRequestDetail 호출 경로
// - AnimalNeedHelp Item의 썸네일을 클릭할 경우 호출.
// - AnimalNeedHelp Item의 BorderMode=true 에서 게시글보기를 클릭하였을 경우 호출

export default AnimalProtectRequestDetail = ({route}) => {
	console.log('AnimalProtectRequestDetail', route.params);
	const navigation = useNavigation();
	// 보호소 data는 ShelterSmallLabel에서 사용,  보호동물 Data는 RescueSummary, 임시보호 신청, 입양 신청 등에서 사용됨

	const [data, setData] = React.useState(route.params); // ProtectRequestObject, ShelterProtectAnimalObject 정보가 담겨 있는 상태
	const [editComment, setEditComment] = React.useState(false); // 댓글 쓰기 클릭
	const [privateComment, setPrivateComment] = React.useState(false); // 팝업된 댓글창에서 비밀글 상태
	const [photo, setPhoto] = React.useState(); // PhotoSelect에서 가져온 Photo uri
	const [replyData, setReplyData] = React.useState();
	const [token, setToken] = React.useState();

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res ? setToken(res) : setToken(null);
		});
	}, []);

	React.useEffect(() => {
		// console.log('routeparams', route.params);
		route.params.photo ? setPhoto(route.params.photo) : setData(route.params);
	}, [route.params]);

	React.useEffect(() => {
		console.log('reply', replyData);
	}, [replyData]);

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
		navigation.push('SinglePhotoSelect', route.name);
	};

	// 답글 쓰기 -> 이미지버튼 클릭 -> 이미지 가져오기 -> X마크 클릭
	const onDeleteImage = () => {
		setPhoto();
	};

	// 답글 쓰기 -> Input value 변경 콜백함수
	const onChangeReplyInput = text => {
		console.log(text);
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

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true} contentContainerStyle={[animalProtectRequestDetail_style.container]}>
					<View>
						{/* 임시보호 후보자 협의 중 사진 */}
						<View style={[temp_style.rescueImage]}>
							<RescueImage
								status={data.protect_request_status ? data.protect_request_status : 'adopt'}
								img_uri={data.protect_animal_photos[0] ? data.protect_animal_photos[0] : DEFAULT_PROFILE}
							/>
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

						<View style={[temp_style.commentList]}>
							{/* CommentList에 필요한 데이터 - CommentObject, WriterObejct(UserObject), FeedObject(FeedObject), LikeCommentObject */}
							{/* 위의 모든 데이터가 CommentList items에 담겨져 있어야 함 */}
							<CommentList items={dummy_CommentObject} onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={onChildReplyBtnClick} />
						</View>

						{/* 보호요청 더 보기addMoreRequest */}
						<View style={[temp_style.addMoreRequest_view]}>
							<Text style={[txt.noto24, temp_style.addMoreRequest, {color: GRAY20}]}>보호요청 더보기</Text>
						</View>

						{/* AccountList */}
						<View style={[accountPicker.accountList]}>
							<AnimalNeedHelpList
								data={dummy_AnimalNeedHelpList_various_status}
								onLabelClick={(status, user_id, item) => onClick_ProtectedThumbLabel(status, user_id, item)}
							/>
						</View>
						{/* 보호소 계정이 나의 보호요청 게시글을 통해 들어왔을 경우 버튼 출력 X */}
						{route.name == 'ProtectRequestManage' ? (
							<></>
						) : (
							<View style={[animalProtectRequestDetail_style.btnContainer]}>
								<AniButton btnLayout={btn_w226} btnStyle={'border'} btnTitle={'임시보호 신청'} titleFontStyle={30} onPress={onPressProtectRequest} />
								<View style={{width: 62 * DP}} />
								<AniButton btnLayout={btn_w226} btnTitle={'입양 신청'} titleFontStyle={30} onPress={onPressAdoptionRequest} />
							</View>
						)}
					</View>
				</ScrollView>
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
const d = {
	_id: 2,
	feed_type: 'feed',
	protect_animal_adoption_days_remain: 10,
	protect_animal_adoptor_id: null,
	protect_animal_estimate_age: '6개월',
	protect_animal_neutralization: 'yes',
	protect_animal_photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPMjNlensOfXbaEJkMyyzjNnidrSWRvzXMA&usqp=CAU'],
	protect_animal_protect_request: true,
	protect_animal_protect_request_id: 2,
	protect_animal_protector_discussion_id: null,
	protect_animal_protector_id: null,
	protect_animal_rescue_date: '2021-11-24',
	protect_animal_rescue_location: '자운동',
	protect_animal_sex: 'male',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '러브숏',
	protect_animal_status: 'rescue',
	protect_animal_weight: '1.2',
	protect_animal_writer_id: 21,
	protect_request_date: '2021.11.15',
	shelter_name: '홍단 보호소',
};

const e = {
	_id: 1,
	feed_id: 1,
	feed_type: 'feed',
	feed_writer_id: 21,
	//
	protect_animal_adoption_days_remain: null,
	protect_animal_adoptor_id: 1,
	protect_animal_estimate_age: '6개월',
	protect_animal_id: 11,
	protect_animal_neutralization: 'yes',
	protect_animal_photos: [
		'https://contents.creators.mypetlife.co.kr/content/uploads/2020/10/13134542/20201013131307_365d1baf95782ec7b30225d1fe1616a5_j6xk.jpg',
	],
	protect_animal_protect_request: false,
	protect_animal_protect_request_id: 2,
	protect_animal_protector_discussion_id: null,
	protect_animal_protector_id: 21,
	protect_animal_rescue_date: '2021-11-24',
	protect_animal_rescue_location: '자운동',
	protect_animal_sex: 'male',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '러브숏',
	protect_animal_status: 'adopted',
	protect_animal_weight: '1.2',
	protect_animal_writer_id: 21,
	//
	protect_request_comment_count: null,
	protect_request_content: '밍키의 새 집사가 되어주실수 있으신 분 무한 찾습니다',
	protect_request_date: '2021.11.21',
	protect_request_favorite_count: 21,
	protect_request_hit: 102,
	protect_request_photo_thumbnail: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202006/06/76723291-7f53-4b1a-b058-766f6215d566.jpg',
	protect_request_photos: [
		'https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2',
		'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/h_9JUWqGXTUGB9ZLyetUmpLpUhk.jpg',
	],
	protect_request_status: 'adopt',
	protect_request_title: '밍키의 새 보금자리를 찾아요',
	protect_request_update_date: '2021.11.25',
	protect_request_writer_id: 21,
	//
	shelter_address: {city: '강원도', district: '평창군', neighbor: '용평면'},
	shelter_delegate_contact_number: '010-4442-1325',
	shelter_foundation_date: '2012.05.02',
	shelter_homepage: 'http://google.com',
	shelter_name: '홍단 보호소',
	shelter_type: 'private',
	//
	user_denied: false,
	user_follow_count: 1034545,
	user_follower_count: 555,
	user_introduction: '강원도 평창군 소재의 입양보호소',
	user_profile_uri: 'https://upload.wikimedia.org/wikipedia/en/4/4b/DWG_KIA_logo.png',
	user_type: 'shelter',
	user_upload_count: 123,
};
