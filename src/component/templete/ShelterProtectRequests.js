import React from 'react';
import {Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import FilterButton from '../molecules/FilterButton';
import {btn_w306} from '../atom/btn/btn_style';
import {Meatball50_APRI10_Horizontal} from '../atom/icon';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterProtectRequests = props => {
	const onOn_protectAreaFilter = () => {
		alert('보호지역 필터 버튼 온');
	};
	const onOn_kindFilter = () => {
		alert('동물 종류 필터 버튼 온');
	};
	const onOff_kindFilter = () => {
		alert('동물 종류 필터 버튼 오프');
	};

	return (
		<View style={login_style.wrp_main}>
			<View style={[temp_style.filterbutton_view, protectRequestList_style.filterbutton_view]}>
				<View style={[temp_style.filterbutton]}>
					<FilterButton btnTitle={'동물 종류'} btnLayout={btn_w306} onOff={onOff_kindFilter} onOn={onOn_kindFilter} />
				</View>
				<View style={[temp_style.meatball50]}>
					<Meatball50_APRI10_Horizontal onPress={() => alert('준비중입니다.')}></Meatball50_APRI10_Horizontal>
				</View>
			</View>

			{/* <FlatList> */}
			<ScrollView>
				<View style={[temp_style.baseFlatList_protectRequestList, baseInfo_style.list]}>
					{/* (O)AnimalNeedHelpList */}
					<AnimalNeedHelpList nowRoute={'ShelterProtectRequests'}></AnimalNeedHelpList>
				</View>
			</ScrollView>
			{/* </FlatList> */}
		</View>
	);
};
