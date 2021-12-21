import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import {_dummy_userObject_user, _dummy_VolunteerActivityApplicant} from 'Root/config/dummy_data_hjs';
import {getShelterVolunteerActivityList, getUserVolunteerActivityList} from 'Root/api/volunteerapi';
import {getUserInfoById} from 'Root/api/userapi';
import moment from 'moment';

export default ManageVolunteer = ({route}) => {
	// console.log(route.params);
	// console.log('route.name', route.name);
	const navigation = useNavigation();
	const isShelterUser = route.name == 'ManageShelterVolunteer';
	const [loading, setLoading] = React.useState(true);

	const [notDoneList, setNotDoneList] = React.useState(); //활동 예정중인 신청
	const [doneList, setDoneList] = React.useState([1]); // 지난 신청
	const [showMoreHistory, setShowMoreHistory] = React.useState(false); //지난 내역 더보기

	React.useEffect(() => {
		if (!isShelterUser) {
			console.log('ManageUserVolunteer');
			getUserVolunteerActivityList(
				{},
				result => {
					// console.log('success / getUserVolunterItemList / ManageVolunteer', result.msg);
					let doneList = []; //지난 내역을 담을 컨테이너
					let notDoneList = []; //활동 예정 중인 신청을 담을 컨테이너
					//현재는 조인이 안되는 상황이므로 클라이언트에서 timeValue로 분류
					result.msg.map((v, i) => {
						let wishdate = moment(v.volunteer_wish_date[0]).toDate(); //봉사활동 희망날짜 배열에서 첫번째 값을 받아와 Date타입으로 치환
						let thisTime = new Date().getTime(); // 현재 시간
						wishdate.getTime() < thisTime ? doneList.push(v) : notDoneList.push(v); // 비교 후 '지난 내역' / '활동 예정' 각 배열에 푸쉬
					});
					//봉사활동 정보는 있어도 보호소 이미지라벨 데이터(프로필 uri, 보호소 이름 , 소개글) 은 없기 때문에 우선 임시로 API접근
					doneList.map((v, i) => {
						getUserInfoById(
							{
								userobject_id: v.volunteer_target_shelter,
							},
							result => {
								// console.log('result / getUserProfile /ManageVolunteer   : ', result.msg.user_profile_uri);
								doneList[i].user_profile_uri = result.msg.user_profile_uri;
								doneList[i].shelter_address = result.msg.shelter_address;
								doneList[i].shelter_name = result.msg.shelter_name;
								doneList[i].user_type = result.msg.user_type;
								doneList[i].shelter_delegate_contact_number = result.msg.shelter_delegate_contact_number;
							},
							err => {
								console.log('err / getUserProfile / ManageVolunteer / doneList', err);
							},
						);
					});
					notDoneList.map((v, i) => {
						getUserInfoById(
							{
								userobject_id: v.volunteer_target_shelter,
							},
							result => {
								// console.log('result / getUserProfile /ManageVolunteer   : ', result);
								notDoneList[i].user_profile_uri = result.msg.user_profile_uri;
								notDoneList[i].shelter_address = result.msg.shelter_address;
								notDoneList[i].shelter_name = result.msg.shelter_name;
								notDoneList[i].user_type = result.msg.user_type;
								notDoneList[i].shelter_delegate_contact_number = result.msg.shelter_delegate_contact_number;
							},
							err => {
								console.log('err / getUserProfile / ManageVolunteer / notDoneList', err);
							},
						);
					});
					setDoneList(doneList); //API로 받아온 지난 내역 값 setState
					setNotDoneList(notDoneList); //이하동문
					// setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 500);
				},
				err => {
					console.log('err', err);
				},
			);
		} else {
			//ShelterMenu => 봉사활동 신청관리
			console.log(' - ManageShelterVolunteer -');
			let notDoneList = [];
			let doneList = [];
			getShelterVolunteerActivityList(
				{
					volunteer_activity_object_id: '',
					volunteer_status: 'waiting',
					request_number: 30,
				},
				data => {
					//volunteer_accompany 속성에 있는 데이터들을 1depth 올려준다.
					data.msg.map((v, i) => {
						data.msg[i].user_profile_uri = data.msg[i].volunteer_accompany[0].user_profile_uri;
						data.msg[i].user_introduction = data.msg[i].volunteer_accompany[0].user_introduction;
						data.msg[i].user_nickname = data.msg[i].volunteer_accompany[0].user_nickname;
						let wishdate = moment(v.volunteer_wish_date[0]).toDate(); //봉사활동 희망날짜 배열에서 첫번째 값을 받아와 Date타입으로 치환
						let thisTime = new Date().getTime(); // 현재 시간
						wishdate.getTime() < thisTime ? doneList.push(v) : notDoneList.push(v); // 비교 후 '지난 내역' / '활동 예정' 각 배열에 푸쉬
						//날짜포멧변경
						// data.msg[i].volunteer_wish_date[0] = data.msg[i].volunteer_wish_date[0].substring(0, 10).replace(/-/g, '.');
						//오늘 날짜와 지난 날짜를 구분해서 최근 신청서와 지난 신청서를 구분.
						// const strArry = data.msg[i].volunteer_wish_date[0].split('.');
						// const dataData = new Date(strArry[0], strArry[1], strArry[1]);
						// if (nowDate <= dataData) {
						// 	notDoneList.push(data.msg[i]);
						// } else {
						// 	doneList.push(data.msg[i]);
						// }
					});
					setDoneList(doneList);
					setNotDoneList(notDoneList);
					setTimeout(() => {
						setLoading(false);
					}, 500);
				},
				errcallback => {
					console.log(`getShelterVolunteerActivityList errcallback:${JSON.stringify(errcallback)}`);
				},
			);
		}
	}, []);

	React.useEffect(() => {
		// loading ? Modal.popNoBtn('봉사활동 정보를 \n 받아오고 있습니다.') : Modal.close();
	}, [loading]);

	// 지난 신청 더보기 클릭
	const showMore = () => {
		setShowMoreHistory(!showMoreHistory);
	};

	// 봉사활동 아이템 클릭 => 봉사활동 신청서 필요 데이터 : 보호소 정보 / 해당 봉사활동 데이터
	const goToAssignVolunteer = shelterData => {
		// console.log('shelter', shelterData);
		isShelterUser ? navigation.push('ShelterVolunteerForm', shelterData) : navigation.push('UserVolunteerForm', shelterData);
	};

	if (loading) {
		return <></>;
	} else {
		return (
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<ScrollView contentContainerStyle={manageVolunteer.container}>
					{/* 활동 예정 중인 신청 */}
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto24, {color: GRAY20}]}>{isShelterUser ? '최근 신청서' : '활동 예정중인 신청'} </Text>
					</View>
					<View style={[manageVolunteer.volunteerList]}>
						<VolunteerItemList items={notDoneList} type={'notDone'} onClickItem={goToAssignVolunteer} />
					</View>

					<View style={[manageVolunteer.separator]}></View>

					{/* 지난 신청 */}
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto24, {color: GRAY20}]}>{isShelterUser ? '지난 신청서' : '지난 신청'}</Text>
					</View>
					<View style={[showMoreHistory ? manageVolunteer.previous_volunteerList_expanded : manageVolunteer.previous_volunteerList]}>
						<VolunteerItemList items={doneList} type={'done'} onClickItem={goToAssignVolunteer} />
					</View>

					{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
					{doneList.length > 4 ? (
						<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
							<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
							{showMoreHistory ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
						</TouchableOpacity>
					) : null}
				</ScrollView>
			</View>
		);
	}
};
