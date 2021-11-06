import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {socialInfoB} from './style_organism';

export default SocialInfoB = props => {
	const [support, setSupport] = React.useState(true);
	return (
		<View>
			<View style={[socialInfoB.container]}>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number, {backgroundColor: '#D1E7F1'}]}>129</Text>
					<Text style={[txt.noto24, socialInfoB.title, {backgroundColor: 'yellow'}]}>업로드</Text>
				</View>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>1k</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>팔로워</Text>
				</View>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>250</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>팔로잉</Text>
				</View>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>3</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>후원</Text>
				</View>
			</View>
			<View style={[socialInfoB.container, {marginTop: 20}]}>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number, {backgroundColor: '#D1E7F1'}]}>129</Text>
					<Text style={[txt.noto24, socialInfoB.title, {backgroundColor: 'yellow'}]}>업로드</Text>
				</View>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>1k</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>팔로워</Text>
				</View>
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>250</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>팔로잉</Text>
				</View>
			</View>
		</View>
	);
};
