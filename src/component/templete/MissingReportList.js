import React from 'react';
import {ScrollView, Text, View, TouchableWithoutFeedback} from 'react-native';
import {feedWrite, login_style, missingReportList, searchProtectRequest, temp_style, temp_txt} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {WHITE} from 'Root/config/color';
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

	const [data, setData] = React.useState({
		filterValue: '',
		protectArea: '',
		kindFilter: '',
	});

	// 실종 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		const getList = () => {
			console.log('MissingReportList:feedlist of missing');
			getMissingReportList(
				{
					//필터 - 보호지역 (user_address.city 데이터)
					city: '',
					protect_animal_species: '',
					feedobject_id: '',
					request_number: 10,
				},
				data => {
					// console.log('getMissingReportList data', data.msg);
					// console.log('data' + JSON.stringify(`data${data}`));
					setData(data.msg);
				},
				err => {
					console.log('getMissingReportList Error', err);
				},
			);
		};
		//스크린 이동시 리스트 갱신
		const unsubscribe = navigation.addListener('focus', () => {
			getList();
		});
		//Refreshing 요청시 리스트 다시 조회
		refreshing ? getList() : false;
		return unsubscribe;
	}, [refreshing]);

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
		navigation.push('FeedWrite', {type: 'Report'});
	};
	const moveToMissingForm = () => {
		navigation.push('FeedWrite', {type: 'Missing'});
	};
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
		navigation.push('UserProfile', {userobject: item.feed_writer_id});
	};

	const onSelectLocation = location => {
		setData({...data, protectArea: location});
	};

	const onSelectKind = kind => {
		setData({...data, kindFilter: kind});
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
