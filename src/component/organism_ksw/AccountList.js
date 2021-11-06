import React from 'react';
import {FlatList, Text, View} from 'react-native';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {organism_style} from './style_organism';

export default AccountList = props => {
	const _dummyData = [
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description',
		},
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description',
		},
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description',
		},
	];
	const renderItem = item => {
		console.log(item);
		return (
			<View style={organism_style.accountList}>
				<View style={[organism_style.userDescriptionLabel]}>
					<UserDescriptionLabel />
				</View>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />;
};
