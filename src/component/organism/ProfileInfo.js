import React from 'react';
import {Text, View} from 'react-native';
import {organism_style, profileInfo_style} from './style_organism';
import FeedContent from './FeedContent';
import {ScrollView} from 'react-native';

export default ProfileInfo = props => {
	return (
		<View style={organism_style.profileInfo_main}>
			{/* profileImageLarge_view */}
			<View style={[organism_style.profileImageLarge_view_profileInfo]}>
				<View style={[organism_style.profileImageLarge_profileInfo, profileInfo_style.profileImageLarge]}>
					<Text>ProfileImageLarge</Text>
				</View>
				<View style={[organism_style.socialInfo_profileInfo, profileInfo_style.socialInfo]}>
					<Text>SocialInfo</Text>
				</View>
			</View>

			{/* Content */}
			<View style={[organism_style.content_view_profileInfo, profileInfo_style.content_view]}>
				<View style={[organism_style.content_profileInfo, profileInfo_style.content]}>
					<Text>Content</Text>
				</View>
				<View style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
					<Text>더보기 ▼</Text>
				</View>
			</View>

			{/* btn_w280 */}
			<View style={[organism_style.btn_w280_view_profileInfo, profileInfo_style.btn_w280_view]}>
				<View style={[organism_style.btn_w280_profileInfo, profileInfo_style.btn_w280]}>
					<Text>btn_w280</Text>
				</View>
				<View style={[organism_style.ActionButton_profileInfo, profileInfo_style.btn_w280]}>
					<Text>ActionButton(btn_w280)</Text>
				</View>
			</View>
		</View>
	);
};
