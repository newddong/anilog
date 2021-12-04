import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 유저를 등록하는 함수
 * @param {object} params
 * @param {object} params.user_agreement
 * @param {boolean} params.user_agreement.is_over_fourteen - (동의)14살 이상
 * @param {boolean} params.user_agreement.is_service - (동의)서비스 동의
 * @param {boolean} params.user_agreement.is_personal_info - (동의)개인정보제공
 * @param {boolean} params.user_agreement.is_location_service_info - (동의)위치정보제공
 * @param {boolean} params.user_agreement.is_donation_info - (동의)기부정보
 * @param {boolean} params.user_agreement.is_marketting_info - (동의)마케팅정보
 * @param {string} params.user_mobile_company - 이동통신사
 * @param {string} params.user_name - 유저 이름(실명)
 * @param {string} params.user_password - 유저 패스워드
 * @param {string} params.user_phone_number - 유저 핸드폰 번호
 * @param {boolean} params.user_is_verified_phone_number - 핸드폰 인증여부
 * @param {function} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignUser = async (params, callback, errcallback) => {
	try{
		//서버와 통신
		setTimeout(callback,1000,params);
	}
	catch(err){
		errcallback(err+''); //에러 처리 콜백
	}
}


/**
 * 유저가 등록중인 임시보호/입양할 동물이 있는지 체크
 * 있으면 해당 동물의 정보를 콜백의 오브젝트로 반환
 * @param {object} params
 * @param {string} params.user_id - 검색에 사용할 유저 ID(몽고디비 오브젝트 아이디)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const checkProtectPet = async (params, callback, errcallback) => {
	try{
		//서버와 통신
		setTimeout(callback,1000,params);
	}
	catch(err){
		errcallback(err+''); //에러 처리 콜백
	}

}

/**
 * 반려동물등록
 * 등록 결과를 콜백으로 반환
 * 
 * @param {object} params
 * @param {object} params.user_id - 등록하고 있는 유저 ID(몽고디비 오브젝트 아이디)
 * @param {string} params.pet_birthday - 동물 생일
 * @param {boolean} params.pet_is_temp_protection - 임시보호 여부
 * @param {string} params.pet_neutralization - 중성화 여부
 * @param {string} params.pet_sex - 성별
 * @param {string} params.
 * @param {string} params.
 * @param {string} params.
 * @param {string} params.
 * 
 * 
 * 
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export const assignPet = async (params, callback, errcallback) => {
	try{
		//서버와 통신
		setTimeout(callback,1000,params);
	}
	catch(err){
		errcallback(err+''); //에러 처리 콜백
	}

}





//--이전 버전의 API들 --

export const getUserList = async (params, callback) => {
	console.log('getUserList');
	try {
		let recieved = await axios.post(serveruri + '/user/getUserList', {nickname: params.nickname});
		const {msg, status} = recieved.data;

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg);
		} else {
			alert('getUserList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getUserList Code Error : ' + JSON.stringify(err));
	}
};

export const getUserProfile = async (params, callback) => {
	console.log('getUserProfile');
	try {
		let token = await AsyncStorage.getItem('token');
		await cookieReset(token);
		let result = await axios.post(serveruri + '/user/getUserProfile', {user_id: params.user_id});
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('getUserProfile Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getUserProfile Code Error : ' + JSON.stringify(err));
	}
};

export const addUser = async (params, callback) => {
	console.log('addUser');
	try {
		let form = new FormData();
		form.append(
			'id',
			data.phone !== '' ? data.phone : data.email + '@' + (data.userEmailCompany === null ? data.emailCompany : data.userEmailCompany),
		);
		form.append('password', data.password);
		form.append('name', data.name);
		form.append('nickname', data.nickname);
		form.append('userType', 'user');
		form.append('idType', data.mobilecompany ? 'mobile' : 'email');
		form.append('mobilecompany', data.mobilecompany);
		form.append('imgfile', {
			name: props.route.params?.image,
			type: 'image/jpeg',
			uri: props.route.params?.image,
		});
	} catch (err) {
		alert('addUser Code Error : ' + JSON.stringify(err));
	}
};

export const addPet = async (params, callback) => {
	console.log('addPet');
	try {
		let form = new FormData();
		form.append('sex', params.sex);
		form.append('adoptionType', params.adoptionType);
		form.append('animalKind', params.animalKind);
		form.append('animalKindDetail', params.animalKindDetail);
		form.append('animalNo', params.animalNo);
		form.append('nickname', params.nickname);
		params.profileImgUri&&form.append('imgfile', {
			name: params.profileImgUri,
			type: 'image/jpeg',
			uri: params.profileImgUri,
		});

		let token = await AsyncStorage.getItem('token');

		await cookieReset(token);

		let result = await axios.post(serveruri + '/user/addPet', form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('addPet Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('addPet Code Error : ' + JSON.stringify(err));
	}
};

export const getUserPetList = async (params, callback) => {
	console.log('getUserPetList');
	try {

		let token = await AsyncStorage.getItem('token');
		await cookieReset(token);

		let result = await axios.post(serveruri + '/user/getUserPetList', {user_id:params.user_id});

		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('getUserPetList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getUserPetList Code Error : ' + JSON.stringify(err));
	}
};