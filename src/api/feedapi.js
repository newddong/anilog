import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @typedef Tags
 * @property {string} tag_user_id - 태그된 유저의 아이디
 * @property {number} position_x - 태그의 사진 프레임에서 x좌표
 * @property {number} position_y - 태그의 사진 프레임에서 y좌표
 */

/**
 * @typedef FeedMedias
 * @property {boolean} is_video - 동영상 여부
 * @property {number} duration - 동영상 재생 시간
 * @property {string} media_uri - 미디어의 uri(서버에서 처리)
 * @property {Array.<Tags>} tags - 미디어의 태그 목록
 */

/**
 * 피드 작성
 *
 * @param {object} params
 * @param {string} params.feed_content - 피드 텍스트 내용
 * @param {string} params.feed_location - 피드 작성 지역
 * @param {string} params.feed_avatar_id - 피드의 작성자로 지정하고 싶은 반려동물 ID
 * @param {Array.<string>} params.media_uri - 피드 첨부파일 uri리스트
 * @param {Array.<FeedMedias>} params.feed_medias - 첨부 객체정보 리스트
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function createFeed (params, callback, errcallback){
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};

/**
 * 실종 게시물 작성
 *
 * @param {object} params
 * @param {string} params.feed_content - 게시물 내용
 * @param {string} params.feed_location - 게시물 작성 지역
 * @param {Array.<string>} params.media_uri - 게시물 첨부파일 uri리스트
 * @param {Array.<FeedMedias>} params.feed_medias - 첨부 객체정보 리스트
 * @param {string} params.missing_animal_date - 실종 동물 실종 추정일자
 * @param {Number} params.missing_animal_age - 실종 동물 나이
 * @param {string} params.missing_animal_features - 실종 동물 특징
 * @param {string} params.missing_animal_contact - 실종 동물의 주인 연락처
 * @param {string} params.missing_animal_lost_location - 실종 동물 실종 지점
 * @param {'male'|'female'|'unknown'} params.missing_animal_sex - 실종 동물 성별
 * @param {string} params.missing_animal_species - 실종 동물 종류(개, 고양이, 새)
 * @param {string} params.missing_animal_species_detail - 실종 동물 세부 종류(리트리버,푸들,말티즈)
 *
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function createMissing (params, callback, errcallback){
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};


/**
 * 제보 게시물 작성
 *
 * @param {object} params
 * @param {string} params.feed_content - 제보 게시물 내용
 * @param {string} params.feed_location - 제보 게시물 작성 지역
 * @param {Array.<string>} params.media_uri - 제보 게시물 첨부파일 uri리스트
 * @param {Array.<FeedMedias>} params.feed_medias - 첨부 객체정보 리스트
 * @param {string} report_witness_date - 제보일자
 * @param {string} report_witness_location - 제보장소
 * @param { String} report_animal_species - 제보 동물의 종류(ex 강아지, 고양이, 토끼 등)
 * @param { String} report_animal_species_detail - 제보 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
 * @param { 'male'|'female'|'unknown'} report_animal_sex - 제보 동물의 성별
 * @param { String} report_animal_age - 제보 동물의 나이
 * @param { String} report_animal_contact - 제보자  연락처
 * @param { String} report_animal_features - 제보 동물의 특징
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function createReport (params, callback, errcallback){
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};


/**
 * 특정 유저가 작성한 피드 리스트를 불러온다.
 *
 * @param {object} params
 * @param {string} params.userobject_id - 피드 리스트를 불로오고자 하는 유저의 몽고디비 아이디
 * @param {number} params.request_number - 요청할 리스트의 갯수
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function getFeedListByUserId (params, callback, errcallback){
	try {
		//서버와 통신
		// throw new Error('확인되지 않은 코드');
		setTimeout(callback, 1000, params);
	} catch (err) {
		setTimeout(errcallback, 1000, err + ''); //에러 처리 콜백
	}
};



/**
 * 실종/제보 가져오기
 *
 * @param {string} params.city - 제보지역 (서울,부산,인천 등등)
 * @param {string} params.missing_animal_species - 보호중인 동물의 종류 (개, 고양이, 새 등등)
 * @param {string} params.feedobject_id - 커서 역할을 할 실종/제보 피드오브잭트(페이징 처리)
 * @param {number} params.request_number - 요청할 숫자
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
*/
 export async function getMissingReportList (params, callback){
	try {
		let recieved = await axios.post(serveruri + '/post/getMissingReportList', {
			city: params.city,
			protect_animal_species: params.protect_animal_species,
		});
		const data = recieved.data;
		console.log(`getMissingReportList data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			console.log('getMissingReportList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		console.log('getMissingReportList Code Error : ' + JSON.stringify(err));
	}
};


/**
 * 피드,실종,제보 게시글 상세정보 가져오기
 * 실종글일 경우 제보글 데이터의 report_witness_date, report_witness_location가 null 값인 상태에서 가져오면 됨.
 *
 * @param {string} params.feedobject_id - 피드 ID
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
 export async function getFeedDetailById (params, callback){
	try {
		let recieved = await axios.post(serveruri + '/post/getFeedDetailByFeedId', {
			feedobject_id: params.feedobject_id,
		});
		const data = recieved.data;
		console.log(`getFeedDetailByFeedId data:${data}`);
		if (data.status === 200) {
			callback(data);
		} else {
			alert('getFeedDetailByFeedId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getFeedDetailByFeedId Code Error : ' + JSON.stringify(err));
	}
};







//--이전 버전의 API들 --
export async function getPostList (params, /*data, likedPosts,*/ callback){
	console.log('getPostList');
	try {
		let recieved = await axios.post(serveruri + '/post/getPostList', {number: params.number});
		const {msg, status, likedPost} = recieved.data;
		console.log('getPostList likedPost' + likedPost?.toString());
		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost);
		} else {
			alert('getPostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostList Code Error : ' + JSON.stringify(err));
	}
};

export async function getMorePostList (params, /*data, likedPosts,*/ callback){
	console.log('getMorePostList' + params.post_id);
	try {
		let recieved = await axios.post(serveruri + '/post/getMorePostList', {
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, status, likedPost} = recieved.data;
		console.log('getMorePostList likedPost : ' + likedPost?.toString());

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost);
		} else {
			alert('getMorePostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostList Code Error : ' + JSON.stringify(err));
	}
};

export async function getPostListByUserId (params, /*data, likedPosts,*/ callback){
	try {
		// data.splice(0);
		let recieved = await axios.post(serveruri + '/post/getPostListByUserId', {
			user_id: params.user_id, //수정
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, index, status, likedPost} = recieved.data;
		console.log('getPostListByUserId likedPost: ' + likedPost?.toString());
		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost, index);
		} else {
			alert('getPostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export async function getMorePostListByUserId (params, /* data, likedPosts,*/ callback){
	try {
		let recieved = await axios.post(serveruri + '/post/getMorePostListByUserId', {
			user_id: params.user_id, //수정
			post_id: params.post_id,
			option: params.option,
			number: params.number,
		});

		const {msg, status, length, likedPost} = recieved.data;
		console.log('getMorePostListByUserId likedPost: ' + likedPost?.toString());

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });

			// if (params.option === 'next') {
			// 	msg.map((v_msg,i)=>{
			// 		!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// 	});
			// }
			// if (params.option === 'prev') {
			// 	msg.reverse().map((v_msg,i)=>{
			// 		!data.find((v_data)=>v_data._id==v_msg._id)&&data.unshift(v_msg);
			// 	});
			// }
			callback(msg, likedPost, length);
		} else {
			alert('getMorePostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export async function likePost (params, callback){
	console.log('likePost=>' + params.post_id);
	try {
		let result = await axios.post(serveruri + '/post/likePost', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('likePost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('likePost Code Error : ' + JSON.stringify(err));
	}
};

export async function dislikePost (params, callback){
	console.log('dislikePost=>' + params.post_id);
	try {
		let result = await axios.post(serveruri + '/post/dislikePost', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('dislikePost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('dislikePost Code Error : ' + JSON.stringify(err));
	}
};

export async function createPost (params, callback){
	console.log('createPost=>' + params);
	let form = new FormData();
	form.append('location', params.location);
	form.append('time', params.time);
	params.imageList?.map(v => {
		form.append('imgfile', {
			name: v.uri,
			type: 'image/jpeg',
			uri: v.uri,
		});
	});
	form.append('content', params.content);
	params.imageList?.forEach(v => {
		form.append('images', JSON.stringify(v));
	});

	try {
		await cookieReset(await AsyncStorage.getItem('token'));
		let result = await axios.post(serveruri + '/post/createPost', form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		if (result.data.status === 200) {
			callback(result.data);
		} else {
			alert('createPost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('createPost Code Error : ' + JSON.stringify(err));
	}
};

export async function editPost (params, callback){
	// console.log('editPost=>'+ JSON.stringify(params));
	let form = new FormData();
	form.append('post_id', params.post_id);
	form.append('location', params.location);
	form.append('time', params.time);
	form.append('content', params.content);
	if (Array.isArray(params.images)) {
		params.images.forEach(v => {
			if (v.uri.includes('http')) {
				form.append('httpImages', JSON.stringify(v));
				// form.append('httpImages',v);
			} else {
				form.append('localImages', JSON.stringify(v));
				// form.append('localImages',v);
				form.append('imgfile', {
					name: v.uri,
					type: 'image/jpeg',
					uri: v.uri,
				});
			}
		});
	}
	// params.imageList?.map((v)=>{
	// 	form.append('imgfile',{
	// 		name:v.uri,type:'image/jpeg',uri:v.uri
	// 	})
	// });
	// params.images?.forEach(v => {
	// 	form.append('images',JSON.stringify(v));
	// });
	// console.log(form.getAll('images'));
	try {
		// await cookieReset(await AsyncStorage.getItem('token'));
		let result = await axios.post(serveruri + '/post/editPost', form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('editPost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('editPost Code Error : ' + JSON.stringify(err));
	}
};

//comment api

export async function getCommentList (params, callback){
	console.log('getCommentList');
	try {
		let result = await axios.post(serveruri + '/comment/getCommentList', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.liked);
		} else {
			alert('getCommentList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getCommentList Code Error : ' + JSON.stringify(err));
	}
};

export async function getChildCommentList (params, callback){
	console.log('getChildCommentList');
	try {
		let result = await axios.post(serveruri + '/comment/getChildCommentList', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.liked);
		} else {
			alert('getChildCommentList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getChildCommentList Code Error : ' + JSON.stringify(err));
	}
};

export async function createComment (params, callback){
	console.log('createComment');
	let form = new FormData();
	form.append('post_id', params.post_id);
	form.append('parent_id', params.parent_id);
	form.append('comment', params.comment);
	params.image && form.append('imgfile', {name: params.image, uri: params.image, type: 'image/jpeg'});

	try {
		// await cookieReset(await AsyncStorage.getItem('token'));

		let result = await axios.post(serveruri + '/comment/createComment', form, {headers: {'Content-Type': 'multipart/form-data'}});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.user);
		} else {
			alert('createComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('createComment Code Error : ' + JSON.stringify(err));
	}
};

export async function modifyComment (params, callback){
	console.log('editComment');
	let form = new FormData();
	form.append('comment_id', params.comment_id);
	form.append('comment', params.comment);
	if (params.images) {
		if (params.images.includes('http')) {
			console.log('http');
			form.append('images', params.images);
		} else {
			console.log('file');
			form.append('imgfile', {name: params.images, uri: params.images, type: 'image/jpeg'});
		}
	}

	try {
		// await cookieReset(await AsyncStorage.getItem('token'));

		let result = await axios.post(serveruri + '/comment/editComment', form, {headers: {'Content-Type': 'multipart/form-data'}});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.user);
		} else {
			alert('createComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('createComment Code Error : ' + JSON.stringify(err));
	}
};

export async function deleteComment (params, callback){
	console.log('deleteComment');
	try {
		let result = await axios.post(serveruri + '/comment/deleteComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('deleteComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('deleteComment Code Error : ' + JSON.stringify(err));
	}
};

export async function likeComment (params, callback){
	console.log('likeComment=>' + params.comment_id);
	try {
		let result = await axios.post(serveruri + '/comment/likeComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('likeComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('likeComment Code Error : ' + JSON.stringify(err));
	}
};

export async function dislikeComment (params, callback){
	console.log('dislikeComment=>' + params.comment_id);
	try {
		let result = await axios.post(serveruri + '/comment/dislikeComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('dislikeComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('dislikeComment Code Error : ' + JSON.stringify(err));
	}
};
