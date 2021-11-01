import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import {Kakao, Naver, Instagram, Facebook, Xbutton, CheckedBtn, Bracket, BracketBar} from 'Asset/image';
import {Check48, Rect48_Border } from 'Root/component/atom/icon/index';
import {layoutstyles, textstyles, buttonstyle, formstyles} from './style_login';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import DP from 'Root/config/dp';
import {BLACK, GRAY, GRAY_PLACEHOLDER, SLIGHT_BLACK} from 'Root/config/color';
import Input24 from 'Root/component/molecules/Input24';
import PasswordInput from 'Root/component/molecules/PasswordInput';
import {
	ASK_LOST_ID_PASS,
	ASK_USER,
	ASSIGN_USER,
	FAIL_LOGIN_COUNT,
	FAIL_LOGIN_LOCK,
	FAIL_MSG,
	FIND_ID,
	FIND_PASS,
	LOGIN,
	LOGIN_AUTO,
	REQ_PASSWORD,
	REQ_PHONE_NUM_AND_EMAIL,
	SAVE_ID,
	WITHOUT_LOGIN,
	SHELTER_ASSIGN, 
	RESET_PASSWORD,
	LOGIN_SOCIAL,
	FIND_MY_ACCOUNT
} from 'Root/i18n/msg';
import FormTxtInput from 'Screens/common/formtxtinput';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { serveruri, cookieReset } from 'Screens/server';

