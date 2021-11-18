import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {dummy_shelterInfo} from 'Root/config/dummyDate_json';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Add_Volunteer, Calendar48_Filled, Cross46, Person48, Phone48} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import AccountList from '../organism_ksw/AccountList';
import ShelterInfo from '../molecules/ShelterInfo';
import {applyVolunteer, btn_style, login_style} from './style_templete';
import DatePicker from '../molecules/DatePicker';
import Input24 from '../molecules/Input24';

export default ApplyVolunteer = props => {
	const navigation = useNavigation();

	const [dateList, setDateList] = React.useState([]);

	//계정추가 버튼 클릭
	const addVolunteerer = () => {
		console.log('addVolunteerer');
	};

	const onDateChange = date => {
		console.log(date);
		let copy = [...dateList];
		copy.push(date);
		setDateList(copy);
	};

	const onDeleteVolunteerDate = index => {
		console.log(index);
		let copy = [...dateList];
		copy.splice(index, 1);
		setDateList(copy);
	};

	const renderItem = (item, index) => {
		return (
			<View style={[applyVolunteer.volunteerDateList]}>
				<Text style={[txt.roboto28, applyVolunteer.volunteerDateList_text]}>{item}</Text>
				<View style={[applyVolunteer.volunteerDateList_cross]}>
					<Cross46 onPress={index => onDeleteVolunteerDate(index)} />
				</View>
			</View>
		);
	};

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, applyVolunteer.container]}>
				{/* ShelterInfo */}

				<View style={[applyVolunteer.shelterInfo]}>
					{/* <Text>(M)ShelterInfo</Text> */}
					<ShelterInfo data={dummy_shelterInfo} />
				</View>
				{/* InputForm */}
				<View style={[applyVolunteer.viewForm]}>
					<View style={[applyVolunteer.viewForm_step1]}>
						<View style={[applyVolunteer.icon48]}>
							<Calendar48_Filled />
						</View>
						<View style={[applyVolunteer.title]}>
							<Text style={[txt.noto24b, {color: GRAY10}]}>봉사활동 희망 날짜</Text>
						</View>
					</View>
					<DatePicker width={654} onDateChange={date => onDateChange(date)} />
					<FlatList data={dateList} renderItem={({item, index}) => renderItem(item, index)} />
					{/* 내용 */}
				</View>
				{/* 참여인원 */}
				<View style={[applyVolunteer.participants]}>
					<View style={[applyVolunteer.participants_step1]}>
						<View style={[applyVolunteer.icon48]}>
							<Person48 />
						</View>
						<View style={[applyVolunteer.title]}>
							<Text style={[txt.noto24b, {color: GRAY10}]}>참여 인원</Text>
							<Text style={[txt.roboto28, {marginLeft: 5 * DP, marginTop: 2 * DP}]}>3</Text>
						</View>
					</View>
					<Input24 showCrossMark={false} />
					{/* List는 여기 */}
					<View style={[applyVolunteer.participants_step2]}>
						<AccountList />
						<View style={[applyVolunteer.addParticipantBtn]}>
							<Add_Volunteer onPress={() => props.onPressAddVolunteerer()} />
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
						<Input24 width={654} placeholder={'연락처를 적어주세요.'} />
					</View>
				</View>
				{/* btn_w226 */}
				<View style={[btn_style.btn_w226, applyVolunteer.btn_w226, {backgroundColor: 'yellow'}]}>
					<AniButton btnLayout={btn_w226} btnTitle={'신청'} btnStyle={'filled'} titleFontStyle={24} />
				</View>
			</View>
		</ScrollView>
	);
};
