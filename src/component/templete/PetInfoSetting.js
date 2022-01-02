import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w242} from '../atom/btn/btn_style';
import {Cross52, NextMark} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import OnOffSwitch from '../molecules/OnOffSwitch';
import PetImageLabel from '../molecules/PetImageLabel';
import {btn_style, login_style, petInfoSetting, temp_style} from './style_templete';
import {_dummy_petInfo_from_user} from 'Root/config/dummy_data_hjs';
import Modal from '../modal/Modal';
import {getUserInfoById, removeUserFromFamily} from 'Root/api/userapi';
import {familyAccountList_style} from '../organism_ksw/style_organism';
import ProfileImageSmall from '../molecules/ProfileImageSmall';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import PetSelectModal from '../molecules/PetSelectModal';

//이 화면에 들어오면서 특정 _id를 API 연동으로 데이터를 가져 옴.
//이전 화면에서 모든 데이터를 가진 상태에서 들어오는 것이 아님.
//변수들은 모두 db 변수로 스네이크 형식으로 추후에 변경 필요.

export default PetInfoSetting = ({route, navigation}) => {
	console.log('PetInfoSetting / route.params', route.params.pet_id);
	const loginUser = route.params.token;

	const [petData, setPetData] = React.useState({}); // 현재 반려동물 프로필 데이터
	const [familyAccountList, setFamilyAccountList] = React.useState([]); //가족 계정 목록 데이터

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => setFamily());
		return unsubscribe;
	}, [familyAccountList]);

	const setFamily = () => {
		getUserInfoById(
			{userobject_id: route.params.pet_id},
			result => {
				console.log('result / GetUserInfoById / PetInfoSetting', result.msg);
				const t = {
					__v: 0,
					_id: '61cdfebb07a02d82987ee5e5',

					pet_is_temp_protection: false,
					pet_neutralization: 'unknown',
					pet_sex: 'female',
					pet_species: '고양이',
					pet_species_detail: '믹스묘',
					pet_status: 'adopt',
					pet_weight: '2',
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
					user_nickname: '고양이',
					user_register_date: '2021-12-30T18:47:23.728Z',
					user_type: 'pet',
					user_upload_count: 0,
				};
				setFamilyAccountList(result.msg.pet_family);
				navigation.setOptions({title: result.msg.user_nickname});
				setPetData(result.msg);
			},
			err => {
				console.log('err / GetUserInfoById / PetInfosetting', err);
			},
		);
	};

	//계정정보 - '종' 변경하기 버튼 클릭
	const changePetInfo = () => {
		// Modal.popSelect(['개', '고양이', '기타'], ['리트리버', '말티즈', '푸들', '치와와'], (val1, val2) => alert(val1 + ':' + val2), '동물선택');
		Modal.popPetSelect(petData.pet_species, petData.pet_species_detail, (val1, val2) => console.log(val1 + ':' + val2), '완료');
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
		familyAccountList.length == 3
			? Modal.popOneBtn('가족계정은 최대 3인까지 등록가능합니다!', '확 인', () => Modal.close())
			: navigation.push('AddFamilyAccount', {route_name: route.name, pet_id: petData._id});
	};

	//가족계정 삭제 버튼
	const onDeleteFamilyAccount = index => {
		console.log('삭제 예정 가족계정 정보', familyAccountList[index]);
		removeUserFromFamily(
			{
				target_userobject_id: familyAccountList[index]._id,
				pet_userobject_id: petData._id,
			},
			result => {
				// console.log('reuslt / removeUserFromFamily / PetInfoSetting   : ', result.msg);
				let copy = [...familyAccountList];
				copy.splice(index, 1);
				setFamilyAccountList(copy);
			},
			err => {
				console.log('err / removeUserFromFamily / PetInfoSetting   : ', err);
			},
		);
	};

	//가족 계정의 프로필 라벨 클릭
	const onClickFamilyLabel = data => {
		navigation.push('UserProfile', {userobject: data});
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
		<View style={[login_style.wrp_main, petInfoSetting.container]}>
			<ScrollView contentContainerStyle={{alignItems: 'center'}}>
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
							<Text style={[txt.noto24, petInfoSetting.petAccountInfo.infoContent]}>{petData.pet_species}</Text>
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
						<TouchableOpacity onPress={goToSetPetInfo} style={[petInfoSetting.petProfileMenu.bracket50]}>
							<NextMark />
						</TouchableOpacity>
					</View>
				</View>
				{/* 접종내역 */}
				<View style={[petInfoSetting.petProfileMenu.container]}>
					<View style={[petInfoSetting.petProfileMenu.insideContainer]}>
						<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
							<Text style={[txt.noto30b, {color: GRAY10}]}>접종 내역</Text>
						</View>
						<TouchableOpacity onPress={goToVaccinationRecord} style={[petInfoSetting.petProfileMenu.bracket50]}>
							<NextMark />
						</TouchableOpacity>
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
							<TouchableOpacity onPress={goToAddFamilyAccount} style={[petInfoSetting.petProfileMenu.bracket50]}>
								<NextMark />
							</TouchableOpacity>
						</View>
						<View style={[petInfoSetting.familyAccountSetting.infoMessage]}>
							<Text style={[txt.noto22, {color: APRI10}]}>
								가족 계정으로 초대된 계정은 이 동물 게시글을 함께 관리합니다.{'\n'}최대 3인까지만 초대 가능합니다.
							</Text>
						</View>
						{/* 가족계정 리스트 */}
						<View style={[petInfoSetting.familyAccountSetting.familyAccounts]}>
							{/* <FamilyAccountList items={familyAccountList} onDeleteAccount={onDeleteFamilyAccount} /> */}
							{familyAccountList.map((v, i) => {
								return (
									<View style={[familyAccountList_style.itemContainer]} key={i}>
										{/* <View style={[familyAccountList_style.profileImageSmall]}>
											<ProfileImageSmall data={v} />
										</View>
										<View style={[familyAccountList_style.userIDContainer]}>
											<Text style={[txt.roboto28b]}>{v.user_nickname}</Text>
										</View> */}
										<UserDescriptionLabel data={v} onClickLabel={onClickFamilyLabel} />
										{v.user_nickname == loginUser.user_nickname ? (
											<></>
										) : (
											<View style={{position: 'absolute', right: 5 * DP}}>
												<Cross52 onPress={() => onDeleteFamilyAccount(i)} style={[familyAccountList_style.cross52]} />
											</View>
										)}
									</View>
								);
							})}
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
						<View style={[petInfoSetting.familyAccountSetting.menuView]}>
							<View style={[petInfoSetting.petProfileMenu.menuTitle]}>
								<Text style={[txt.noto30b, {color: GRAY10}]}>가족 계정 추가</Text>
							</View>
							<TouchableOpacity onPress={goToAnimalAdoption} style={[petInfoSetting.changeAdoptionStatus.bracket50]}>
								<NextMark />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{/* )} */}
			</ScrollView>
		</View>
	);
};

PetInfoSetting.defaultProps = {};
