import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, FlatList, TextInput} from 'react-native';
import DP from 'Root/config/dp';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserLabel} from 'Root/api/userapi_ksw';
import {assignVolunteer} from 'Root/api/volunteer_api_ksw';

//관련 DB테이블 - VolunteerActivityApplicantObject
export default ApplyVolunteer = ({route, navigation}) => {
	// console.log('route.params', route.params);
	const param = route.params;
	const shelter_data = param.profile_data; //선택한 보호소프로필의 userObject가 담겨있음
	//VolunteerAcitivityApplicantObject 를 기준으로 데이터 write실시
	const [data, setData] = React.useState({
		volunteer_target_shelter: shelter_data._id, //대상 보호소는 Profile에서 params로 보내줌
		volunteer_wish_date: [],
		volunteer_accompany: [],
		volunteer_delegate_contact: '',
		volunteer_status: 'waiting',
	});

	//추가된 봉사활동자가 있는 경우 Data에 추가
	React.useEffect(() => {
		if (param.addedVolunteer != undefined) {
			let copy = [...data.volunteer_accompany];
			copy.push(param.addedVolunteer);
			setData({...data, volunteer_accompany: copy});
		}
	}, [param.addedVolunteer]);

	React.useEffect(() => {
		// console.log('data Volunteer', data.volunteer_accompany);
	}, [data]);

	React.useEffect(() => {
		async function getLoginUser() {
			let token = await AsyncStorage.getItem('token');
			getUserLabel(
				token,
				successed => {
					console.log('success', successed);
					//API에서 받아온 로그인한 유저 라벨 데이터를 Volunteer_accompany 배열 0번 인덱스에 넣음
					setData({...data, volunteer_accompany: [successed]});
				},
				err => {
					console.log('err', err);
				},
			);
		}
		getLoginUser();
	}, []);

	//최종 신청
	const onRegister = () => {
		Modal.popTwoBtn(
			'해당 내용으로 신청하시겠습니까?',
			'취소',
			'신청',
			() => Modal.close(),
			//최종 신청 API WRITE

			() => {
				Modal.close();
				assignVolunteer(
					data,
					successed => {
						console.log('success', successed);
						Modal.popNoBtn('신청 완료되었습니다.');
						setTimeout(() => {
							navigation.goBack();
							Modal.close();
						}, 3000);
					},
					err => {
						console.log('err', err);
					},
				);
			},
		);
	};

	//계정추가 버튼 클릭
	const addVolunteer = () => {
		navigation.push('Search', {mother: 0, child: 1, prevNav: route.name});
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
		<View style={[login_style.wrp_main, applyVolunteer.container]}>
			<ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
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
					<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
						<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
							<FlatList data={data.volunteer_wish_date} renderItem={({item, index}) => renderItem(item, index)} />
						</ScrollView>
					</ScrollView>
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
					<TextInput editable={false} style={[applyVolunteer.number_of_volunteerers]} value={data.volunteer_accompany.length + ' 명'} />
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
						<Input24 width={654} placeholder={'연락처를 적어주세요.'} onChange={onChangePhoneNumber} value={data.volunteer_delegate_contact} />
					</View>
				</View>
				{/* 신청 버튼 */}
				<View style={[btn_style.btn_w226, applyVolunteer.btn_w226]}>
					<AniButton
						onPress={onRegister}
						btnTitle={'신청'}
						disable={data.volunteer_accompany.length > 0 && data.volunteer_delegate_contact.length > 0 ? false : true}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

ApplyVolunteer.defaultProps = {};
