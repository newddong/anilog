import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {BLACK} from 'Root/screens/color';
import ProfileImageMedium140 from '../molecules/ProfileImageMedium140';
import {shelterLabel} from './style_organism';

export default ShelterVerticalLabel = props => {
	// console.log('props', props.data);
	const data = props.data;
	return (
		<View style={[shelterLabel.container]}>
			<TouchableOpacity style={[shelterLabel.profileImageMedium]} onPress={() => props.onLabelClick()}>
				<ProfileImageMedium140 data={data} />
			</TouchableOpacity>
			<View style={[shelterLabel.shelterInfo]}>
				<Text style={[txt.noto28, {color: BLACK, textAlign: 'center'}]}>{data.shelter_name}</Text>
				<Text style={[txt.noto24, {color: GRAY10}]}>
					{data.shelter_address.city} {data.shelter_address.district}{' '}
				</Text>
			</View>
		</View>
	);
};

ShelterVerticalLabel.defaultProps = {
	onLabelClick: e => console.log(e),
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
