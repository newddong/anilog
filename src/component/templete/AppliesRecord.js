import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {dummy_AppliesRecord_rescue} from 'Root/config/dummy_data_hjs';
import {NextMark} from '../atom/icon';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import ShelterList from '../organism_ksw/ShelterList';
import {appliesRecord, login_style} from './style_templete';

export default AppliesRecord = props => {
	const [data, setData] = React.useState({
		favorite: '',
	});

	const navigation = useNavigation();
	const showMoreAdoption = () => {
		navigation.push('ApplyAdoptionList');
	};
	const showMoreProtection = () => {
		navigation.push('ApplyTempProtectList');
	};
	const showMoreVolunteer = () => {
		navigation.push('ManageUserVolunteer');
	};
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};
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
					<AnimalNeedHelpList data={dummy_AppliesRecord_rescue} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>임시보호 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreProtection} />
						</View>
					</View>
					<AnimalNeedHelpList data={dummy_AppliesRecord_protect} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
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
