import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import {login_style, temp_style, selectstat_view_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default FavoriteFeeds = props => {
	const navigation = useNavigation();
	return (
		<View style={login_style.wrp_main}>
			{/* SelectStat	 */}
			<View style={[temp_style.selectstat_view]}>
				{/* 취소, 전체선택, 선택삭제 */}
				<View style={[temp_style.selectstat, selectstat_view_style.selectstat]}>
					<View style={[temp_style.textBtn]}>
						<Text>취소</Text>
					</View>
					<View style={[temp_style.textBtn, selectstat_view_style.select_all]}>
						<Text>전체 선택</Text>
					</View>
					<View style={[temp_style.vertical_stick, selectstat_view_style.vertical_stick]}></View>
					<View style={[temp_style.textBtn, selectstat_view_style.delete_selected]}>
						<Text>선택 삭제</Text>
					</View>
				</View>

				{/* 선택하기 */}
				{/* <View style={[temp_style.selectstat, selectstat_view_style.selecting]}>
					<View style={[temp_style.textBtn_saveAnimalRequest, selectstat_view_style.delete_selected]}>
						<Text>선택하기</Text>
					</View>
				</View> */}
			</View>

			{/* <FlatList> */}
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
			{/* </FlatList> */}
		</View>
	);
};
