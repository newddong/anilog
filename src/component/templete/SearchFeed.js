import React from 'react';
import {Text, View} from 'react-native';
import {login_style, searchFeed, temp_style, temp_txt} from './style_templete';
import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';
import {GRAY10} from 'Root/config/color';

export default SearchFeed = props => {
	return (
		<View style={[login_style.wrp_main, searchFeed.container]}>
			{/* 게시글 showState  */}
			<View style={[searchFeed.stateView]}>
				<View style={[searchFeed.showStateView]}>
					<View style={[searchFeed.showStateView.text]}>
						<Text style={[txt.noto20, {color: GRAY10}]}>임시보호 게시글만 보기</Text>
					</View>
					<View style={[temp_style.onOffSwitch, searchFeed.showStateView.onOffSwitch]}>
						<OnOffSwitch />
					</View>
				</View>
				<View style={[searchFeed.postState]}>
					<Text style={[temp_txt.small]}>추천 게시글</Text>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<View style={[temp_style.feedThumbnailList, searchFeed.feedThumbnailList]}>
				<FeedThumbnailList></FeedThumbnailList>
			</View>
		</View>
	);
};
