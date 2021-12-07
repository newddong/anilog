import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, temp_style, selectstat_view_style} from './style_templete';
import {dummy_FeedObject, _dummyData_favoriteFeeds} from 'Root/config/dummyDate_json';
import Modal from '../modal/Modal';
import {CONFIRM_DELETE_FAVORITE_FEED, CONFIRM_DELETE_MY_FEED, CONFIRM_DELETE_TAG_ME_FEED} from 'Root/i18n/msg';

export default FavoriteFeeds = props => {
	const navigation = useNavigation();
	const [selectMode, setSelectMode] = React.useState(false);
	const [_dummyData, set_dummyData] = React.useState(dummy_FeedObject);
	const [selectCNT, setSelectCNT] = React.useState(0);

	React.useEffect(() => {
		_dummyData.map((v, i) => {
			console.log('useEffect + ' + i + ' : ' + v.checkBoxState);
		});
	}, [_dummyData]);

	//Check Box On
	const checkSelectMode = state => {
		setSelectMode(state);
		//전체 선택을 처음 누를 경우 무조건 체크 박스가 모두 선택되도록 하기 위해 setSelectCNT값을 0으로 초기화.
		setSelectCNT(0);
		//취소를 누르고 다시 선택하기를 누를 경우 선택되어 있는 체크박스가 없게 하기 위해 false로 초기화.
		let copy = [..._dummyData];
		copy.map((v, i) => {
			v.checkBoxState = false;
		});
		set_dummyData(copy);
	};

	//CheckBox Off
	const cancelSelectMode = e => {
		_dummyData.map((v, i) => {
			v.checkBoxState = false;
		});
		setSelectMode(e);
	};

	// 선택하기 => 선택 삭제 클릭
	const deleteSelectedItem = () => {
		//현재 dummyData 중 CheckBox 상태가 true인 것이 없는 경우
		if (_dummyData.findIndex(e => e.checkBoxState == true) == -1) {
			console.log('선택된 피드가 없습니다.');
			// CheckBox 상태가 true인 것이 존재하는 경우 삭제 시작
		} else {
			console.log('삭제시작');
			const doDelete = () => {
				let copy = [..._dummyData];
				copy = copy.filter(element => element.checkBoxState != true); //CheckBoxState가 true인 경우엔 걸러진다
				set_dummyData(copy);
				Modal.close();
			};
			const deleteMsg = () => {
				//FavoriteFeeds는 총 세 개의 Screen 호출 - UserFeed, FavoriteFeeds, TagMeFeeds
				if (props.route.name == 'TagMeFeeds') {
					return CONFIRM_DELETE_TAG_ME_FEED;
				} else if (props.route.name == 'FavoriteFeeds') {
					return CONFIRM_DELETE_FAVORITE_FEED;
				} else return CONFIRM_DELETE_MY_FEED;
			};
			Modal.popTwoBtn(deleteMsg(), '취소', '해제', () => Modal.close(), doDelete);
		}
	};

	// 선택하기 => 전체 선택 클릭
	const selectAll = () => {
		//v.checkBoxState = !v.checkBoxState와 같이 할 경우 체크 박스 값들이 각각 다를 경우 그것의 반대로만 변경 될 뿐 모두 선택되거나 모두 취소 되지 않음.
		setSelectCNT(selectCNT + 1);
		let copy = [..._dummyData];
		copy.map((v, i) => {
			//카운트의 2로 나눈 나머지값을 이용해서 전체 선택 혹은 전체 취소가 되도록 함.
			selectCNT % 2 == 0 ? (v.checkBoxState = true) : (v.checkBoxState = false);
			console.log('checkBoxState==>' + v.checkBoxState);
		});
		set_dummyData(copy);
	};

	//썸네일 클릭 - [ selecteMode에 따른 분기 ]
	const onClickThumnail = (index, feed_id) => {
		//선택하기 모드가 아닐 경우 (일반모드이며 썸네일 클릭시 네비게이션 동작)
		if (!selectMode) {
			//선택모드 true값과 false값이 반대로 주는 이유 확인 후 case 문으로 변경 필요
			if (props.route.name == 'UserFeeds') {
				navigation.push('UserFeedList', feed_id);
			} else if (props.route.name == 'TagMeFeeds') {
				navigation.push('TagMeFeedList', feed_id);
			} else if (props.route.name == 'FavoriteFeeds') {
				navigation.push('FavoriteFeedList', feed_id);
			}
			//다른 route가 있을 경우 else if 확장 할 것
			else {
				console.log('props.route.name=>' + props.route.name);
			}
		} else if (selectMode) {
			//SelectMode가 true일 경우, 썸네일 클릭 시 선택여부 state가 변화
			let copy = [..._dummyData];
			copy[index].checkBoxState = !copy[index].checkBoxState;
			set_dummyData(copy);
		}
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.selectstat_view]}>
				<View style={[temp_style.selectstat, selectstat_view_style.selectstat]}>
					<SelectStat
						onSelectMode={e => checkSelectMode(e)}
						onCancelSelectMode={e => cancelSelectMode(e)}
						onSelectAllClick={selectAll}
						onDeleteSelectedItem={deleteSelectedItem}
					/>
				</View>
			</View>

			{/* 즐겨찾기한 FeedList출력하는 FeedThumbnailList */}
			<View style={[temp_style.FeedThumbnailList]}>
				<FeedThumbnailList items={_dummyData} selectMode={selectMode} onClickThumnail={onClickThumnail} />
			</View>
		</View>
	);
};
