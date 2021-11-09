import React from 'react';
import {Text, View, Image} from 'react-native';
import {organism_style, parentComment_style} from './style_organism';
import FeedContent from './FeedContent';
import {styles} from '../atom/image/imageStyle';
import ChildComment from 'Root/component/organism_ksw/ChildComment';
import ChildCommentList from 'Root/component/organism/ChildCommentList';
import UserLocationTimeLabel from '../molecules/UserLocationTimeLabel';
import {Meatball50_APRI10_Vertical} from '../atom/icon';

export default ParentComment = props => {
	return (
		<View style={organism_style.parentComment}>
			<View style={organism_style.UserLocationTimeLabel_view_parentComment}>
				<View style={organism_style.userLocationTimeLabel}>
					{/* <Text>(M)UserLocationTimeLabel</Text> */}
					<UserLocationTimeLabel />
				</View>
				<View style={[organism_style.meatball_50_vertical, parentComment_style.meatball_50_vertical]}>
					{/* <Text>(A)MEATBALL_50_VERTICAL</Text> */}
					<Meatball50_APRI10_Vertical />
				</View>
			</View>
			<View style={[organism_style.img_square_round_574, parentComment_style.img_square_round_574]}>
				<Image style={[styles.img_square_round_574]} source={{uri: 'http://image.auction.co.kr/itemimage/17/1b/2b/171b2b67d6.jpg'}} />
			</View>
			<View style={[organism_style.childCommentList, parentComment_style.img_square_round_574]}>
				<ChildCommentList></ChildCommentList>
			</View>
		</View>
	);
};
