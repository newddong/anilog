import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {_dummy_userObject_user, _dummy_VolunteerActivityApplicant} from 'Root/config/dummy_data_hjs';
import {dummy_manageUserVolunteer} from 'Root/config/dummyDate_json';

export default ManageVolunteer = ({route}) => {
	// console.log(route.params);
	const navigation = useNavigation();
	const [data, setData] = React.useState(dummy_manageUserVolunteer);

	const [scheduled_list, setScheduled_list] = React.useState(data.slice(0, 3)); //활동 예정중인 신청
	const [done_list, setDone_list] = React.useState(data.slice(4, 7)); // 지난 신청
	const [showMoreHistory, setShowMoreHistory] = React.useState(false); //지난 내역 더보기
	const [arrowStatus, setArrowStatus] = React.useState(false); // 화살표

	// 지난 신청 더보기 클릭
	const showMore = () => {
		setShowMoreHistory(!showMoreHistory);
		setArrowStatus(!arrowStatus);
	};

	// 라벨 클릭 => 봉사활동 신청서 필요 데이터 : 보호소 정보 / 해당 봉사활동 데이터
	const goToAssignVolunteer = shelterData => {
		// console.log('shelter', shelterData);
		console.log('route');
		route.params == 'ShelterMenu' ? navigation.push('ShelterVolunteerForm', shelterData) : navigation.push('UserVolunteerForm', shelterData);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView contentContainerStyle={manageVolunteer.container}>
				{/* 활동 예정 중인 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>활동 예정중인 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList items={scheduled_list} type={'notDone'} onClickItem={e => goToAssignVolunteer(e)} />
				</View>

				<View style={[manageVolunteer.separator]}></View>

				{/* 지난 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>지난 신청</Text>
				</View>
				<View style={[showMoreHistory ? manageVolunteer.previous_volunteerList_expanded : manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList items={done_list} type={'done'} onClickItem={e => goToAssignVolunteer(e)} />
				</View>

				{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
				{done_list.length > 4 ? (
					<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
						<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
						{arrowStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
					</TouchableOpacity>
				) : null}
			</ScrollView>
		</View>
	);
};
