import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {volunteerItemList} from './style_organism';
import VolunteerItem from './VolunteerItem';

export default VolunteerItemList = props => {
	console.log(props.data);

	const renderItem = (item, index) => {
		return (
			<View style={[volunteerItemList.itemContainer]}>
				<VolunteerItem data={item} onClickLabel={e => props.onVolunteerItemClick(e)} />
			</View>
		);
	};

	return (
		<View style={[volunteerItemList.container]}>
			<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

VolunteerItemList.defaultProps = {
	onVolunteerItemClick: e => console.log(e),
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