export default LoginTemplete = props => {
	// React.useEffect(async () => {
	// 	let token = await AsyncStorage.getItem('token');
    //     token = false;
	// 	if(token){
	// 		try {
	// 			await cookieReset(token);
	
	// 			let loginResult = await axios.post(serveruri+'/auth/login', {id: data.id, password: data.password});
	// 			console.log(loginResult);
	// 			if (loginResult.data.status === 200) {
	// 				let cookie = await CookieManager.get(serveruri);
	// 				await AsyncStorage.setItem('token', cookie['connect.sid'].value);
	// 				setTimeout(moveToHome, 1500);
	// 			} else if (loginResult.data.status === 403) {
	// 				alert('로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요');
	// 			} else {
	// 				alert(loginResult.data.msg);
	// 			}
	// 		} catch (err) {
	// 			alert(err);
	// 		}
	// 	}
	// }, []);

	const [autoLogin, setAutoLogin] = useState(false);
	const pressAutoLogin = () => {
		setAutoLogin(!autoLogin);
	};
	const [saveId, setSaveId] = useState(false);
	const pressSaveId = () => {
		setSaveId(!saveId);
	};
	const moveToFindId = () => { 
		props.navigation.navigate('AssignRoute', {screen: 'VerifyUser', params: {title: '내계정 찾기'}});
	};

	const moveToResetPassword = () => { 
		props.navigation.navigate('AssignRoute', {screen: 'Verifypass_step1', params: {title: '비밀번호 재설정'}});
	};



	const moveToAssignUser = () => {
		// props.navigation.push('AssignRoute', {screen: 'Assign', params: {title: '회원가입'}});
		props.navigation.push('AssignRoute', {screen: 'Assign_user_step1', params: {title: '회원가입'}});
		// props.navigation.push('AssignRoute', {screen: 'Assign', params: {title: '회원가입'}});
	};
	const moveToHome = () => {
		props.navigation.replace('MainScreen');
	};
	const moveToPetSlider = () => {		
		props.navigation.push('AssignRoute', {screen: 'Assign_pet_step5', params: {title: '반려동물 등록'}});
	};

	const moveToAssignShelter = () => {
		props.navigation.push('AssignRoute', {screen: 'AssignShelter', params: {title: '보호소 등록'}});
	};
	
	const login = async () => {
		console.log('try to login');
		// axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		try {
			let token = await AsyncStorage.getItem('token');
			if(token){
			await cookieReset(token);
			}
			let loginResult = await axios.post(serveruri+'/auth/login', {id: data.id, password: data.password});
			console.log(loginResult);
			if (loginResult.data.status === 200) {
				let cookie = await CookieManager.get(serveruri);
				await AsyncStorage.setItem('token', cookie['connect.sid'].value);
				alert(loginResult.data.msg + '님 로그인 성공');
				setTimeout(moveToHome, 1500);
			} else if (loginResult.data.status === 403) {
				alert('로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요');
			} else {
				alert(loginResult.data.msg);
			}
		} catch (err) {
			alert(err);
		}
	};

	const [data, setData] = React.useState({
		id: '',
		password: '',
	});
	const idChange = e => {
		setData({...data, id: e.nativeEvent.text});
	};
	const passwordChange = e => {
		setData({...data, password: e.nativeEvent.text});
	};

	const naverlogin = async e => {
		await CookieManager.clearAll();
		await CookieManager.set(serveruri, {
			name: 'connect.sid',
			value: await AsyncStorage.getItem('test'),
			path: '/',
		});
		// await CookieManager.set('http://10.0.2.2:3000',
		// 	'connect.sid=s%3AjbSSeI_frl2J97s5jNcbeSBIc4xiUcru.mkIV2Qedt5WSbtq%2FS1VIcwxJMjAI54%2FJUxiO%2FOdJEvM')
		const result = await axios.get(serveruri+`/auth/test?profile=${data.id}`);
		// {headers:{'rewz':'connect.sid=s%3AbQuYknCfnmoBp8iVaWgF_ViMxesHrRFD.5w02F0iUfHXxc71pbaCOfbdkWLGJgLgjOKMA7L30qs0'},withCredentials:true}

		// );
		console.log('testapi결과 ' + JSON.stringify(result));
		const r = await CookieManager.get(serveruri);
		await AsyncStorage.setItem('test', r['connect.sid'].value);
		console.log(r['connect.sid'].value);
		alert(result.data['connect.sid']);

		// axios.get(`http://10.0.2.2:3000/login/test?profile=${data.id}`).then(
		// 	(result) => {
		// 		console.log('testapi결과 '+JSON.stringify(result));
		// 		alert(result.data['connect.sid']);
		// 	}
		// )
	};

	const kakaologin = async e => {
		try {
			let token = await AsyncStorage.getItem('token');
			await cookieReset(token);

			let loginResult = await axios.post(serveruri+'/post/test', {test: ['b','c','d']});
			console.log(loginResult);
		} catch (err) {
			alert(err);
		}


	}

	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.contents}>

				{/* 로그인 없이 둘러보기 */}
				<TouchableWithoutFeedback onPress={moveToHome}>
					{/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 118 * DP, marginBottom: 70 * DP}}> */}
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 118 * DP, marginBottom: 70 * DP}}>
						<Text style={[textstyles.noto24, {color: GRAY}]}>{WITHOUT_LOGIN}</Text>
						<SvgWrapper style={{width: 50 * DP, height: 50 * DP}} svg={<Bracket fill={GRAY} />} />
					</View>
				</TouchableWithoutFeedback>

				<View style={layoutstyles.inputform}>				
                    <Input24 placeholder={REQ_PHONE_NUM_AND_EMAIL} title=""/>
                    <PasswordInput style={{width:522*DP}} placeholder={REQ_PASSWORD}/>
					{/* 자동 로그인, 아이디 저장 */}
					<View style={layoutstyles.autologinContainer}>
						<CheckBtn onPress={pressAutoLogin} btn_txt={LOGIN_AUTO} isCheck={autoLogin} />
						<CheckBtn onPress={pressSaveId} btn_txt={SAVE_ID} isCheck={saveId} />
					</View>
				</View>

				{/* 로그인 버튼 */}
				<TouchableWithoutFeedback onPress={login}>
					<View style={[buttonstyle.loginbutton, buttonstyle.shadow]}>
						<Text style={[textstyles.noto32b, textstyles.white]}>{LOGIN}</Text>
					</View>
				</TouchableWithoutFeedback>
			
				
				{/* 회원가입 버튼 */}
				<TouchableWithoutFeedback onPress={moveToAssignUser}>
					<View style={[buttonstyle.assignbutton, buttonstyle.shadow]}>
						<Text style={[textstyles.noto32b, textstyles.salgoo]}>{ASSIGN_USER}</Text>
					</View>
				</TouchableWithoutFeedback>

				<View style={layoutstyles.autologinContainer}>
					{/* 보호소 등록 */}					
					<TouchableWithoutFeedback onPress={moveToAssignShelter}>
						{/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 118 * DP, marginBottom: 70 * DP}}> */}
						<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * DP, marginBottom: 40 * DP}}>
							<Text style={[textstyles.noto28b, {color: '#ff9888'}]}>{SHELTER_ASSIGN}</Text>
							<SvgWrapper style={{width: 50 * DP, height: 50 * DP}} svg={<BracketBar/>} />
						</View>
					</TouchableWithoutFeedback>
				
					{/* 내 계정 찾기 */}					
					<TouchableWithoutFeedback onPress={moveToFindId}>
						{/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 118 * DP, marginBottom: 70 * DP}}> */}
						<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * DP, marginBottom: 40 * DP}}>
							<Text style={[textstyles.noto28b, {color: '#999999'}]}>{FIND_MY_ACCOUNT}</Text>
							<SvgWrapper style={{width: 50 * DP, height: 50 * DP}} svg={<BracketBar/>} />
						</View>
					</TouchableWithoutFeedback>

					{/* 비밀번호 재설정 */}					
					<TouchableWithoutFeedback onPress={moveToResetPassword}>
						{/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 118 * DP, marginBottom: 70 * DP}}> */}
						<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 1 * DP, marginBottom: 40 * DP}}>
							<Text style={[textstyles.noto28b, {color: '#999999'}]}>{RESET_PASSWORD}</Text>						
						</View>
					</TouchableWithoutFeedback>
				</View>

				{/* 소셜 로그인 아이콘 */}				
				<View style={layoutstyles.socialLinkContainer}>
					{/* <SvgWrap style={buttonstyle.socialAppsButton} svg={<Naver />} onPress={naverlogin} />
					<SvgWrap style={buttonstyle.socialAppsButton} svg={<Kakao />} onPress={kakaologin}/>  */}
					<SvgWrap style={buttonstyle.socialAppsButton} svg={<Naver />} 		onPress={() => alert('준비중입니다.')}/>
					<SvgWrap style={buttonstyle.socialAppsButton} svg={<Kakao />} 		onPress={() => alert('준비중입니다.')}/>
					<SvgWrap style={buttonstyle.socialAppsButton} svg={<Instagram />} onPress={() => alert('준비중입니다.')}/>
					<SvgWrap style={buttonstyle.socialAppsButton} svg={<Facebook />} 	onPress={() => alert('준비중입니다.')}/>
				</View>

				
				{/* 소셜 아이디로 로그인 */}					
				<TouchableWithoutFeedback onPress={() => alert('준비중입니다.')}>
					{/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 118 * DP, marginBottom: 70 * DP}}> */}
					<View style={{alignItems: 'center', justifyContent: 'center', marginTop: 1 * DP, marginBottom: 40 * DP}}>
						<Text style={[textstyles.noto28b, {color: '#767676'}]}>{LOGIN_SOCIAL}</Text>						
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

const CheckBtn = props => {
	return (
		<View style={buttonstyle.autologinButton}>
			<TouchableWithoutFeedback onPress={props.onPress}>
				{props.isCheck ? (
					<Check48/>
				) : (
					<Rect48_Border/>
				)}
			</TouchableWithoutFeedback>
			<Text style={[textstyles.noto28, {color: SLIGHT_BLACK, marginBottom: 6 * DP, marginLeft: 12* DP}]}>{props.btn_txt}</Text>
		</View>
	);
};
