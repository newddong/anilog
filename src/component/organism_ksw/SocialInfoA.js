import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {socialInfoA} from './style_organism';
import {useNavigation} from '@react-navigation/core';

export default SocialInfoA = props => {
	const navigation = useNavigation();
	const moveToSocialRelation = () => {
		navigation.push('SocialRelation');
	};

	return (
		<View style={[socialInfoA.container]}>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{props.uploadCount}</Text>
					<Text style={[txt.noto24, socialInfoA.title]}>업로드</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{props.followerCount}</Text>
					<Text style={[txt.noto24, socialInfoA.title]}>팔로워</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={moveToSocialRelation}>
				<View style={[socialInfoA.socialInfo]}>
					<Text style={[txt.roboto30b, socialInfoA.number]}>{props.followingCount}</Text>
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
