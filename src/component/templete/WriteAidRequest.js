import React from 'react';
import {Text, View} from 'react-native';
import {Camera54} from '../atom/icon';
import {login_style, temp_style, writeAidRequest} from './style_templete';

export default WriteAidRequest = props => {
	return (
		<View style={[login_style.wrp_main, writeAidRequest.container]}>
			{/* (O)AidRequest */}
			<View style={[temp_style.aidRequest, writeAidRequest.aidRequest]}>
				<Text>(O)AidRequest</Text>
			</View>
			{/* FeedTextEdit */}
			<View style={[temp_style.feedTextEdit, writeAidRequest.feedTextEdit]}>
				<Text>FeedTextEdit</Text>
			</View>
			{/* addPhoto */}
			<View style={[writeAidRequest.addPhotoContainer]}>
				<Camera54 />
				<View style={[writeAidRequest.addPhotoText]}>
					<Text>Text</Text>
				</View>
			</View>
		</View>
	);
};
