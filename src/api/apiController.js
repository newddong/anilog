import axios from 'axios';
import {serveruri, cookieReset} from 'Root/config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * axios와 api파일의 각 함수들의 공통 작업을 연결하기 위한 컨트롤러
 * @param {string} path - API 호출 경로
 * @param {IArguments}} args - 함수의 arguments, MDN참조
 */
export async function apiController(path, args) {
	let existFileField = Object.keys(args[0]).some((v)=>v.includes('uri'));
	if(existFileField){
		apiFormController(path,args);
		return;
	}

	try {
		let result = await axios.post(serveruri + path, args[0]);
		if(result.data.status==200){
			args[1](result.data);
		}else{
			args[2](result.data.msg);
		}
	} catch (err) {
		args[2](err + ''); //에러 처리 콜백
	}

	// try {
	// 	//서버와 통신
	// 	setTimeout(args[1], 1000, args[0]);
	// } catch (err) {
	// 	setTimeout(args[2], 1000, err + ''); //에러 처리 콜백
	// }
}

/**
 * axios와 api파일의 각 함수들의 공통 작업을 연결하기 위한 컨트롤러
 * FormData를 이용
 * @param {string} path - API 호출 경로
 * @param {IArguments}} args - 함수의 arguments, MDN참조
 */
export async function apiFormController(path, args) {
	
	try {
		let form = new FormData();
		Object.entries(args[0]).forEach((v)=>{
			if(v[0].includes('uri')){
				if(typeof v[1]=='object'){
					//필드에 여러 값을 받을 경우, typeof는 object임(array도 object가 됨)
					v[1].forEach((v)=>{
						form.append(v[0],v);
					})
				};
				if(typeof v[1]=='string'){
					//필드에 단일 값을 문자열로 받았을 경우
					if(v[1].includes('http')){
						form.append(v[0],v[1]);
						//파라메터 값 형식이 인터넷 주소일경우
					}else{
						form.append(v[0],{
							name: v[1],
							type: 'multipart/form-data',
							uri:v[1],
						})
						//파라메터 값이 파일일 경우
					}
				};
			}else{
				if(typeof v[1]=='object'){
					form.append(v[0],JSON.stringify(v[1]));
				}else{
					form.append(v[0],v[1]);
				}
			}
		});
		let result = await axios.post(serveruri + path, form,{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		if(result.data.status==200){
			args[1](result.data);
		}else{
			args[2](result.data.msg);
		}
	} catch (err) {
		// args[2](err + ''); //에러 처리 콜백
		args[2](err + ''); //에러 처리 콜백
	}

	// try {
	// 	//서버와 통신
	// 	setTimeout(args[1], 1000, args[0]);
	// } catch (err) {
	// 	setTimeout(args[2], 1000, err + ''); //에러 처리 콜백
	// }
}

//쿠키 리셋 코드
// let token = await AsyncStorage.getItem('token');
// await cookieReset(token);


//export async function (.*?) \(.*?\)\{\n(.*?\n)*?\};
//export async function $1(params, callback, errcallback){\n\tapiController(serveruri,'/user/$1',arguments);\n};
