import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 보호소 등록
 *
 * @param {object} params
 * @param {object} params.protect_act_type - 신청한 보호 활동의 종류 ( 임시보호 - protect / 입양 - adopt)
 * @param {string} params.protect_act_address - 보호신청자의 주소
 * @param {string} params.protect_act_companion_history - 보호 신청자의 반려생활 이력
 * @param {string} params.protect_act_motivation - 보호활동 신청동기
 * @param {string} params.protect_act_checklist - 보호 신청자 체크 리스트
 * @param {string} params.protect_act_phone_number - 보호신청자 전화번호
 * @param {number} params.protect_act_applicant_id - 보호 활동 신청자 고유 아이디
 * @param {number} params.protect_act_request_article_id - 동물 보호 게시글 고유 아이디
 * @param {number} params.protect_act_request_shelter_id - 동물보호 게시글 작성한 보호소 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignAdoption = async (params, callback, errcallback) => {
	try {
		//현재 params에 누락된 부분 :
		//  protect_act_applicant_id(임시보호 및 입양자 고유 아이디) ,
		// protect_act_Request_article_id(동물보호 게시글),
		// protect_act_request_shelter_id (동물보호 게시글 작성한 보호소 아이디)
		let form = new FormData();
		form.append('protect_act_type', params.protect_act_type);
		form.append('protect_act_address', params.protect_act_address);
		form.append('protect_act_companion_history', params.protect_act_companion_history);
		form.append('protect_act_motivation', params.protect_act_motivation);
		form.append('protect_act_checklist', params.protect_act_checklist);
		form.append('protect_act_phone_number', params.protect_act_phone_number);
		form.append('protect_act_applicant_id', params.protect_act_applicant_id);
		form.append('protect_act_request_article_id', params.protect_act_request_article_id);
		form.append('protect_act_request_shelter_id', params.protect_act_request_shelter_id);
		let token = await AsyncStorage.getItem('token');
		form.append('protect_act_applicant_id', token);
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

const e = {
	protect_act_address: {brief: '서울특별시 마포구 서교동', city: '서울특별시 마포구', detail: 'D1', district: '서교동 ', neighbor: '독막로9길 38'},
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{companion_pet_age: '5세 이하', companion_pet_current_status: 'adopted', companion_pet_period: '15년 이하', companion_pet_species: '고양이'},
	],
	protect_act_motivation: '채무 ㅕ ㅔㅣㅋ ㅇㅇ',
	protect_act_phone_number: '01096450422',
	protect_act_type: 'adopt',
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
	protect_request_comment_count: null,
	protect_request_content: '밍키의 새 집사가 되어주실수 있으신 분 무한 찾습니다',
	protect_request_date: '2021.11.21',
	protect_request_favorite_count: 21,
	protect_request_hit: 102,
	protect_request_id: 1,
	protect_request_pet_data: null,
	protect_request_photo_thumbnail: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202006/06/76723291-7f53-4b1a-b058-766f6215d566.jpg',
	protect_request_photos: [
		'https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2',
		'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/h_9JUWqGXTUGB9ZLyetUmpLpUhk.jpg',
	],
	protect_request_status: 'adopt',
	protect_request_title: '밍키의 새 보금자리를 찾아요',
	protect_request_update_date: '2021.11.25',
	protect_request_writer_id: 21,
	shelter_address: {city: '강원도', district: '평창군', neighbor: '용평면'},
	shelter_delegate_contact_number: '010-4442-1325',
	shelter_foundation_date: '2012.05.02',
	shelter_homepage: 'http://google.com',
	shelter_name: '홍단 보호소',
	shelter_type: 'private',
	user_denied: false,
	user_follow_count: 1034545,
	user_follower_count: 555,
	user_introduction: '강원도 평창군 소재의 입양보호소',
	user_profile_uri: 'https://upload.wikimedia.org/wikipedia/en/4/4b/DWG_KIA_logo.png',
	user_type: 'shelter',
	user_upload_count: 123,
};
