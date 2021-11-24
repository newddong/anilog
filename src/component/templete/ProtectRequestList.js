import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import FilterButton from '../molecules/FilterButton';
import {btn_w306} from '../atom/btn/btn_style';
import {GRAY10} from 'Root/config/color';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ProtectRequestList = ({navigation, route}) => {
	console.log(navigation.getState().routes);
	console.log(route);
	const filterOn = () => {
		alert('입양 가능한 게시글만 보기');
	};
	const filterOff = () => {
		alert('입양 가능한 게시글만 보기 끄기');
	};
	const onOff_protectAreaFilter = () => {
		alert('보호지역 필터 버튼 오프');
	};
	const onOff_kindFilter = () => {
		alert('동물 종류 필터 버튼 오프');
	};
	const onOn_protectAreaFilter = () => {
		alert('보호지역 필터 버튼 온');
	};
	const onOn_kindFilter = () => {
		alert('동물 종류 필터 버튼 온');
	};

	return (
		<ScrollView style={{flex: 1}}>
			<View style={[login_style.wrp_main, protectRequestList.container]}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton btnTitle={'보호 지역'} btnLayout={btn_w306} onOff={onOff_protectAreaFilter} onOn={onOn_protectAreaFilter} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton btnTitle={'동물 종류'} btnLayout={btn_w306} onOff={onOff_kindFilter} onOn={onOn_kindFilter} />
							</View>
						</View>
						<View style={[searchProtectRequest.filterView.onOffBtnView]}>
							<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
								<Text style={[txt.noto20, {color: GRAY10}]}>입양 가능한 게시글만 보기</Text>
							</View>
							<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
								<OnOffSwitch onSwtichOn={filterOn} onSwtichOff={filterOff} />
							</View>
						</View>
					</View>
				</View>
				<View style={[temp_style.animalNeedHelpList, searchProtectRequest.animalNeedHelpList]}>
					<AnimalNeedHelpList />
				</View>
			</View>
		</ScrollView>
	);
};
