import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, FlatList, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {dummy_shelterInfo} from 'Root/config/dummyDate_json';
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
import {Modal} from '../modal/Modal';

export default ApplyVolunteer = props => {
	const navigation = useNavigation();

	const [data, setData] = React.useState({
		volunteer_day_list: dateList,
		volunteer_list: dummy_accountList,
		volunteer_phone_number: phone_number,
	});

	const [dateList, setDateList] = React.useState([]); //봉활 날짜 리스트
	const [dummy_accountList, setDummy] = React.useState([
		//봉활자 리스트
		{
			user_id: '하양이',
			user_nickname: '아름이엄마',
			img_uri: 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
			text_intro: '안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있...',
		},
		{
			user_id: '구름이',
			user_nickname: '울지마밍키',
			img_uri: 'https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg',
			text_intro: 'Description',
		},
		{
			user_id: '달리',
			user_nickname: '달리아빠',
			img_uri:
				'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTIy/MDAxNDk4NzgyMDkyMTUx.ukh7-et-tZsr2LPbPe3ccs0XLwB7V_EVRrepf9b0jwYg.j3iBalwSrvtzxJ0BvuYm2zMSQe2gJ6Cd9erBK-QaMIAg.PNG/20170630_092030.png?type=w1200',
			text_intro: '안녕하세요',
		},
		{
			user_id: '하양이',
			user_nickname: '위대한캐츠비',
			img_uri: 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
			text_intro: '안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있...',
		},
	]);
	const [phone_number, setPhone_number] = React.useState();

	//최종 신청
	const onRegister = () => {
		Modal.popTwoBtn(
			'해당 내용으로 신청하시겠습니까?',
			'취소',
			'신청',
			() => Modal.close(),
			() => {
				// data State 데이터베이스에 넣는 작업 필요
				navigation.push('UserProfile');
			},
		);
	};

	// Modal.popTwoBtn = (msg, noMsg, yesMsg, onNo, onYes) => {
	// 	setPopupComponent(<TwoBtnModal popUpMsg={msg} onNo={onNo} onYes={onYes} noMsg={noMsg} yesMsg={yesMsg} />);
	// 	// setPopupComponent(<View style={{backgroundColor:'blue',height:80,width:80}}/>);
	// 	setPop(true);
	// };
	//계정추가 버튼 클릭
	const addVolunteer = () => {
		console.log('addVolunteer');
	};

	//DatePicker로 날짜 지정할 시, 하단에 봉사활동 날짜 Item이 View로 보여짐
	const onDateChange = date => {
		console.log(date);
		let copy = [...dateList];
		copy.push(date);
		setDateList(copy);
	};

	const onChangePhoneNumber = num => {
		console.log(num);
		setPhone_number(num);
	};

	//봉사활동 날짜 Item 우측 지우기마크 클릭 시 해당 Item 삭제 및 View도 삭제
	const onDeleteVolunteerDate = index => {
		console.log(index);
		let copy = [...dateList];
		copy.splice(index, 1);
		setDateList(copy);
	};

	const onDeleteAccount = index => {
		console.log(index);
		let copy = [...dummy_accountList];
		copy.splice(index, 1);
		setDummy(copy);
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
		<ScrollView>
			<View style={[login_style.wrp_main, applyVolunteer.container]}>
				{/* 보호소 정보 박스 */}
				<View style={[applyVolunteer.shelterInfo]}>
					<ShelterInfo data={dummy_shelterInfo} />
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
					<DatePicker width={654} onDateChange={date => onDateChange(date)} />
					<FlatList data={dateList} renderItem={({item, index}) => renderItem(item, index)} />
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
					<TextInput style={[applyVolunteer.number_of_volunteerers]} value={dummy_accountList.length + ' 명'} />
					{/* List는 여기 */}
					<View style={[applyVolunteer.participants_step2]}>
						<View style={[applyVolunteer.accountList]}>
							<AccountList width={446} items={dummy_accountList} onDelete={index => onDeleteAccount(index)} />
						</View>
						<View style={[applyVolunteer.addParticipantBtn]}>
							<Add_Volunteer onPress={() => addVolunteer()} />
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
						<Input24 width={654} placeholder={'연락처를 적어주세요.'} onChange={num => onChangePhoneNumber(num)} />
					</View>
				</View>
				{/* btn_w226 */}
				<View style={[btn_style.btn_w226, applyVolunteer.btn_w226]}>
					<AniButton btnLayout={btn_w226} btnTitle={'신청'} btnStyle={'filled'} titleFontStyle={24} onPress={onRegister} />
				</View>
			</View>
		</ScrollView>
	);
};
