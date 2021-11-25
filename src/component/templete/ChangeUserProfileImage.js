import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {AVAILABLE_NICK, DEFAULT_PROFILE, NEW_NICK_REQUEST, NEW_NICK_TITLE, NICKNAME_FORM, PREVIOUS_NICK_TITLE, UNAVAILABLE_NICK} from 'Root/i18n/msg';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import {login_style, btn_style, temp_style, changeUserProfileImage_style} from './style_templete';

export default ChangeUserProfileImage = ({route}) => {
	// console.log('route / Profile', route.params);

	const [data, setData] = React.useState(route.params);
	const [newNick, setNewNick] = React.useState('');
	const navigation = useNavigation();
	const [confirmed, setConfirmed] = React.useState(false);

	const onConfirmed = () => {
		navigation.goBack();
	};

	const selectPhoto = () => {
		navigation.push('SinglePhotoSelect', route.name);
	};

	//중복 처리
	const checkDuplicateNickname = nick => {
		const result = false;
		const exist_dup = dummy_userObject.filter(e => e.user_nickname == nick);
		console.log('exist dup', exist_dup[0].user_nickname);
		return result;
	};

	//닉네임 Validation
	const nickName_validator = text => {
		setNewNick(text);
		// ('* 2자 이상 15자 이내의 영문,숫자, _ 의 입력만 가능합니다.');
		// 영문자, 소문자, 숫자, "-","_" 로만 구성된 길이 2~10자리 사이의 문자열
		var regExp = /^[a-zA-Z0-9_-]{2,15}$/;
		regExp.test(text) && checkDuplicateNickname(text) ? setConfirmed(true) : setConfirmed(false);
	};

	//새 닉네임 지우기 마크 클릭
	const onClearNickname = () => {
		setConfirmed(false);
	};
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<View style={[temp_style.profileImageSelect, changeUserProfileImage_style.profileImageSelect]}>
					<ProfileImageSelect selectedImageUri={data ? data.user_profile_uri : DEFAULT_PROFILE} onClick={selectPhoto} />
				</View>
				<View style={[temp_style.profileNicknameChange, changeUserProfileImage_style.profileNicknameChange]}>
					{/* 기존 닉네임 */}
					<View style={[temp_style.input24_changeUserProfileImage, changeUserProfileImage_style.input24]}>
						<Input24
							title={PREVIOUS_NICK_TITLE}
							defaultValue={data ? data.user_nickname : ''}
							width={654}
							descriptionType={'none'}
							editable={false}
							showCrossMark={false}
						/>
					</View>

					<View style={[temp_style.input24_changeUserProfileImage]}>
						<Input24
							onChange={text => nickName_validator(text)}
							title={NEW_NICK_TITLE}
							descriptionType={'info'}
							info={NICKNAME_FORM}
							placeholder={NEW_NICK_REQUEST}
							showmsg={true}
							confirm={confirmed}
							alert_msg={UNAVAILABLE_NICK}
							confirm_msg={AVAILABLE_NICK}
							width={654}
							onClear={onClearNickname}
						/>
					</View>
				</View>

				{/* (A)Btn_w654 */}
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

// Input24.defaultProps = {
// 	title: 'title', // input title
// 	placeholder: 'placeholder',
// 	descriptionType: 'star', // star , info - title 오른쪽 description을 별표형식 / Info형식 구분
// 	value: 'value',
// 	alert_msg: 'alert_msg',
// 	confirm_msg: 'confirm_msg',
// 	info: null, //
// };

// ProfileImageSelect.defaultProps = {
// 	selectedImageUri: null,
// 	defaultImageUri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
// 	onClick: e => console.log(e),
// };
