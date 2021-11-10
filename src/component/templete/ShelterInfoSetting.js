import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {login_style, temp_style, shelterInfoSetting, temp_txt} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {btn_w114} from '../atom/btn/btn_style';

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
						<Text>(M)ProfileImageLarge</Text>
					</View>
					<TouchableOpacity onPress={moveToChangeUserProfileImage}>
						<View style={[shelterInfoSetting.btn_w242]}>
							<Text style={temp_txt.small}>(A)btn_w242</Text>
						</View>
					</TouchableOpacity>
				</View>

				{/* MyInfo */}
				<View style={[shelterInfoSetting.shelterInfoSetting_step2]}>
					<View style={[temp_style.accountInfo_shelterInfoSetting_view]}>
						<Text>계정정보</Text>
						<View style={[temp_style.accountInfo_email_shelterInfoSetting_view, shelterInfoSetting.email_view]}>
							<Text>jooju@naver.com</Text>
							<TouchableOpacity onPress={moveToChangePassword}>
								<Text>비밀번호 변경하기</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={[temp_style.introduce_shelterInfoSetting_view]}>
						<View style={[temp_style.title_shelterInfoSetting_view]}>
							<View style={temp_style.title_shelterInfoSetting}>
								<Text>보호소 소개</Text>
							</View>
							<View style={shelterInfoSetting.btn_w114}>
								<AniButton
									btnLayout={btn_w114}
									btnStyle={'border'}
									btnTheme={'shadow'}
									btnTitle={'수정'}
									titleFontStyle={24}
									onPress={() => navigation.navigate('')}
								/>
							</View>
						</View>
						<Text>서울시 마포구에 있는 유기 동물 보호소 입니다. 아이들의 보호를 도와 주세요.</Text>
					</View>
					<View style={[temp_style.introduce_infoSetting_view]}>
						<View style={temp_style.title_shelterInfoSetting}>
							<Text>보호소 정보</Text>
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
				</View>
			</ScrollView>
		</View>
	);
};
