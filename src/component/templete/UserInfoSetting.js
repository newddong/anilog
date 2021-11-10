import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w114, btn_w242} from '../atom/btn/btn_style';
import {NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import MyPetList from '../organism_ksw/MyPetList';
import {login_style, btn_style, temp_style, userInfoSetting_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserInfoSetting = props => {
	const navigation = useNavigation();
	return (
		<View style={login_style.wrp_main}>
			<ScrollView>
				{/* step1 */}
				<View style={[temp_style.userInfoSetting_step1]}>
					{/* (M)ProfileImageLarge */}
					<View style={[temp_style.profileImageLarge, userInfoSetting_style.profileImageLarge]}>
						<ProfileImageLarge194 />
					</View>

					{/* (A)btn_w242 */}
					<View style={[btn_style.btn_w242, userInfoSetting_style.btn_w242]}>
						<AniButton
							btnTitle={'프로필 변경'}
							btnStyle={'filled'}
							titleFontStyle={24}
							btnLayout={btn_w242}
							onPress={() => navigation.push('ChangeUserProfileImage')}
						/>
					</View>
				</View>
				{/* step2 - MyInfo */}
				<View style={[temp_style.userInfoSetting_step2]}>
					{/* accountInfo - MyInfo에서 첫번째 칸 : 계정정보 */}
					<View style={[temp_style.accountInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>계정 정보</Text>
						</View>
						{/* accountInfo_depth2 - user_email과 비밀번호 변경하기*/}
						<View style={[temp_style.accountInfo_depth2]}>
							<View style={[temp_style.user_email_userInfoSetting, userInfoSetting_style.user_email]}>
								<Text style={[txt.roboto24]}>SW.kwon@pinePartners.com</Text>
							</View>
							<View style={[temp_style.changePassword_userInfoSetting, userInfoSetting_style.changePassword]}>
								<TouchableOpacity onPress={() => navigation.push('ChangePassword')}>
									<Text style={[txt.noto24, {color: GRAY10}]}>비밀번호 변경하기</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* detailInfo - MyInfo에서 두번째 칸 : 상세정보 */}
					<View style={[temp_style.detailInfo]}>
						<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>상세 정보</Text>
						</View>
						<TouchableOpacity onPress={() => navigation.push('UserInfoDetailSetting')}>
							<View style={[temp_style.bracket48, userInfoSetting_style.bracket48]}>
								<NextMark />
							</View>
						</TouchableOpacity>
					</View>
					<View style={[temp_style.vertical_border]}></View>

					{/* introduce - MyInfo에서 세번째 칸 : 소개 */}
					<View style={[temp_style.introduceInfo]}>
						<View style={[temp_style.introduceInfo_depth1]}>
							<View style={[temp_style.title, userInfoSetting_style.title_detail]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>소개</Text>
							</View>
							<View style={[btn_style.btn_w114, userInfoSetting_style.btn_w114]}>
								<AniButton btnTitle={'수정'} btnStyle={'border'} titleFontStyle={24} btnLayout={btn_w114} />
							</View>
						</View>
						<View style={[temp_style.userText_userInfoSetting, userInfoSetting_style.userText]}>
							<Text style={[txt.noto24, {color: GRAY10}]}>우리 귀요미 쥬쥬랑 죠죠를 소개합니당 애교 덩어리 쥬쥬{'&'}시크 존멋탱 죠죠</Text>
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
						<MyPetList
							onLabelClick={myPetData => navigation.push('PetInfoSetting', myPetData)}
							addPet={() => navigation.push('AssignPetProfileImage')}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
