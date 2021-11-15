import React from 'react';
import { Text, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Write94 } from '../atom/icon';
import Feed from '../organism/Feed';
import { feedList, login_style, missingAnimalDetail, temp_style } from './style_templete';

export default FeedList = props => {
	const moveToFeedWrite = () => {
		props.navigation.push('FeedWrite');
	};

	const testData = [1];

	const renderItem = item => {
		return <Feed data={item} />;
	};

	return (
		<View style={[login_style.wrp_main, missingAnimalDetail.container]}>
			{/* FeedList */}
			<View style={[feedList.feedList]}>
				<FlatList data={testData} renderItem={({ item }) => renderItem(item)} />
			</View>

			{/* FloatButton */}
			<View style={[temp_style.floatingBtn, feedList.floatingBtn]}>
				<Write94 onPress={moveToFeedWrite}/>
			</View>
		</View>
	);
};

// Feed Data 필드
// user - 작성자의 데이터베이스ID, 뷰에 표시되지 않음
// pet - 작성자가 설정한 주인공 펫의 데이터베이스ID, 뷰에 표시되지 않음

// user_nickname - 작성자의 닉네임
// location - 피드 작성시의 위치, 글쓰기에서 지정할수 있음
// time - 피드 작성시간

// images - 피드에 업로드할 사진의 목록(Array).
//    FeedMedia 참조

// content - 피드의 본문 텍스트

// comment - 최근 1개의 댓글 객체

// like_count - 좋아요 갯수
// count_commnet - 피드 게시물에 달린 댓글의 갯수

// reg_date - 피드 게시물 등록시간
// upd_date - 피드 게시물 수정/업데이트 시간

// deleted - 피드 게시물 삭제여부(삭제요청시 true로 표시, 이후 검색결과에 나타나지 않음)
