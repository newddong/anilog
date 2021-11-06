import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {accountHashList} from './style_organism';

export default AccountHashList = props => {
	const _dummyData = [
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			petStatus: 'normal',
			petNickname: null,
		},
	];
	const renderItem = item => {
		return (
			<View style={[accountHashList.container]}>
				<View style={[accountHashList.userAccount]}>
					<Text>UserAccount</Text>
				</View>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />;
};
