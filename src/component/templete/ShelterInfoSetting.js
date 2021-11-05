import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {login_style, temp_style, shelterInfoSetting, temp_txt} from './style_templete';

export default ShelterInfoSetting = props => {
	return (
		<View style={(login_style.wrp_main, shelterInfoSetting.container)}>
			{/* ProfileImage & btn_w242*/}
			<ScrollView>
				<View style={[shelterInfoSetting.shelterInfoSetting_step1]}>
					<View style={[temp_style.profileImageLarge]}>
						<Text>(M)ProfileImageLarge</Text>
					</View>
					<View style={[shelterInfoSetting.btn_w242]}>
						<Text style={temp_txt.small}>(A)btn_w242</Text>
					</View>
				</View>

				{/* MyInfo */}
				<View style={[shelterInfoSetting.shelterInfoSetting_step2]}>
					<Text>MyInfo</Text>
				</View>
			</ScrollView>
		</View>
	);
};
