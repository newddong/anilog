import React from 'react';
import {ScrollView, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
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
						v.shelter_address = v.volunteer_target_shelter.shelter_address;
						v.shelter_name = v.volunteer_target_shelter.shelter_name;
						v.user_type = v.volunteer_target_shelter.user_type;
						v.user_profile_uri = v.volunteer_target_shelter.user_profile_uri;
						wishdate.getTime() < thisTime ? doneList.push(v) : notDoneList.push(v); // 비교 후 '지난 내역' / '활동 예정' 각 배열에 푸쉬
					});
					console.log('done', doneList[0]);
					const d = {
						__v: 0,
						_id: '61c04191679aa5ae461283eb',
						volunteer_accompany: ['61b84ddb4a1b66f74b699b1e', '61b6a6263271772d17ad6498', '61b84ddb4a1b66f74b699b1e', null],
						volunteer_delegate_contact: '0109640521',
						volunteer_status: 'accept',
						volunteer_target_shelter: {
							__v: 0,
							_id: '61c023d9679aa5ae46128102',
							pet_family: [],
							shelter_address: {brief: '마포구 신수동 89-77', detail: '203호'},
							shelter_delegate_contact_number: '01096450001',
							shelter_foundation_date: '2011-12-04T00:00:00.000Z',
							shelter_homepage: '',
							shelter_name: '상우 보호소6',
							user_agreement: {
								is_donation_info: false,
								is_location_service_info: false,
								is_marketting_info: false,
								is_over_fourteen: false,
								is_personal_info: false,
								is_service: false,
							},
							user_denied: false,
							user_email: 'lanad01@naver.com',
							user_follow_count: 0,
							user_follower_count: 0,
							user_interests: [],
							user_introduction:
								'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
							user_is_verified_email: false,
							user_is_verified_phone_number: false,
							user_my_pets: [],
							user_name: '상우 보호소5',
							user_nickname: '가하즈보호소',
							user_password: '121212',
							user_phone_number: '01096450001',
							user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
							user_register_date: '2021-12-20T06:34:01.773Z',
							user_type: 'shelter',
							user_upload_count: 0,
						},
						volunteer_wish_date: ['2021-12-23T00:00:00.000Z'],
					};

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
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'}></ActivityIndicator>
			</View>
		);
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
