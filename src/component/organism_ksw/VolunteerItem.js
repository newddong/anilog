import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ShelterLabel from '../molecules/ShelterLabel';
import {volunteerItem} from './style_organism';

export default VolunteerItem = props => {
	// console.log('data', data);

	return (
		<View style={[volunteerItem.container]}>
			<View style={[volunteerItem.labelContainer]}>
				{/* user_type이 shelter일 경우 ShelterLabel. 아닐 경우 UserDescriptionLabel */}
				{props.data.user_type === 'shelter' ? (
					<ShelterLabel data={props.data} onClickLabel={e => props.onClickLabel(e)} />
				) : (
					<UserDescriptionLabel data={props.data} onClickLabel={e => props.onClickLabel(e)} />
				)}
			</View>
			<View style={[volunteerItem.expected_activityDate]}>
				<Text style={[txt.roboto24, {color: GRAY20}]}>{props.data.expected_date}</Text>
				<Text style={[txt.roboto24, {color: GRAY20}]}>활동 예정</Text>
			</View>
		</View>
	);
};

VolunteerItem.defaultProps = {
	onClickLabel: e => console.log(e),
	expected_activityDate: '21.12.21',
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
// 		user_id: 'Default id',
// 		user_nickname: 'user_nickname',
// 		img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		text_intro: 'Description',
// 	},
// 	// onLabelClick: e => console.log(e),
// 	onLabelClick: e => consol1e.log(e),
// };
