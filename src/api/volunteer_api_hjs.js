import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 보호소 봉사활동 신청서 리스트 가져오기 (최근 신청서, 지난 신청서)
 * @param {object} params
 * @param {string} params.userobject_id - 보호소 _id
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterVolunteerList = async (params, callback, errcallback) => {
	try {
		// console.log('params / getUserVolunteerItemList', params);
		let received = await axios.post(serveruri + '/shelter/getShelterVolunteerList', {
			userobject_id: params.userobject_id,
		});
		const data = received.data;
		console.log(`getShelterVolunteerList data:${data}`);

		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getShelterVolunteerList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getShelterVolunteerList Profile Cde Error :' + JSON.stringify(err)); //에러 처리 콜백
	}
};

/**
 * 보호소 봉사활동 신청서 폼 가져오기 (봉사활동 희망 날짜, 참여인원 리스트, 봉사활동자 연락처(대표자))
 * @param {object} params
 * @param {string} params.userobject_id - 보호소 _id
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterApplicationFormVolunteer = async (params, callback, errcallback) => {
	try {
		let result = await axios.post(serveruri + '/shelter/getShelterApplicationFormVolunteer', {
			userobject_id: params.userobject_id,
		});
		console.log('result ', result);
		if (result.data.status === 200) {
			callback(result.data.msg);
			setTimeout(callback, 1000, params);
		} else {
			alert('getShelterApplicationFormVolunteer Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		console.log('getShelterApplicationFormVolunteer Profile Cde Error :' + JSON.stringify(err.message)); //에러 처리 콜백
	}
};
