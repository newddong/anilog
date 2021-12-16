
/**
 * axios와 api파일의 각 함수들의 공통 작업을 연결하기 위한 컨트롤러
 * @param {string} serveruri - 서버 호스트
 * @param {string} path - API 호출 경로
 * @param {IArguments}} args - 함수의 arguments, MDN참조
 */
export async function apiController(serveruri, path, args) {
	try {
		let result = await axios.post(serveruri + path, args[0]);
		if(result.status==200){
			args[1](result);
		}else{
			args[2](result);
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

//export async function (.*?) \(.*?\)\{\n(.*?\n)*?\};
//export async function $1(params, callback, errcallback){\n\tapiController(serveruri,'/user/$1',arguments);\n};