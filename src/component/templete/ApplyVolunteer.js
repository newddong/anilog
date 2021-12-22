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
import {getUserInfoById} from 'Root/api/userapi';
import {assignVolunteerActivity} from 'Root/api/volunteerapi';

//관련 DB테이블 - VolunteerActivityApplicantObject
export default ApplyVolunteer = ({route, navigation}) => {
	// console.log('route.params / ApplyVolunteer  : ', route.params);
	const param = route.params;
	const [loading, setLoading] = React.useState(true);
	const [shelter_data, setShelter_data] = React.useState(route.params); //선택한 보호소프로필의 userObject가 담겨있음

	React.useEffect(() => {
		Modal.popNoBtn('신청 양식을 얻어오고 있습니다.');
		getUserInfoById(
			{
				userobject_id: param.token,
			},
			result => {
				// console.log('result / getUserInfoById / ApplyVolunteer   :  ', result.msg);
				setShelter_data(result.msg);
				setLoading(false);
				Modal.close();
			},
			err => {
				console.log('err / getUserInfoById / ApplyVolunteer    :  ', err);
				Modal.close();
			},
		);
	}, [route.params]);

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			console.log('res', res);
			getUserInfoById(
				{userobject_id: res},
				result => {
					console.log('result / getUserInfoById / 내 계정 얻기 ', result.msg);
					let copy = [...data.volunteer_accompany];
					copy.push(result.msg);
					setData({...data, volunteer_accompany: copy});
				},
				err => {
					console.log('err / getUserInfoById / 내 계정 얻기 ', err);
				},
			);
		});
	}, []);

	const [data, setData] = React.useState({
		volunteer_target_shelter: param.token, //대상 보호소는 Profile에서 params로 보내줌
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
		console.log('봉사활동 신청서 ', data.volunteer_accompany.length);
	}, [data]);

	//최종 신청
	const onRegister = () => {
		Modal.popTwoBtn(
			'해당 내용으로 신청하시겠습니까?',
			'취소',
			'신청',
			() => Modal.close(),
			//최종 신청 API WRITE
			() => {
				let getAccompaniesId = [];
				data.volunteer_accompany.map((v, i) => {
					getAccompaniesId.push(v._id);
				});
				console.log('token', param.token);
				assignVolunteerActivity(
					{
						shelter_userobject_id: param.token,
						volunteer_wish_date_list: data.volunteer_wish_date,
						accompany_userobject_id_list: getAccompaniesId,
						volunteer_delegate_contact: data.volunteer_delegate_contact,
					},
					result => {
						console.log('result / assignVolunteerAct / ApplyVolunteer   :  ', result);
					},
					err => {
						console.log('err / assignVolunteerAct  / ApplyVolunteer  :  ', err);
					},
				);
				Modal.close();
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

	//봉사활동자 연락처 변경 콜백
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
	if (loading) {
		return <></>;
	} else {
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
	}
};

ApplyVolunteer.defaultProps = {};

const te = {
	addedVolunteer: {
		__v: 0,
		_id: '61bfff1395d6442789e48eea',
		pet_family: [],
		user_address: {city: '서울시', district: '중구', neighbor: '신림동'},
		user_agreement: {
			is_donation_info: true,
			is_location_service_info: true,
			is_marketting_info: true,
			is_over_fourteen: true,
			is_personal_info: true,
			is_service: true,
		},
		user_denied: false,
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: true,
		user_mobile_company: 'LG U+',
		user_my_pets: [],
		user_name: '십이월이십일',
		user_nickname: '십이월이십일',
		user_password: '1111111g',
		user_phone_number: '0105555',
		user_profile_uri:
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639972627670_rn_image_picker_lib_temp_891e66d5-d00f-49a0-a06c-8b6912e40405.jpg',
		user_register_date: '2021-12-20T03:57:07.874Z',
		user_type: 'user',
		user_upload_count: 0,
	},
	token: '61c023d9679aa5ae46128102',
};
