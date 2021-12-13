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
import {getFeedListByFeedId} from 'Root/api/feedapi_hjs';

export default MissingReportList = props => {
	const navigation = useNavigation();
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean

	const [data, setData] = React.useState({
		filterValue: '',
		protectArea: '',
		kindFilter: '',
	});

	//실종 데이터 불러오기 (아직 API 미작업 )
	// React.useEffect(() => {
	// 	console.log('MissingReportList:feedlist of missing');
	// 	getFeedListByFeedId(
	// 		{
	// 			feed_object_id: props.route.params.feed_object_id,
	// 		},
	// 		data => {
	// 			console.log('data' + JSON.stringify(`data${data}`));
	// 			setData(data);
	// 		},
	// 	);
	// }, [props.route.params]);

	//[hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요
	const [data1, setData1] = React.useState({
		//user object (게시글 작성자의 db 고유 아이디를 통해 조회)
		user_profile_uri: '',
		user_nickname: '',
		user_address: '',

		//feed object
		feed_object_id: '', //피드 아이디
		feed_writer_id: '', //게시글 작성자의 db 고유 아이디
		feed_medias: '', //피드 첨부된 미디어 매체
		feed_location: '',
		feed_content: '', //컨텐츠 내용
		feed_date: '', //피드 최초 작성일자
		feed_update_date: '', //피드 최종 업로드 날자
		feed_favorite_count: 0, //게시글을 즐겨찾기로 등록한 수
		feed_comment_count: 0, //게시글에 달린 댓글의 수

		//comment object (배열 형식으로 받음)  댓글 사용자 정보
		comment: [
			{
				user_profile_uri: '',
				user_nickname: '',
				user_address: '',

				comment_contents: '', //댓글 내용
				comment_photo_uri: '', //댓글 첨부 이미지 uri
				comment_is_secure: '', //true일때는 writer와 댓글이 달린 게시글 작성자만 볼수있음,
				comment_date: '', //댓글 작성일시
				comment_update_date: '', //댓글 최정 수정일시
				comment_like_count: '', //댓글 좋아요 숫자
				comment_parent: '', //대댓글이 달린 댓글의 ID
				comment_parent_writer_id: '', //부모 댓글의 작성자 ID
			},
		],
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
						data={dummy_MissingReportList}
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
