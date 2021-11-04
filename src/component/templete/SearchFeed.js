import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_style, feedListForHashTag, login_style, searchFeed, temp_style, temp_txt} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default SearchFeed = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main]}>
			{/* topTabNavigation_filled */}
			<View style={[temp_style.topTabNavigation_filled]}>
				<Text>(O)TopTabNavigation-filled</Text>
			</View>
			{/* topTabNavigation_border */}
			<View style={[temp_style.topTabNavigation_border]}>
				<Text>(O)TopTabNavigation-border</Text>
			</View>
			{/* 게시글 showState  */}
			<View style={[searchFeed.stateView]}>
				<View style={[searchFeed.showStateView]}>
					<View style={[searchFeed.showStateView.text]}>
						<Text>text</Text>
					</View>
					<View style={[temp_style.onOffSwitch, searchFeed.showStateView.onOffSwitch]}>
						<Text style={[temp_txt.small]}>(M)OnOffSwitch</Text>
					</View>
				</View>
				<View style={[searchFeed.postState]}>
					<Text style={[temp_txt.small]}>postState</Text>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<View style={[temp_style.feedThumbnailList, searchFeed.feedThumbnailList]}>
				<Text>FeedThumbnailList</Text>
			</View>
		</ScrollView>
	);
};
