import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, temp_style, selectstat_view_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default FavoriteFeeds = props => {
	const navigation = useNavigation();
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* SelectStat	 */}
			<View style={[temp_style.selectstat_view]}>
				<View style={[temp_style.selectstat, selectstat_view_style.selectstat]}>
					<SelectStat />
				</View>
			</View>

			{/* 즐겨찾기한 FeedList출력하는 FeedThumbnailList */}
			<View style={[temp_style.FeedThumbnailList]}>
				<FeedThumbnailList
					onClickThumnail={() => {
						if (props.route.name == 'UserFeeds') {
							navigation.push('UserFeedList');
						} else if (props.route.name == 'TagMeFeeds') {
							navigation.push('TagMeFeedList');
						}
						//다른 route가 있을 경우 else if 확장 할 것
						else {
						}
					}}
				/>
			</View>
		</View>
	);
};
