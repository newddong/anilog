import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { APRI10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { Camera54 } from '../atom/icon';
import AidRequest from '../organism_ksw/AidRequest';
import { assignProtectAnimal_style, feedWrite, login_style, temp_style, writeAidRequest } from './style_templete';

export default WriteAidRequest = props => {


	//사진 추가 클릭
	const gotoSelectPicture = () => {
		navigation.push('MultiPhotoSelect', props.route.name);
	};

	return (
		<View style={[login_style.wrp_main, writeAidRequest.container]}>
			{/* (O)AidRequest */}
			<View style={[temp_style.aidRequest, writeAidRequest.aidRequest]}>
				<AidRequest />
				{/* FeedTextEdit */}
				<View style={[temp_style.feedTextEdit, writeAidRequest.feedTextEdit]}>
					<View style={[temp_style.feedTextEdit, feedWrite.feedTextEdit]}>
						{/* 피드 글 작성 */}
						<TextInput
							textAlignVertical={'top'}
							multiline={true}
							style={{ flex: 1 }}
							placeholder="무엇을 할까요?"
						></TextInput>
					</View>
				</View>
				<View style={{ width: 654 * DP, height: 2 * DP, marginVertical: 40 * DP, backgroundColor: APRI10 }} />

				{/* addPhoto */}
				<View style={[assignProtectAnimal_style.pic, {}]}>
					<Camera54 onPress={gotoSelectPicture} />
					<TouchableOpacity onPress={gotoSelectPicture}>
						<Text style={[txt.noto24, assignProtectAnimal_style.addpic]}>사진추가</Text>
					</TouchableOpacity>
				</View>
			</View>

		</View>
	);
};
