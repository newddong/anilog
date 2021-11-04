import React from 'react';
import {LogBox, ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, temp_style, writeAidRequest} from './style_templete';

export default WriteAidRequest = props => {
	//ScrollView와 FlatList 충돌 오류 로그 팝업 방지
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, writeAidRequest.container]}>
				<View style={[temp_style.aidRequest, writeAidRequest.aidRequest]}>
					<Text>(O)AidRequest</Text>
				</View>
				<View style={[writeAidRequest.feedTextEdit]}>
					<Text>FeedTextEdit</Text>
				</View>
				<View style={[writeAidRequest.addPhotoContainer]}></View>
			</View>
		</ScrollView>
	);
};
