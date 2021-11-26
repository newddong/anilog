import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Bracket48} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {dummy_UserObject_shelter, dummy_VolunteerAcitivityApplicantObject, dummy_volunteerItemList} from 'Root/config/dummyDate_json';

export default ManageVolunteer = ({route}) => {
	// 아직 navigate 관련 정해진 것이 없음
	const navigation = useNavigation();
	const volunteerItems = route.params.volunteerItems; //봉활 data(VolunteerActivityApplicantObject) => volunteer_status를 기준으로 지난 신청, 활동 예정 신청 분기
	const shelterItems = route.params.shelterItems; //유저가 신청한 봉사활동 대상 보호소들 data(userObject)

	const [scheduled_list, setScheduled_list] = React.useState([]);
	const [done_list, setDone_list] = React.useState([]);
	const [showMoreHistory, setShowMoreHistory] = React.useState(false); //지난 내역 더보기
	const [arrowStatus, setArrowStatus] = React.useState(false); // 화살표
	React.useEffect(() => {
		let scheduled_temp = [];
		let previous_temp = [];
		volunteerItems.map((v, i) => {
			if (v.volunteer_status == 'accept') {
				let found = shelterItems.find(e => e._id == v.volunteer_target_shelter);
				found.expected_date = v.volunteer_wish_date[0]; //기존 보호소 정보에는 활동 예정일자에 대한 정보가 없으므로, 봉사활동 테이블의 컬럼과 조인하여서 가져옴
				scheduled_temp.push(found);
			} else {
				let found = shelterItems.find(e => e._id == v.volunteer_target_shelter);
				found.expected_date = v.volunteer_wish_date[0]; //기존 보호소 정보에는 활동 예정일자에 대한 정보가 없으므로, 봉사활동 테이블의 컬럼과 조인하여서 가져옴
				previous_temp.push(found);
			}
		});
		setDone_list(previous_temp);
		setScheduled_list(scheduled_temp);
	}, [route.params]);

	// 지난 신청 더보기 클릭
	const showMore = () => {
		setShowMoreHistory(!showMoreHistory);
		setArrowStatus(!arrowStatus);
	};

	// 라벨 클릭
	const goToAssignVolunteer = shelterData => {
		// console.log(JSON.stringify(shelterData));
		navigation.push('ShelterVolunteerForm', shelterData);
	};

	return (
		<View style={[login_style.wrp_main, manageVolunteer.container]}>
			<ScrollView style={{flex: 1}}>
				{/* 활동 예정 중인 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>활동 예정중인 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList items={scheduled_list} onClickItem={e => goToAssignVolunteer(e)} />
				</View>

				<View style={[manageVolunteer.separator]}></View>

				{/* 지난 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>지난 신청</Text>
				</View>
				<View style={[manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList items={!showMoreHistory ? done_list.slice(0, 4) : done_list} onClickItem={e => goToAssignVolunteer(e)} />
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
