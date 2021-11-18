import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Heart30_Border, Heart30_Filled, Meatball50_GRAY20_Vertical} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import UserTimeLabel from '../molecules/UserTimeLabel';
import {childComment} from './style_organism';

/**
 *
 * @param {{
 * data : Object,
 * onPressReplyBtn : void,
 * }} props
 */
export default ChildComment = props => {
	const userTimeLabel_data = props.data.profile_data;

	const [likeState, setLikeState] = React.useState(true);

	const onCLickHeart = () => {
		setLikeState(!likeState);
	};

	//대댓글 클릭
	const onPressReplyBtn = () => {
		props.onPressReplyBtn(props.data.comment);
	};

	//미트볼 클릭
	const onClickMeatBall = () => {};
	return (
		<View style={[childComment.container]}>
			<View style={[childComment.profileContainer]}>
				<View style={[childComment.commentMark]} />
				<View style={[childComment.userTimeLabel]}>
					<UserTimeLabel data={userTimeLabel_data} />
				</View>
				<View style={[childComment.meatBall50_vertical]}>
					<Meatball50_GRAY20_Vertical onPress={onClickMeatBall} />
				</View>
			</View>
			{/* 댓글의 이미지를 보이게하는 경우 */}

			<View style={[childComment.img_square_round_484]}>
				{/* data.img_uri가 null일 경우 이미지 컴포넌트는 null */}
				{props.data.img_uri != null ? <Image style={[styles.img_square_round_484]} source={{uri: props.data.img_uri}} /> : null}
			</View>
			{/* 댓글 텍스트 */}
			<View style={[childComment.commentContainer]}>
				<View style={[childComment.commentText]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>{props.data.comment}</Text>
				</View>
			</View>
			{/* 좋아요 버튼, 좋아요 숫자 , 답글쓰기 컨테이너 */}
			<View style={[childComment.likeReplyButton]}>
				<View style={[childComment.heart30]}>
					{likeState ? <Heart30_Filled onPress={onCLickHeart} /> : <Heart30_Border onPress={onCLickHeart} />}
				</View>
				<View style={[childComment.likeCount]}>
					<Text style={(txt.roboto24, childComment.likeCountText)}>{props.data.likecount}</Text>
				</View>
				<TouchableOpacity style={[childComment.writeComment]} onPress={onPressReplyBtn}>
					<Text style={(txt.noto22, childComment.writeCommentText)} numberOfLines={1}>
						· 답글 쓰기
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

ChildComment.defaultProps = {
	data: {
		img: false,
		comment: '개',
		likecount: 80,
	},
	onPressReplyBtn: e => console.log(e),
};

// UserTimeLabel.default
// data: {
// 	user_id: 'user_id',
// 	user_nickname: 'user_nickname',
// 	user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 	time: '1일',
// },
