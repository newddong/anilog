import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {NextMark} from '../atom/icon';
import AnimalNeedHelp from '../organism_ksw/AnimalNeedHelp';
import ShelterList from '../organism_ksw/ShelterList';
import {appliesRecord, login_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AppliesRecord = props => {
	const navigation = useNavigation();
	return (
		<View style={[login_style.wrp_main, appliesRecord.container]}>
			<ScrollView>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>입양 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<TouchableOpacity onPress={() => navigation.push('ApplyAdoptionList')} style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark />
						</TouchableOpacity>
					</View>
					<AnimalNeedHelp />
				</View>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>임시보호 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark />
						</View>
					</View>
					<AnimalNeedHelp />
				</View>
				<View style={[appliesRecord.shelterList_container]}>
					<ShelterList />
				</View>
			</ScrollView>
		</View>
	);
};
