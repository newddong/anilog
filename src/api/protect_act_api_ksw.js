import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 보호소 출신 보호동물의 입양처 정보 보기
 * 연관 템플릿 - AdoptorInoformation(ShelterMenu => 나의 보호소 출신 동물 => 입양처 보기)
 * 연관 테이블 - ProtectionActivityApplicantObject, ShelterProtectAnimalObject, ProtectRequestObject, UserObject(shelter)
 * 받아올 컬럼 디테일 -
 * ProtectionActivityApplicantObject(입양 신청 뷰 출력을 위한 데이터)
 *       [ _id, protect_act_type(아마 모두 adopt 상태), protect_act_address, protect_act_phone_number, protect_act_companion_history
 *         protect_act_checklist, protect_act_motivation,    ]
 * @param {object} params -
 * @param {string} params.protect_animal_adoptor_id - 입양처의 유저 아이디
 * @param {string} params.protect_animal_protect_request_id - 보호요청 게시글 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getAdoptorInformation = async (params, callback) => {
	console.log('getAdoptorInformation / API params', params);
	//입양자 Id(protect_animal_adoptor_id) , 보호게시글 Id(protect_animal_protect_request_id)를 토대로
	//일치하는 ProtectionActivityApplicantObject를 탐색
	try {
		let result = await axios.post(serveruri + '/user/getShelterProtectAnimalList', {
			adoptor_id: params.protect_animal_adoptor_id,
			request_id: params.protect_animal_protect_request_id,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getAdoptorInformation Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getAdoptorInformation Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
