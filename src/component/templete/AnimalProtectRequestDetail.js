import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, temp_style, animalProtectRequestDetail_style, feedCommentList, accountPicker} from './style_templete';
import RescueImage from '../molecules/RescueImage';
import {ScrollView} from 'react-native-gesture-handler';
import {Lock60_Border, Lock60_Filled, Photo60, Send60} from '../atom/icon';

import {txt} from 'Root/config/textstyle';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import ShelterSmallLabel from '../molecules/ShelterSmallLabel';
import {FavoriteTag46_Filled, FavoriteTag48_Filled, Share48_Filled} from '../atom/icon';
import DP from 'Root/config/dp';
import CommentList from '../organism_ksw/CommentList';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';

export default AnimalProtectRequestDetail = props => {
	const navigation = useNavigation();
	const params = props.route.params;
	console.log(props.route.params);
	//route.params 임시 내역
	// {"adoption_days_remain": 10, "breed": "자연계 환수종", "kind": "고양이", "location": "자운",
	// "registered_date": "2021-06-17", "saved_location": "경기도 강정동", "selected": true, "temp_protection_request": true,
	// "thumbnailData": {"gender": "male", "img_uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU", "status": "missing"}}

	const [editComment, setEditComment] = React.useState(false);
	const [privateComment, setPrivateComment] = React.useState(false);
	const [postPhoto, setPostPhoto] = React.useState(false);
	return (
		<View style={[login_style.wrp_main, animalProtectRequestDetail_style.container]}>
			<ScrollView>
				{/* 임시보호 후보자 협의 중 사진 */}
				<View style={[temp_style.rescueImage]}>
					<RescueImage text={'보호자 협의중'} />
				</View>
				<View style={[temp_style.requestProtect_view]}>
					<Text style={[txt.noto24, temp_style.requestProtect, {color: GRAY10}]}>보호요청</Text>
				</View>

				{/* RescueContentTitle */}
				<View style={[temp_style.rescueContentTitle]}>
					<Text style={[txt.noto28b]}>논두렁에서 구조한 믹스견, 햐얀 솜사탕같은 아기 강아지의 보호자를 찾습니다.</Text>
				</View>

				{/* ShelterSmallLabel */}
				<View style={[temp_style.shelterSmallLabel_view_animalProtectRequestDetail]}>
					{/* RescueContentTitle */}
					<View style={[temp_style.shelterSmallLabel_animalProtectRequestDetail]}>
						{/* <Text>(M)ShelterSmallLabel</Text> */}
						<ShelterSmallLabel />
					</View>
					{/* Buttons */}
					<View style={[temp_style.button_animalProtectRequestDetail]}>
						<View>
							<FavoriteTag48_Filled />
							<Text style={[txt.roboto24, {color: APRI10}]}>1.2k</Text>
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
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>{params.kind}</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>품종</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>{params.breed}</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>성별</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>{params.thumbnailData.gender}</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>예상연령</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>3개월</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>체중</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>2kg</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>중성화</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>X</Text>
						</View>
						<View style={[animalProtectRequestDetail_style.rescueSummary_insideItem]}>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_category]}>발견장소</Text>
							<Text style={[txt.noto24, animalProtectRequestDetail_style.rescueSummary_insideItem_content]}>{params.saved_location}</Text>
						</View>
					</View>
				</View>

				{/* RescueText */}
				<View style={[temp_style.rescueText, animalProtectRequestDetail_style.rescueText]}>
					<Text style={[txt.noto24]}>
						경남 가좌동 인근 논두렁에서 구출한 말티즈 믹스 귀요미예요! 사람 손을 많이 탔는지 순하고 얌전해요. 중성화는 아직 안 되어있고, 1차 접종까지
						되어있는 상태입니다. 이쁜 솜사탕같은 아가 임보나 입양 원하시는 분들은 바로 신청 가능합니다!
					</Text>
				</View>

				{/* comment_count */}
				<View style={[temp_style.comment_count_view]}>
					<Text style={[txt.noto24, temp_style.comment_count, {color: GRAY10}]}>댓글 5</Text>
				</View>

				{/* (O)CommentList */}
				<View style={[temp_style.commentList]}>
					<CommentList onPressReplyBtn={() => setEditComment(!editComment)} />
				</View>

				{/* 보호요청 더 보기addMoreRequest */}
				<View style={[temp_style.addMoreRequest_view]}>
					<Text style={[txt.noto24, temp_style.addMoreRequest, {color: GRAY20}]}>보호요청 더보기</Text>
				</View>

				{/* AccountList */}
				<View style={[accountPicker.accountList]}>
					<AnimalNeedHelpList />
				</View>

				<View style={[animalProtectRequestDetail_style.btnContainer]}>
					<AniButton
						btnLayout={btn_w226}
						btnStyle={'border'}
						btnTitle={'임시보호 신청'}
						titleFontStyle={30}
						onPress={() => navigation.push('ApplyProtectActivityA')}
					/>
					<View style={{width: 62 * DP}} />
					<AniButton
						btnLayout={btn_w226}
						btnStyle={'filled'}
						btnTitle={'입양 신청'}
						titleFontStyle={30}
						onPress={() => navigation.push('ApplyAnimalAdoptionA')}
					/>
				</View>
			</ScrollView>
			{/* 3시간 걸려서 알아낸 것. ScrollView 바깥에 둬야 Scroll의 현재 위치에 상관없이 아래에 출력 */}
			{editComment ? (
				<View style={[animalProtectRequestDetail_style.editComment]}>
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

// AniButton.defaultProps = {
// 	btnTitle: 'title', //버튼의 제목
// 	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
// 	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
// 	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
// 	titleFontStyle: 24 * DP, // titleFontStyle - title의 폰트 크기
// 	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
// 	onPress: e => alert(e), // 버튼을 탭했을때 발생하는 콜백
// };
