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

	const [data, setData] = React.useState({
		filterValue: '',
		protectArea: '',
		kindFilter: '',
	});

	// 실종 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(
		() => {
			console.log('MissingReportList:feedlist of missing');
			getMissingReportList(
				{
					//필터 - 보호지역 (user_address.city 데이터)
					city: data.city,
					//필터 - 동물종류
					protect_animal_species: data.protect_animal_species,
					request_number: 10,
				},
				data => {
					console.log('getMissingReportList data', data.msg);
					// console.log('data' + JSON.stringify(`data${data}`));
					setData(data.msg);
				},
				err => {
					console.log('getMissingReportList Error', err);
				},
			);
		},
		// [],
		[props.route.params],
	);

	// [hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요
	// const [data1, setData1] = React.useState([]);

	// //FeedObject
	// feedobject_id: '', //피드 아이디
	// feed_thumbnail: '', //보호요청 게시물 썸네일 uri
	// feed_type: '', //게시글의 타입, ‘일반게시물(feed)’,’실종게시물(missing)’,’제보게시물(report)’로 나뉨
	// missing_animal_species: '', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
	// missing_animal_species_detail: '', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
	// missing_animal_sex: '', //보호중인 동물의 성별
	//missing_animal_age: '', //실종 동물의 나이
	// missing_animal_lost_location: '',  //실종 동물의 실종 지역 혹은 장소
	// missing_animal_features: '', //실종 동물의 특징
	// missing_animal_date: '', //실종일
	// report_witness_date:'', //제보일자(해당 동물의 목격일)
	// report_witness_location: '',//제보장소(목격장소)

	// //BookmarkProtectRequestObject
	// bookmark: false, //유저-보호요청 북마크

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

	const onClickLabel = (status, id, item) => {
		console.log(`\nMissingReportList:onLabelClick() - status=>${status} id=>${id} item=>${JSON.stringify(item)}`);

		switch (status) {
			case 'missing':
				navigation.push('MissingAnimalDetail');
				break;
			case 'report':
				navigation.push('ReportDetail');
				break;
		}
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
