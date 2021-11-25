import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {dummy_CompanionObject, dummy_UserObject_pet} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {MODIFY_PROFILE} from 'Root/i18n/msg';
import {btn_w114, btn_w242} from '../atom/btn/btn_style';
import {NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge194 from '../molecules/ProfileImageLarge194';
import MyPetList from '../organism_ksw/MyPetList';
import {login_style, btn_style, temp_style, userInfoSetting_style} from './style_templete';

// 필요한 데이터 - 로그인 유저 제반 데이터, 나의 반려동물 관련 데이터(CompanionObject 참조)
export default UserInfoSetting = ({route}) => {
	// console.log('route', route.params);
	const navigation = useNavigation();
	const [data, setData] = React.useState(route.params);
	const [companions, setCompanions] = React.useState([]);

	//나의 반려동물 검색 - 로그인 유저의 _id 데이터를 토대로
	//반려동물 관계
	React.useEffect(() => {
		let my_companion_list = []; // CompanionObject에서 나의 반려동물 id List를 가져옴
		dummy_CompanionObject.map((v, i) => {
			v.companion_user_id == data._id ? my_companion_list.push(v) : null;
		});
		let copy = [];
		my_companion_list.map((v, i) => {
			let found = dummy_UserObject_pet.filter(e => e._id == v.companion_pet_id);
			copy.push(found[0]);
		});
		setCompanions(copy);
	}, [data]);

	//상세 정보 클릭
	const onPressDetail = () => {
		navigation.push('UserInfoDetailSetting', data);
	};

	//프로필 변경 클릭
	const onPressModofyProfile = () => {
		navigation.push('ChangeUserProfileImage');
	};

	// 나의 반려동물 -> 반려동물 등록
	const onPressAddPet = () => {
		navigation.push('AssignPetProfileImage');
	};

	//비밀번호 변경하기 클릭
	const onPressChangePwd = () => {
		navigation.push('ChangePassword');
	};

	const onClickCompanionLabel = myPetData => {
		navigation.push('PetInfoSetting', myPetData);
	};

	return (
		<View style={login_style.wrp_main}>
			<ScrollView>
				{/* step1 */}
				<View style={[temp_style.userInfoSetting_step1]}>
					<View style={[temp_style.profileImageLarge, userInfoSetting_style.profileImageLarge]}>
						<ProfileImageLarge194 img_uri={data.user_profile_uri} />
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
								<Text style={[txt.roboto24]}>{data ? data.user_email : ''}</Text>
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
								<AniButton btnTitle={'수정'} btnStyle={'border'} btnLayout={btn_w114} />
							</View>
						</View>
						<View style={[temp_style.userText_userInfoSetting, userInfoSetting_style.userText]}>
							<Text style={[txt.noto24, {color: GRAY10}]} numberOfLines={2} ellipsizeMode={'tail'}>
								{data ? data.user_Introduction : ''}
							</Text>
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
						<MyPetList items={companions} onLabelClick={myPetData => onClickCompanionLabel(myPetData)} addPet={onPressAddPet} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
