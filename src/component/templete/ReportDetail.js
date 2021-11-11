import React from 'react';
import {FlatList, LogBox, ScrollView, Image} from 'react-native';
import {Text, View} from 'react-native';
import {testArray} from 'Root/i18n/msg';
import {login_style, reportDetail, temp_style} from './style_templete';
import FeedContent from '../organism/FeedContent';

export default ReportDetail = props => {
	const getFlat = item => {
		return (
			<View>
				<Text>{item}</Text>
				<Text>{item}</Text>
			</View>
		);
	};
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, reportDetail.container]}>
				{/* Img_square_750 */}
				<View style={[temp_style.img_square_750, reportDetail.img_square_750]}>
					<Image
						source={{
							uri: 'https://cdn.mkhealth.co.kr/news/photo/202102/52163_52859_5928.jpg',
						}}
						style={[temp_style.img_square_750]}
					/>
				</View>
				{/* (O)FeedContent */}
				<View style={[temp_style.feedContent, reportDetail.feedContent]}>
					<FeedContent></FeedContent>
				</View>
				{/* (O)CommentList */}
				<View style={[temp_style.commentList, reportDetail.commentList]}>
					<Text>(O)CommentList</Text>
					<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
				</View>
			</View>
		</ScrollView>
	);
};
