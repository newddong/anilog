import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {volunteerItemList} from './style_organism';
import VolunteerItem from './VolunteerItem';

export default VolunteerItemList = props => {
	const testArray = [
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

	const renderItem = (item, index) => {
		return (
			<View style={[volunteerItemList.itemContainer]}>
				<VolunteerItem data={item} />
			</View>
		);
	};

	return (
		<View style={[volunteerItemList.container]}>
			<FlatList data={testArray} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

// ShelterLabel.defaultProps = {
// 	data: {
// 		user_id: 'user_id1',
// 		shelter_name: 'shelter_name',
// 		shelter_image: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
// 		location: 'location',
// 		shelter_type: 'public',
// 	},
// 	onClickLabel: e => console.log(e),
// };

// UserDescriptionLabel.defaultProps = {
// 	data: {
// 		user_id: 'user_id',
// 		user_nickname: 'user_nickname',
// 		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		text_intro: 'Description',
// 	},
// 	onLabelClick : e => console.log(e)
// };
