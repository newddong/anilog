import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 봉사활동 신청
 * 관련 템플릿 - ApplyVolunteer
 * @param {object} params
 * @param {string} params.volunteer_target_shelter - 봉사활동 대상 보호소 고유 아이디
 * @param {Array.<string>} params.volunteer_wish_date - 봉사활동 희망 날짜 목록
 * @param {Array.<object>} params.volunteer_accompany - 봉사활동 희망자 목록
 * @param {string} params.volunteer_delegate_contact - 봉사활동 대표자 번호
 * @param {string} params.volunteer_status - 봉사활동 대표자 번호
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignVolunteer = async (params, callback, errcallback) => {
	try {
		let form = new FormData();
		form.append('volunteer_target_shelter', params.volunteer_target_shelter);
		form.append('volunteer_wish_date', params.volunteer_wish_date);
		form.append('volunteer_accompany', params.volunteer_accompany);
		form.append('volunteer_delegate_contact', params.volunteer_delegate_contact);
		form.append('volunteer_status', params.volunteer_status);
		// console.log('form', form);

		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

/**
 * 유저 봉사활동 신청 리스트 가져오기 [ 관련 테이블 - VolunteerActivityApplicantObject, UserObject(대상 보호소들의 이미지라벨 및 이름 출력을 위한 접근)]
 * 관련 템플릿 - ManageVolunteer
 * [ 활동 예정 중인 신청 / 이미 완료된 신청 ] 구분에 대한 논의 필요
 * @param {object} params
 * @param {string} params._id - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getUserVolunteerItemList = async (params, callback, errcallback) => {
	try {
		// console.log('params / getUserVolunteerItemList', params);
		let received = await axios.post(serveruri + '/post/getUserVolunteerItemList', {
			_id: params._id,
		});
		const data = received.data;
		setTimeout(callback, 1000, params);

		// console.log(`getUserVolunteerItemList data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			// console.log('getUserVolunteerItemList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		// console.log('getUserVolunteerItemList Profile Cde Error :' + JSON.stringify(err)); //에러 처리 콜백
	}
};
/**
 * 유저 봉사활동 신청 디테일 가져오기 [ 관련 테이블 - VolunteerActivityApplicantObject, UserObeject(대상 보호소), UserObject(참여인원 정보) ]
 * 관련 템플릿 - ApplicationFormVolunteer
 * @param {object} params
 * @param {string} params._id - 봉사활동 신청 오브젝트 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getVolunteerItemDetail = async (params, callback, errcallback) => {
	try {
		// console.log('params / Volunteer Item Detail', params);
		// volunteer_target_shelter);
		// volunteer_wish_date);
		// volunteer_accompany);
		// volunteer_delegate_contact);
		// volunteer_status);
		let result = await axios.post(serveruri + '/post/getVolunteerItemDetail', {
			volunteer_id: params._id,
		});
		console.log('result ', result);
		if (result.data.status === 200) {
			callback(result.data.msg);
			setTimeout(callback, 1000, params);
		} else {
			alert('getVolunteerItemDetail Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getVolunteerItemDetail Profile Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};

/**
 * 유저 봉사활동 신청 취소 [ 관련 테이블 - VolunteerActivityApplicantObject, ]
 * 관련 템플릿 - ApplicationFormVolunteer
 * @param {object} params
 * @param {string} params._id - 봉사활동 신청 오브젝트 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const cancelVolunteer = async (params, callback, errcallback) => {
	try {
		console.log('params / cancelVolunteer', params);
		let result = await axios.post(serveruri + '/post/cancelVolunteer', {
			volunteer_id: params._id,
		});
		setTimeout(callback, 1000, result);
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			console.log('cancelVolunteer Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('cancelVolunteer Profile Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};

/**
 * 보호소의 봉사활동 신청 승인 [ 관련 테이블 - VolunteerActivityApplicantObject, ]
 * 관련 템플릿 - ApplicationFormVolunteer
 * @param {object} params
 * @param {string} params._id - 봉사활동 신청 오브젝트 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const acceptVolunteer = async (params, callback, errcallback) => {
	try {
		console.log('params / acceptVolunteer', params);
		let form = new FormData();
		form.append('volunteer_target_shelter', params.volunteer_target_shelter);
		form.append('volunteer_status', 'accept');
		setTimeout(callback, 1000, params);
		let result = await axios.post(serveruri + '/volunteer/acceptVolunteer', form, {headers: {'Content-Type': 'multipart/form-data'}});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.user);
		} else {
			alert('acceptVolunteer Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('acceptVolunteer Profile Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
