import React from 'react';
import {Text, View} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ProtectRequestList = props => {
	return (
		<View contentContainerStyle={[login_style.wrp_main, protectRequestList.container]}>
			<View style={[temp_style.topTabNavigation_border]}>
				<Text>(O)topTabNavigation_border</Text>
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
				<AnimalNeedHelpList></AnimalNeedHelpList>
			</View>
		</View>
	);
};
