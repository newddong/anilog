import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {accountHashList} from './style_organism';
import UserAccount from './UserAccount';

export default AccountHashList = props => {
	const _dummyData = [
		{
			type: 'user',
			user_id: '호이비에르',
			user_nickname: '호이비에르',
			img_uri: 'https://image.fmkorea.com/files/attach/new/20201127/5665468/72559051/3225348401/53b8ed4f6bc4b0279580e62a98b2874d.png',
			text_intro: 'Description',
		},
		{
			type: 'user',
			user_id: '솔 캠벨',
			user_nickname: '솔 캠벨',
			img_uri: 'https://t1.daumcdn.net/cfile/blog/1761514850DABAB00E',
			text_intro: '주급루팡',
		},
		{
			type: 'user',

			user_id: '쿠티뉴',
			user_nickname: '브페',
			img_uri: 'https://image.fmkorea.com/files/attach/new/20210116/33854530/44810969/3330726962/63e62ae90fcd03b262e0a2a5dff7fbb4.jpeg',
			text_intro: '레전드',
		},
		{
			type: 'hash',
			keyword: '#따봉도치',
			keywordBold: true,
			count: 920000,
		},
	];
	const renderItem = item => {
		return (
			<View style={[accountHashList.userAccount]}>
				{/* <Text>UserAccount</Text> */}
				<UserAccount data={item} onLabelClick={() => props.onLabelClick(item)} onHashClick={() => props.onHashClick(item)} />
			</View>
		);
	};

	return (
		<View style={[accountHashList.container]}>
			<FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />
		</View>
	);
};

AccountHashList.defaultProps = {
	onLabelClick: e => console.log(e),
};

// UserDescriptionLabel.defaultProps = {
// 	data: {
// 		user_id: 'Default id',
// 		user_nickname: 'user_nickname',
// 		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		text_intro: 'Description',
// 	},
// 	onLabelClick: e => console.log(e),
// };

// HashLabel.defaultProps = {
// 	keyword: '#KEYWORD',
// 	keywordBold: true,
// 	count: 'Count한 게시물',
// };
