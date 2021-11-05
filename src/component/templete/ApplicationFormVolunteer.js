import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {login_style, applicationFormVolunteer, temp_txt, btn_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ApplicationFormVolunteer = props => {
	return (
		<View style={[login_style.wrp_main, applicationFormVolunteer.container]}>
			{/* ProfileImage & btn_w242*/}
			<View style={[applicationFormVolunteer.shelterInfo]}>
				<Text>(M)ShelterInfo</Text>
			</View>
			{/* ViewForm */}
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
			{/* participants */}
			<View style={[applicationFormVolunteer.participants]}>
				<View style={[applicationFormVolunteer.participants_step1]}>
					{/* Icon48 */}
					<View style={[applicationFormVolunteer.icon48]}>
						<Text style={[temp_txt.small]}>Icon48</Text>
					</View>
					{/* title */}
					<View style={[applicationFormVolunteer.title]}>
						<Text>title</Text>
					</View>
				</View>
				{/* List는 여기 */}
				<View style={[applicationFormVolunteer.participants_step2]}>
					<Text> (O)AccountList</Text>
				</View>
			</View>
			{/* ViewForm */}
			<View style={[applicationFormVolunteer.viewForm]}>
				<Text> ViewForm</Text>
			</View>
			{/* btn_w226 */}
			<View style={[btn_style.btn_w226, applicationFormVolunteer.btn_w226]}>
				<Text> (A) btn_w226 </Text>
			</View>
		</View>
	);
};
