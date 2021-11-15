import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {login_style, temp_style, shelterInfoSetting, temp_txt} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {btn_w114, btn_w242} from '../atom/btn/btn_style';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import {txt} from 'Root/screens/assign/style_assign';
import AniButton from '../molecules/AniButton';

export default ShelterInfoSetting = props => {
	const navigation = useNavigation();

	const moveToChangeUserProfileImage = () => {
		navigation.push('ChangeUserProfileImage');
	};
	const moveToChangePassword = () => {
		navigation.push('ChangePassword');
	};
	// const moveTo = () => {
	// 	navigation.navigate('');
	// };
	const moveToEditShelterInfo = () => {
		navigation.push('EditShelterInfo');
	};

	return (
		<View style={(login_style.wrp_main, shelterInfoSetting.container)}>
			{/* ProfileImage & btn_w242*/}
			<ScrollView>
				<View style={[shelterInfoSetting.shelterInfoSetting_step1]}>
					<View style={[temp_style.profileImageLarge]}>
						<ProfileImageLarge160 userType="shelter" shelterType="private"></ProfileImageLarge160>
					</View>

					<View style={[shelterInfoSetting.btn_w242]}>
						<AniButton btnTitle={'프로필 변경'} btnStyle={'filled'} titleFontStyle={24} btnLayout={btn_w242} onPress={moveToChangeUserProfileImage} />
					</View>
				</View>

				{/* MyInfo */}
				<View style={[shelterInfoSetting.shelterInfoSetting_step2]}>
					<View style={[temp_style.accountInfo_shelterInfoSetting_view]}>
						<View style={shelterInfoSetting.accountInfo}>
							<Text style={txt.noto30b}>계정정보</Text>
						</View>
						<View style={[temp_style.accountInfo_email_shelterInfoSetting_view, shelterInfoSetting.email_view]}>
							<Text>jooju@naver.com</Text>
							<TouchableOpacity onPress={moveToChangePassword}>
								<Text style={txt.noto24}>비밀번호 변경하기</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>
					<View style={[temp_style.introduce_shelterInfoSetting_view]}>
						<View style={[temp_style.title_shelterInfoSetting_view]}>
							<View style={temp_style.title_shelterInfoSetting}>
								<Text style={txt.noto30b}>보호소 소개</Text>
							</View>
							<View style={shelterInfoSetting.btn_w114}>
								<AniButton
									btnLayout={btn_w114}
									btnStyle={'border'}
									btnTheme={'shadow'}
									btnTitle={'수정'}
									titleFontStyle={24}
									onPress={() => alert('준비중입니다.')}
								/>
							</View>
						</View>
						<View style={temp_style.introduceMent_shelterInfoSetting}>
							<Text style={txt.noto24}>서울시 마포구에 있는 유기 동물 보호소 입니다. 아이들의 보호를 도와 주세요.</Text>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>
					<View style={[temp_style.introduce_infoSetting_view]}>
						<View style={temp_style.shlterInfo__shelterInfoSetting_view}>
							<View style={temp_style.title_shelterInfoSetting}>
								<Text style={txt.noto30b}>보호소 정보</Text>
							</View>
							<View style={shelterInfoSetting.btn_w114}>
								<AniButton
									btnLayout={btn_w114}
									btnStyle={'border'}
									btnTheme={'shadow'}
									btnTitle={'수정'}
									titleFontStyle={24}
									onPress={() => navigation.push('EditShelterInfo')}
								/>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>보호소</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text>파인트리 유기동물 보호소</Text>
							</View>
						</View>
						<View style={temp_style.address_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>주소</Text>
							</View>
							<View style={temp_style.addressContents}>
								<Text>서울시 마포구 마포대로 25 마포건물 105동 1106호</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>전화번호</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text>02-1234-5678</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>E-mail</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text>dogcat@hanmail.net</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>홈페이지</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text>http://dogcathomepage.co.kr</Text>
							</View>
						</View>
						<View style={temp_style.title_type_shelterInfoSetting_view}>
							<View style={temp_style.littleTitle}>
								<Text>설립일</Text>
							</View>
							<View style={temp_style.littleContents}>
								<Text>2015년 10월 5일</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
