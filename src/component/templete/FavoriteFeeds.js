import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, temp_style, selectstat_view_style} from './style_templete';
import {_dummyData_favoriteFeeds} from 'Root/config/dummyDate_json';

export default FavoriteFeeds = props => {
	const navigation = useNavigation();
	const [selectMode, setSelectMode] = React.useState(false);
	const [_dummyData, set_dummyData] = React.useState(_dummyData_favoriteFeeds);
	const [selectCNT, setSelectCNT] = React.useState(0);

	//Check Box On
	const checkSelectMode = e => {
		setSelectMode(e);

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
		setSelectMode(e);
	};

	// 선택하기 => 선택 삭제 클릭
	const deleteSelectedItem = () => {
		console.log('삭제시작');
		let copy = [..._dummyData];
		let deleteList = [];
		for (let i = 0; i < copy.length; i++) {
			if (copy[i].checkBoxState == true) {
				console.log('삭제목록임' + i);
				copy = copy.filter(item => item.checkBoxState != true);
				// deleteList.push(copy[i].user_nickname == null ? copy[i].keyword : copy[i].user_nickname);
			}
		}
		set_dummyData(copy);
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

	React.useEffect(() => {
		_dummyData.map((v, i) => {
			console.log('useEffect + ' + i + ' : ' + v.checkBoxState);
		});
	}, [_dummyData]);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* SelectStat	 */}
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
				{console.log('_dummyData====>' + _dummyData)}
				<FeedThumbnailList
					data={_dummyData}
					selectMode={selectMode}
					onClickThumnail={() => {
						//선택하기 모드가 아닐 경우 (일반모드이며 썸네일 클릭시 네비게이션 동작)
						if (!selectMode) {
							//선택모드 true값과 false값이 반대로 주는 이유 확인 후 case 문으로 변경 필요
							if (props.route.name == 'UserFeeds') {
								navigation.push('UserFeedList');
							} else if (props.route.name == 'TagMeFeeds') {
								navigation.push('TagMeFeedList');
							} else if (props.route.name == 'FavoriteFeeds') {
								navigation.push('FavoriteFeedList');
							}
							//다른 route가 있을 경우 else if 확장 할 것
							else {
								console.log('props.route.name=>' + props.route.name);
							}
						} else {
						}
					}}
				/>
			</View>
		</View>
	);
};
