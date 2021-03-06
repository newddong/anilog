import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import ShelterInfo from '../molecules/ShelterInfo';
import {applicationFormVolunteer, applyVolunteer, btn_style, login_style, temp_txt} from './style_templete';

export default ApplyVolunteer = props => {
	const navigation = useNavigation();
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, applyVolunteer.container]}>
				{/* ShelterInfo */}

				<View style={[applicationFormVolunteer.shelterInfo]}>
					{/* <Text>(M)ShelterInfo</Text> */}
					<ShelterInfo />
				</View>
				{/* InputForm */}
				<View style={[applicationFormVolunteer.viewForm]}>
					<View style={[applicationFormVolunteer.viewForm_step1]}>
						{/* Icon48 */}
						<View style={[applicationFormVolunteer.icon48]}>
							<Text style={[temp_txt.small]}>Icon48</Text>
						</View>
						{/* title */}
						<View style={[applicationFormVolunteer.title]}>
							<Text>title</Text>
						</View>
					</View>
					{/* Text */}
					<View style={[applicationFormVolunteer.viewForm_step2]}>
						<Text>Text</Text>
					</View>
				</View>
				{/* Participants */}
				<View style={[applicationFormVolunteer.participants]}>{/* <Text>Participants</Text> */}</View>
				{/* InputForm */}
				<View style={[applicationFormVolunteer.viewForm]}>
					<View style={[applicationFormVolunteer.viewForm_step1]}>
						{/* Icon48 */}
						<View style={[applicationFormVolunteer.icon48]}>
							<Text style={[temp_txt.small]}>Icon48</Text>
						</View>
						{/* title */}
						<View style={[applicationFormVolunteer.title]}>
							<Text>title</Text>
						</View>
					</View>
					{/* Text */}
					<View style={[applicationFormVolunteer.viewForm_step2]}>
						<Text>Text</Text>
					</View>
				</View>
				{/* btn_w226 */}
				<View style={[btn_style.btn_w226, applyVolunteer.btn_w226]}>
					<AniButton title={'??????'} btnLayout={btn_w226} btnStyle={'filled'} titleFontStyle={30} onPress={() => navigation.navigate('UserProfile')} />
				</View>
			</View>
		</ScrollView>
	);
};
