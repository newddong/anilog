import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ShelterLabel from '../molecules/ShelterLabel';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {volunteerItem} from './style_organism';

export default VolunteerItem = props => {
	const data = props.data;
	// console.log('props.data', data);

	const parsing_wish_date = () => {
		let date = data.volunteer_wish_date[0];
		date = moment(date).format('YY.MM.DD');
		return date;
	};

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
					{/* <Text style={[txt.roboto24, {color: GRAY20}]}>{data.volunteer_wish_date[0] || ''}</Text> */}
					{/* <Text style={[txt.roboto24, {color: GRAY20}]}>{parsing_wish_date()}</Text> */}
					{/* [hjs] 다른 페이지에서 계속 이상하게 나와서 계속 틀을 누군가 수정 하는 것 같음. 일단 임시적으로 폰트 22로 수정 */}
					<Text style={[txt.roboto22, {color: GRAY20}]}>{data.volunteer_wish_date[0] || ''}</Text>

					<Text style={[txt.roboto24, {color: GRAY20}]}>{props.type != 'done' ? '활동 예정' : '활동 완료'}</Text>
				</View>
			)}
		</View>
	);
};

VolunteerItem.defaultProps = {
	onClickLabel: e => console.log(e),
};
