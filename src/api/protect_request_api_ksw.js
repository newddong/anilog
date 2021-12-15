import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 보호소의 보호요청 게시글 등록
 * 연관 템플릿 - WriteAidRequest / SendHeader(함수는 헤더에 존재)
 * 연관 테이블 - ProtectRequestObject
 * @param {object} params
 * @param {Array.<string>} params.protect_request_photos - 신청한 보호 활동의 종류 ( 임시보호 - protect / 입양 - adopt)
 * @param {string} params.protect_request_photo_thumbnail - 보호신청자의 주소
 * @param {string} params.protect_animal_id - 보호 신청자의 반려생활 이력
 * @param {string} params.protect_request_title - 보호활동 신청동기
 * @param {string} params.protect_request_content - 보호 신청자 체크 리스트
 * @param {string} params.protect_request_writer_id - 보호신청자 전화번호
 * @param {number} params.protect_request_hit - 보호 활동 신청자 고유 아이디
 * @param {number} params.protect_request_favorite_count - 동물 보호 게시글 고유 아이디
 * @param {'rescue'|'adopt'|'protect'|'rainbowbridge'|'discuss'} params.protect_request_status - 동물보호 게시글 작성한 보호소 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignAidRequest = async (params, callback, errcallback) => {
	try {
		let form = new FormData();
		form.append('protect_request_photos', params.protect_request_photos);
		form.append('protect_request_photo_thumbnail', params.protect_request_photo_thumbnail);
		form.append('protect_animal_id', params.protect_animal_id);
		form.append('protect_request_title', params.protect_request_title);
		form.append('protect_request_content', params.protect_request_content);
		form.append('protect_request_hit', params.protect_request_hit);
		form.append('protect_request_favorite_count', params.protect_request_favorite_count);
		form.append('protect_request_status', params.protect_request_status);
		let token = await AsyncStorage.getItem('token');
		form.append('protect_request_writer_id', token);

		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

/**
 * 보호소가 올린 보호요청 게시글 리스트 조회 [ AidRequestList 출력용 ]
 * 연관 템플릿 - AidRequestAnimalList(ShelterMenu => 게시글 작성 버튼 클릭 )
 * 연관 테이블 - ShelterProtectAnimalObject,  ProtectRequestObject, ProtectionActivityApplicantObject
 * 필요 컬럼 디테일 -
 * ShelterPRotectAnimalObject
 *       [  protect_animal_rescue_location,protect_animal_species ,protect_animal_species_detail,
 * 		 protect_animal_sex, protect_animal_protect_request_id  ]
 * ProtectRequestObject
 *  	 [ protect_request_photo_thumbnail]
 * ProtectionActivityApplicantObject
 * 		 [ 컬럼이 필요하다기 보다는 해당 보호요청 게시글에 대해서 보호 및 입양 신청을 한 지원자의 숫자를 알아야 함. AidRequest 컴포넌트 우상단의 숫자에 넣을 데이터.]
 * @param {object} params - token아이디(보호소 계정)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterAidRequestList = async (params, callback) => {
	console.log('getShelterAidRequestList / params', params);
	try {
		let result = await axios.post(serveruri + '/user/getShelterAidRequestList', {
			shelter_id: params,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getShelterAidRequestList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getShelterAidRequestList Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};

/**
 * 보호소가 올린 보호요청 게시글 중 입양, 보호 신청서가 들어온 목록만을 조회 [ AidRequestList 출력용 ]
 * 연관 템플릿 - AidRequestManage(경로 : ShelterMenu => 신청서 조회)
 * 연관 테이블 - ShelterProtectAnimalObject,  ProtectRequestObject, ProtectionActivityApplicantObject
 * 필요 컬럼 디테일 -
 * ShelterPRotectAnimalObject
 *       [  protect_animal_rescue_location,protect_animal_species ,protect_animal_species_detail,
 * 		 protect_animal_sex, protect_animal_protect_request_id  ]
 * ProtectRequestObject
 *  	 [ protect_request_photo_thumbnail]
 * ProtectionActivityApplicantObject
 * 		 [ 컬럼이 필요하다기 보다는 해당 보호요청 게시글에 대해서 보호 및 입양 신청을 한 지원자의 숫자를 알아야 함. AidRequest 컴포넌트 우상단의 숫자에 넣을 데이터.]
 * @param {object} params - token아이디(보호소 계정)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getRequestAnimalListApplied = async (params, callback) => {
	console.log('getRequestAnimalListApplied / params', params);
	try {
		let result = await axios.post(serveruri + '/user/getRequestAnimalListApplied', {
			shelter_id: params,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getRequestAnimalListApplied Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getRequestAnimalListApplied Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
