import React from 'react';
import {Text, View} from 'react-native';
import {login_style, searchFeed, temp_style, temp_txt} from './style_templete';

export default SearchFeed = props => {
	return (
		<View style={[login_style.wrp_main, searchFeed.container]}>
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
		</View>
	);
};
