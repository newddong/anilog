import axios from 'axios';
import {serveruri, cookieReset} from 'Root/config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiController, apiFormController} from './apiController';

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
 * @param {object} params.user_address
 * @param {string} params.user_address.city - 사용자 주소(시,도,군)
 * @param {string} params.user_address.district - 사용자 주소(군,구)
 * @param {string} params.user_address.neighbor - 사용자 주소(동,읍,면)
 * @param {string} params.user_mobile_company - 이동통신사
 * @param {string} params.user_name - 유저 이름(실명)
 * @param {string} params.user_password - 유저 패스워드
 * @param {string} params.user_phone_number - 유저 핸드폰 번호
 * @param {string} params.user_nickname - 유저저 닉네임
 * @param {string} params.user_profile_uri - 유저 프로필 사진
 * @param {boolean} params.user_is_verified_phone_number - 핸드폰 인증여부
 * @param {function} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function assignUser (params, callback, errcallback){
	apiController(serveruri,'/user/assignUser',arguments);
};




/**
 * 유저가 등록중인 임시보호/입양할 동물이 있는지 체크
 * 있으면 해당 동물의 정보를 콜백의 오브젝트로 반환
 * @param {object} params
 * @param {string} params.userobject_id - 검색에 사용할 유저 ID(몽고디비 오브젝트 아이디)
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function checkProtectPet(params, callback, errcallback) {
	apiController(serveruri, '/user/checkProtectPet', arguments);
}

/**
 * 반려동물등록
 * 등록 결과를 콜백으로 반환
 *
 * @param {object} params
 * @param {object} params.userobject_id - 등록하고 있는 유저 ID(몽고디비 오브젝트 아이디)
 * @param {string} params.pet_birthday - 동물 생일
 * @param {boolean} params.pet_is_temp_protection - 임시보호 여부
 * @param {'yes'|'no'|'unknown'} params.pet_neutralization - 중성화 여부 {'yes'|'no'|'unknown'}
 * @param {'male'|'female'|'unknown'} params.pet_sex - 성별 { 'male'|'female'|'unknown'}
 * @param {string} params.pet_species - 반려동물의 종류(ex 개, 고양이, 토끼 등)
 * @param {string} params.pet_species_detail - 반려동물의 종류(ex 리트리버, 불독, 진돗개 등)
 * @param {string} params.pet_status - 반려동물의 상태, 임시보호중(protect), 입양됨(adopt), 반려동물(companion) {'protect'|'adopt'|'companion'}
 * @param {string} params.pet_weight - 반려동물 몸무게
 * @param {string} params.user_nickname - 반려동물 닉네임
 * @param {string} params.user_profile_uri - 반려동물 프로필 사진
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function assignPet(params, callback, errcallback) {
	apiController(serveruri, '/user/assignPet', arguments);
}

/**
 * 보호소 등록
 *
 * @param {object} params
 * @param {object} params.shelter_address
 * @param {string} params.shelter_address.brief - 보호소 주소
 * @param {string} params.shelter_address.detail - 보호소 상세 주소
 * @param {string} params.shelter_delegate_contact_number - 보호소 대표전화번호
 * @param {string} params.shelter_foundation_date - 보호소 설립일자
 * @param {string} params.shelter_homepage - 보호소 홈페이지 uri
 * @param {string} params.shelter_name - 보호소 이름
 * @param {'private'|'public'} params.shleter_type - 보호소 타잎 ('private'|'public')
 * @param {string} params.user_email - 보호소 이메일
 * @param {string} params.user_password - 보호소 접속 패스워드
 * @param {string} params.user_profile_uri - 보호소 프로필 사진 uri
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function assignShelter(params, callback, errcallback) {
	apiController(serveruri, '/user/assignShelter', arguments);
}

/**
 * 보호소 코드 체크
 *
 * @param {object} params
 * @param {string} params.shelter_code - 보호소 확인코드
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function checkShelterCode(params, callback, errcallback) {
	apiController(serveruri, '/user/checkShelterCode', arguments);
}

/**
 * 로그인
 *
 * @param {object} params
 * @param {string} params.login_id - 아이디
 * @param {string} params.login_password - 패스워드
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function userLogin(params, callback, errcallback) {
	// console.log('param userLogin', params);
	apiController(serveruri, '/user/userLogin', arguments);
}

/**
 * 로그아웃
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function userLogout(params, callback, errcallback) {
	apiController(serveruri, '/user/userLogout', arguments);
}

/**
 * 유저 프로필조회
 *
 * @param {object} params
 * @param {string} params.userobject_id - 아이디(DB의 유저 객체 ID, _id필드)
 * @param {'user'|'pet'|'shelter'} params.user_type -
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function getUserProfile(params, callback, errcallback) {
	apiController(serveruri, '/user/getUserProfile', arguments);
}

/**
 * 닉네임의 중복을 체크
 *
 * @param {object} params
 * @param {string} params.user_nickname - 중복체크할 닉네임
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function nicknameDuplicationCheck(params, callback, errcallback) {
	apiController(serveruri, '/user/nicknameDuplicationCheck', arguments);
}

/**
 * 유저 정보 수정
 *
 * @param {object} params
 * @param {string} params.userobject_id - 정보를 수정할 유저 몽고디비 도큐먼트 ID
 * @param {string} params.user_nickname - 유저의 수정할 닉네임
 * @param {string} params.user_profile_uri - 유저 프로필 사진 로컬 경로
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function updateUserInformation(params, callback, errcallback) {
	apiController(serveruri, '/user/updateUserInformation', arguments);
}

/**
 * @typedef UserInterest
 * @property {string} location - 지역 관심사
 * @property {string} activity - 활동 관심사
 */

