import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_style, login_style, petInfoSetting, setPetInformation, temp_style, temp_txt, vaccinationRecord} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default VaccinationRecord = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main]}>
			<View style={[vaccinationRecord.vaccinationForm_container]}>
				{/* (O)Vaccination */}
				<View style={[vaccinationRecord.vaccination_category]}>
					<Text>(O)Vaccination</Text>
				</View>
				{/* (O)Vaccination */}
				<View style={[vaccinationRecord.vaccination_category]}>
					<Text>(O)Vaccination</Text>
				</View>
				{/* (O)Vaccination */}
				<View style={[vaccinationRecord.vaccination_category]}>
					<Text>(O)Vaccination</Text>
				</View>
			</View>
			{/* 다음 예정일 알림 */}
			<View style={[vaccinationRecord.dueDateView]}>
				<View style={[vaccinationRecord.dueDateText]}>
					<Text style={[temp_txt.small]}>다음예정일 알림</Text>
				</View>
				<View style={[vaccinationRecord.dueDateSwitch]}>
					<Text style={[temp_txt.small]}>OnOffSwitch</Text>
				</View>
			</View>
			{/* 접종표 관련 권고사항 메시지 */}
			<View style={[vaccinationRecord.guide_msg, txt.noto24]}>
				<Text>해당 접종표는 표준에 근거한 접종간격입니다.</Text>
				<Text>각 반려견마다 접종 기간 간격이 다를 수도 있음을 알려드립니다.</Text>
			</View>
		</ScrollView>
	);
};
