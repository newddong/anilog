import React from 'react';
import {ScrollView, Text, View, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import {feedWrite, login_style, missingReportList, searchProtectRequest, temp_style, temp_txt} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {GRAY10, WHITE} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Urgent_Write1, Urgent_Write2} from '../atom/icon';
import {useNavigation} from '@react-navigation/core';
import {dummy_MissingReportList} from 'Root/config/dummy_data_hjs';
import FilterButton from '../molecules/FilterButton';
import {PET_KIND, PET_PROTECT_LOCATION} from 'Root/i18n/msg';
import {getMissingReportList} from 'Root/api/feedapi.js';

export default MissingReportList = props => {
	const navigation = useNavigation();
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean
	const [refreshing, setRefreshing] = React.useState(false);

	const [data, setData] = React.useState([]);
	const [filterData, setFilterData] = React.useState({
		city: '',
		missing_animal_species: '',
		feedobject_id: '',
		request_number: 10,
	});

	// 실종 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		console.log('MissingReportList:feedlist of missing', filterData);
		getMissingReportList(
			filterData,
			data => {
				// console.log('getMissingReportList data', data.msg);
				setData(data.msg);
			},
			err => {
				console.log('getMissingReportList Error', err);
				if (err == '검색 결과가 없습니다.') {
					setData([]);
				}
			},
		);
	}, [refreshing, filterData]);

	//제보 게시글 쓰기 클릭
	const moveToReportForm = () => {
		navigation.push('FeedWrite', {feedType: 'Report'});
	};

	//실종 게시글 쓰기 클릭
	const moveToMissingForm = () => {
		navigation.push('FeedWrite', {feedType: 'Missing'});
	};

	//실종제보 게시글의 좋아요 태그 클릭
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};

	const onClickLabel = (status, id, item) => {
		console.log(`\nMissingReportList:onLabelClick() - status=>${status} id=>${id} item=>${JSON.stringify(item)}`);
		switch (status) {
			case 'missing':
				navigation.push('MissingAnimalDetail', {_id: id});
				break;
			case 'report':
				navigation.push('ReportDetail', {_id: id});
				break;
		}
	};
	//제보게시글의 제보자 닉네임 클릭
	const onPressReporter = item => {
		console.log('item', item.feed_writer_id);
		navigation.push('UserProfile', {userobject: item.feed_writer_id});
	};

	const onSelectLocation = location => {
		location == '지역' ? setFilterData({...filterData, city: ''}) : setFilterData({...filterData, city: location});
	};

	const onSelectKind = kind => {
		kind == '동물종류' ? setFilterData({...filterData, missing_animal_species: ''}) : setFilterData({...filterData, missing_animal_species: kind});
	};

	const whenEmpty = () => {
		return (
			<View style={[{height: 100 * DP, marginVertical: 30 * DP, alignItems: 'center', justifyContent: 'center'}]}>
				<Text style={[txt.roboto30b, {color: GRAY10}]}> 목록이 없습니다.</Text>
			</View>
		);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_PROTECT_LOCATION} onSelect={onSelectLocation} width={306} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} onSelect={onSelectKind} width={306} />
							</View>
						</View>
					</View>
				</View>
				<View style={[searchProtectRequest.animalNeedHelpList]}>
					{/* 플랫리스트 부분 */}
					<AnimalNeedHelpList
						// data={dummy_MissingReportList}
						data={data}
						onPressReporter={onPressReporter}
						onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)}
						onClickLabel={(status, id) => onClickLabel(status, id)}
						whenEmpty={whenEmpty()}
					/>
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
