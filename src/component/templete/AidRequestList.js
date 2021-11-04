import React from 'react';
import {LogBox, ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, aidRequestList} from './style_templete';

export default AidRequestList = props => {
	//ScrollView와 FlatList 충돌 오류 로그 팝업 방지
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, aidRequestList.container]}>
				{/* AccountList */}
				<View style={[aidRequestList.aidRequestList]}>
					<Text>AccountList</Text>
				</View>
			</View>
		</ScrollView>
	);
};
