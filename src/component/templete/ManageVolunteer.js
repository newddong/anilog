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
import {getUserVolunteerItemList} from 'Root/api/volunteer_api_ksw';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getShelterVolunteerActivityList} from 'Root/api/volunteerapi';

export default ManageVolunteer = ({route}) => {
	// console.log(route.params);
	// console.log('route.name', route.name);
	const navigation = useNavigation();
	const isShelterUser = route.name == 'ManageShelterVolunteer';
	const [data, setData] = React.useState(dummy_manageUserVolunteer); // API에서 받아올 데이터가 담길 state

	const [scheduled_list, setScheduled_list] = React.useState(data); //활동 예정중인 신청
	const [done_list, setDone_list] = React.useState(data); // 지난 신청
	const [showMoreHistory, setShowMoreHistory] = React.useState(false); //지난 내역 더보기

	React.useEffect(() => {
		//VolunteerActivityApplicantObject에서 volunteer_accompany 배열에 로그인 유저의 _id가 포함되어 있으면 Get
		async function getVolunteerList() {
			isShelterUser;
			let token = await AsyncStorage.getItem('token');
			getUserVolunteerItemList(
				token,
				successed => {
					console.log('success / getUserVolunterItemList', successed);
					//받아온 list들을 volunteer_status - Enum('done','notaccept','accept’,’waiting’,’cancel')에 따라 분류
					//wating : scheduled_list에 추가
				},
				err => {
					console.log('err', err);
				},
			);
		}
		getVolunteerList();
	}, []);

	// 봉사활동 데이터 불러오기
	React.useEffect(() => {
		console.log(' - ManageVolunteer -');
		const nowDate = new Date(); // 현재 날짜 및 시간
		let setScheduled = [];
		let doneduled = [];
		getShelterVolunteerActivityList(
			{
				volunteer_activity_object_id: '',
				volunteer_status: 'waiting',
				request_number: 30,
			},
			data => {
				// console.log(`getShelterVolunteerActivityList data:${JSON.stringify(data.msg)}`);
				//volunteer_accompany 속성에 있는 데이터들을 1depth 올려준다.
				data.msg.map((v, i) => {
					data.msg[i].user_profile_uri = data.msg[i].volunteer_accompany[0].user_profile_uri;
					data.msg[i].user_introduction = data.msg[i].volunteer_accompany[0].user_introduction;
					data.msg[i].user_nickname = data.msg[i].volunteer_accompany[0].user_nickname;
					//날짜포멧변경
					data.msg[i].volunteer_wish_date[0] = data.msg[i].volunteer_wish_date[0].substring(0, 10).replace(/-/g, '.');
					//오늘 날짜와 지난 날짜를 구분해서 최근 신청서와 지난 신청서를 구분.
					const strArry = data.msg[i].volunteer_wish_date[0].split('.');
					const dataData = new Date(strArry[0], strArry[1], strArry[1]);
					if (nowDate <= dataData) {
						setScheduled.push(data.msg[i]);
					} else {
						doneduled.push(data.msg[i]);
					}
				});

				setScheduled_list(setScheduled);
				setDone_list(doneduled);
			},
			errcallback => {
				console.log(`getShelterVolunteerActivityList errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	}, []);

	// 지난 신청 더보기 클릭
	const showMore = () => {
		setShowMoreHistory(!showMoreHistory);
	};

	// 봉사활동 아이템 클릭 => 봉사활동 신청서 필요 데이터 : 보호소 정보 / 해당 봉사활동 데이터
	const goToAssignVolunteer = shelterData => {
		// console.log('shelter', shelterData);
		isShelterUser ? navigation.push('ShelterVolunteerForm', shelterData) : navigation.push('UserVolunteerForm', shelterData);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView contentContainerStyle={manageVolunteer.container}>
				{/* 활동 예정 중인 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>{isShelterUser ? '최근 신청서' : '활동 예정중인 신청'} </Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList items={scheduled_list} type={'notDone'} onClickItem={goToAssignVolunteer} />
				</View>

				<View style={[manageVolunteer.separator]}></View>

				{/* 지난 신청 */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>{isShelterUser ? '지난 신청서' : '지난 신청'}</Text>
				</View>
				<View style={[showMoreHistory ? manageVolunteer.previous_volunteerList_expanded : manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList items={done_list} type={'done'} onClickItem={goToAssignVolunteer} />
				</View>

				{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
				{done_list.length > 4 ? (
					<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
						<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
						{showMoreHistory ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}
					</TouchableOpacity>
				) : null}
			</ScrollView>
		</View>
	);
};
