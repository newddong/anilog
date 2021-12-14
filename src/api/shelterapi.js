import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';


/**
 * 보호소가 보호중인 동물을 등록한다.
 * 
 * @param {object} params
 * @param {Array.<string>} params.protect_animal_photo_uri_list - 보호중인 동물의 사진 로컬 경로 목록
 * @param {string} params.protect_animal_rescue_date - 보호중인 동물의 구조날자
 * @param {string} params.protect_animal_rescue_location - 보호중인 동물의 구조장소
 * @param {string} params.protect_animal_species - 보호중인 동물의 종류(ex 개, 고양이, 토끼)
 * @param {string} params.protect_animal_species_detail - 보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
 * @param {'yes'|'no'|'unknown'} params.protect_animal_neutralization - { 'yes'|'no'|'unknown'} 중성화 여부
 * @param {'male'|'female'|'unknown'} params.protect_animal_sex - 보호중인 동물의 성별
 * @param {string} params.protect_animal_estimate_age - 보호중인 동물의 예상 연령
 * @param {number} params.protect_animal_weight - 보호중인 동물의 몸무게
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const assignShelterAnimal = async (params, callback, errcallback) => {
	try {
		//서버와 통신
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};


/**
 * 동물보호 요청 게시물을 작성한다.
 * 
 * @param {object} params
 * @param {Array.<String>} protect_request_photos - 보호요청 게시물의 첨부사진 uri
 * @param {String} shelter_protect_animal_object_id - 보호요청할 동물 ID
 * @param {String} protect_request_title - 보호요청 게시물의 제목
 * @param {String} protect_request_content - 보호요청 게시물 내용 
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const createProtectRequest = async (params, callback, errcallback) => {
	try {
		//서버와 통신
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};