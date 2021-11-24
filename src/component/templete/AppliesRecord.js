import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { dummy_ShelterProtectAnimalObject } from 'Root/config/dummyDate_json';
import { NextMark } from '../atom/icon';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import ShelterList from '../organism_ksw/ShelterList';
import { appliesRecord, login_style } from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AppliesRecord = props => {
	const navigation = useNavigation();
	const showMoreAdoption = () => {
		navigation.push('ApplyAdoptionList')
	}
	const showMoreProtection = () => {
		navigation.push('ApplyTempProtectList')
	}
	const showMoreVolunteer = () => {
		navigation.push('ManageUserVolunteer')
	}
	return (
		<View style={[login_style.wrp_main, appliesRecord.container]}>
			<ScrollView>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>입양 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreAdoption} />
						</View>
					</View>
					<AnimalNeedHelpList data={dummy_ShelterProtectAnimalObject} />
				</View>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>임시보호 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreProtection} />
						</View>
					</View>
					<AnimalNeedHelpList data={dummy_ShelterProtectAnimalObject} />
				</View>
				<View style={[appliesRecord.shelterList_container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>봉사활동 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreVolunteer} />
						</View>
					</View>
					<ShelterList onShelterLabelClick={shelterInfo => navigation.push('UserVolunteerForm', shelterInfo)} />
				</View>
			</ScrollView>
		</View>
	);
};
