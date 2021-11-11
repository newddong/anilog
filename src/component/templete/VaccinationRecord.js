import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import OnOffSwitch from '../molecules/OnOffSwitch';
import Vaccination from '../organism_ksw/Vaccination';
import {login_style, temp_txt, vaccinationRecord} from './style_templete';

export default VaccinationRecord = props => {
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, vaccinationRecord.container]}>
				<View style={[vaccinationRecord.vaccinationForm_container]}>
					{/* (O)Vaccination */}
					<View style={[vaccinationRecord.vaccination_category]}>
						<Vaccination />
					</View>
					{/* (O)Vaccination */}
					<View style={[vaccinationRecord.vaccination_category]}>
						<Vaccination />
					</View>
					{/* (O)Vaccination */}
					<View style={[vaccinationRecord.vaccination_category]}>
						<Vaccination />
					</View>
				</View>
				{/* 다음 예정일 알림 */}
				<View style={[vaccinationRecord.dueDateView]}>
					<View style={[vaccinationRecord.dueDateText]}>
						<Text style={[txt.noto24, {color: GRAY10}]}>다음예정일 알림</Text>
					</View>
					<View style={[vaccinationRecord.dueDateSwitch]}>
						<OnOffSwitch />
					</View>
				</View>
				{/* 접종표 관련 권고사항 메시지 */}
				<View style={[vaccinationRecord.guide_msg]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>해당 접종표는 표준에 근거한 접종간격입니다.</Text>
					<Text style={[txt.noto24, {color: GRAY10}]}>각 반려견마다 접종 기간 간격이 다를 수도 있음을 알려드립니다.</Text>
				</View>
			</View>
		</ScrollView>
	);
};
