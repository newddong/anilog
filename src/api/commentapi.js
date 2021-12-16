import axios from 'axios';
import {serveruri, cookieReset} from 'Root/config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 댓글과 대댓글 작성
 *
 * @param {object} params
 * @param {string} params.comment_photo_uri - 댓글 첨부 이미지 uri
 * @param {string} params.comment_contents - 댓글 내용
 * @param {string} params.commentobject_id - 대댓글이 달린 댓글의 ID
 * @param {string} params.feedobject_id - 댓글이 작성된 피드 게시물
 * @param {string} params.protect_request_object_id - 댓글이 작성된 동물보호 요청 게시물
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


/**
 * 피드(피드,실종,제보)댓글 리스트 불러오기
 *
 * @param {object} params
 * @param {string} params.feedobject_id - 댓글을 불러올 피드 게시물의 ID
 * @param {number} params.request_number - 댓글의 요청 숫자
 * @param {string} params.commentobject_id - 커서 역할을 할 코맨트(해당 ID의 코맨트 이전부터 불러옴)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const getCommentListByFeedId = async (params, callback, errcallback) => {
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

/**
 * 동물보호요청게시글 댓글 리스트 불러오기
 *
 * @param {object} params
 * @param {string} params.protect_request_object_id - 댓글을 불러올 동물보호요청 게시물의 ID
 * @param {number} params.request_number - 댓글의 요청 숫자
 * @param {string} params.commentobject_id - 커서 역할을 할 코맨트(해당 ID의 코맨트 이전부터 불러옴)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export const getCommentListByProtectId = async (params, callback, errcallback) => {
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};