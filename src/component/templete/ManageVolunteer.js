import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Bracket48} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {dummy_UserObject_shelter, dummy_VolunteerAcitivityApplicantObject, dummy_volunteerItemList} from 'Root/config/dummyDate_json';
import {_dummy_userObject_user, _dummy_VolunteerActivityApplicant} from 'Root/config/dummy_data_hjs';

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
		let volunteer_array = [];
		let expired_array = [];

		if (route.params.user_type == undefined) {
			console.log('route.params.user_type ==>' + route.params.user_type);
			volunteerItems.map((v, i) => {
				if (v.volunteer_status == 'accept') {
					let found = shelterItems.find(e => e._id == v.volunteer_target_shelter);
					found.expected_date = v.volunteer_wish_date; //기존 보호소 정보에는 활동 예정일자에 대한 정보가 없으므로, 봉사활동 테이블의 컬럼과 조인하여서 가져옴
					found.volunteer_id = v._id; // 기존 보호소 정보에는 없는 봉사활동 고유 _id 본래라면 조인을 통해서 얻어옴
					scheduled_temp.push(found);
				} else {
					let found = shelterItems.find(e => e._id == v.volunteer_target_shelter);
					found.expected_date = v.volunteer_wish_date; //기존 보호소 정보에는 활동 예정일자에 대한 정보가 없으므로, 봉사활동 테이블의 컬럼과 조인하여서 가져옴
					found.volunteer_id = v._id; // 기존 보호소 정보에는 없는 봉사활동 고유 _id 본래라면 조인을 통해서 얻어옴
					previous_temp.push(found);
				}
			});
			setDone_list(previous_temp);
			setScheduled_list(scheduled_temp);
		} else {
			console.log('route.params.user_type ==>' + route.params.user_type);
			_dummy_VolunteerActivityApplicant.map((v, i) => {
				//신청서를 작성한 사용자 중심의 데이터 select
				if (v.volunteer_status == 'accept') {
					let accept_data = _dummy_userObject_user.find(e => e._id == v.volunteer_accompany[0]);
					accept_data.expected_date = v.volunteer_wish_date;
					accept_data.volunteer_id = v._id;
					accept_data.volunteer_status = 'accept';
					volunteer_array.push(accept_data);
				} else {
					let other_data = _dummy_userObject_user.find(e => e._id == v.volunteer_accompany[0]);
					other_data.expected_date = v.volunteer_wish_date;
					other_data.volunteer_id = v._id;
					other_data.volunteer_status = v.volunteer_status;
					// console.log('other_data-------------------' + JSON.stringify(other_data));
					expired_array.push(other_data);
				}
			});
			setScheduled_list(volunteer_array);
			setDone_list(expired_array);
		}
	}, [route.params]);

	// 지난 신청 더보기 클릭
	const showMore = () => {
		setShowMoreHistory(!showMoreHistory);
		setArrowStatus(!arrowStatus);
	};

	// 라벨 클릭 => 봉사활동 신청서 필요 데이터 : 보호소 정보 / 해당 봉사활동 데이터
	const goToAssignVolunteer = shelterData => {
		// console.log('shelter', shelterData);
		if (route.params.user_type == undefined) {
			console.log('ShelterVolunteerForm-----------------------');
			navigation.push('ShelterVolunteerForm', shelterData);
		} else {
			console.log('goToAssignVolunteer-----------------------');
			navigation.push('UserVolunteerForm', shelterData);
		}
	};

	//더보기 기능 함수
	// const moreView = () => {
	// 	if (showMoreHistory != true) {
	// 		return (
	// 			<View style={[manageVolunteer.previous_volunteerList]}>
	// 				{done_list.length > 4 ? (
	// 					<VolunteerItemList items={[...done_list.slice(0, 4)]} onClickItem={e => goToAssignVolunteer(e)} />
	// 				) : (
	// 					<VolunteerItemList items={done_list} onClickItem={e => goToAssignVolunteer(e)} />
	// 				)}
	// 			</View>
	// 		);
	// 	} else {
	// 		return (
	// 			<View style={[manageVolunteer.previous_volunteerList_expanded]}>
	// 				<VolunteerItemList items={done_list} onClickItem={e => goToAssignVolunteer(e)} />
	// 			</View>
	// 		);
	// 	}
	// };

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
				<View style={[showMoreHistory ? manageVolunteer.previous_volunteerList_expanded : manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList items={done_list} onClickItem={e => goToAssignVolunteer(e)} />
				</View>

				{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
				{done_list.length > 4 ? (
					<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
						<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기{showMoreHistory}</Text>
						{arrowStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
					</TouchableOpacity>
				) : null}
			</ScrollView>
		</View>
	);
};
