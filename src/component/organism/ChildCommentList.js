import React from 'react';
import { View, FlatList } from 'react-native';
import { organism_style } from './style_organism';
import ChildComment from 'Root/component/organism_ksw/ChildComment';

/**
 *
 * @param {{
 * data : Object,
 * onPressReplyBtn : void,
 * }} props
 */
export default ChildCommentList = props => {
	const testArray = [
		{
			profile_data: {
				user_id: 'user_id',
				user_nickname: 'user_nickname',
				user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				time: 2,
			},
			img_uri: 'https://image.ytn.co.kr/general/jpg/2017/1018/201710181100063682_d.jpg',
			comment: '감사해요 ^^',
			likecount: 80,
		},
		{
			profile_data: {
				user_id: 'user_id',
				user_nickname: 'user_nickname',
				user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				time: 5,
			},
			comment: '별로 귀엽지 않네요 ~',
			likecount: 50,
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[organism_style.childCommentList]}>
				<ChildComment data={item} onPressReplyBtn={(comment) => props.onPressReplyBtn(comment)} />
			</View>
		);
	};
	return <FlatList data={testArray} renderItem={({ item, index }) => renderItem(item, index)} />;
};


ChildCommentList.defaultProps = {
	onPressReplyBtn: e => console.log(e),

}