/**
 * @typedef UserAddress
 * @property {string} city - 시,도
 * @property {string} district - 군,구
 * @property {string} neighbor - 동,읍,면
 * @property {string} brief - 검색주소
 * @property {string} detail - 검색주소(자세히)
 */

/**
 * 유저 상세정보 수정(반려동물, 보호소모두 적용가능)
 *
 * @param {object} params
 * @param {string} params.userobject_id - 정보를 수정할 유저 몽고디비 도큐먼트 ID
 * @param {string} params.user_birthday - 유저 생일, 마이메뉴-프로필 상세정보에서 수정
 * @param {'male'|'female'} params.user_sex - 유저 성별, 마이메뉴-프로필 상세정보에서 수정
 * @param {Array.<UserInterest>} params.user_interests - 유저의 관심사, 마이메뉴-프로필 상세정보에서 수정
 * @param {UserAddress} params.user_address - 유저 지역정보
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function updateUserDetailInformation(params, callback, errcallback) {
	apiController(serveruri, '/user/updateUserDetailInformation', arguments);
}

/**
 * 반려동물 상세 정보를 수정
 *
 * @param {object} params
 * @param {string} params.userobject_id - 반려동물 유저 객체 ID
 * @param {'male'|'female'|'unknown'} params.pet_sex - 반려동물의 성별
 * @param {'yes'|'no'|'unknown'} params.pet_neutralization - 반려동물 중성화 여부
 * @param {Date} params.pet_birthday - 반려동물 생일
 * @param {String} params.pet_weight - 반려동물 몸무게
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function updatePetDetailInformation(params, callback, errcallback) {
	apiController(serveruri, '/user/updatePetDetailInformation', arguments);
}

/**
 * 반려동물의 가족계정에 특정 유저를 추가
 *
 * @param {object} params
 * @param {string} params.userobject_id - 반려동물 유저 객체 ID
 * @param {string} params.family_userobject_id - 반려동물의 가족 계정에 추가할 유저의 ID
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function addUserToFamily(params, callback, errcallback) {
	apiController(serveruri, '/user/addUserToFamily', arguments);
}

/**
 * 유저의 패스워드를 변경
 *
 * @param {object} params
 * @param {string} params.userobject_id - 비밀번호를 변경하기 위한 유저의 객체 ID
 * @param {string} params.user_password - 유저의 현재 비밀번호
 * @param {string} params.new_user_password - 새로운 유저의 비밀번호
 * @param {({}:object)=>void} callback - API응답처리 콜백
 * @param {(errmsg:string)=>void} errcallback - 에러처리 콜백
 */
export async function changeUserPassword(params, callback, errcallback) {
	apiController(serveruri, '/user/changeUserPassword', arguments);
}

//=================================이전 router code =============================================================================

export async function getUserList(params, callback) {
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
}

export async function addUser(params, callback) {
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
}

export async function addPet(params, callback) {
	console.log('addPet');
	try {
		let form = new FormData();
		form.append('sex', params.sex);
		form.append('adoptionType', params.adoptionType);
		form.append('animalKind', params.animalKind);
		form.append('animalKindDetail', params.animalKindDetail);
		form.append('animalNo', params.animalNo);
		form.append('nickname', params.nickname);
		params.profileImgUri &&
			form.append('imgfile', {
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
}

export async function getUserPetList(params, callback) {
	console.log('getUserPetList');
	try {
		let token = await AsyncStorage.getItem('token');
		await cookieReset(token);

		let result = await axios.post(serveruri + '/user/getUserPetList', {user_id: params.user_id});

		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('getUserPetList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getUserPetList Code Error : ' + JSON.stringify(err));
	}
}
