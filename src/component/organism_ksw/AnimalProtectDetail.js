import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeIcon} from 'Asset/image';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {GRAY10, APRI10} from 'Root/config/color';
import {dummy_adoptorInfo} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {House48, Phone48, Paw48_APRI10, Check48, TextBalloon48, Person48} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalProtectDetail} from './style_organism';

//AnimalProtectDetail에서 처리해야할 데이터는 크게 두가지 -
//  1 - ApplyCompanion ABCDE 과정을 걸쳐 작성한 임보, 입양 신청 관련 Data
//  2 - 페이지 최상단에 나오는 AnimalNeedHelpList Item과 관련된 임보 및 입양 대상 동물에 대한 Data [ 참조 : ShelterProtectAnimalObject ]
// AnimalProtectDetail 호출하는 템플릿 - AdoptorInformation(data), ApplyDetails(data)

export default AnimalProtectDetail = props => {
	console.log(' AnimalProtectDetail', props.data);

	const [data, setData] = React.useState(props.data);

	React.useEffect(() => {
		setData(props.data);
	}, [props.data]);

	const getStatusText = arg => {
		switch (arg) {
			case 'living':
				return '함께 살고 있어요.';
			case 'died':
				return '무지개 다리를 건넜어요';
			case 'adopt':
				return '다른 친구에게 입양되었어요.';
		}
	};

	return (
		<ScrollView>
			<View style={[animalProtectDetail.container]}>
				<View style={[animalProtectDetail.animalNeedHelp_container]}>
					<AnimalNeedHelp data={data} />
				</View>
				<View style={[animalProtectDetail.details_container]}>
					{/* 보호장소 */}
					{
						//입양신청을 통해서 들어왔을 경우 입양자 계정에 대한 View를 보여줌
						data.protect_act_type == 'adopted' ? (
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
						) : null
					}

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
							<Text style={[txt.noto24]}>
								{data ? data.protect_act_address.city : ''} {data ? data.protect_act_address.district : ''}{' '}
								{data ? data.protect_act_address.neighbor : ''}
							</Text>
						</View>
					</View>
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
							<Text style={[txt.noto24]}>{data.protect_act_phone_number}</Text>
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
						{data.protect_act_companion_history.map((v, i) => {
							return (
								<View style={[animalProtectDetail.detail_content]} key={i}>
									<Text style={[txt.noto24]}>
										{i + 1}. {v.companion_pet_species} / 나이 : {v.companion_pet_age} / 반려생활 : {v.companion_pet_period}
									</Text>
									<Text style={[txt.noto24, {color: APRI10, paddingLeft: 10}]}>{getStatusText(v.companion_pet_current_status)}</Text>
								</View>
							);
						})}
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
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_adult ? APRI10 : GRAY10}]}>- 성인 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_near_veterinary ? APRI10 : GRAY10}]}>- 주거지 근처 동물병원 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_agreed_housemate ? APRI10 : GRAY10}]}>- 동거인 동의 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_experience_defecate ? APRI10 : GRAY10}]}>- 배변 훈련 지식 확인</Text>
							<Text style={[txt.noto24, {color: data.protect_act_checklist.is_knowledge_sanitation ? APRI10 : GRAY10}]}>
								- 반려동물 청결 지식 확인
							</Text>
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
							<Text style={[txt.noto24]}>{data.protect_act_motivation}</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

AnimalProtectDetail.defaultProps = {};
