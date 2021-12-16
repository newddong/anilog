import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, manageVolunteer} from './style_templete';
import {txt} from 'Root/config/textstyle';
import {GRAY20} from 'Root/config/color';
import AccountList from '../organism_ksw/AccountList';
import {dummy_userObject} from 'Root/config/dummyDate_json';

export default ProtectApplicant = ({route, navigation}) => {
	// console.log('ProtectApplicant route', route.params.protect_act_applicant_id);
	const adoptor_list = dummy_userObject; //입양신청자 계정 내역
	const protector_list = dummy_userObject; //임시보호 신청자 계정 내역

	React.useEffect(() => {
		// getProtectApplicant(
		// 	{
		// 		protectionActivityApplicantObject_id: protectionActivityApplicantObject_id,
		// 	},
		// 	data => {
		// 		console.log('ProtectApplicant : getProtectApplicant data - ', data);
		// 		setData(data);
		// 	},
		// 	err => {
		// 		console.log('ProtectApplicant : getProtectApplicant data - ', err);
		// 	},
		// );
	}, []);

	const getDbFiled = [
		{
			//ProtectionActivityApplicantObject
			protectionActivityApplicantObject_id, //보호 활동 신청서 ID
			protect_act_type, //신청한 보호 활동의 종류, 임시보호(protect), 입양(adopt)
			protect_act_applicant_id, //보호활동 신청자

			//UserObject
			user_profile_uri, //사용자 프로필 사진
			user_nickname, //닉네임
			user_introduction, //프로필에 노출될 자기소개
			bookmark, //보호소가 신청자에 한해 북마크
		},
	];

	//AccountList의 라벨 클릭 콜백 함수
	const onClickLabel = data => {
		navigation.push('UserProfile', data);
	};

	//입양, 임보 신청자 아이템 클릭 콜백 함수 (라벨 이외의 영역)
	const onSelect = (item, index) => {
		let param = route.params;
		Object.assign(param, item);
		//ProtectApplyForm에는 AnimalProtectDetail이 존재
		//AnimalProtectDetail이 요구하는 데이터 테이블 ==> ProtectionActivityApplicantObject , ShelterProtectAnimalObject, userObject(입양자, 임보자)
		navigation.push('ProtectApplyForm', param);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				{/* 입양 신청 */}

				<View style={[manageVolunteer.container]}>
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto28]}>입양 신청</Text>
						<Text style={[txt.noto28, {color: GRAY20}]}> {adoptor_list.length}</Text>
					</View>
					<View style={[manageVolunteer.volunteerList]}>
						{adoptor_list.length == 0 ? (
							<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>입양 신청건이 없습니다.</Text>
						) : (
							<AccountList
								items={adoptor_list}
								showStarMark={true}
								showCrossMark={false}
								makeBorderMode={false}
								onSelect={onSelect}
								onClickLabel={onClickLabel}
							/>
						)}
					</View>
					{/* 임시보호신청 */}
					<View style={[manageVolunteer.title]}>
						<Text style={[txt.noto28]}>임시보호 신청</Text>
						<Text style={[txt.noto28, {color: GRAY20}]}> {protector_list.length}</Text>
					</View>
					<View style={[manageVolunteer.volunteerList]}>
						{adoptor_list.length == 0 ? (
							<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>임시보호 신청건이 없습니다.</Text>
						) : (
							<AccountList
								items={protector_list}
								onSelect={onSelect}
								onClickLabel={onClickLabel}
								makeBorderMode={false}
								showStarMark={true}
								showCrossMark={false}
							/>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
