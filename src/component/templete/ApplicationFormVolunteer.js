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
import ShelterInfo from '../molecules/ShelterInfo';
import AccountList from '../organism_ksw/AccountList';
import {login_style, applicationFormVolunteer, btn_style} from './style_templete';
import {_dummy_ApplicationFormVolunteer_shelter} from 'Root/config/dummy_data_hjs';

//ApplicationFormVolunteer (봉사활동 신청서 폼) 호출 네비게이트
// ==> ManageVolunteer에서 더보기 클릭, 혹은 AppliesRecord(신청내역)에서 보호소 라벨 클릭 <==
export default ApplicationFormVolunteer = ({route, navigation}) => {
	// console.log('shelterData', route.params);
	console.log('route / app', route.params);
	const [data, setData] = React.useState(route.params);
	const [isShelterOwner, setIsShelterOwner] = React.useState(false); // 해당 보호소 계정 == 로그인 유저일 경우 최하단 버튼을 활동승인으로 출력
	const [login_user_type, setLogin_user_type] = React.useState(true);

	//로그인 유저 == 해당 봉사활동 신청서를 받는 입장인지 여부 확인
	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			try {
				//토큰에 저장된 _id와 봉사활동 신청 대상 보호소의 _id가 일치하는지 여부 확인
				res == data.volunteer_target_shelter ? setIsShelterOwner(true) : null;
			} catch (err) {
				console.log(err);
			}
		});
	}, [data]);

	//계정 추가 - 미구현 상태
	const addAccompany = () => {
		console.log('Search');
		navigation.push('Search');
	};

	// 참여인원 삭제작업 , API 연결 작업 필요
	const onDeleteAccompany = (index, item) => {
		let copy = [...data.volunteer_accompany];
		console.log('copy', copy);
		copy.splice(index, 1);
		//삭제를 클릭한 AccountItem의 userObject 고유 _id를 얻어옴
		// 이후 해당 봉사활동 Object의 봉활자 Array [유저,유저,유저] 와 비교 후 _id 일치하는 data는 삭제
		setData({...data, volunteer_accompany: copy});
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
			<View style={[applicationFormVolunteer.volunteer_date_input, {}]}>
				<TextInput value={item + '  /  '} editable={false} style={[txt.roboto28, applicationFormVolunteer.volunteer_date]} />
			</View>
		);
	};

	const onSelect = (item, index) => {
		console.log('item', item);
		navigation.push('UserProfile', item);
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 1}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
				<View style={[login_style.wrp_main, applicationFormVolunteer.container]}>
					{/* 보호소 정보 박스 (보호소 계정 본인이면 안보여야한다) */}
					{isShelterOwner ? null : (
						<View style={[applicationFormVolunteer.shelterInfo]}>
							<ShelterInfo data={data} />
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
							{/* {console.log('_dummy_ApplicationFormVolunteer_shelter=>' + JSON.stringify(_dummy_ApplicationFormVolunteer_shelter[0]))} */}
							{login_user_type == false && (
								<FlatList
									data={data.volunteer_wish_date || []}
									renderItem={({item, index}) => renderItem(item, index)}
									numColumns={3}
									ItemSeparatorComponent={separator}
									scrollEnabled
								/>
							)}
							{login_user_type == true ? (
								<FlatList
									data={data.volunteer_wish_date || []}
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
									<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>
										{data.volunteer_accompany ? data.volunteer_accompany.length : '0'}
									</Text>
								)}
								{login_user_type && (
									<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>
										{data.volunteer_accompany ? data.volunteer_accompany.length : '0'}
									</Text>
								)}
							</View>
						</View>
						{/* 참여 리스트 */}
						<View style={[applicationFormVolunteer.participants_step2]}>
							{!login_user_type && <AccountList items={data.volunteer_accompany || []} onDelete={onDeleteAccompany} />}
							{login_user_type && (
								<AccountList
									items={data.volunteer_accompany || []}
									onDelete={onDeleteAccompany}
									makeBorderMode={false}
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
							{!login_user_type && <Text style={[txt.roboto28]}>{data.volunteer_delegate_contact || ''}</Text>}
							{login_user_type && <Text style={[txt.roboto28]}>{data.volunteer_delegate_contact}</Text>}
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
