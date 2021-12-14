import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 보호요청 가져오기
 *
 * @param {string} params.city - 보존지역 (서울,부산,인천 등등)
 * @param {string} params.protect_animal_species - 보호중이 동물의 종류 (개, 고양이, 새 등등)
 * @param {Boolean} params.adoptable_posts - //입양 가능한 게시글만 보기
 */
export const getProtectRequestList = async (params, callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getProtectRequestList', {
			city: params.city,
			protect_animal_species: params.protect_animal_species,
			adoptable_posts: params.adoptable_posts,
		});
		const data = recieved.data;
		console.log(`getProtectRequestList data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getProtectRequestList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getProtectRequestList Code Error : ' + JSON.stringify(err));
	}
};
