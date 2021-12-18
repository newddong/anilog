import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w242} from '../atom/btn/btn_style';
import {NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import OnOffSwitch from '../molecules/OnOffSwitch';
import PetImageLabel from '../molecules/PetImageLabel';
import FamilyAccountList from '../organism_ksw/FamilyAccountList';
import {btn_style, login_style, petInfoSetting, temp_style} from './style_templete';
import {_dummy_petInfo_from_user} from 'Root/config/dummy_data_hjs';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import Modal from '../modal/Modal';
import {getUserInfoById} from 'Root/api/userapi';

//이 화면에 들어오면서 특정 _id를 API 연동으로 데이터를 가져 옴.
//이전 화면에서 모든 데이터를 가진 상태에서 들어오는 것이 아님.
//변수들은 모두 db 변수로 스네이크 형식으로 추후에 변경 필요.

export default PetInfoSetting = ({route, navigation}) => {
	// console.log('route.params', route.params);
	const [petData, setPetData] = React.useState(_dummy_petInfo_from_user[0]); // 현재 반려동물 프로필 데이터
	const [familyAccountList, setFamilyAccountList] = React.useState(dummy_userObject.slice(1, 4)); //가족 계정 목록 데이터

	//가족계정 추가에서 받아온 Account가 있을 경우 FamilyAccountList에 추가해서 적용
	React.useEffect(() => {
		if (route.params != undefined) {
			if (route.params.addedAccount != undefined) {
				let copy = [...familyAccountList];
				copy.push(route.params.addedAccount);
				setFamilyAccountList(copy);
			}
		}
	}, [route.params]);

	React.useEffect(() => {
		console.log('FamilAcc', familyAccountList.length);
	}, [familyAccountList]);

	React.useEffect(() => {
		getUserInfoById(
			{userobject_id: route.params},
			result => {
				console.log('result / GetUserInfoById / PetInfoSetting', result.msg);
				setPetData(result.msg);
			},
			err => {
				console.log('err / GetUserInfoById / PetInfosetting', err);
			},
		);
	}, []);

	const e = {
		__v: 0,
		_id: '61bb6e499c25946f89154dca',
		pet_birthday: '2021-05-05T00:00:00.000Z',
		pet_family: [
			{
				__v: 3,
				_id: '61b84ddb4a1b66f74b699b1e',
				pet_family: [Array],
				user_address: [Object],
				user_agreement: [Object],
				user_denied: false,
				user_follow_count: 0,
				user_follower_count: 0,
				user_interests: [Array],
				user_introduction: '',
				user_is_verified_email: false,
				user_is_verified_phone_number: true,
				user_mobile_company: 'SKT텔레콤',
				user_my_pets: [Array],
				user_name: '권상우',
				user_nickname: 'Di1',
				user_password: 'tkddn123',
				user_phone_number: '01096450422',
				user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639666144077_B70FDBD2-53F4-4FAA-A6F1-13345B04FEE3.jpg',
				user_register_date: '2021-12-14T07:55:07.933Z',
				user_type: 'user',
				user_upload_count: 0,
			},
		],
		pet_is_temp_protection: true,
		pet_neutralization: 'no',
		pet_sex: 'male',
		pet_species: '개',
		pet_species_detail: '도사견',
		pet_status: 'protect',
		pet_weight: '1.2',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
		user_nickname: '상우아들',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639673417309_11.jpg',
		user_register_date: '2021-12-16T16:50:17.408Z',
		user_type: 'pet',
		user_upload_count: 0,
	};

	//계정정보 - '종' 변경하기 버튼 클릭
	const changePetInfo = () => {
		Modal.popSelect(['개', '고양이', '기타'], ['리트리버', '말티즈', '푸들', '치와와'], (val1, val2) => alert(val1 + ':' + val2), '동물선택');
	};

	//프로필 변경 버튼
	const changeProfile = () => {
		navigation.push('ChangePetProfileImage', petData);
	};

	//상세정보
	const goToSetPetInfo = () => {
		navigation.push('SetPetInformation', petData);
	};

	//접종 내역 버튼
	const goToVaccinationRecord = () => {
		navigation.push('VaccinationRecord', {userobject_id: petData._id});
	};

	//가족계정 추가 버튼
	const goToAddFamilyAccount = () => {
		familyAccountList.length > 2
			? Modal.popOneBtn('가족계정은 최대 3인까지 등록가능합니다!', '확 인', () => Modal.close())
			: navigation.push('AddFamilyAccount', route.name);
	};

	//가족계정 삭제 버튼
	const onDeleteFamilyAccount = index => {
		let copy = [...familyAccountList];
		copy.splice(index, 1);
		setFamilyAccountList(copy);
	};

	//계정 공개 여부 변경 Switch On
	const onSwtichOn = () => {};

	//계정 공개 여부 변경 Switch Off
	const onSwtichOff = () => {};

	//반려동물 입양 상태 변경
	const goToAnimalAdoption = () => {
		navigation.push('AnimalAdoption', {userobject_id: petData._id});
	};

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, petInfoSetting.container]}>
				{/* 프로필 컨테이너 */}
				<View style={[petInfoSetting.profileContainer]}>
					<View style={[temp_style.petImageLabel, petInfoSetting.petImageLabel]}>
						<PetImageLabel data={petData} showNickname={false} />
					</View>
					<View style={[btn_style.btn_w242, petInfoSetting.btn_w242]}>
						<AniButton onPress={changeProfile} btnTitle={'프로필 변경'} btnLayout={btn_w242} />
					</View>
				</View>
				{/* 계정정보 */}
				<View style={[petInfoSetting.petAccountInfo.container]}>
					<View style={[petInfoSetting.petAccountInfo.insideContainer]}>
						<View style={[petInfoSetting.petAccountInfo.accountInfo_header]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>계정 정보</Text>
						</View>
						<View style={[petInfoSetting.petAccountInfo.information]}>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoTitle]}>종</Text>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>{_dummy_petInfo_from_user[0].pet_species}</Text>
							<TouchableOpacity onPress={changePetInfo} style={{position: 'absolute', right: 0}}>
								<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>변경하기</Text>
							</TouchableOpacity>
						</View>
						<View style={[petInfoSetting.petAccountInfo.information]}>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoTitle]}>품종</Text>
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>{petData.pet_species_detail || ''}</Text>
						</View>
					</View>
				</View>
				{/* 상세정보 */}
				<View style={[petInfoSetting.petProfileMenu.container]}>
					<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>상세 정보</Text>
						</View>
						<View style={[petInfoSetting.petProfileMenu.bracket50]}>
							<NextMark onPress={goToSetPetInfo} />
						</View>
					</View>
				</View>
				{/* 접종내역 */}
				<View style={[petInfoSetting.petProfileMenu.container]}>
					<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>접종 내역</Text>
						</View>
						<View style={[petInfoSetting.petProfileMenu.bracket50]}>
							<NextMark onPress={goToVaccinationRecord} />
						</View>
					</View>
				</View>
				{/* 가족 계정 추가 */}
				{/* 반려 동물 상태가 companion인 경우에만 보이도록 추후 변경 예정 */}
				{/* {data.pet_status == 'companion' && ( */}
				<View style={[petInfoSetting.familyAccountSetting.container]}>
					<View style={[petInfoSetting.familyAccountSetting.insideContainer]}>
						<View style={[petInfoSetting.familyAccountSetting.menuView]}>
							<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>가족 계정 추가</Text>
							</View>
							<View style={[petInfoSetting.petProfileMenu.bracket50]}>
								<NextMark onPress={goToAddFamilyAccount} />
							</View>
						</View>
						<View style={[petInfoSetting.familyAccountSetting.infoMessage]}>
							<Text style={[txt.noto22, {color: APRI10}]}>
								가족 계정으로 초대된 계정은 이 동물 게시글을 함께 관리합니다.{'\n'}최대 3인까지만 초대 가능합니다.
							</Text>
						</View>
						{/* 가족계정 리스트 */}
						<View style={[petInfoSetting.familyAccountSetting.familyAccounts]}>
							<FamilyAccountList items={familyAccountList} onDeleteAccount={onDeleteFamilyAccount} />
						</View>
					</View>
				</View>
				{/* )} */}
				{/* 계정 공개 여부 변경 */}
				<View style={[petInfoSetting.exposureSetting.container]}>
					<View style={[petInfoSetting.exposureSetting.insideContainer]}>
						<View style={[petInfoSetting.exposureSetting.menuView]}>
							<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>계정 공개 여부 변경</Text>
							</View>
						</View>
						<View style={[petInfoSetting.exposureSetting.privateSettingView]}>
							<View style={[petInfoSetting.exposureSetting.privateSettingMsg]}>
								<Text style={[txt.noto28, {color: GRAY10}]}>이 동물의 계정을 비공개로 전환합니다</Text>
							</View>
							<View style={[petInfoSetting.exposureSetting.privateSettingBtn]}>
								<OnOffSwitch onSwtichOff={onSwtichOff} onSwtichOn={onSwtichOn} />
							</View>
						</View>
					</View>
				</View>
				{/* 반려동물 입양 상태 변경 */}
				{/* 반려 동물 상태가 companion가 아닐 경우에만 보이도록 추후 변경 예정 */}
				{/* {data.pet_status != 'companion' && ( */}
				<View style={[petInfoSetting.changeAdoptionStatus.container]}>
					<View style={[petInfoSetting.familyAccountSetting.insideContainer]}>
						<View style={[petInfoSetting.changeAdoptionStatus.menuView]}>
							<View style={[petInfoSetting.changeAdoptionStatus.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>반려동물 입양 상태 변경</Text>
							</View>
							<View style={[petInfoSetting.changeAdoptionStatus.bracket50]}>
								<NextMark onPress={goToAnimalAdoption} />
							</View>
						</View>
					</View>
				</View>
				{/* )} */}
			</View>
		</ScrollView>
	);
};

PetInfoSetting.defaultProps = {};
