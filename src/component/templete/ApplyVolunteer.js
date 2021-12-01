import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, FlatList, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {dummy_shelterInfo, dummy_userObject} from 'Root/config/dummyDate_json';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Add_Volunteer, Calendar48_Filled, Cross46, Person48, Phone48} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import AccountList from '../organism_ksw/AccountList';
import ShelterInfo from '../molecules/ShelterInfo';
import {applyVolunteer, btn_style, login_style} from './style_templete';
import DatePicker from '../molecules/DatePicker';
import Input24 from '../molecules/Input24';
import Modal from '../modal/Modal';

export default ApplyVolunteer = ({route, navigation}) => {
	// console.log('route/params at ApplyVolunteer', route.params);
	const shelter_data = route.params; //선택한 보호소프로필의 userObject가 담겨있음

	//VolunteerAcitivityApplicantObject 를 기준으로 데이터 write실시
	const [data, setData] = React.useState({
		volunteer_target_shelter: shelter_data._id,
		volunteer_wish_date: [],
		volunteer_accompany: [],
		volunteer_delegate_contact: '',
		volunteer_status: 'waiting',
	});

	React.useEffect(() => {
		console.log('data', data.volunteer_delegate_contact);
	}, [data]);

	//최종 신청
	const onRegister = () => {
		Modal.popTwoBtn(
			'해당 내용으로 신청하시겠습니까?',
			'취소',
			'신청',
			() => Modal.close(),
			() => {
				// data State 데이터베이스에 넣는 작업 필요
				navigation.push('UserProfile');
			},
		);
	};

	//계정추가 버튼 클릭
	const addVolunteer = () => {
		navigation.push('Search');
		// let copy = [...data.volunteer_accompany];
		// //유저 계정 검색 구현되면 userObject 얻어오는 로직 추가해야함 현재는 더미로 진행
		// copy.push(dummy_userObject[1]);
		// setData({...data, volunteer_accompany: copy});
	};

	//DatePicker로 날짜 지정할 시, 하단에 봉사활동 날짜 Item이 View로 보여짐
	const onDateChange = date => {
		let copy = [...data.volunteer_wish_date];
		copy.push(date);
		setData({...data, volunteer_wish_date: copy});
	};

	const onChangePhoneNumber = num => {
		setData({...data, volunteer_delegate_contact: num});
	};

	//봉사활동 날짜 Item 우측 지우기마크 클릭 시 해당 Item 삭제 및 View도 삭제
	const onDeleteVolunteerDate = index => {
		let copy = [...data.volunteer_wish_date];
		copy.splice(index, 1);
		setData({...data, volunteer_wish_date: copy});
	};

	//봉사활동 참여인원 List에서 지우기 클릭
	const onDeleteAccount = index => {
		let copy = [...data.volunteer_accompany];
		copy.splice(index, 1);
		setData({...data, volunteer_accompany: copy});
	};

	//봉사활동 날짜 item render
	const renderItem = (item, index) => {
		return (
			<View style={[applyVolunteer.volunteerDateList]}>
				<Text style={[txt.roboto28, applyVolunteer.volunteerDateList_text]}>{item}</Text>
				<View style={[applyVolunteer.volunteerDateList_cross]}>
					<Cross46 onPress={() => onDeleteVolunteerDate(index)} />
				</View>
			</View>
		);
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 1}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
				<View style={[login_style.wrp_main, applyVolunteer.container]}>
					{/* 보호소 정보 박스 */}
					<View style={[applyVolunteer.shelterInfo]}>
						<ShelterInfo data={shelter_data} />
					</View>
					{/* 봉사활동 희망 날짜 */}
					<View style={[applyVolunteer.viewForm]}>
						<View style={[applyVolunteer.viewForm_step1]}>
							<View style={[applyVolunteer.icon48]}>
								<Calendar48_Filled />
							</View>
							<View style={[applyVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>봉사활동 희망 날짜</Text>
							</View>
						</View>
						<DatePicker width={654} onDateChange={onDateChange} />
						{/* 봉사활동 희망날짜 FlatList */}
						<FlatList data={data.volunteer_wish_date} renderItem={({item, index}) => renderItem(item, index)} />
					</View>
					{/* 참여인원 */}
					<View style={[applyVolunteer.participants]}>
						<View style={[applyVolunteer.participants_step1]}>
							<View style={[applyVolunteer.icon48]}>
								<Person48 />
							</View>
							<View style={[applyVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>참여 인원</Text>
								<Text style={[txt.noto22, {color: GRAY20}]}>(비회원 포함 기입 / 계정 추가는 생략 가능)</Text>
							</View>
						</View>
						<TextInput style={[applyVolunteer.number_of_volunteerers]} value={data.volunteer_accompany.length + ' 명'} />
						{/* 봉활참여인원 FlatList 여기 */}
						<View style={[applyVolunteer.participants_step2]}>
							<View style={[applyVolunteer.accountList]}>
								<AccountList items={data.volunteer_accompany} width={446} onDelete={onDeleteAccount} />
							</View>
							<View style={[applyVolunteer.addParticipantBtn]}>
								<Add_Volunteer onPress={addVolunteer} />
								<Text style={[txt.noto28, applyVolunteer.addParticipantTxt]}>계정 추가</Text>
							</View>
						</View>
					</View>
					{/* 봉사활동자 연락처 */}
					<View style={[applyVolunteer.participants_contact]}>
						<View style={[applyVolunteer.viewForm_step1]}>
							<View style={[applyVolunteer.icon48]}>
								<Phone48 />
							</View>
							<View style={[applyVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>봉사 활동자 연락처</Text>
							</View>
						</View>
						<View style={[applyVolunteer.participants_contact_text]}>
							<Input24 width={654} placeholder={'연락처를 적어주세요.'} onChange={onChangePhoneNumber} />
						</View>
					</View>
					{/* 신청 버튼 */}
					<View style={[btn_style.btn_w226, applyVolunteer.btn_w226]}>
						<AniButton btnLayout={btn_w226} btnTitle={'신청'} onPress={onRegister} />
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
};
