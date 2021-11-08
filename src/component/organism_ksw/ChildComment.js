import React from 'react';
import {Image, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Heart30_Filled, Meatball50_GRAY20_Vertical} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import UserTimeLabel from '../molecules/UserTimeLabel';
import {childComment} from './style_organism';

export default ChildComment = props => {
	const [showImage, setShowImage] = React.useState(true); //댓글쓰기의
	return (
		<View style={[childComment.container]}>
			<View style={[childComment.profileContainer]}>
				<View style={[childComment.commentMark]} />
				<View style={[childComment.userTimeLabel]}>
					<UserTimeLabel data={props.data} />
				</View>
				<View style={[childComment.meatBall50_vertical]}>
					<Meatball50_GRAY20_Vertical />
				</View>
			</View>
			{/* 댓글의 이미지를 보이게하는 경우 */}
			{showImage ? (
				<View style={[childComment.img_square_round_484]}>
					<Image style={[styles.img_square_round_484]} source={{uri: 'https://image.ytn.co.kr/general/jpg/2017/1018/201710181100063682_d.jpg'}} />
				</View>
			) : null}
			{/* 댓글 텍스트 */}
			<View style={[childComment.commentContainer]}>
				<View style={[childComment.commentText]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>{props.data.comment}</Text>
				</View>
			</View>
			{/* 좋아요 버튼, 좋아요 숫자 , 답글쓰기 컨테이너 */}
			<View style={[childComment.likeReplyButton]}>
				<View style={[childComment.heart30]}>
					<Heart30_Filled />
				</View>
				<View style={[childComment.likeCount]}>
					<Text style={(txt.roboto24, childComment.likeCountText)}>{props.data.likecount}</Text>
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

ChildComment.defaultProps = {
	data: {
		comment: '개',
		likecount: 80,
	},
};
