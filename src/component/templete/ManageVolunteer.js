import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Bracket48} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';

export default ManageVolunteer = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, manageVolunteer.container]}>
				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>활동 예정중인 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList />
				</View>
				{/* separator */}
				<View style={[manageVolunteer.separator]}></View>
				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>지난 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList />
				</View>
				<View style={[manageVolunteer.showMoreContainer]}>
					<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
					<Bracket48 />
				</View>
			</View>
		</ScrollView>
	);
};
