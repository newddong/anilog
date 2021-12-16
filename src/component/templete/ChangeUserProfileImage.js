import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {AVAILABLE_NICK, DEFAULT_PROFILE, NEW_NICK_REQUEST, NEW_NICK_TITLE, NICKNAME_FORM, PREVIOUS_NICK_TITLE, UNAVAILABLE_NICK} from 'Root/i18n/msg';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, changeUserProfileImage_style} from './style_templete';
import {CommonActions} from '@react-navigation/routers';
import {updateUserInformation, nicknameDuplicationCheck} from 'Root/api/usermenuapi';
export default ChangeUserProfileImage = ({route}) => {
	// console.log('route / Profile', route.params);1

	const [data, setData] = React.useState(route.params);
	const [newNick, setNewNick] = React.useState('');
	const navigation = useNavigation();
	const [confirmed, setConfirmed] = React.useState(false);
	const [duplicated, setDuplicated] = React.useState(false);

	React.useEffect(() => {
		console.log('data useEffect', data);
		setConfirmed(true); //사진 선택시 확인버튼 누르게
	}, [data]);

	const onConfirmed = () => {
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [
					{name: 'UserMenu'},
					{
						name: 'UserInfoSetting',
						params: {changedPhoto: data.user_profile_uri},
					},
				],
			}),
		);
		updateUserInformation(
			{
				userobject_id: data._id,
				user_nickname: newNick == '' ? data.user_nickname : newNick,
				user_profile_uri: data.user_profile_uri,
			},
			userObject => {
				// console.log('userObject', userObject);
				setData(userObject);
			},
		);
	};

	const selectPhoto = () => {
		// navigation.push('SinglePhotoSelect', route.name);
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 1,
			},
			responseObject => {
				console.log('선택됨!!', responseObject);
				// setUri(responseObject.assets[responseObject.assets.length - 1].uri);

				responseObject.didCancel
					? console.log('선택취소')
					: // : setData({...data, user_profile_uri: responseObject.assets[responseObject.assets.length - 1].uri || data.user_profile_uri});
					  setData({...data, user_profile_uri: responseObject.assets[responseObject.assets.length - 1].uri || data.user_profile_uri});
			},
		);
	};

	//중복 처리
	const checkDuplicateNickname = nick => {
		nicknameDuplicationCheck(nick, setDuplicated);
		// console.log('duplicated', !duplicated);
		return duplicated;
	};

	//닉네임 Validation
	const nickName_validator = text => {
		setNewNick(text);
	};

	//새 닉네임 지우기 마크 클릭
	const onClearNickname = () => {
		setConfirmed(false);
	};

	//닉네임 Validation 결과 == isValid에 따른 확인버튼 활성화 여부 결정
	const onValidName = isValid => {
		setConfirmed(isValid);
	};

	const validateNewNick = nick => {
		// ('* 2자 이상 15자 이내의 영문,숫자, _ 의 입력만 가능합니다.');
		// 영문자, 소문자, 숫자, "-","_" 로만 구성된 길이 2~10자리 사이의 문자열
		let regExp = /^[a-zA-Z0-9_-]{2,15}$/;
		return regExp.test(nick) && checkDuplicateNickname(nick);
	};
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<View style={[temp_style.profileImageSelect, changeUserProfileImage_style.profileImageSelect]}>
					<ProfileImageSelect selectedImageUri={data.user_profile_uri || DEFAULT_PROFILE} onClick={selectPhoto} />
				</View>
				<View style={[temp_style.profileNicknameChange, changeUserProfileImage_style.profileNicknameChange]}>
					{/* 기존 닉네임 */}
					<View style={[temp_style.input24_changeUserProfileImage, changeUserProfileImage_style.input24]}>
						<Input24
							title={PREVIOUS_NICK_TITLE}
							value={data.user_nickname || ''}
							width={654}
							descriptionType={'none'}
							editable={false}
							showCrossMark={false}
						/>
					</View>
					{/* 새닉네임 */}
					<View style={[temp_style.input24_changeUserProfileImage]}>
						<Input24
							onChange={text => nickName_validator(text)}
							validator={validateNewNick}
							onValid={onValidName}
							value={newNick}
							title={NEW_NICK_TITLE}
							descriptionType={'info'}
							info={NICKNAME_FORM}
							placeholder={NEW_NICK_REQUEST}
							showMsg={true}
							alert_msg={UNAVAILABLE_NICK}
							confirm_msg={AVAILABLE_NICK}
							width={654}
							onClear={onClearNickname}
						/>
					</View>
				</View>
				{/* 확인버튼 */}
				<View style={[btn_style.btn_w654, changeUserProfileImage_style.btn_w654]}>
					<AniButton
						btnTitle={'확인'}
						btnTheme={'shadow'}
						titleFontStyle={32}
						btnLayout={btn_w654}
						onPress={onConfirmed}
						disable={confirmed ? false : true}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
ChangeUserProfileImage.defaultProps = {
	previous_nickname: 'Previous Nickname',
};
