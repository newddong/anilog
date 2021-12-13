import React from 'react';
import {Text, View, TouchableWithoutFeedback, ViewPropTypes} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {socialInfoA} from './style_organism';
import {useNavigation} from '@react-navigation/core';

export default SocialInfoA = props => {
	// console.log('SocialInfo', ViewPropTypes);
	const navigation = useNavigation();
	const moveToSocialRelation = () => {
		navigation.push('SocialRelation');
	};
	const count_to_K = cnt => {
		if (cnt > 1000000) {
			let count = (cnt / 1000000).toFixed(0) + 'm';
			return count;
		} else if (cnt > 1000) {
			let count = (cnt / 1000).toFixed(1) + 'k';
			return count;
		} else {
			return cnt;
		}
	};

	return (
		<View style={[socialInfoA.container]}>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{count_to_K(props.upload_count)}</Text>
					<Text style={[txt.noto24, socialInfoA.title]}>업로드</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{count_to_K(props.follower_count)}</Text>
					<Text style={[txt.noto24, socialInfoA.title]}>팔로워</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{count_to_K(props.follow_count)}</Text>
					<Text style={[txt.noto24, socialInfoA.title]}>팔로잉</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

SocialInfoA.defaultProps = {
	followingCount: 0,
	followerCount: 0,
	uploadCount: 0,
};
