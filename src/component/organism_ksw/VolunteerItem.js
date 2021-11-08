import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ShelterLabel from '../molecules/ShelterLabel';
import {volunteerItem} from './style_organism';

export default VolunteerItem = props => {
	return (
		<View style={[volunteerItem.container]}>
			<View style={[volunteerItem.labelContainer]}>
				{/* user_type이 shelter일 경우 ShelterLabel. 아닐 경우 UserDescriptionLabel */}
				{props.data.user_type === 'shelter' ? <ShelterLabel data={props.data} /> : <UserDescriptionLabel data={props.data} />}
			</View>
			<View style={[volunteerItem.expected_activityDate]}>
				<Text style={[txt.roboto24, {color: GRAY20}]}>{props.expected_activityDate}</Text>
				<Text style={[txt.roboto24, {color: GRAY20}]}>활동 예정</Text>
			</View>
		</View>
	);
};
