import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 신청내역 가져오기 (입양신청, 임시보호 신청, 봉사활동 신청)
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
