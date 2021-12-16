import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {GRAY10, GRAY40} from 'Root/config/color';
import {dummy_CompanionObject, dummy_userObject, dummy_UserObject_pet} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE, MODIFY_PROFILE} from 'Root/i18n/msg';
import {btn_w114, btn_w242} from '../atom/btn/btn_style';
import {NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import MyPetList from '../organism_ksw/MyPetList';
import {login_style, btn_style, temp_style, userInfoSetting_style} from './style_templete';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUserProfile} from 'Root/api/usermenuapi';
import {getUserProfile} from 'Root/api/userapi';
// 필요한 데이터 - 로그인 유저 제반 데이터, 나의 반려동물 관련 데이터(CompanionObject 참조)
export default UserInfoSetting = ({route}) => {
	const navigation = useNavigation();
	const [data, setData] = React.useState(dummy_userObject[0]); // 로그인 유저의 UserObject
	const [companions, setCompanions] = React.useState(dummy_UserObject_pet); //반려동물 userObject
	const [modifyMode, setModifyMode] = React.useState(false);
	const [intro_modified, setIntro_modified] = React.useState('');
	const modifyRef = React.useRef();

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			console.log('token id ', res);
			getUserProfile(
				{
					userobject_id: res,
				},
				userObject => {
					setData(userObject.msg);
				},
				err => {
					console.log('er', err);
				},
			);
		});
	}, []);

	React.useEffect(() => {
		setCompanions(data.user_my_pets);
	}, [data]);

	//상세 정보 클릭
	const onPressDetail = () => {
		navigation.push('UserInfoDetailSetting');
	};

	//프로필 변경을 통한 사진변경이 발생했을 경우 params로 해당 포토 uri를 받아오고 data에 적용
	React.useEffect(() => {
		if (route.params != undefined) {
			route.params.changedPhoto ? setData({...data, user_profile_uri: route.params.changedPhoto}) : null;
		}
	}, [route.params]);

	//소개란 수정모드
	React.useEffect(() => {
		modifyMode ? modifyRef.current.focus() : null;
	}, [modifyMode]);

	//프로필 변경 클릭
	const onPressModofyProfile = () => {
		navigation.push('ChangeUserProfileImage', data);
	};

	// 나의 반려동물 -> 반려동물 등록
	const onPressAddPet = () => {
		navigation.push('AssignPetProfileImage');
	};

	//비밀번호 변경하기 클릭
	const onPressChangePwd = () => {
		navigation.push('ChangePassword', data.user_password);
	};

	const onClickCompanionLabel = myPetData => {
		console.log('myPetdata', myPetData);
		navigation.push('PetInfoSetting', myPetData);
	};

	//User_intro 수정 버튼 클릭
	const modify_userIntro = () => {
		setModifyMode(!modifyMode);
	};

	//수정 후 적용 버튼 클릭
	const modify_finalize = () => {
		setModifyMode(!modifyMode);
		setData({...data, user_introduction: intro_modified});
	};

	//수정 TextInput 콜백 함수
	const modifyIntroText = text => {
		setIntro_modified(text);
	};

	return (
		<View style={login_style.wrp_main}>
			<ScrollView>
				{/* step1 */}
				<View style={[temp_style.userInfoSetting_step1]}>
					<View style={[temp_style.profileImageLarge, userInfoSetting_style.profileImageLarge]}>
						<ProfileImageLarge194 data={data} />
					</View>
					<View style={[btn_style.btn_w242, userInfoSetting_style.btn_w242]}>
						<AniButton btnTitle={MODIFY_PROFILE} btnLayout={btn_w242} onPress={onPressModofyProfile} />
					</View>
				</View>
				{/* step2 - MyInfo */}
				<View style={[temp_style.userInfoSetting_step2]}>
					{/* 계정정보 */}
					<View style={[temp_style.accountInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>계정 정보</Text>
						</View>
						{/* 이메일, 비밀번호 변경하기*/}
						<View style={[temp_style.accountInfo_depth2]}>
							<View style={[temp_style.user_email_userInfoSetting, userInfoSetting_style.user_email]}>
								<Text style={[txt.roboto24]}>{data.user_nickname || ''}</Text>
							</View>
							<View style={[temp_style.changePassword_userInfoSetting, userInfoSetting_style.changePassword]}>
								<TouchableOpacity onPress={onPressChangePwd}>
									<Text style={[txt.noto24, {color: GRAY10}]}>비밀번호 변경하기</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* 상세정보 */}
					<View style={[temp_style.detailInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>상세 정보</Text>
						</View>
						<View style={[temp_style.bracket48, userInfoSetting_style.bracket48]}>
							<NextMark onPress={onPressDetail} />
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* 소개 */}
					<View style={[temp_style.introduceInfo]}>
						<View style={[temp_style.introduceInfo_depth1]}>
							<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>소개</Text>
							</View>
							<View style={[btn_style.btn_w114, userInfoSetting_style.btn_w114]}>
								{modifyMode ? (
									<AniButton onPress={modify_finalize} btnTitle={'적용'} btnLayout={btn_w114} />
								) : (
									<AniButton onPress={modify_userIntro} btnTitle={'수정'} btnStyle={'border'} btnLayout={btn_w114} />
								)}
							</View>
						</View>
						<View style={[temp_style.userText_userInfoSetting, userInfoSetting_style.userText]}>
							{/* 소개란의 수정버튼을 누를 시 TextInput으로 변경 */}
							{modifyMode ? (
								<TextInput
									onChangeText={modifyIntroText}
									style={[txt.noto24, userInfoSetting_style.user_intro_modifyMode]}
									defaultValue={data.user_introduction || ''}
									multiline={true}
									maxLength={500}
									ref={modifyRef}
									selectTextOnFocus
								/>
							) : (
								<Text style={[txt.noto24, {color: GRAY10}]} numberOfLines={2} ellipsizeMode={'tail'}>
									{data.user_introduction || ''}
								</Text>
							)}
						</View>
					</View>
				</View>
				{/* step3 - MyPetList */}
				<View style={[temp_style.myPetList]}>
					<View style={[temp_style.myPetList_title]}>
						<View style={[temp_style.title_userInfoSetting, userInfoSetting_style.title_detail]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>나의 반려동물</Text>
						</View>
					</View>
					<View style={[temp_style.myPetList_myPetList]}>
						<MyPetList items={companions} onLabelClick={onClickCompanionLabel} addPet={onPressAddPet} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
