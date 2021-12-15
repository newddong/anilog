import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {assignProtectionActivity} from 'Root/api/userapi_ksw';
import {CONFIRM_ADOPT_REQUEST, CONFIRM_FINALIZED, CONFIRM_PROTECT_REQUEST} from 'Root/i18n/msg';
import {btn_w226} from '../atom/btn/btn_style';
import {styles} from '../atom/image/imageStyle';
import Modal from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {applyDetails, btn_style, login_style, temp_style} from './style_templete';
import {CommonActions} from '@react-navigation/native';
import {getApplyAdoptionTempProtectDetail} from 'Root/api/appliesapi_hjs';

export default ApplyDetails = ({route, navigation}) => {
	const [data, setData] = React.useState({...route.params});

	// 임보 및 입양 신청 관련 Data, 대상 동물 Data(protect_request_pet_data),
	React.useEffect(() => {
		route.params != null ? setData(route.params) : null;
	}, [route.params]);

	React.useEffect(() => {
		// console.log('data details', data);
		// Modal.close()
	}, [data]);

	//입양신청 및 임시보호 신청 내역 상세 데이터 불러오기
	// React.useEffect(() => {
	// 	console.log('- ApplyDetails - ');
	// 	getApplyAdoptionTempProtectDetail(
	// 		{
	// 			userobject_id: props.route.params.userobject_id,
	// 			protect_act_type: props.route.params.protect_act_type,
	// 		},
	// 		data => {
	// 			console.log('data' + JSON.stringify(`data${data}`));
	// 			setData(data);
	// 		},
	// 	);
	// }, [props.route.params]);

	// //ProtectionActivityApplicantObject
	// city : '',  //시,도,군
	// district  : '', //구
	// neighbor  : '', //읍,면,동
	// brief  : '', //보호장소
	// detail   : '', //보호장소
	// protect_act_phone_number : String,  //보호 신청자의 전화번호

	// protect_act_companion_history : Array<{
	// 	companion_pet_species : String,
	// 	companion_pet_age : String,
	// 	companion_pet_period : String,
	// 	companion_pet_current_status : Enum('living','died','adopted') //상태정보 카테고리 정해야함
	// 	}>, //보호 신청자의 반려생활 이력

	// protect_act_checklist : {
	// 	is_adult : Boolean, //성인여부
	// 	is_near_veterinary : Boolean, //보호지 근처의 동물병원 여부
	// 	is_agreed_housemate : Boolean, //가족, 동거인의 동의 여부
	// 	is_experience_defecate : Boolean, //배변훈련 지식여부
	// 	is_knowledge_sanitation : Boolean, //반려동물 미용,위생 지식여부
	// 	}, //보호신청 체크리스트

	// protect_act_motivation //보호활동 신청 동기

	// //ProtectRequestObject
	// protect_request_photo_thumbnail: '',//보호요청 게시물 썸네일 uri
	// protect_request_status : '', //상태 [입양가능(rescue),협의중(discuss),안락사 임박(nearrainbow), 완료(complete), 사망(rainbowbridge)]
	// protect_request_date //보호요청 게시글 작성일시

	//ShelterProtectAnimalObject
	// protect_animal_rescue_location : '', //보호중인 동물의 구조장소
	// protect_animal_species : '', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
	// protect_animal_species_detail : '', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
	// protect_animal_sex : '', //보호중인 동물의 성별

	// bookmark: false,

	//모달창에서 최종 확인을 클릭
	const onFinalize = () => {
		//현재 데이터에 누락된 부분 :
		//  protect_act_applicant_id ,
		// protect_act_Request_article_id(동물보호 게시글),
		// protect_act_request_shelter_id (동물보호 게시글 작성한 보호소 아이디)
		Modal.close();

		assignProtectionActivity(
			data,
			successed => {
				console.log('successed', successed._id);
				Modal.close();
				Modal.popOneBtn(CONFIRM_FINALIZED, '확 인', () => {
					//다음단계로
					Modal.close();
					navigation.navigate('MainTab');
				});
			},
			error => {
				console.log('error', error);
				Modal.close();
				Modal.popOneBtn(error, '확인', () => {
					//에러, 대기
					Modal.close();
				});
			},
		);
	};

	//등록버튼 클릭
	const onPressRegister = () => {
		const isProtectRoute = route.name == 'ApplyProtectActivityE'; //임시보호 루트로 왔는지 여부 확인 - 아닐 경우 입양 루트
		Modal.popTwoBtn(isProtectRoute ? CONFIRM_PROTECT_REQUEST : CONFIRM_ADOPT_REQUEST, '취소', '확인', () => Modal.close(), onFinalize);
	};

	return (
		<View style={[login_style.wrp_main, applyDetails.container]}>
			<ScrollView>
				<View style={[temp_style.animalProtectDetails, applyDetails.animalProtectDetails]}>
					<AnimalProtectDetail data={data} />
				</View>
				<View style={[applyDetails.btnContainer]}>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						<AniButton btnStyle={'border'} btnLayout={btn_w226} btnTitle={'뒤로'} onPress={() => navigation.goBack()} />
					</View>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						{/* ApplyProtectActivityE 혹은 ApplyAnimalAdoptionE ==> 입양이나 임시보호 신청의 마지막 단계이므로 '신청'버튼이 필요 */}
						{/* ApplyAdoptionDetails 혹은 ApplyTempProtectDetails ==> 유저가 신청한 입양이나 임시보호의 Detail을 보기만하는 것이므로 '신청'버튼 불필요 */}
						{route.name == 'ApplyAdoptionDetails' || route.name == 'ApplyTempProtectDetails' ? null : (
							<AniButton btnLayout={btn_w226} btnTitle={'신청'} onPress={onPressRegister} />
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
