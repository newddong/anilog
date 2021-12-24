import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {login_style, temp_style, shelterInfoSetting} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {btn_w114, btn_w242} from '../atom/btn/btn_style';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import {txt} from 'Root/screens/assign/style_assign';
import AniButton from '../molecules/AniButton';
import {GRAY10} from 'Root/config/color';
import {getUserInfoById, updateUserIntroduction} from 'Root/api/userapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native';
import moment from 'moment';

export default ShelterInfoSetting = ({route}) => {
	// console.log('ShelterInfoSetting', route.params);
	const navigation = useNavigation();

	const [data, setData] = React.useState({});
	const [modifyMode, setModifyMode] = React.useState(false);
	const [intro_modified, setIntro_modified] = React.useState('');
	const modifyRef = React.useRef();

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			getUserInfoById(
				{userobject_id: res},
				result => {
					console.log('result / getUserInfoById / ShelterInfoSetting   : ', result.msg.user_introduction);
					setData(result.msg);
				},
				err => {
					console.log('err / getUserInfoById', err);
				},
			);
		});
	}, []);

	//프로필변경
	const moveToChangeUserProfileImage = () => {
		navigation.push('ChangeUserProfileImage', data);
	};

	//비밀번호 변경
	const moveToChangePassword = () => {
		navigation.push('ChangePassword');
	};

	//상세 정보 변경
	const moveToEditShelterInfo = () => {
		navigation.push('EditShelterInfo', {data: data});
	};

	//User_intro 수정 버튼 클릭
	const modify_userIntro = () => {
		setModifyMode(!modifyMode);
	};

	//수정 후 적용 버튼 클릭
	const modify_finalize = () => {
		setModifyMode(!modifyMode);
		setData({...data, user_introduction: intro_modified});
		console.log('intro', intro_modified, typeof intro_modified);
		updateUserIntroduction(
			{user_introduction: intro_modified},
			success => {
				console.log('suceess', success);
			},
			err => {
				console.log('er', err);
			},
		);
	};

	const getParsedFoundationDate = () => {
		let date = data.shelter_foundation_date;
		date = moment(date).format('YYYY-MM-DD');
		return date;
	};

	//수정 TextInput 콜백 함수
	const modifyIntroText = text => {
		setIntro_modified(text);
	};

	return (
		<ScrollView contentContainerStyle={[shelterInfoSetting.container]}>
			<View style={[login_style.wrp_main]}>
				{/* 프로필 이미지 및 프로필 변경 */}
				<View style={[shelterInfoSetting.shelterInfoSetting_step1]}>
					<View style={[temp_style.profileImageLarge]}>
						<ProfileImageLarge160 data={data} />
					</View>

					<View style={[shelterInfoSetting.btn_w242]}>
						<AniButton btnTitle={'프로필 변경'} btnLayout={btn_w242} onPress={moveToChangeUserProfileImage} />
					</View>
				</View>
				<View style={[shelterInfoSetting.shelterInfoSetting_step2]}>
					{/* 계정정보 */}
					<View style={[temp_style.accountInfo_shelterInfoSetting_view]}>
						<View style={shelterInfoSetting.accountInfo}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>계정정보</Text>
						</View>
						<View style={[temp_style.accountInfo_email_shelterInfoSetting_view, shelterInfoSetting.email_view]}>
							<Text style={[txt.roboto24]}>{data.user_nickname}</Text>
							<TouchableOpacity onPress={moveToChangePassword}>
								<Text style={[txt.noto24, {color: GRAY10}]}>비밀번호 변경하기</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/* 보호소 소개 */}
					<View style={[temp_style.vertical_border]}></View>
					<View style={[temp_style.introduce_shelterInfoSetting_view]}>
						<View style={[temp_style.title_shelterInfoSetting_view]}>
							<View style={temp_style.title_shelterInfoSetting}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>보호소 소개</Text>
							</View>
							<View style={[shelterInfoSetting.btn_w114]}>
								{modifyMode ? (
									<AniButton onPress={modify_finalize} btnTitle={'적용'} btnLayout={btn_w114} />
								) : (
									<AniButton onPress={modify_userIntro} btnTitle={'수정'} btnStyle={'border'} btnLayout={btn_w114} />
								)}
							</View>
						</View>
						{/* 소개란 */}
						<View style={[temp_style.userText_userInfoSetting, shelterInfoSetting.userIntroCont]}>
							{/* 소개란의 수정버튼을 누를 시 TextInput으로 변경 */}
							{modifyMode ? (
								<TextInput
									onChangeText={modifyIntroText}
									style={[txt.noto24, shelterInfoSetting.modificationTextInput]}
									defaultValue={data.user_introduction || '소개란이 비어있습니다.'}
									multiline={true}
									maxLength={500}
									ref={modifyRef}
									selectTextOnFocus
								/>
							) : (
								<Text style={[txt.noto24, {color: GRAY10}]} numberOfLines={2} ellipsizeMode={'tail'}>
									{data.user_introduction ? data.user_introduction : '소개란이 비어있습니다'}
								</Text>
							)}
						</View>
					</View>
					{/* 보호소 정보 */}
					<View style={[temp_style.vertical_border]}></View>
					<View style={[temp_style.introduce_infoSetting_view]}>
						<View style={temp_style.shlterInfo__shelterInfoSetting_view}>
							<View style={temp_style.title_shelterInfoSetting}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>보호소 정보</Text>
							</View>
							<View style={shelterInfoSetting.btn_w114}>
								<AniButton btnLayout={btn_w114} btnStyle={'border'} btnTitle={'수정'} onPress={moveToEditShelterInfo} />
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>보호소</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text style={[txt.noto28]}>{data.shelter_name}</Text>
							</View>
						</View>
						<View style={temp_style.address_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>주소</Text>
							</View>
							<View style={temp_style.addressContents}>
								<Text style={[txt.noto28]}>{data.shelter_address ? data.shelter_address.brief + ' ' + data.shelter_address.detail + ' ' : ''}</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>전화번호</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text style={[txt.noto28]}>{data.shelter_delegate_contact_number}</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>E-mail</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text style={[txt.noto28]}>{data.user_email}</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>홈페이지</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text style={[txt.noto28]}>{data.shelter_homepage}</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text style={[txt.noto30, {color: GRAY10}]}>설립일</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text style={[txt.noto28]}>{getParsedFoundationDate()}</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
