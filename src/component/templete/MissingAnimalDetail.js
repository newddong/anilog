import React from 'react';
import {View, ScrollView, LogBox} from 'react-native';
import {login_style, missingAnimalDetail, temp_style} from './style_templete';
import {SvgWrap} from 'Screens/svgwrapper';
import {Post_dog} from 'Asset/image';
import FeedContent from '../organism/FeedContent';
import CommentList from '../organism_ksw/CommentList';

export default MissingAnimalDetail = props => {
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, missingAnimalDetail.container]}>
				{/* Poster */}
				<View style={[missingAnimalDetail.poster]}>
					<SvgWrap svg={<Post_dog />} />
				</View>
				<View style={[temp_style.feedContent, missingAnimalDetail.feedContent]}>
					<FeedContent />
				</View>
				{/* <View style={{width:'100%', backgroundColor:GRAY30, height:2, }}/> */}
				<View style={[temp_style.commentList, missingAnimalDetail.commentList]}>
					<CommentList />
				</View>
			</View>
		</ScrollView>
	);
};
