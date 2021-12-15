import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * MY에서 보호소 기본 정보 불러오기.
 *
 * @param {string} params.userobject_id - 보호소 _id
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterMenu = async (params, callback, errcallback) => {
	try {
		let recieved = await axios.post(serveruri + '/shelter/getShelterMenu', {
			userobject_id: params.userobject_id,
		});
		const data = recieved.data;
		console.log(`getShelterMenu data:${data}`);

		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getShelterMenu Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getShelterMenu Code Error : ' + JSON.stringify(err));
	}
};

/**
 * 보호소 프로필 정보 불러오기.
 *
 * @param {string} params.userobject_id - 보호소 _id
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterProfile = async (params, callback, errcallback) => {
	try {
		let recieved = await axios.post(serveruri + '/shelter/getShelterProfile', {
			userobject_id: params.userobject_id,
		});
		const data = recieved.data;
		console.log(`getShelterProfile data:${data}`);

		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getShelterProfile Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getShelterProfile Code Error : ' + JSON.stringify(err));
	}
};

/**
 * 보호소 프로필 수정하기 위한 정보 불러오기.
 *
 * @param {string} params.userobject_id - 보호소 _id
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const getShelterProfileEdit = async (params, callback, errcallback) => {
	try {
		let recieved = await axios.post(serveruri + '/shelter/getShelterProfileEdit', {
			userobject_id: params.userobject_id,
		});
		const data = recieved.data;
		console.log(`getShelterProfileEdit data:${data}`);

		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getShelterProfileEdit Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getShelterProfileEdit Code Error : ' + JSON.stringify(err));
	}
};

/**
 * 보호소 프로필 수정
 *
 * @param {string} params.userobject_id - 보호소 _id
 * @param {string} params.shelter_name - 보호소 명
 * @param {object} params.shelter_address
 * @param {string} params.shelter_address.city - 사용자 주소(시,도,군)
 * @param {string} params.shelter_address.district - 사용자 주소(군,구)
 * @param {string} params.shelter_address.neighbor - 사용자 주소(동,읍,면)
 * @param {string} params.shelter_address.brief - 검색주소
 * @param {string} params.shelter_address.detail - 검색주소(자세히)
 * @param {string} params.shelter_delegate_contact_number -  보호소 대표 전화번호, 휴대폰 번호
 * @param {string} params.user_email - 이메일
 * @param {string} params.shelter_homepage - 보호소 홈페이지 uri
 * @param {string} params.shelter_foundation_date - 보호소 설립일
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const updateShelterProfileEdit = async (params, callback, errcallback) => {
	try {
		let recieved = await axios.post(serveruri + '/shelter/getShelterProfileEdit', {
			userobject_id: params.userobject_id,
		});
		const data = recieved.data;
		console.log(`getShelterProfileEdit data:${data}`);

		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getShelterProfileEdit Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getShelterProfileEdit Code Error : ' + JSON.stringify(err));
	}
};
