import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {feedListForHashTag, login_style, temp_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default FeedListForHashTag = props => {
	return (
		<ScrollView contentContainerStyle={[login_style.wrp_main]}>
			{/* HashTagInfo */}
			<View style={[feedListForHashTag.hashTagInfo]}>
				<View style={[feedListForHashTag.hashLabel]}>
					<Text>HashLabel</Text>
				</View>
				<View style={[feedListForHashTag.postCategory]}>
					<Text style={[txt.noto24]}>최근게시글 </Text>
					<Text style={{}}> | </Text>
					<Text style={[txt.noto24]}> 추천게시글</Text>
				</View>
			</View>
			{/* FeedThumbnailList */}
			<View style={[temp_style.feedThumbnailList]}>
				<Text>(O)FeedThumbnailList</Text>
			</View>
		</ScrollView>
	);
};
