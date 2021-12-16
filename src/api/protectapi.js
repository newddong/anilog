import axios from 'axios';
import {serveruri, cookieReset} from 'Root/config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiController, apiFormController} from './apiController';

/**
 * 유저의 보호동물(프로필에서 보여지는) 목록 조회
 *
 * @param {object} params - token아이디
 * @param {string} params.userobject_id - 보호동물을 조회하고 싶은 유저의 오브젝트 아이디.
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function getUserProtectAnimalList(params, callback, errcallback){
	apiController( '/protect/getUserProtectAnimalList', arguments);
};
