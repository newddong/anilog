import React from 'react';
import {ScrollView, View} from 'react-native';
import {getAdoptorInformation} from 'Root/api/protect_act_api_ksw';
import {dummy_AdoptorInformation} from 'Root/config/dummyDate_json';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';

// ShelterMenu - 나의 보호소 출신동물 - 입양처 보기
// 연관 테이블 - PRotectionActivityApplicantObject , ProtectRequestObject, ShelterProtectAnimalObject
export default AdoptorInformation = ({route}) => {
	console.log('AdoptorInformation request', route.params.protect_animal_protect_request_id);
	console.log('AdoptorInformation adoptor', route.params.protect_animal_adoptor_id);
	// AnimalNeedHelp와 관련된 데이터는 이미 AnimalFromShelter에서 수령하였기에 route.params로 넘겨받고 재사용 가능
	// 하지만 ProtectionActivityApplicantObject 데이터는 새로 가져와야 함
	// route.params 안에 있는 protect_animal_adoptor_id, protect_animal_protect_request_id를 토대로 아래 조건에 맞춰 조회
	// protect_act_applicant_id == protect_animal_adoptor_id
	// protect_act_request_article_id == protect_animal_protect_request_id
	// 조건을 만족하는 Row Data에 최신화 [ 기존 route.params에 새로 받아오는 데이터를 merge 시키는 방식? AnimalNeedHelp 자료는 재활용이 가능하기 때문 ]

	const [data, setData] = React.useState(dummy_AdoptorInformation);

	React.useEffect(() => {
		const adoptor_params = {
			request_id: route.params.protect_animal_protect_request_id,
			adoptor_id: route.params.protect_animal_adoptor_id,
		};
		getAdoptorInformation(
			adoptor_params,
			successed => {
				console.log('successed / getAdoprotInfor', successed);
				//successed 에 담겨있는 테이블 및 컬럼 정보
				// 	 ProtectionActivityApplicantObject(입양 신청 뷰 출력을 위한 데이터)
				//          [ _id, protect_act_type(아마 모두 adopt 상태), protect_act_address, protect_act_phone_number, protect_act_companion_history
				//           protect_act_checklist, protect_act_motivation,    ]
				//   ShelterPRotectAnimalObject(AnimalNeedHelp 뷰 출력을 위한 데이터)
				//          [ , protect_animal_rescue_location,protect_animal_species ,protect_animal_species_detail, protect_animal_belonged_shelter_id ,
				//   		 protect_animal_sex, protect_animal_status , protect_animal_protect_request, protect_animal_adoptor_id  ]
				//   ProtectRequestObject(AnimalNeehHelp 뷰 출력을 위한 데이터)
				//    	 	[	 protect_request_photo_thumbnail,  protect_request_status(썸네일 하단 입양, 임시보호, 완료 관련 메시지), protect_request_date(등록일), ]
				//   UserObject(shelter) [ AnimalNeedHelp 뷰 출력을 위한 데이터]
				//   	 	[ shelter_name(보호장소) ]
				// setData(successed)
			},
			err => {
				console.log('err / getAdoptorInfo', err);
			},
		);
	}, []);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.animalProtectDetails_adoptorInformation, baseInfo_style.list]}>
					<AnimalProtectDetail data={data} />
				</View>
			</ScrollView>
		</View>
	);
};
