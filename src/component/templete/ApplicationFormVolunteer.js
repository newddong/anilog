import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {AddItem92, Add_Pet, Add_Volunteer, Calendar48_Filled, Person48, Phone48} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ShelterInfo from '../molecules/ShelterInfo';
import AccountList from '../organism_ksw/AccountList';
import {login_style, applicationFormVolunteer, temp_txt, btn_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ApplicationFormVolunteer = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, applicationFormVolunteer.container]}>
				{/* ProfileImage & btn_w242*/}
				<View style={[applicationFormVolunteer.shelterInfo]}>
					<ShelterInfo data={props.route.params} />
				</View>
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
					{/* 내용 */}
					<View style={[applicationFormVolunteer.viewForm_step2]}>
						<Input30 showTitle={false} width={550} />
						<Input30 showTitle={false} width={550} />
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
							<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>3</Text>
						</View>
					</View>
					{/* List는 여기 */}
					<View style={[applicationFormVolunteer.participants_step2]}>
						<AccountList />
						<View style={[applicationFormVolunteer.addParticipantBtn]}>
							<Add_Volunteer />
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
						<Text style={[txt.roboto28]}>010-6719-5532</Text>
					</View>
				</View>
				{/* btn_w226 */}
				<View style={[btn_style.btn_w226, applicationFormVolunteer.btn_w226]}>
					<AniButton btnLayout={btn_w226} btnTitle={'신청 취소'} btnStyle={'border'} titleFontStyle={24} />
				</View>
			</View>
		</ScrollView>
	);
};

// ShelterInfo.defaultProps = {
// 	data: {
// 		user_image: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
// 		shelter_name: '아이조아 보호소',
// 		phone_number: '010-5533-2910',
// 		address: '마포구 용강동 22-12',
// 	},
// };
