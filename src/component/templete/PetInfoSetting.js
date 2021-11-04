import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_style, login_style, petInfoSetting, setPetInformation, temp_style, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default PetInfoSetting = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main]}>
			{/* profileContainer */}
			<View style={[petInfoSetting.profileContainer]}>
				<View style={[temp_style.petImageLabel, petInfoSetting.petImageLabel]}>
					<Text style={[temp_txt.small]}>(M)PetImageLabel(dia190)</Text>
				</View>
				<View style={[btn_style.btn_w242, petInfoSetting.btn_w242]}>
					<Text> btn_w242</Text>
				</View>
			</View>
			{/* PetAccountInfo */}
			<View style={[petInfoSetting.petAccountInfo.container]}>
				<View style={[petInfoSetting.petAccountInfo.insideContainer]}>
					<View style={[petInfoSetting.petAccountInfo.accountInfo_header]}>
						<Text>계정정보</Text>
					</View>
					<View style={[petInfoSetting.petAccountInfo.information]}>
						<Text>information</Text>
					</View>
					<View style={[petInfoSetting.petAccountInfo.information]}>
						<Text>information</Text>
					</View>
				</View>
			</View>
			{/* PetProfileMenu */}
			<View style={[petInfoSetting.petProfileMenu.container]}>
				<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
					<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
						<Text>Title</Text>
					</View>
					<View style={[petInfoSetting.petProfileMenu.bracket50]}>
						<Text style={[temp_txt.small]}>bracket50</Text>
					</View>
				</View>
			</View>
			{/* PetProfileMenu */}
			<View style={[petInfoSetting.petProfileMenu.container]}>
				<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
					<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
						<Text>Title</Text>
					</View>
					<View style={[petInfoSetting.petProfileMenu.bracket50]}>
						<Text style={[temp_txt.small]}>bracket50</Text>
					</View>
				</View>
			</View>
			{/* FamilyAccountInfo */}
			<View style={[petInfoSetting.familyAccountSetting.container]}>
				<View style={[petInfoSetting.familyAccountSetting.insideContainer]}>
					<View style={[petInfoSetting.familyAccountSetting.menuView]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text>Title</Text>
						</View>
						<View style={[petInfoSetting.petProfileMenu.bracket50]}>
							<Text style={[temp_txt.small]}>bracket50</Text>
						</View>
					</View>
					<View style={[petInfoSetting.familyAccountSetting.infoMessage]}>
						<Text>가족 계정으로 초대된 계정은 이 동물 게시글을 함께 관리합니다. 최대 3인까지만 초대 가능합니다.</Text>
					</View>
					<View style={[petInfoSetting.familyAccountSetting.familyAccounts]}>
						<Text style={[temp_txt.medium]}>FamilyAccounts</Text>
					</View>
				</View>
			</View>
			{/* ExposureSetting */}
			<View style={[petInfoSetting.exposureSetting.container]}>
				<View style={[petInfoSetting.exposureSetting.insideContainer]}>
					<View style={[petInfoSetting.exposureSetting.menuView]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text>Title</Text>
						</View>
						<View style={[petInfoSetting.petProfileMenu.bracket50]}>
							<Text style={[temp_txt.small]}>bracket50</Text>
						</View>
					</View>
					<View style={[petInfoSetting.exposureSetting.privateSettingView]}>
						<View style={[petInfoSetting.exposureSetting.privateSettingMsg]}>
							<Text>이 동물의 계정을 비공개로 전환합니다.</Text>
						</View>
						<View style={[petInfoSetting.exposureSetting.privateSettingBtn]}>
							<Text>OnOffSwitch</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
