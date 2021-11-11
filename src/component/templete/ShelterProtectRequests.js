import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterProtectRequests = props => {
	return (
		<View style={login_style.wrp_main}>
			<View style={[temp_style.filterbutton_view, protectRequestList_style.filterbutton_view]}>
				<View style={[temp_style.filterbutton]}>
					<Text>(M)FilterButton</Text>
				</View>
				<View style={[temp_style.meatball50]}>
					<Text>(A)Meatball50Horizontal</Text>
				</View>
			</View>

			{/* <FlatList> */}
			<View style={[temp_style.baseFlatList_protectRequestList, baseInfo_style.list]}>
				{/* (O)AnimalNeedHelpList */}
				<AnimalNeedHelpList></AnimalNeedHelpList>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
