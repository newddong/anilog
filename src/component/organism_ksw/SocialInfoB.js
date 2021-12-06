import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {socialInfoB} from './style_organism';

export default SocialInfoB = props => {
	const count_to_K = cnt => {
		if (cnt > 1000000) {
			let count = (cnt / 1000000).toFixed(0) + 'm';
			return count;
		} else if (cnt > 1000) {
			let count = (cnt / 1000).toFixed(0) + 'k';
			return count;
		} else {
			return cnt;
		}
	};

	return (
		<View style={[socialInfoB.container]}>
			<View style={[socialInfoB.socialInfo]}>
				<Text style={[txt.roboto36b, socialInfoB.number]}>{count_to_K(props.data.upload_count)}</Text>
				<Text style={[txt.noto24, socialInfoB.title]}>업로드</Text>
			</View>
			<View style={[socialInfoB.socialInfo]}>
				<Text style={[txt.roboto36b, socialInfoB.number]}>{count_to_K(props.data.follower_count)}</Text>
				<Text style={[txt.noto24, socialInfoB.title]}>팔로워</Text>
			</View>
			<View style={[socialInfoB.socialInfo]}>
				<Text style={[txt.roboto36b, socialInfoB.number]}>{count_to_K(props.data.follow_count)}</Text>
				<Text style={[txt.noto24, socialInfoB.title]}>팔로잉</Text>
			</View>
			{props.donationMode ? (
				<View style={[socialInfoB.socialInfo]}>
					<Text style={[txt.roboto36b, socialInfoB.number]}>3</Text>
					<Text style={[txt.noto24, socialInfoB.title]}>후원</Text>
				</View>
			) : null}
		</View>
	);
};

SocialInfoB.defaultProps = {
	donationMode: false,
};
