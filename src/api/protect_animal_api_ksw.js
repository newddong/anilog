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
export const getProtectAnimalList = async (prarms, callback) => {
	console.log('getProtectAnimalList / params', prarms);
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
