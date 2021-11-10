import {HomeIcon} from 'Asset/image';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {GRAY10, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {House48, Phone48, Paw48_APRI10, Check48, TextBalloon48, Person48} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalProtectDetail} from './style_organism';

export default AnimalProtectDetail = props => {
	const testData = {
		kind: '개',
		breed: '시고르자브종',
		temp_protection_request: true,
		adoption_days_remain: 10,
		like: false,
		registered_date: '2021-06-17',
		location: '닮은사람',
		saved_location: '합정동',
		thumbnailData: {
			img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
			gender: 'female',
			status: 'adopted',
		},
	};

	const dummy_adoptorInfo = {
		user_id: 'Tei_0409',
		user_nickname: '닮은 테이',
		img_uri: 'http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_1165_011.043.jpg',
		text_intro: '철권형아, 버거집사장',
	};

	return (
		<ScrollView>
			<View style={[animalProtectDetail.container]}>
				<View style={[animalProtectDetail.animalNeedHelp_container]}>
					<AnimalNeedHelp data={testData} />
				</View>
				<View style={[animalProtectDetail.details_container]}>
					{/* 보호장소 */}
					{testData.thumbnailData.status == 'adopted' ? (
						<View style={[animalProtectDetail.detail]}>
							<View style={{flexDirection: 'row'}}>
								<View style={[animalProtectDetail.detail_icon48]}>
									<Person48 />
								</View>
								<View style={[animalProtectDetail.detail_title]}>
									<Text style={[txt.noto24b, {color: GRAY10}]}>입양자 계정</Text>
								</View>
							</View>
							<View style={[animalProtectDetail.detail_content]}>
								<UserDescriptionLabel data={dummy_adoptorInfo} />
							</View>
						</View>
					) : (
						<View style={[animalProtectDetail.detail]}>
							<View style={{flexDirection: 'row'}}>
								<View style={[animalProtectDetail.detail_icon48]}>
									<House48 />
								</View>
								<View style={[animalProtectDetail.detail_title]}>
									<Text style={[txt.noto24b, {color: GRAY10}]}>보호장소</Text>
								</View>
							</View>
							<View style={[animalProtectDetail.detail_content]}>
								<Text style={[txt.noto24]}>{props.data.location}</Text>
							</View>
						</View>
					)}

					{/* 연락처 */}
					<View style={[animalProtectDetail.detail]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[animalProtectDetail.detail_icon48]}>
								<Phone48 />
							</View>
							<View style={[animalProtectDetail.detail_title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>연락처</Text>
							</View>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24]}>{props.data.contactNumber}</Text>
						</View>
					</View>
					{/* 반려 동물 생활 */}
					<View style={[animalProtectDetail.detail]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[animalProtectDetail.detail_icon48]}>
								<Paw48_APRI10 />
							</View>
							<View style={[animalProtectDetail.detail_title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>반려 동물 생활</Text>
							</View>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24]}> 1. 개 / 나이 : 15살 이상 / 반려생활 : 15년 이상</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>무지개다리를 건넜어요</Text>
							<Text style={[txt.noto24]}> 1. 개 / 나이 : 15살 이상 / 반려생활 : 15년 이상</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>무지개다리를 건넜어요</Text>
						</View>
					</View>
					{/* 체크 포인트  */}
					<View style={[animalProtectDetail.detail]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[animalProtectDetail.detail_icon48]}>
								<Check48 />
							</View>
							<View style={[animalProtectDetail.detail_title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>체크 포인트</Text>
							</View>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24, {color: APRI10}]}>- 성인 확인</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>- 주거지 근처 동물병원 확인</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>- 동거인 동의 확인</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>- 배변 훈련 지식 확인</Text>
							<Text style={[txt.noto24, {color: APRI10}]}>- 반려동물 청결 지식 확인</Text>
						</View>
					</View>
					{/* 신청 동기  */}
					<View style={[animalProtectDetail.detail]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[animalProtectDetail.detail_icon48]}>
								<TextBalloon48 />
							</View>
							<View style={[animalProtectDetail.detail_title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>신청 동기</Text>
							</View>
						</View>
						<View style={[animalProtectDetail.detail_content]}>
							<Text style={[txt.noto24]}>
								안녕하세요! 저는 중학생때 부터 키웠던 댕댕이 한 마리를 떠나보내고, 지금은 고양이 한 마리를 모시고 있는 집사입니다. 한 달 뒤에 조금 더
								큰 집으로 이사 할 계획이라 우리 레미 동생 만들어 주고 싶어서 신청하게 되었습니다.
							</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

AnimalProtectDetail.defaultProps = {
	data: {
		location: '서울 마포구 서강 1로 21 래미안 301동 1105호',
		contactNumber: '010-9645-0422',
	},
};

// AnimalNeedHelp.defaultProps = {
// 	data: {
// 		kind: '개',
// 		breed: '시고르자브종',
// 		temp_protection_request: true,
// 		adoption_days_remain: 10,
// 		like: false,
// 		registered_date: '2021-06-17',
// 		location: '자운',
// 		saved_location: '경기도 강정동',
// 		thumbnailData: {
// 			img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
// 			gender: 'female',
// 			status: 'protected',
// 		},
// 	},
// };

// UserDescriptionLabel.defaultProps = {
// 	data: {
// 		user_id: 'user_id',
// 		user_nickname: 'user_nickname',
// 		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		text_intro: 'Description',
// 	},
// 	onLabelClick : e => console.log(e)
// };
