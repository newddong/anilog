import React from 'react';
import {LogBox, ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, temp_style, locationPicker} from './style_templete';

export default LocationPicker = props => {
	//ScrollView와 FlatList 충돌 오류 로그 팝업 방지

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, locationPicker.container]}>
				{/* (M)inputWithSearchIcon */}
				<View style={[temp_style.inputWithSearchIcon, locationPicker.inputWithSearchIcon]}>
					<Text>(M)inputWithSearchIcon</Text>
				</View>
				{/* LocationList */}
				<View style={[locationPicker.locationList]}>
					<Text>LocationList</Text>
				</View>
			</View>
		</ScrollView>
	);
};
