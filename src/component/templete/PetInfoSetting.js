import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w242} from '../atom/btn/btn_style';
import {NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import OnOffSwitch from '../molecules/OnOffSwitch';
import PetImageLabel from '../molecules/PetImageLabel';
import FamilyAccountList from '../organism_ksw/FamilyAccountList';
import {btn_style, login_style, petInfoSetting, temp_style} from './style_templete';

export default PetInfoSetting = props => {
	const navigation = useNavigation();
	const petData = props.route.params;
	return (
		<ScrollView>
			<View contentContainerStyle={[login_style.wrp_main, petInfoSetting.container]}>
				{/* profileContainer */}
				<View style={[petInfoSetting.profileContainer]}>
					<View style={[temp_style.petImageLabel, petInfoSetting.petImageLabel]}>
						{/* <Text style={[temp_txt.small]}>(M)PetImageLabel(dia190)</Text> */}
						<PetImageLabel img_uri={petData.img_uri} petStatus={petData.petStatus} />
					</View>
					<View style={[btn_style.btn_w242, petInfoSetting.btn_w242]}>
						<AniButton
							btnTitle={'프로필 변경'}
							btnStyle={'filled'}
							btnLayout={btn_w242}
							btnTheme={'shadow'}
							titleFontStyle={24}
							onPress={() => navigation.push('ChangePetProfileImage', petData)}
						/>
					</View>
				</View>
				{/* PetAccountInfo */}
				<View style={[petInfoSetting.petAccountInfo.container]}>
					<View style={[petInfoSetting.petAccountInfo.insideContainer]}>
						<View style={[petInfoSetting.petAccountInfo.accountInfo_header]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>계정 정보</Text>
						</View>
						<View style={[petInfoSetting.petAccountInfo.information]}>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoTitle]}>종</Text>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>개</Text>
						</View>
						<View style={[petInfoSetting.petAccountInfo.information]}>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoTitle]}>품종</Text>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>시고르자브종</Text>
						</View>
					</View>
				</View>
				{/* PetProfileMenu */}
				<View style={[petInfoSetting.petProfileMenu.container]}>
					<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>상세 정보</Text>
						</View>
						<TouchableOpacity onPress={() => navigation.push('SetPetInformation')}>
							<View style={[petInfoSetting.petProfileMenu.bracket50]}>
								<NextMark />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				{/* PetProfileMenu */}
				<View style={[petInfoSetting.petProfileMenu.container]}>
					<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>접종 내역</Text>
						</View>
						<TouchableOpacity onPress={() => navigation.push('VaccinationRecord')}>
							<View style={[petInfoSetting.petProfileMenu.bracket50]}>
								<NextMark />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				{/* FamilyAccountInfo */}
				<View style={[petInfoSetting.familyAccountSetting.container]}>
					<View style={[petInfoSetting.familyAccountSetting.insideContainer]}>
						<View style={[petInfoSetting.familyAccountSetting.menuView]}>
							<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>가족 계정 추가</Text>
							</View>
							<TouchableOpacity onPress={() => navigation.push('AddFamilyAccount')}>
								<View style={[petInfoSetting.petProfileMenu.bracket50]}>
									<NextMark />
								</View>
							</TouchableOpacity>
						</View>
						<View style={[petInfoSetting.familyAccountSetting.infoMessage]}>
							<Text style={[txt.noto22, {color: APRI10}]}>
								가족 계정으로 초대된 계정은 이 동물 게시글을 함께 관리합니다. 최대 3인까지만 초대 가능합니다.
							</Text>
						</View>
						<View style={[petInfoSetting.familyAccountSetting.familyAccounts]}>
							<FamilyAccountList />
						</View>
					</View>
				</View>
				{/* ExposureSetting */}
				<View style={[petInfoSetting.exposureSetting.container]}>
					<View style={[petInfoSetting.exposureSetting.insideContainer]}>
						<View style={[petInfoSetting.exposureSetting.menuView]}>
							<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>계정 공개 여부 변경</Text>
							</View>
						</View>
						<View style={[petInfoSetting.exposureSetting.privateSettingView]}>
							<View style={[petInfoSetting.exposureSetting.privateSettingMsg]}>
								<Text style={[txt.noto28, {color: GRAY10}]}>이 동물의 계정을 비공개로 전환합니다</Text>
							</View>
							<View style={[petInfoSetting.exposureSetting.privateSettingBtn]}>
								<OnOffSwitch />
							</View>
						</View>
					</View>
				</View>
				{/* ChangeAdoptionStatus */}
				<View style={[petInfoSetting.changeAdoptionStatus.container]}>
					<View style={[petInfoSetting.familyAccountSetting.insideContainer]}>
						<View style={[petInfoSetting.changeAdoptionStatus.menuView]}>
							<View style={[petInfoSetting.changeAdoptionStatus.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>반려동물 입양 상태 변경</Text>
							</View>
							<TouchableOpacity onPress={() => navigation.push('AnimalAdoption')}>
								<View style={[petInfoSetting.changeAdoptionStatus.bracket50]}>
									<NextMark />
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
