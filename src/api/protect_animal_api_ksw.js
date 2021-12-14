import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 입양 임시보호 등록
 *
 * @param {object} params - token아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getProtectAnimalList = async (params, callback) => {
	console.log('getProtectAnimalList / params', params);
	try {
		let result = await axios.post(serveruri + '/user/getProtectAnimalList', {
			protectAnimalObject_id: params,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getProtectAnimalList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getProtectAnimalList Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};

/**
 * 보호소의 보호중인 동물 리스트 조회
 * 연관 템플릿 - ShelterPRotectRequest(ShelterMenu => 보호요청 게시글 메뉴 )
 * 연관 테이블 - ShelterProtectAnimalObject, ProtectRequestObject,
 * 필요 컬럼 디테일 -
 * ShelterPRotectAnimalObject
 *       [ _id, protect_animal_rescue_location,protect_animal_species ,protect_animal_species_detail,
 * 		 protect_animal_sex, protect_animal_status , protect_animal_protect_request, protect_animal_protect_request_id  ]
 * ProtectRequestObject
 *  	 [ protect_request_photo_thumbnail,  protect_request_status]
 * @param {object} params - token아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterProtectAnimalList = async (params, callback) => {
	console.log('getShelterProtectAnimalList / params', params);
	try {
		let result = await axios.post(serveruri + '/user/getShelterProtectAnimalList', {
			shelter_id: params,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getShelterProtectAnimalList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getShelterProtectAnimalList Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
