import axios from 'axios';
import {serveruri, cookieReset} from 'Root/config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const getUserObject = async (params, callback, errcallback) => {
// 	try {
// 		//서버와 통신
// 		// throw new Error('확인되지 않은 코드');
// 		console.log('pa', params);
// 		setTimeout(callback, 1000, params);
// 	} catch (err) {
// 		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
// 	}
// };

/**
 * UserObject 정보 가져오기 [ params - _id]
 *
 * @param {object} params
 * @param {string} params.userobject_id - 유저 고유 아이디
 * @param {({}:object)=>void} callback - API응답처리 콜백
 */
export const getUserProfile = async (params, callback) => {
	console.log('para', params.userobject_id);
	// console.log('pa, calback', params.user_id);
	// console.log('getUserProfile =>' + params.user_id);
	try {
		let result = await axios.post(serveruri + '/user/getUserProfile', {
			userobject_id: params.userobject_id,
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

export const updateUserInformation = async (params, callback) => {
	console.log('=========updatUserInfo-----', params);
	try {
		let result = await axios.post(serveruri + '/user/updateUserInformation', {
			userobject_id: params.userobject_id,
			user_nickname: params.user_nickname,
			user_profile_uri: params.user_profile_uri,
		});
		const {msg, status} = result.data;

		if (status === 200) {
			console.log('success ProfileChange');
			console.log('return message', msg);
			callback(msg);
		} else {
			console.log('updateUserInfo Network Error : ' + JSON.stringify(msg));
		}
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
	} catch (err) {
		console.log('updateUserInfo Network Cde Error :' + JSON.stringify(err)); //에러 처리 콜백
	}
};
export const changeUserPassword = async params => {
	console.log('changePassword', params);
	let result = await axios.post(serveruri + '/user/changeUserPassord', {
		user_password: params.user_password,
		new_user_password: params.new_user_password,
	});
	const {msg, status} = result.data;
	if (status === 200) {
		console.log(msg);
	} else {
		console.log('changeUserPassword Network Error :' + JSON.stringify(msg));
	}
};

// export const nicknameDuplicationCheck = async (params, callback) => {
// 	console.log('nicknameDuplicationCheck', params);
// 	let result = await axios.post(serveruri + '/user/nicknameDuplicationCheck', {
// 		user_nickname: params,
// 	});
// 	const {msg, status} = result.data;
// 	if (status === 200) {
// 		console.log('nicknameDup msg', msg);
// 		callback(!msg);
// 		return msg;
// 	} else {
// 		console.log('nicknameDuplicationCheck Network Error :' + JSON.stringify(msg));
// 	}
// };

export async function nicknameDuplicationCheck(params, callback, errcallback) {
	apiController( '/user/nicknameDuplicationCheck', arguments);
}