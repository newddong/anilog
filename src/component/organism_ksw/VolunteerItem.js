import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ShelterLabel from '../molecules/ShelterLabel';
import {volunteerItem} from './style_organism';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';

export default VolunteerItem = props => {
	const data = props.data;
	// console.log('props.data', data);

	return (
		<View style={[volunteerItem.container]}>
			<View style={[volunteerItem.labelContainer]}>
				{/* user_type이 shelter일 경우 ShelterLabel. 아닐 경우 UserDescriptionLabel */}
				{props.data.user_type === 'shelter' ? (
					<ShelterLabel data={data} onClickLabel={e => props.onClickLabel(e)} />
				) : (
					<UserDescriptionLabel data={data} onClickLabel={e => props.onClickLabel(e)} />
				)}
			</View>
			{props.nvName != 'ProtectApplicant' && (
				<View style={[volunteerItem.expected_activityDate]}>
					<Text style={[txt.roboto24, {color: GRAY20}]}>{data.volunteer_wish_date[0] || ''}</Text>

					<Text style={[txt.roboto24, {color: GRAY20}]}>{props.type != 'done' ? '활동 예정' : '활동 완료'}</Text>
				</View>
			)}
		</View>
	);
};

VolunteerItem.defaultProps = {
	onClickLabel: e => console.log(e),
};
