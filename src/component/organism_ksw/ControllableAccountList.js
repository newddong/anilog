import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ControllableAccount from './ControllableAccount';
import {controllableAccountList} from './style_organism';

export default ControllableAccountList = props => {
	const _dummyData = [
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description',
		},
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname2',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description2',
		},
		{
			user_id: 'user_id',
			user_nickname: 'user_nickname3',
			user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description3',
		},
	];
	const renderItem = (item, index) => {
		return <ControllableAccount data={item} />;
	};

	return (
		<View style={controllableAccountList.container}>
			<View style={[controllableAccountList.title]}>
				<Text>title</Text>
			</View>
			<FlatList data={_dummyData} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};
