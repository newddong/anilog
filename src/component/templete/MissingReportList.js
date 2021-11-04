import React from 'react';
import {Text, View} from 'react-native';
import {login_style, missingReportList, searchProtectRequest, temp_style, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default MissingReportList = props => {
	return (
		<View contentContainerStyle={[login_style.wrp_main]}>
			{/* topTabNavigation_border */}
			<View style={[temp_style.topTabNavigation_border]}>
				<Text>(O)topTabNavigation_border</Text>
			</View>
			<View style={[missingReportList.filterContainer]}>
				<View style={[missingReportList.insideContainer]}>
					{/* FilterBtns */}
					<View style={{flexDirection: 'row'}}>
						<View style={[temp_style.filterBtn]}>
							<Text>FilterBTN</Text>
						</View>
						<View style={[temp_style.filterBtn]}>
							<Text>FilterBTN</Text>
						</View>
					</View>
				</View>
			</View>
			{/* (O)AnimalNeedHelpList */}
			<View style={[missingReportList.missingListContainer]}>
				<View style={[temp_style.animalNeedHelpList, missingReportList.animalNeedHelpList]}>
					<Text>(O)AnimalNeedHelpList</Text>
					<View style={[missingReportList.urget_write1]}>
						<Text style={[temp_txt.small]}>Urgent Write1</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
