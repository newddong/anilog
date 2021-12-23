import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
import {ActivityIndicator} from 'react-native';

//AnimalProtectRequestDetail 호출 경로
// - ProtectRequestList(보호활동탭) , AnimalFromShelter(게시글보기) , Profile(보호활동)

export default AnimalProtectRequestDetail = ({route}) => {
	console.log('AnimalProtectRequestDetail', route.params);
	const navigation = useNavigation();
	// 보호소 data는 ShelterSmallLabel에서 사용,  보호동물 Data는 RescueSummary, 임시보호 신청, 입양 신청 등에서 사용됨
	const data = route.params ? route.params.item : dummy_AnimalNeedHelpList_various_status; // ProtectRequestObject, ShelterProtectAnimalObject 정보가 담겨 있는 상태
	const [writersAnotherRequests, setWritersAnotherRequests] = React.useState(route.params.list ? route.params.list : []);
	const [loading, setLoading] = React.useState(true); //로딩상태
	const [editComment, setEditComment] = React.useState(false); // 댓글 쓰기 클릭
	const [privateComment, setPrivateComment] = React.useState(false); // 팝업된 댓글창에서 비밀글 상태
	const [photo, setPhoto] = React.useState(); // PhotoSelect에서 가져온 Photo uri
	const [replyData, setReplyData] = React.useState();
	const [showMore, setShowMore] = React.useState(false); //더보기 클릭 State

	const [token, setToken] = React.useState();

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res ? setToken(res) : setToken(null);
		});
	}, []);

	React.useEffect(() => {
		//현재 보고 있는 보호요청게시글의 작성자(보호소)의 모든 보호요청게시글이 담겨 있는 writersAnotherRequests
		//그러나 현재 보고 있는 보호요청게시글은 해당 리스트에 출력이 되어서는 안됨 => Filter처리
		const filteredList = writersAnotherRequests.filter(e => e._id != data._id);
		setWritersAnotherRequests(filteredList);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
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
				<ActivityIndicator size={'large'}></ActivityIndicator>
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
				{/* ShelterSmallLabel */}
				<View style={[temp_style.shelterSmallLabel_view_animalProtectRequestDetail]}>
					<View style={[temp_style.shelterSmallLabel_animalProtectRequestDetail]}>
						<ShelterSmallLabel data={data.protect_request_writer_id} />
					</View>
					{/* Buttons */}
					<View style={[temp_style.button_animalProtectRequestDetail]}>
						<View>
							<FavoriteTag48_Filled />
							<Text style={[txt.roboto24, {color: APRI10, alignSelf: 'center'}]}>
								{data ? count_to_K(data.protect_request_writer_id.user_follow_count) : ''}
							</Text>
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
					<CommentList items={checkDataLength()} onPressReplyBtn={onReplyBtnClick} onPress_ChildComment_ReplyBtn={onChildReplyBtnClick} />
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
				{route.name == 'ProtectRequestManage' ? (
					<></>
				) : (
					<View style={[animalProtectRequestDetail_style.btnContainer]}>
						<AniButton onPress={onPressProtectRequest} btnTitle={'임시보호 신청'} tnStyle={'border'} titleFontStyle={30} />
						<AniButton onPress={onPressAdoptionRequest} btnTitle={'입양 신청'} titleFontStyle={30} />
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

const e = {
	item: {
		__v: 0,
		_id: '61c4b4ff9e313cfaf3ebd25f',
		protect_animal_id: {
			__v: 0,
			_id: '61c2b5537be07611b0094ebf',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '2개월',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c4b4ff9e313cfaf3ebd25f',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2021-12-08T00:00:00.000Z',
			protect_animal_rescue_location: '하남시 검단산 형유포라 인근',
			protect_animal_sex: 'male',
			protect_animal_species: '기타',
			protect_animal_species_detail: '도마뱀',
			protect_animal_status: 'rescue',
			protect_animal_weight: 1,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '도마뱀',
		protect_request_comment_count: 0,
		protect_request_content:
			'도마뱀은 키우기 굉장히 쉬운편에 속합니다. 냄새도 생각보다 안나는 편이고 먹는 것도 잡식성이라 여러모로 호환성이랍니다 ㅎㅎ',
		protect_request_date: '2021-12-23T17:42:23.462Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150355540_FF507DC1-8B34-429A-941C-0C4913305857.jpg'],
		protect_request_status: 'rescue',
		protect_request_title: '도마뱀 키워볼까 분 있으실까요',
		protect_request_update_date: '2021-12-23T17:42:23.462Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '01096450001',
			shelter_foundation_date: '2011-12-04T00:00:00.000Z',
			shelter_homepage: '',
			shelter_name: '상우 보호소6',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'lanad01@naver.com',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction:
				'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: '상우 보호소5',
			user_nickname: '가하즈보호소',
			user_password: '121212',
			user_phone_number: '01096450001',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
			user_register_date: '2021-12-20T06:34:01.773Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	},
	list: [
		{
			__v: 0,
			_id: '61c188ba2aaa7e1134cef1e2',
			protect_animal_id: [Object],
			protect_animal_species: '기타',
			protect_animal_species_detail: '치와와',
			protect_request_comment_count: 0,
			protect_request_content: '함께 상처를 치료할 동반자를 구합니다. ',
			protect_request_date: '2021-12-21T07:56:42.286Z',
			protect_request_favorite_count: 0,
			protect_request_hit: 0,
			protect_request_photos_uri: [Array],
			protect_request_status: 'rescue',
			protect_request_title: '아직 사람을 그리워하는 것 같습니다.',
			protect_request_update_date: '2021-12-21T07:56:42.286Z',
			protect_request_writer_id: [Object],
		},
		{
			__v: 0,
			_id: '61c4b4ff9e313cfaf3ebd25f',
			protect_animal_id: [Object],
			protect_animal_species: '기타',
			protect_animal_species_detail: '도마뱀',
			protect_request_comment_count: 0,
			protect_request_content:
				'도마뱀은 키우기 굉장히 쉬운편에 속합니다. 냄새도 생각보다 안나는 편이고 먹는 것도 잡식성이라 여러모로 호환성이랍니다 ㅎㅎ',
			protect_request_date: '2021-12-23T17:42:23.462Z',
			protect_request_favorite_count: 0,
			protect_request_hit: 0,
			protect_request_photos_uri: [Array],
			protect_request_status: 'rescue',
			protect_request_title: '도마뱀 키워볼까 분 있으실까요',
			protect_request_update_date: '2021-12-23T17:42:23.462Z',
			protect_request_writer_id: [Object],
		},
	],
};
