import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import ParentComment from '../organism/ParentComment';
import DP from 'Root/config/dp';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';

/**
 *
 * @param {{
 * items : '댓글 목록들',
 * onPress_ChildComment_ReplyBtn : void,
 * onPressReplyBtn : void,
 * }} props
 */
export default CommentList = props => {
	const renderItem = ({item, index}) => {
		// console.log('CommentList', item);
		const t = {
			__v: 0,
			_id: '61d2df4fc0f179ccd5ba5a38',
			children_count: 0,
			comment_contents: '어머! 아깽이 너무 귀여워요 😍😍',
			comment_date: '2022-01-03T11:34:39.253Z',
			comment_dislike_count: 0,
			comment_feed_id: '61d2df2fc0f179ccd5ba5a1e',
			comment_feed_writer_id: '61d2de63c0f179ccd5ba5887',
			comment_is_delete: false,
			comment_is_secure: false,
			comment_like_count: 0,
			comment_report_block: false,
			comment_report_count: 0,
			comment_update_date: '2022-01-03T11:34:39.253Z',
			comment_writer_id: {
				__v: 0,
				_id: '61d2dcb0c0f179ccd5ba5649',
				pet_family: [],
				type: 'UserObject',
				user_address: {city: '서울특별시', district: '서초구', neighbor: '잠원동'},
				user_agreement: {
					is_donation_info: true,
					is_location_service_info: true,
					is_marketting_info: true,
					is_over_fourteen: true,
					is_personal_info: true,
					is_service: true,
				},
				user_denied: false,
				user_follow_count: 0,
				user_follower_count: 2,
				user_interests: [],
				user_introduction: '안녕하세요~ 룰루랄라~		안녕하세요~ 룰루랄라~안녕하세요~ 룰루랄라~',
				user_is_verified_email: false,
				user_is_verified_phone_number: true,
				user_mobile_company: 'KT',
				user_my_pets: [],
				user_name: '이재현',
				user_nickname: '룰루랄라',
				user_password: '1234567a',
				user_phone_number: '01084227964',
				user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1641209008740_fa5a1115-f98f-454b-b9fa-97046f091dbf.jpg',
				user_register_date: '2022-01-03T11:23:28.969Z',
				user_type: 'user',
				user_upload_count: 1,
			},
			type: 'CommentObject',
		};

		return (
			<ParentComment
				parentComment={item}
				onPressReplyBtn={props.onPressReplyBtn} // 부모 댓글의 답글쓰기 클릭 이벤트
			/>
		);
	};

	const whenEmpty = () => {
		return (
			<View style={[{height: 100 * DP, width: '100%', paddingVertical: 30 * DP, alignItems: 'center', justifyContent: 'center'}]}>
				<Text style={[txt.roboto30b, {color: GRAY10}]}> 댓글이 없습니다.</Text>
			</View>
		);
	};

	return (
		<View style={{flex: 1, paddingHorizontal: 48 * DP}}>
			<FlatList data={props.items} renderItem={renderItem} ListEmptyComponent={whenEmpty} stickyHeaderIndices={[0]} />
		</View>
	);
};

CommentList.defaultProps = {
	items: [],
	onPressReplyBtn: e => console.log(e),
	onPress_ChildComment_ReplyBtn: e => console.log(e),
};
