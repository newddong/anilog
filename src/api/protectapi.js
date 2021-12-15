import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';



/**
 * 유저의 보호동물(프로필에서 보여지는) 목록 조회
 *
 * @param {object} params - token아이디
 * @param {string} params.userobject_id - 보호동물을 조회하고 싶은 유저의 오브젝트 아이디.
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const getUserProtectAnimalList = async (params, callback) => {
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