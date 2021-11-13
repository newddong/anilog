import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {accountHashList} from './style_organism';
import UserAccount from './UserAccount';

export default AccountHashList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[accountHashList.userAccount]}>
				{/* <Text>UserAccount</Text> */}
				<UserAccount
					data={item}
					checkBoxMode={props.checkBoxMode}
					onLabelClick={() => props.onLabelClick(item)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
				/>
			</View>
		);
	};

	return (
		<View style={[accountHashList.container]}>
			<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

AccountHashList.defaultProps = {
	onLabelClick: e => console.log(e), // UserAccount의 UserDescriptionLabel 클릭
	onCheckBox: e => console.log(e),
	checkBoxMode: false, // CheckBox 콘테이너 Show T/F
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
