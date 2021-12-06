import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, manageVolunteer} from './style_templete';
import {txt} from 'Root/config/textstyle';
import {GRAY20} from 'Root/config/color';
import AccountList from '../organism_ksw/AccountList';
import {dummy_userObject} from 'Root/config/dummyDate_json';

export default ProtectApplicant = ({route, navigation}) => {
	console.log('ProtectApplicant route', route.params.protect_act_applicant_id);
	const adoptor_list = dummy_userObject.slice(1, 4); //입양신청자 계정 내역
	const protector_list = dummy_userObject.slice(0, 4); //임시보호 신청자 계정 내역

	const onClickLabel = data => {
		console.log('onClickLabel data', data);
		navigation.push('UserProfile', data);
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
				<View style={[login_style.wrp_main, {flex: 1}]}>
					{/* 입양 신청 */}
					<View style={[manageVolunteer.container]}>
						<View style={[manageVolunteer.title]}>
							<Text style={[txt.noto28]}>입양 신청</Text>
							<Text style={[txt.noto28, {color: GRAY20}]}>
								{'   '}
								{adoptor_list.length}
							</Text>
						</View>
						<View style={[manageVolunteer.volunteerList]}>
							{adoptor_list.length == 0 ? (
								<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>입양 신청건이 없습니다.</Text>
							) : (
								<AccountList items={adoptor_list} showStarMark={true} showCrossMark={false} onClickLabel={onClickLabel} />
							)}
						</View>
						{/* 임시보호신청 */}
						<View style={[manageVolunteer.title]}>
							<Text style={[txt.noto28]}>임시보호 신청</Text>
							<Text style={[txt.noto28, {color: GRAY20}]}>
								{'   '} {protector_list.length}
							</Text>
						</View>
						<View style={[manageVolunteer.volunteerList]}>
							{adoptor_list.length == 0 ? (
								<Text style={[txt.noto24, manageVolunteer.none_adoptor_text]}>임시보호 신청건이 없습니다.</Text>
							) : (
								<AccountList items={protector_list} showStarMark={true} showCrossMark={false} />
							)}
						</View>
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
};
