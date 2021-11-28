import React from 'react';
import {ScrollView, Text, View, TouchableWithoutFeedback} from 'react-native';
import {feedWrite, login_style, missingReportList, temp_style, temp_txt} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {WHITE} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Urgent_Write1, Urgent_Write2} from '../atom/icon';
import {useNavigation} from '@react-navigation/core';
import {dummy_MissingReportList} from 'Root/config/dummy_data_hjs';
import FilterButton from '../molecules/FilterButton';
import {PET_KIND} from 'Root/i18n/msg';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default MissingReportList = props => {
	const navigation = useNavigation();
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean

	const [data, setData] = React.useState({
		filterValue: '',
		protectArea: '',
		kindFilter: '',
	});

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
	const moveToReportForm = () => {
		navigation.push('FeedWrite');
	};
	const moveToMissingForm = () => {
		navigation.push('FeedWrite');
	};
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};

	return (
		<View style={[login_style.wrp_main, missingReportList.container]}>
			<ScrollView style={{flex: 1}}>
				<View style={[missingReportList.filterContainer]}>
					<View style={[missingReportList.insideContainer]}>
						{/* FilterBtns */}
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton btnTitle={'보호 지역'} btnLayout={btn_w306} onOff={onOff_protectAreaFilter} onOn={onOn_protectAreaFilter} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} />
							</View>
						</View>
					</View>
				</View>
				{/* (O)AnimalNeedHelpList */}
				<View style={[missingReportList.animalNeedHelpList]}>
					<AnimalNeedHelpList data={dummy_MissingReportList} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
			</ScrollView>
			{showUrgentBtns ? (
				<View style={[temp_style.floatingBtn, feedWrite.urgentBtnContainer]}>
					{showActionButton ? (
						<View>
							<View style={[feedWrite.urgentBtnItemContainer]}>
								<TouchableWithoutFeedback onPress={moveToMissingForm}>
									<Text style={[txt.noto32, {color: WHITE}]}>실종</Text>
								</TouchableWithoutFeedback>
							</View>
							<View style={[feedWrite.urgentBtnItemContainer]}>
								<TouchableWithoutFeedback onPress={moveToReportForm}>
									<Text style={[txt.noto32, {color: WHITE}]}>제보</Text>
								</TouchableWithoutFeedback>
							</View>
						</View>
					) : null}
					<View style={[feedWrite.urgentActionButton]}>
						{showActionButton ? (
							<Urgent_Write2 onPress={() => setShowActionButton(!showActionButton)} />
						) : (
							<Urgent_Write1 onPress={() => setShowActionButton(!showActionButton)} />
						)}
					</View>
				</View>
			) : (
				false
			)}
		</View>
	);
};
