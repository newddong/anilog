import React from 'react';
import {Text, View} from 'react-native';
import {Heart48_Border, Share48_Filled} from '../atom/icon';
import {activationDetail, login_style, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ActivationDetail = props => {
	return (
		<View style={[login_style.wrp_main, activationDetail.container]}>
			<View style={[activationDetail.imageContainer]}>
				<Text>Image</Text>
			</View>
			<View style={[activationDetail.titleContainer]}>
				<View style={[activationDetail.titleText]}>
					<Text>Activity Name</Text>
				</View>
				<View style={[activationDetail.heartContainer]}>
					<Heart48_Border />
					<Text style={[temp_txt.small]}>1.2k</Text>
				</View>
				<View style={[activationDetail.shareContainer]}>
					<Share48_Filled />
					<Text style={[temp_txt.small]}>공유</Text>
				</View>
			</View>
			<View style={[activationDetail.contentContainer]}>
				<Text>Content</Text>
			</View>
		</View>
	);
};
