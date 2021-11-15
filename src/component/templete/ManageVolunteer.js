import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Bracket48} from '../atom/icon';
import VolunteerItemList from '../organism_ksw/VolunteerItemList';
import {login_style, manageVolunteer} from './style_templete';
import {useNavigation} from '@react-navigation/core';

export default ManageVolunteer = props => {
	// 아직 navigate 관련 정해진 것이 없음
	// const navigation = useNavigation();
	// const moveToShelterVolunteerForm = shelterData => {
	// 	console.log(JSON.stringify(shelterData));
	// 	navigation.push('ShelterVolunteerForm', shelterData);
	// };

	const testArray = [
		{
			//shelterLabel 출력을 위한 테스트 데이터
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'public',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'public',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			//shelterLabel 출력을 위한 테스트 데이터
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			//shelterLabel 출력을 위한 테스트 데이터
			user_type: 'shelter',
			shelter_name: '인천 교소도',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			//shelterLabel 출력을 위한 테스트 데이터
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
		{
			user_type: 'shelter',
			shelter_name: '인천 우리 반려동물 보호소',
			shelter_type: 'private',
			shelter_image: 'https://newsimg.sedaily.com/2019/05/31/1VJCSU05CZ_1.jpg',
			location: '호주 시드니',
		},
	];

	const [showMoreHistroy, setShowMoreHistory] = React.useState(false);

	const showMore = () => {
		setShowMoreHistory(true);
	};

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, manageVolunteer.container]}>
				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>활동 예정중인 신청</Text>
				</View>
				<View style={[manageVolunteer.volunteerList]}>
					<VolunteerItemList data={testArray} onVolunteerItemClick={e => moveToShelterVolunteerForm(e)} />
				</View>

				{/* separator */}
				<View style={[manageVolunteer.separator]}></View>

				{/* VolunteerList */}
				<View style={[manageVolunteer.title]}>
					<Text style={[txt.noto24, {color: GRAY20}]}>지난 신청</Text>
				</View>
				<View style={[showMoreHistroy ? manageVolunteer.volunteerList : manageVolunteer.previous_volunteerList]}>
					<VolunteerItemList data={testArray} onVolunteerItemClick={e => moveToShelterVolunteerForm(e)} />
				</View>

				{/* 지난 내역 더보기 --> [클릭] => 지난 내역 더보기 Container는 사라짐 */}
				{!showMoreHistroy ? (
					<TouchableOpacity style={[manageVolunteer.showMoreContainer]} onPress={showMore}>
						<Text style={[txt.noto22, manageVolunteer.showMoreContainer_text]}>지난 내역 더보기</Text>
						<Bracket48 />
					</TouchableOpacity>
				) : null}
			</View>
		</ScrollView>
	);
};
