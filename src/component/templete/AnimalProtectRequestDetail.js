import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, accountPicker, temp_style, animalProtectRequestDetail_style} from './style_templete';
import RescueImage from '../molecules/RescueImage';
import {ScrollView} from 'react-native-gesture-handler';
import {txt} from 'Root/config/textstyle';

export default AnimalProtectRequestDetail = props => {
	const navigation = useNavigation();

	return (
		<View style={[login_style.wrp_main, animalProtectRequestDetail_style.container]}>
			<View style={[temp_style.rescueContentScroll_view]}>
				<ScrollView>
					{/* 임시보호 후보자 협의 중 사진 */}
					<View style={[temp_style.rescueImage]}>
						<RescueImage text={'보호자 협의중'} />
					</View>
					<View style={[temp_style.requestProtect_view]}>
						<Text style={[txt.noto24, temp_style.requestProtect]}>보호요청</Text>
					</View>

					{/* RescueContentTitle */}
					<View style={[temp_style.rescueContentTitle]}>
						<Text>RescueContentTitle</Text>
					</View>

					{/* ShelterSmallLabel */}
					<View style={[temp_style.shelterSmallLabel_view_animalProtectRequestDetail]}>
						{/* RescueContentTitle */}
						<View style={[temp_style.shelterSmallLabel_animalProtectRequestDetail]}>
							<Text>(M)ShelterSmallLabel</Text>
						</View>
						{/* Buttons */}
						<View style={[temp_style.button_animalProtectRequestDetail]}>
							<Text>(M)Buttons</Text>
						</View>
					</View>

					{/* RescueSummary */}
					<View style={[temp_style.rescueSummary, animalProtectRequestDetail_style.rescueSummary]}>
						<Text>RescueSummary</Text>
					</View>

					{/* RescueText */}
					<View style={[temp_style.rescueText, animalProtectRequestDetail_style.rescueText]}>
						<Text>RescueText</Text>
					</View>

					{/* comment_count */}
					<View style={[temp_style.comment_count_view]}>
						<Text style={[txt.noto24, temp_style.comment_count]}>댓글 5</Text>
					</View>

					{/* (O)CommentList */}
					<View style={[temp_style.commentList]}>
						<Text>(O)CommentList</Text>
					</View>

					{/* WriteComment */}
					<View style={[temp_style.writeComment]}>
						<Text>writeComment</Text>
					</View>

					{/* 보호요청 더 보기addMoreRequest */}
					<View style={[temp_style.addMoreRequest_view]}>
						<Text style={[txt.noto24, temp_style.addMoreRequest]}>보호요청 더보기</Text>
					</View>

					<View style={[temp_style.floatingBtnAapply, animalProtectRequestDetail_style.floatingBtnAapply]}>
						<AniButton
							btnLayout={btn_w226}
							btnStyle={'border'}
							btnTitle={'임시보호 신청'}
							titleFontStyle={30}
							onPress={() => navigation.push('ApplyProtectActivityA')}
						/>
						<AniButton
							btnLayout={btn_w226}
							btnStyle={'filled'}
							btnTitle={'입양 신청'}
							titleFontStyle={30}
							onPress={() => navigation.push('ApplyAnimalAdoptionA')}
						/>
					</View>

					{/* AccountList */}
					{/* <View style={[accountPicker.accountList]}>
						<Text>(O)AnimalNeedHelpList</Text>
						<View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 800 * DP}}>
							<AniButton
								btnLayout={btn_w226}
								btnStyle={'border'}
								btnTitle={'임시보호 신청'}
								titleFontStyle={30}
								onPress={() => navigation.push('ApplyProtectActivityA')}
							/>
							<AniButton
								btnLayout={btn_w226}
								btnStyle={'filled'}
								btnTitle={'입양 신청'}
								titleFontStyle={30}
								onPress={() => navigation.push('ApplyAnimalAdoptionA')}
							/>
						</View>
					</View> */}
				</ScrollView>
			</View>
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
