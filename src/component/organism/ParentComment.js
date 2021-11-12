import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { organism_style, parentComment } from './style_organism';
import { styles } from '../atom/image/imageStyle';
import ChildCommentList from 'Root/component/organism/ChildCommentList';
import UserLocationTimeLabel from '../molecules/UserLocationTimeLabel';
import { Heart30_Filled, Meatball50_APRI10_Vertical } from '../atom/icon';
import { txt } from 'Root/config/textstyle';

export default ParentComment = props => {
	return (
		<View style={organism_style.parentComment}>
			{/* 유저프로필 라벨 및 Meatball  */}
			<View style={organism_style.UserLocationTimeLabel_view_parentComment}>
				<View style={organism_style.userLocationTimeLabel}>
					<UserLocationTimeLabel />
				</View>
				<View style={[organism_style.meatball_50_vertical, parentComment.meatball_50_vertical]}>
					<Meatball50_APRI10_Vertical />
				</View>
			</View>
			{/* 댓글 Dummy 이미지 및 대댓글 목록 */}
			<View style={[organism_style.img_square_round_574, parentComment.img_square_round_574]}>
				{/* DummyData - img */}
				<Image style={[styles.img_square_round_574]} source={{ uri: 'https://cdn.mkhealth.co.kr/news/photo/202004/img_MKH200424005_0.jpg' }} />
			</View>
			<View style={[parentComment.likeReplyButton]}>
				{/* Data - 좋아요 상태 t/f */}
				<View style={[parentComment.heart30]}>
					<Heart30_Filled />
				</View>
				<View style={[parentComment.likeCount]}>
					{/* Data - 좋아요 숫자 */}
					<Text style={(txt.roboto24, parentComment.likeCountText)}>33</Text>
				</View>
				<TouchableOpacity style={[parentComment.writeComment]} onPress={() => props.onPressReplyBtn()}>
					<Text style={(txt.noto22, parentComment.writeCommentText)}>· 답글 쓰기</Text>
				</TouchableOpacity>
			</View>
			{/* Data - 대댓글List */}
			<View style={[organism_style.childCommentList, parentComment.img_square_round_574]}>
				<ChildCommentList />
			</View>
		</View>
	);
};

ParentComment.defaultProps = {
	onPressReplyBtn: e => console.log(e),
};

// UserLocationTimeLabel.defaultProps = {
// 	data: {
// 		user_id: 'user_id',
// 		user_nickname: 'user_nickname',
// 		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		location: 'location',
// 		time: '1',
// 	},
// 	onClickLabel: e => console.log(e),
// };
