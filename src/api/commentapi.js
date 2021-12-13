import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 댓글과 대댓글 작성
 *
 * @param {object} params
 * @param {string} params.comment_photo_uri - 댓글 첨부 이미지 uri
 * @param {string} params.comment_contents - 댓글 내용
 * @param {string} params.comment_parent - 대댓글이 달린 댓글의 ID
 * @param {string} params.comment_feed_id - 댓글이 작성된 피드 게시물
 * @param {string} params.comment_protect_request_id - 댓글이 작성된 동물보호 요청 게시물
 * @param {Boolean} params.comment_is_secure - true일때는 writer와 댓글이 달린 게시글 작성자만 볼수있음
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const createComment = async (params, callback, errcallback) => {
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};