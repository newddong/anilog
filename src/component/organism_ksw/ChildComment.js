import React from 'react';
import {Image, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Heart30_Filled, Meatball50_GRAY20_Vertical} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import UserTimeLabel from '../molecules/UserTimeLabel';
import {childComment} from './style_organism';

export default ChildComment = props => {
	const [showImage, setShowImage] = React.useState(true);
	return (
		<View style={[childComment.container]}>
			<View style={[childComment.profileContainer]}>
				<View style={[childComment.commentMark]} />
				<View style={[childComment.userTimeLabel]}>
					<UserTimeLabel />
				</View>
				<View style={[childComment.meatBall50_vertical]}>
					<Meatball50_GRAY20_Vertical />
				</View>
			</View>
			{showImage ? (
				<View style={[childComment.img_square_round_484]}>
					<Image style={[styles.img_square_round_484]} source={{uri: 'http://www.interfootball.co.kr/news/photo/202012/512564_417408_5117.jpg'}} />
				</View>
			) : null}
			<View style={[childComment.commentContainer]}>
				<View style={[childComment.commentText]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>CommentText</Text>
				</View>
			</View>
			<View style={[childComment.likeReplyButton]}>
				<View style={[childComment.heart30]}>
					<Heart30_Filled />
				</View>
				<View style={[childComment.likeCount]}>
					<Text style={(txt.roboto24, childComment.likeCountText)}>101</Text>
				</View>
				<View style={[childComment.writeComment]}>
					<Text style={(txt.noto22, childComment.writeCommentText)} numberOfLines={1}>
						· 답글 쓰기
					</Text>
				</View>
			</View>
		</View>
	);
};

// data: {
// 	user_id: 'user_id',
// 	user_nickname: 'user_nickname',
// 	user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 	time: '1일',
// },
