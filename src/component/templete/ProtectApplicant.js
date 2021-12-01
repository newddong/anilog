import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, protectRequestList_style, baseInfo_style, manageVolunteer} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import FilterButton from '../molecules/FilterButton';
import {Meatball50_GRAY20_Horizontal} from '../atom/icon';
import {txt} from 'Root/config/textstyle';
import {_dummy_userObject_user} from 'Root/config/dummy_data_hjs';
import {GRAY20} from 'Root/config/color';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ProtectApplicant = props => {
	return (
		<View style={[login_style.wrp_main, manageVolunteer.container]}>
			{/* 활동 예정 중인 신청 */}
			<View style={[manageVolunteer.title]}>
				<Text style={[txt.noto24, {color: GRAY20}]}>입양 신청</Text>
			</View>
			<View style={[manageVolunteer.volunteerList]}>
				<Text style={([txt.noto24], {color: GRAY20})}>입양 신청건이 없습니다.</Text>
			</View>
			<View style={[manageVolunteer.separator]}></View>

			{/* 지난 신청 */}
			<View style={[manageVolunteer.title]}>
				<Text style={[txt.noto24, {color: GRAY20}]}>임시보호 신청</Text>
				<Text>2</Text>
			</View>
			{console.log('_dummy_userObject_user=>' + JSON.stringify(_dummy_userObject_user))}
			{/* <VolunteerItemList items={_dummy_userObject_user} /> */}
		</View>
	);
};
