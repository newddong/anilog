import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {dummy_userObject, dummy_VolunteerAcitivityApplicantObject} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Add_Volunteer, Calendar48_Filled, Person48, Phone48} from '../atom/icon';
import Modal from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ShelterInfo from '../molecules/ShelterInfo';
import AccountList from '../organism_ksw/AccountList';
import {login_style, applicationFormVolunteer, btn_style} from './style_templete';
import {_dummy_ApplicationFormVolunteer_shelter} from 'Root/config/dummy_data_hjs';

export default ApplicationFormVolunteer = ({route, navigation}) => {
	console.log('shelterData', route.params);
	// console.log('route / app', route.params);
	const dummy_volunteer = dummy_VolunteerAcitivityApplicantObject;
	const [vol_object, setVol_object] = React.useState(); // 봉사활동 오브젝트 담겨져있음 => 결국 이 데이터를 처리하는 장소임 여기는
	const [shelterData, setShelterData] = React.useState(route.params); //route.params에는 보호소 userObject가 담겨있음
	const [accompanyItems, setAccompanyItems] = React.useState([]); // 봉사활동자 정보가 담겨져 있음
	const [isShelterOwner, setIsShelterOwner] = React.useState(true);
	const [login_user_type, setLogin_user_type] = React.useState(true);

	React.useEffect(() => {
		if (!login_user_type) {
			//shelterData에 있는 봉사활동 고유 _id 로 봉사활동 object 검색
			let found_volunteer_obj = dummy_volunteer.find(e => e._id == shelterData.volunteer_id);
			setVol_object(found_volunteer_obj);
			//이제 받아온 volunteer_accompany를 토대로 해당 봉사자들(volunteer_accompany) 정보 검색
			let copy = [];
			found_volunteer_obj.volunteer_accompany.map((v, i) => {
				let found_accompany_object = dummy_userObject.find(e => e._id == v);
				copy.push(found_accompany_object);
			});
			//해당 봉사자들의 _id와 일치하는 userObject를 싹다 긁어옴 => setAccompanyItems
			setAccompanyItems(copy);
		}
	}, [route.params]);

	//로그인 유저 == 해당 봉사활동 신청서를 받는 입장인지 여부 확인
	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			try {
				res == shelterData._id ? setIsShelterOwner(true) : null;
			} catch (err) {
				console.log(err);
			}
		});
	}, [shelterData]);

	//계정 추가 - 미구현 상태
	const addAccompany = () => {
		console.log('d');
	};

	// 참여인원 삭제작업 , API 연결 작업 필요
	const onDeleteAccompany = (index, item) => {
		let copy = [...accompanyItems];
		copy.splice(index, 1);
		setAccompanyItems(copy);
		let copy_volunteer_accompany = [...vol_object.volunteer_accompany];
		//삭제를 클릭한 AccountItem의 userObject 고유 _id를 얻어옴
		// 이후 해당 봉사활동 Object의 봉활자 Array [유저,유저,유저] 와 비교 후 _id 일치하는 data는 삭제
		copy_volunteer_accompany.splice(
			copy_volunteer_accompany.findIndex(e => e == item._id),
			1,
		);
		setVol_object({...vol_object, volunteer_accompany: copy_volunteer_accompany});
	};

	//일반 봉사활동 신청자 계정이 신청 취소 버튼을 눌렀을 때
	const onPressCancel = () => {
		Modal.popTwoBtn(
			'봉사활동 신청을 취소하시겠습니까? ',
			'아니오',
			'그래요',
			() => Modal.close(),
			() => {
				Modal.close();
				navigation.goBack();
			},
		);
	};

	// 해당 보호소 계정이 봉사활동 신청서 활동승인 버튼을 눌렀을 때
	const onPressConfirm = () => {
		Modal.popTwoBtn(
			'활동 승인을 하시겠습니까? 추가 안내는 개별 연락이 필요합니다.',
			'취소',
			'승인',
			() => Modal.close(),
			() => {
				Modal.close();
				Modal.popNoBtn('활동 승인이 완료되었습니다!');
				setTimeout(() => {
					Modal.close();
					navigation.goBack();
				}, 1000);
			},
		);
	};

	//봉사활동 희망 날짜 3개의 컬럼을 한 줄에 출력
	const renderItem = (item, index) => {
		return (
			<View style={[applicationFormVolunteer.volunteer_date_input]}>
				<TextInput value={item + '  /  '} editable={false} style={[txt.roboto28, applicationFormVolunteer.volunteer_date]} />
			</View>
		);
	};

	const onSelect = (item, index) => {
		navigation.push('UserProfile', '');
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
				<View style={[login_style.wrp_main, applicationFormVolunteer.container]}>
					{/* 보호소 정보 박스 (보호소 계정 본인이면 안보여야한다) */}
					{isShelterOwner ? null : (
						<View style={[applicationFormVolunteer.shelterInfo]}>
							<ShelterInfo data={route.params} />
						</View>
					)}
					{/* 봉사활동 희망날짜 */}
					<View style={[applicationFormVolunteer.viewForm]}>
						<View style={[applicationFormVolunteer.viewForm_step1]}>
							<View style={[applicationFormVolunteer.icon48]}>
								<Calendar48_Filled />
							</View>
							<View style={[applicationFormVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>봉사활동 희망 날짜</Text>
							</View>
						</View>
						<View style={[applicationFormVolunteer.viewForm_step2]}>
							{/* [hjs]API 선작업까지만 유효한 부분 추후에 변경 필요 */}
							{console.log('_dummy_ApplicationFormVolunteer_shelter=>' + JSON.stringify(_dummy_ApplicationFormVolunteer_shelter[0]))}
							{login_user_type == false && (
								<FlatList
									data={[vol_object ? vol_object.volunteer_wish_date : []]}
									renderItem={({item, index}) => renderItem(item, index)}
									numColumns={3}
									scrollEnabled
								/>
							)}
							{login_user_type == true ? (
								<FlatList
									data={[_dummy_ApplicationFormVolunteer_shelter[0].volunteer_wish_date]}
									renderItem={({item, index}) => renderItem(item, index)}
									numColumns={3}
									scrollEnabled
								/>
							) : null}
						</View>
					</View>
					{/* 참여인원 */}
					<View style={[applicationFormVolunteer.participants]}>
						<View style={[applicationFormVolunteer.participants_step1]}>
							<View style={[applicationFormVolunteer.icon48]}>
								<Person48 />
							</View>
							<View style={[applicationFormVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>참여 인원</Text>
								{!login_user_type && (
									<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>{accompanyItems ? accompanyItems.length : '0'}</Text>
								)}
								{login_user_type && (
									<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>
										{_dummy_ApplicationFormVolunteer_shelter[0].volunteer_accompany
											? _dummy_ApplicationFormVolunteer_shelter[0].volunteer_accompany.length
											: '0'}
									</Text>
								)}
							</View>
						</View>
						{/* List는 여기 */}
						<View style={[applicationFormVolunteer.participants_step2]}>
							{!login_user_type && <AccountList items={accompanyItems} onDelete={onDeleteAccompany} />}
							{login_user_type && (
								<AccountList
									items={_dummy_ApplicationFormVolunteer_shelter[0].volunteer_accompany}
									onDelete={onDeleteAccompany}
									onSelect={(item, index) => onSelect(item, index)}
								/>
							)}
							<View style={[applicationFormVolunteer.addParticipantBtn]}>
								<Add_Volunteer onPress={addAccompany} />
								<Text style={[txt.noto28, applicationFormVolunteer.addParticipantTxt]}>계정 추가</Text>
							</View>
						</View>
					</View>
					{/* 봉사활동자 연락처 */}
					<View style={[applicationFormVolunteer.participants_contact]}>
						<View style={[applicationFormVolunteer.viewForm_step1]}>
							<View style={[applicationFormVolunteer.icon48]}>
								<Phone48 />
							</View>
							<View style={[applicationFormVolunteer.title]}>
								<Text style={[txt.noto24b, {color: GRAY10}]}>봉사 활동자 연락처</Text>
							</View>
						</View>
						<View style={[applicationFormVolunteer.participants_contact_text]}>
							{!login_user_type && <Text style={[txt.roboto28]}>{vol_object ? vol_object.volunteer_delegate_contact : ''}</Text>}
							{login_user_type && <Text style={[txt.roboto28]}>{_dummy_ApplicationFormVolunteer_shelter[0].volunteer_leader_phone_number}</Text>}
						</View>
					</View>
					<View style={[btn_style.btn_w226, applicationFormVolunteer.btn_w226]}>
						{isShelterOwner ? (
							<AniButton onPress={onPressConfirm} btnLayout={btn_w226} btnTitle={'활동 승인'} />
						) : (
							<AniButton onPress={onPressCancel} btnLayout={btn_w226} btnTitle={'신청 취소'} btnStyle={'border'} />
						)}
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
};
