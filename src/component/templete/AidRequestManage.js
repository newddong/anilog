import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style, temp_style, baseInfo_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {dummy_requestAnimalListApplied} from 'Root/config/dummyDate_json';
import {getRequestAnimalListApplied} from 'Root/api/protect_request_api_ksw';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';

//ShelterMenu => 신청서 조회 [Nav명 - ProtectApplyList]
//ShelterMenu => 보호중인 동물 [Nav명 - ShelterProtectAnimalList]
export default AidRequestManage = ({route, navigation}) => {
	const token = route.params.token;
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		if (route.params.nav == 'ShelterProtectAnimalList') {
			//token(id)를 토대로 보호소 계정이 등록한 보호동물 리스트 조회
			// console.log('ShelterProtectAnimalList Nav');
			getShelterProtectAnimalList(
				{
					shelter_protect_animal_object_id: null,
					request_number: 2,
				},
				successed => {
					console.log('successed / getShelterAnimalList', successed.msg);
					setData(successed.msg);
				},
				err => {
					console.log('err / getShelterAnimalList', err);
				},
			);
		} else {
			//token(id)를 토대로 보호소 계정이 등록한 보호요청 게시글 중 신청서가 들어와 있는 목록을 조회

			getRequestAnimalListApplied(
				token,
				successed => {
					console.log('successed / getShelterAnimalList', successed);
				},
				err => {
					console.log('err / getShelterAnimalList', err);
				},
			);
		}
	}, []);
	//선택 시 이동
	const onSelect = index => {
		// console.log('dummy Index', dummy_AidRequestAnimalList[index]);
		navigation.push('ProtectApplicant', data[index]);
	};

	const addProtectAnimal = () => {
		navigation.push('AssignProtectAnimalImage');
		// navigation.push('WriteAidRequest');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
					<AidRequestList items={data} onPressAddProtectAnimal={addProtectAnimal} onSelect={onSelect} nvName={route.name} selectBorderMode={false} />
				</View>
			</ScrollView>
		</View>
	);
};

const sus = [
	{
		_id: '61b9ec3c185a4f69d5981adb',
		protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639574588100_%EC%BA%A1%EC%B2%98.JPG'],
		protect_animal_rescue_date: '2021-11-15T00:00:00.000Z',
		protect_animal_rescue_location: '강원도 평창군청',
		protect_animal_species: '고양이',
		protect_animal_species_detail: '러시안블루',
		protect_animal_sex: 'female',
		protect_animal_neutralization: 'yes',
		protect_animal_estimate_age: '3년',
		protect_animal_weight: 1.2,
		protect_animal_status: 'rescue',
		protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
		protect_animal_protector_discussion_id: [],
		__v: 0,
	},
	{
		_id: '61ba0dfa4772b1e1d3f2ebaa',
		protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639583226124_%EC%BA%A1%EC%B2%98.JPG'],
		protect_animal_rescue_date: '2021-11-07T00:00:00.000Z',
		protect_animal_rescue_location: '성수동',
		protect_animal_species: '고양이',
		protect_animal_species_detail: '미딕',
		protect_animal_sex: 'male',
		protect_animal_neutralization: 'yes',
		protect_animal_estimate_age: '3개월',
		protect_animal_weight: 1.5,
		protect_animal_status: 'rescue',
		protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
		protect_animal_protector_discussion_id: [],
	},
];

const dummy = {
	//@UserObject
	shelter_name: '홍단 보호소',

	//@ProtectRequestObject
	protect_request_date: '2021.11.30',

	//@ShelterProtectAnimalObject
	_id: 1,
	protect_animal_photos: ['https://storage.cobak.co/uploads/1588405371328060_143f1eabc3.jpg'], //보호중인 동물 사진
	protect_animal_rescue_date: '2021.11.23', //보호중인 동물의 구조일자(보호소가 동물을 맡은 일자)
	protect_animal_rescue_location: '바른치킨 서강대역점 주변', //보호중인 동물의 구조장소
	protect_animal_species: '고양이', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
	protect_animal_species_detail: '러시안블루', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
	protect_animal_sex: 'female', // Enum('male','female','unknown'), //보호중인 동물의 성별
	protect_animal_neutralization: 'yes', //Enum('yes','no','unknown'), //중성화 여부
	protect_animal_estimate_age: '6개월', //보호중인 동물의 추정 연령
	protect_animal_weight: 1.2, //몸무게
	protect_animal_status: 'protect', //Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
	protect_animal_protect_request: false,
	protect_animal_adoption_days_remain: 10,
	protect_animal_writer_id: 21, //보호요청을 작성한 작성자(보호소)
	protect_animal_protect_request_id: 1, //보호요청 게시물
	protect_animal_adoptor_id: null, //입양자
	protect_animal_protector_id: null, //임시보호자
	protect_animal_protector_discussion_id: null, //입양, 임시보호 협의중인 유저

	//@ProtectionActivityApllicantObject -
	protect_act_applicant_id: [1, 2, 3], // 해당 보호동물에 대한 보호활동신청을 함 지원자들의 id list
	protect_act_address: {
		city: '서울시',
		district: '마포구',
		neighbor: '신수동',
	},
	protect_act_companion_history: [
		{
			companion_pet_species: '개',
			companion_pet_age: '3년 이상',
			companion_pet_period: '6개월',
			companion_pet_current_status: 'living', //Enum('living', 'died', 'adopted'), //상태정보 카테고리 정해야함
		},
	], //보호 신청자의 반려생활 이력
	protect_act_checklist: {
		is_adult: true, //성인여부
		is_near_veterinary: true, //보호지 근처의 동물병원 여부
		is_agreed_housemate: true, //가족, 동거인의 동의 여부
		is_experience_defecate: true, //배변훈련 지식여부
		is_knowledge_sanitation: true, //반려동물 미용,위생 지식여부
	}, //보호신청 체크리스트
	protect_act_phone_number: '010-7780-6690',
	protect_act_motivation: '키우던 개의 가족을 만들어주고 싶습니다.', //보호활동 신청동기
};
