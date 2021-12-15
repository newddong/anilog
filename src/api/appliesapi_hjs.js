import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 신청내역 가져오기 (입양신청, 임시보호 신청, 봉사활동 신청 - 한 화면에서 입양신청 1개, 임시보호 신청 1개, 봉사활동 신청 3 ~ 4개 표출)
 *
 * @param {string} params.userobject_id - 사용자 계정 id
 */
export const getAppliesRecord = async (params, callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getAppliesRecord', {
			userobject_id: params.userobject_id,
		});
		const data = recieved.data;
		console.log(`getAppliesRecord data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getAppliesRecord Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getAppliesRecord Code Error : ' + JSON.stringify(err));
	}
};

/**
 * 입양신청 및 임시보호 신청 리스트 데이터 불러오기 (입양신청, 임시보호 신청을 하나의 함수로 사용)
 *
 * @param {string} params.userobject_id - 사용자 계정 id
 * @param {string} params.protect_act_type - 신청 타입
 */
export const getApplyAdoptionTempProtectList = async (params, callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getApplyAdoptionTempProtectList', {
			userobject_id: params.userobject_id,
			protect_act_type: params.protect_act_type,
		});
		const data = recieved.data;
		console.log(`getApplyAdoptionTempProtectList data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getApplyAdoptionTempProtectList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getApplyAdoptionTempProtectList Code Error : ' + JSON.stringify(err));
	}
};

/**
 * 신청내역 상세정보 가져오기 (입양신청, 임시보호 신청을 하나의 함수로 사용)
 *
 * @param {string} params.userobject_id - 사용자 계정 id
 * @param {string} params.protect_act_type - 신청 타입
 */
export const getApplyAdoptionTempProtectDetail = async (params, callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getApplyAdoptionTempProtectDetail', {
			userobject_id: params.userobject_id,
			protect_act_type: params.protect_act_type,
		});
		const data = recieved.data;
		console.log(`getApplyAdoptionTempProtectDetail data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getApplyAdoptionTempProtectDetail Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getApplyAdoptionTempProtectDetail Code Error : ' + JSON.stringify(err));
	}
};
