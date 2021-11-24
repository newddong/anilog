import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Bracket48} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {dummy_volunteerItemList} from 'Root/config/dummyDate_json';

export default ManageVolunteer = props => {
	// 아직 navigate 관련 정해진 것이 없음
	const navigation = useNavigation();
	const moveToShelterVolunteerForm = shelterData => {
		console.log(JSON.stringify(shelterData));
		navigation.push('ShelterVolunteerForm', shelterData);
	};

	const [showMoreHistroy, setShowMoreHistory] = React.useState(false);

	const showMore = () => {
		setShowMoreHistory(true);
	};

	return (
		<ScrollView style={{flex: 1}}>
			<View style={[login_style.wrp_main, manageVolunteer.container]}>
				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>활동 예정중인 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList data={dummy_volunteerItemList} onVolunteerItemClick={e => moveToShelterVolunteerForm(e)} />
				</View>

				{/* separator */}
				<View style={[manageVolunteer.separator]}></View>

				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>지난 신청</Text>
				</View>
				<View style={[showMoreHistroy ? manageVolunteer.volunteerList : manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList data={dummy_volunteerItemList} onVolunteerItemClick={e => moveToShelterVolunteerForm(e)} />
				</View>

				{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
				{!showMoreHistroy ? (
					<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
						<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
						<Bracket48 />
					</TouchableOpacity>
				) : null}
			</View>
		</ScrollView>
	);
};
