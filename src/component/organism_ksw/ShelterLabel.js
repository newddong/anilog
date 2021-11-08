import React from 'react';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {BLACK} from 'Root/screens/color';
import ProfileImageMedium140 from '../molecules/ProfileImageMedium140';
import {shelterLabel} from './style_organism';

export default ShelterLabel = props => {
	console.log(props);
	return (
		<View style={[shelterLabel.container]}>
			<View style={[shelterLabel.profileImageMedium]}>
				<ProfileImageMedium140 userType={'shelter'} shelterType={props.shelterType} img_uri={props.img_uri} />
			</View>
			<View style={[shelterLabel.shelterInfo]}>
				<Text style={[txt.noto28, {color: BLACK, textAlign: 'center'}]}>{props.name}</Text>
				<Text style={[txt.noto24, {color: GRAY10}]}>{props.location}</Text>
			</View>
		</View>
	);
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
