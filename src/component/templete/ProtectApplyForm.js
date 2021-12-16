import React from 'react';
import {ScrollView, View} from 'react-native';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, protectApplyForm} from './style_templete';

export default ProtectApplyForm = ({route, navigation}) => {
	console.log('ProtectApplyForm props', route.params);

	React.useEffect(() => {
		// getProtectApplyForm(
		// 	{
		// 		protectionActivityApplicantObject_id: protectionActivityApplicantObject_id,
		// 	},
		// 	data => {
		// 		console.log('ProtectApplyForm : ProtectApplyForm data - ', data);
		// 		setData(data);
		// 	},
		// 	err => {
		// 		console.log('ProtectApplyForm : getProtectApplyForm data - ', err);
		// 	},
		// );
	}, []);

	const getDbFiled = [
		{
			//ProtectionActivityApplicantObject
			protect_act_address: {
				city: String, //시,도,군
				district: String, //구
				neighbor: String, //읍,면,동
				brief: String,
				detail: String,
			}, //보호 신청자의 주소
			protect_act_phone_number, //보호 신청자의 전화번호
			protect_act_companion_history: {
				companion_pet_species: String,
				companion_pet_age: String,
				companion_pet_period: String,
				companion_pet_current_status: Enum('living', 'died', 'adopted'), //상태정보 카테고리 정해야함
			}, //보호 신청자의 반려생활 이력
			protect_act_checklist: {
				is_adult: Boolean, //성인여부
				is_near_veterinary: Boolean, //보호지 근처의 동물병원 여부
				is_agreed_housemate: Boolean, //가족, 동거인의 동의 여부
				is_experience_defecate: Boolean, //배변훈련 지식여부
				is_knowledge_sanitation: Boolean, //반려동물 미용,위생 지식여부
			}, //보호신청 체크리스트
			protect_act_motivation, //보호활동 신청동기

			//ProtectRequestObject
			protect_request_photo_thumbnail, //보호요청 게시물 썸네일 uri
			protect_request_status, //(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), 보호 요청상태
			protect_request_date, //보호요청 게시글 작성일시

			//ShelterProtectAnimalObject
			protect_animal_species, //보호중인 동물의 종류(ex 개, 고양이, 토끼)
			protect_animal_species_detail, //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
			protect_animal_rescue_location, //보호중인 동물의 구조장소

			//UserObject
			shelter_address: {
				//보호소 주소
				city: String, //시,도
				district: String, //군,구
				neighbor: String, //동,읍,면
				brief: String, //검색주소
				detail: String, //검색주소(자세히)
			}, //보호소 주소
		},
	];

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[protectApplyForm.detailContainer]}>
				<AnimalProtectDetail data={route.params} />
			</View>
			<View style={btn_style.btn_w226}></View>
		</View>
	);
};
