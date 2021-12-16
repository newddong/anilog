import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiController} from './apiController';

/**
 * 입양 임시보호 등록
 *
 * @param {object} params
 * @param {object} params.protect_act_type - 신청한 보호 활동의 종류 ( 임시보호 - protect / 입양 - adopt)
 * @param {object} params.protect_act_address - 보호신청자의 주소
 * @param {Array.<object>} params.protect_act_companion_history - 보호 신청자의 반려생활 이력
 * @param {string} params.protect_act_motivation - 보호활동 신청동기
 * @param {Array.<object>} params.protect_act_checklist - 보호 신청자 체크 리스트
 * @param {string} params.protect_act_phone_number - 보호신청자 전화번호
 * @param {number} params.protect_act_applicant_id - 보호 활동 신청자 고유 아이디
 * @param {number} params.protect_act_request_article_id - 동물 보호 게시글 고유 아이디
 * @param {number} params.protect_act_request_shelter_id - 동물보호 게시글 작성한 보호소 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignProtectionActivity = async (params, callback, errcallback) => {
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

/**
 * 유저 라벨 정보 가져오기 [일반적으로 유저닉네임, 프로필uri, intro ]
 * 유저타입에 따른 분류 - 같은 라벨의 호출이라면 타입이 달라도 같은 함수를 사용할 것인가는 차후  논의
 * @param {object} params
 * @param {string} params._id - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getUserLabel = async (params, callback, errcallback) => {
	try {
		console.log('params', params);
		let received = await axios.post(serveruri + '/post/getUserLabelData', {
			_id: params._id,
		});
		const data = received.data;
		console.log(`getUserLabelData data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			alert('getUserLabelData Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

// user/getUserInfoById에 구현
/**
 * UserObject 정보 가져오기 [ params - _id]
 *
 * @param {object} params
 * @param {string} params.userobject_id - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getUserProfile = async (params, callback, errcallback) => {
	console.log('para', params);
	try {
		let result = await axios.post(serveruri + '/user/getUserProfile', {
			userobject_id: params,
		});
		const {msg, status} = result.data;
		console.log('msg', msg);
		if (status === 200) {
			console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getUserProfile Network Error : ' + JSON.stringify(result.data.msg));
		}
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
	} catch (err) {
		console.log('getUser Profile Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};

/**
 * 임시 보호 신청 정보 가져오기 [ params - _id]
 *
 * @param {object} params
 * @param {string} params._id - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getProtect_act_list = async (prarms, callback) => {
	// console.log('para', prarms.user_id);
	try {
		const cookie = Asy;
		let result = await axios.post(serveruri + '/user/getUserProfile', {
			user_id: prarms.user_id,
		});
		const {msg, status} = result.data;
		if (status === 200) {
			// console.log('msg', msg);
			callback(msg);
		} else {
			console.log('getUserProfile Network Error : ' + JSON.stringify(result.data.msg));
		}

		//서버와 통신

		// throw new Error('확인되지 않은 코드');
	} catch (err) {
		console.log('getUser Profile Cde Error :' + JSON.stringify(err)); //에러 처리 콜백
	}
};

//user/userLogout에 구현
/**
 * 임시 로그아웃
 *
 * @param {object} params - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const logoutTemp = async (params, callback, errcallback) => {
	// apiController(serveruri, '/user/userLogout', arguments);

	console.log('para', params);
	try {
		// const cookie = Asy;
		let result = await axios.post(serveruri + '/user/userLogout');
		// console.log('result', result);
		const {msg, status} = result.data;
		if (status === 200) {
			callback(msg);
		} else {
			console.log('logoutTemp Network Error : ' + JSON.stringify(result.data.msg));
		}

		//서버와 통신

		// throw new Error('확인되지 않은 코드');
	} catch (err) {
		console.log('logoutTemp Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
