import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {socialInfoA} from './style_organism';

export default SocialInfoA = props => {
	return (
		<View style={[socialInfoA.container]}>
			<View style={[socialInfoA.socialInfo]}>
				<Text style={[txt.roboto30b, socialInfoA.number]}>129</Text>
				<Text style={[txt.noto24, socialInfoA.title]}>업로드</Text>
			</View>
			<View style={[socialInfoA.socialInfo]}>
				<Text style={[txt.roboto30b, socialInfoA.number]}>1k</Text>
				<Text style={[txt.noto24, socialInfoA.title]}>팔로워</Text>
			</View>
			<View style={[socialInfoA.socialInfo]}>
				<Text style={[txt.roboto30b, socialInfoA.number]}>250</Text>
				<Text style={[txt.noto24, socialInfoA.title]}>팔로잉</Text>
			</View>
		</View>
	);
};
