import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, locationPicker} from './style_templete';

export default LocationPicker = props => {
	return (
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
	);
};
