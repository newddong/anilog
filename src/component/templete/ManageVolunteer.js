import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {Bracket48} from '../atom/icon';
import {login_style, manageVolunteer} from './style_templete';

export default ManageVolunteer = props => {
	return (
		<View style={[login_style.wrp_main, manageVolunteer.container]}>
			{/* VolunteerList */}
			<View style={[manageVolunteer.volunteerList]}>
				<Text>VolunteerList</Text>
			</View>
			{/* separator */}
			<View style={[manageVolunteer.separator]}></View>
			{/* VolunteerList */}
			<View style={[manageVolunteer.volunteerList]}>
				<Text>VolunteerList</Text>
			</View>
			<View style={[manageVolunteer.showMoreContainer]}>
				<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
				<Bracket48 />
			</View>
		</View>
	);
};
