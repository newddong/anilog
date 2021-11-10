import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {Bracket48} from '../atom/icon';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';

export default ManageVolunteer = props => {
	const moveToShelterVolunteerForm = () => {
		navigation.push('ShelterVolunteerForm');
	};

	return (
		<View style={[login_style.wrp_main, manageVolunteer.container]}>
			{/* VolunteerList */}
			<TouchableOpacity onPress={moveToShelterVolunteerForm}>
				<View style={[manageVolunteer.volunteerList]}>
					<Text>VolunteerList</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={moveToShelterVolunteerForm}>
				{/* separator */}
				<View style={[manageVolunteer.separator]}></View>
				{/* VolunteerList */}
				<View style={[manageVolunteer.volunteerList]}>
					<Text>VolunteerList</Text>
				</View>
			</TouchableOpacity>
			<View style={[manageVolunteer.showMoreContainer]}>
				<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
				<Bracket48 />
			</View>
		</View>
	);
};
