import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {organism_style, parentComment} from './style_organism';
import {styles} from '../atom/image/imageStyle';
import ChildCommentList from 'Root/component/organism/ChildCommentList';
import UserLocationTimeLabel from '../molecules/UserLocationTimeLabel';
import {Heart30_Border, Heart30_Filled} from '../atom/icon';
import {txt} from 'Root/config/textstyle';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_PROFILE, SETTING_COMMENT, SETTING_OWN_COMMENT} from 'Root/i18n/msg';
import {dummy_ChildComment} from 'Root/config/dummyDate_json';
import {GRAY10} from 'Root/config/color';

/**
 *
 * @param {{
 * data : Object,
 * onPress_ChildComment_ReplyBtn : void,
 * onPressReplyBtn : void,
 * }} props
 */
export default ParentComment = props => {
	// console.log('ParentComment', props.parentComment.comment_contents);

	const [data, setData] = React.useState(props.parentComment);
	const [likeState, setLikeState] = React.useState(false); //해당 댓글의 좋아요 상태 - 로그인 유저가 좋아요를 누른 기록이 있다면 filled , or border
	const [isMyComment, setIsMyComment] = React.useState(false); //해당 댓글 작성자가 본인인지 여부 Boolean
	const [showChild, setShowChild] = React.useState(false); //해당 댓글의 답글들 출력 여부 Boolean

	React.useEffect(() => {
		setData(props.parentComment);
		//댓글의 Writer와 로그인유저가 일치하는 경우 내 댓글 처리
		AsyncStorage.getItem('token', (err, res) => {
			res == data.comment_writer_id ? setIsMyComment(true) : setIsMyComment(false);
			//data에 존재하는 좋아요를 클릭한 UserObejct _id들 중 로그인한 유저의 _id가 포함되어 있다면 좋아요 상태는 true, or false
			const like = data.like_comment_user_id.includes(parseInt(res));
			like ? setLikeState(true) : setLikeState(false);
		});
	}, [props.parentComment]);

	const onCLickHeart = () => {
		setLikeState(!likeState);
	};

	const showChildComment = () => {
		setShowChild(!showChild);
	};

	return (
		<View style={organism_style.parentComment}>
			{/* 유저프로필 라벨 및 Meatball  */}
			<View style={organism_style.UserLocationTimeLabel_view_parentComment}>
				<View style={organism_style.userLocationTimeLabel}>
					<UserLocationTimeLabel data={data} />
				</View>
				<View style={[organism_style.meatball_50_vertical, parentComment.meatball_50_vertical]}>
					<MeatBallDropdown menu={isMyComment ? SETTING_OWN_COMMENT : SETTING_COMMENT} horizontal={false} />
				</View>
			</View>
			{/* 댓글 Dummy 이미지 및 대댓글 목록 */}
			{data.comment_photo_uri != null ? (
				<View style={[organism_style.img_square_round_574, parentComment.img_square_round_574]}>
					<Image style={[styles.img_square_round_574]} source={{uri: data ? data.comment_photo_uri : DEFAULT_PROFILE}} />
				</View>
			) : (
				<></>
			)}
			{/* 댓글 내용 */}
			<View style={[parentComment.comment_contents]}>
				<Text style={[txt.noto24]}>{data ? data.comment_contents : ''}</Text>
			</View>
			<View style={[parentComment.likeReplyButton]}>
				{/* Data - 좋아요 상태 t/f */}

				<TouchableOpacity onPress={showChildComment} style={[parentComment.showChildComment]}>
					<Text style={[txt.noto24, {color: GRAY10}]}> 답글 {dummy_ChildComment.length}개 보기 </Text>
				</TouchableOpacity>
				<View style={[parentComment.heart30]}>
					{likeState ? <Heart30_Filled onPress={onCLickHeart} /> : <Heart30_Border onPress={onCLickHeart} />}
				</View>
				<View style={[parentComment.likeCount]}>
					{/* Data - 좋아요 숫자 */}
					<Text style={(txt.roboto24, parentComment.likeCountText)}>{data ? data.comment_like_count : ''}</Text>
				</View>
				<TouchableOpacity style={[parentComment.writeComment]} onPress={() => props.onPressReplyBtn()}>
					<Text style={(txt.noto22, parentComment.writeCommentText)}>· 답글 쓰기</Text>
				</TouchableOpacity>
			</View>
			{/* Data - 대댓글List */}
			{showChild ? (
				<View style={[organism_style.childCommentList, parentComment.img_square_round_574]}>
					<ChildCommentList items={dummy_ChildComment} onPressReplyBtn={comment => props.onPress_ChildComment_ReplyBtn(comment)} />
				</View>
			) : (
				<></>
			)}
		</View>
	);
};

const e = {
	_id: 2,
	comment_contents: ' 제 주인 사진도 보고 가세요',
	comment_date: '2021-11-23',
	comment_dislike_count: 0,
	comment_feed_id: 1,
	comment_feed_writer_id: 1,
	comment_is_delete: false,
	comment_is_secure: false,
	comment_like_count: 122,
	comment_parent: 1,
	comment_parent_writer_id: 1,
	comment_photo_uri: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/MdR4J997-uHmKvzDMVa68hXFt1U',
	comment_protect_request_id: 1,
	comment_protect_request_writer_id: 1,
	comment_report_block: false,
	comment_report_count: 0,
	comment_update_date: '2021-11-30',
	comment_writer_id: 1,
	like_comment_id: 1,
	like_commnet_user_id: 1,
	user_address: {city: '서울시', district: '마포구', neighbor: '신수동 89-77'},
	user_denied: false,
	user_name: '권상우',
	user_nickname: 'Dende',
	user_profile_uri: 'https://photo.jtbc.joins.com/news/2017/06/05/20170605100602700.jpg',
	user_type: 'user',
};

ParentComment.defaultProps = {
	onPressReplyBtn: e => console.log(e), //부모 댓글의 답글 쓰기 클릭 이벤트
	onPress_ChildComment_ReplyBtn: e => console.log(e), //자식 댓글의 답글 쓰기 클릭 이벤ㅌ
};
