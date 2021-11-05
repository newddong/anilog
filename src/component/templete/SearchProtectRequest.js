import React from 'react';
import {Text, View} from 'react-native';
import {login_style, searchProtectRequest, temp_style} from './style_templete';

export default SearchProtectRequest = props => {
	return (
		<View contentContainerStyle={[login_style.wrp_main, searchProtectRequest.container]}>
			<View style={[temp_style.topTabNavigation_filled]}>
				<Text>(O)topTabNavigation_filled</Text>
			</View>
			<View style={[searchProtectRequest.filterView]}>
				<View style={[searchProtectRequest.filterView.inside]}>
					<View style={{flexDirection: 'row'}}>
						<View style={[temp_style.filterBtn]}>
							<Text>FilterBTN</Text>
						</View>
						<View style={[temp_style.filterBtn]}>
							<Text>FilterBTN</Text>
						</View>
					</View>
					<View style={[searchProtectRequest.filterView.onOffBtnView]}>
						<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
							<Text>Text</Text>
						</View>
						<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
							<Text>(M)onOffSwitch</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={[temp_style.animalNeedHelpList, searchProtectRequest.animalNeedHelpList]}>
				<Text>(O)animalNeedHelpList </Text>
			</View>
		</View>
	);
};
