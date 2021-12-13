import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 실종 및 제보글 가져오기 (실종과 제보글은 같은 함수써도 무방 할 듯.)
 * 실종글일 경우 제보글 데이터의 report_witness_date, report_witness_location가 null 값인 상태에서 가져오면 됨.
 *
 * @param {string} params._id - 피드 ID
 */
export const getPostListByFeedId = async (params, callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getPostListByFeedId', {
			_id: params._id,
		});
		const data = recieved.data;
		console.log(`getPostListByFeedId data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			alert('getPostListByFeedId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostListByFeedId Code Error : ' + JSON.stringify(err));
	}
};