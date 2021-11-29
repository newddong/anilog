import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {organism_style, parentComment} from './style_organism';
import {styles} from '../atom/image/imageStyle';
import ChildCommentList from 'Root/component/organism/ChildCommentList';
import UserLocationTimeLabel from '../molecules/UserLocationTimeLabel';
import {Heart30_Border, Heart30_Filled, Meatball50_APRI10_Vertical} from '../atom/icon';
import {txt} from 'Root/config/textstyle';
import {dummy_userLocationTimeLabel} from '../../config/dummyDate_json';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {{
 * data : Object,
 * onPress_ChildComment_ReplyBtn : void,
 * onPressReplyBtn : void,
 * }} props
 */
export default ParentComment = props => {
	console.log('ParentComment', props.parentComment);

	const [data, setData] = React.useState({...props.parentComment});
	const [likeState, setLikeState] = React.useState(true);

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res == data.leke_comment_id;
			setLikeState(true);
		});
		// console.log('like?', props.parentComment.like_comment_id);
	}, [props.parentComment]);

	const onCLickHeart = () => {
		setLikeState(!likeState);
	};

	return (
		<View style={organism_style.parentComment}>
			{/* 유저프로필 라벨 및 Meatball  */}
			<View style={organism_style.UserLocationTimeLabel_view_parentComment}>
				<View style={organism_style.userLocationTimeLabel}>
					<UserLocationTimeLabel data={data} />
				</View>
				<View style={[organism_style.meatball_50_vertical, parentComment.meatball_50_vertical]}>
					<MeatBallDropdown menu={['신고', '삭제']} horizontal={false} />
				</View>
			</View>
			{/* 댓글 Dummy 이미지 및 대댓글 목록 */}
			<View style={[organism_style.img_square_round_574, parentComment.img_square_round_574]}>
				{props.parentComment.img_uri != null ? <Image style={[styles.img_square_round_574]} source={{uri: props.parentComment.img_uri}} /> : null}
			</View>
			<View style={[parentComment.likeReplyButton]}>
				{/* Data - 좋아요 상태 t/f */}
				<View style={[parentComment.heart30]}>
					{likeState ? <Heart30_Filled onPress={onCLickHeart} /> : <Heart30_Border onPress={onCLickHeart} />}
				</View>
				<View style={[parentComment.likeCount]}>
					{/* Data - 좋아요 숫자 */}
					<Text style={(txt.roboto24, parentComment.likeCountText)}>{props.parentComment.comment_like_count}</Text>
				</View>
				<TouchableOpacity style={[parentComment.writeComment]} onPress={() => props.onPressReplyBtn()}>
					<Text style={(txt.noto22, parentComment.writeCommentText)}>· 답글 쓰기</Text>
				</TouchableOpacity>
			</View>
			{/* Data - 대댓글List */}
			<View style={[organism_style.childCommentList, parentComment.img_square_round_574]}>
				<ChildCommentList onPressReplyBtn={comment => props.onPress_ChildComment_ReplyBtn(comment)} />
			</View>
		</View>
	);
};

ParentComment.defaultProps = {
	onPressReplyBtn: e => console.log(e), //부모 댓글의 답글 쓰기 클릭 이벤트
	onPress_ChildComment_ReplyBtn: e => console.log(e), //자식 댓글의 답글 쓰기 클릭 이벤ㅌ
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
