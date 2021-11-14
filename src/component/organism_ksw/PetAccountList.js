import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {organism_style} from './style_organism';
import PetLabel from '../molecules/PetLabel';
import {APRI10} from 'Root/config/color';

export default PetAccountList = props => {
	const _dummyData = [
		{
			user_id: 'Thanos',
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'PeyerBache',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'Tony',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: '라쿤',
			owner: 'Xo_oX_Yeri',
		},
		{
			user_id: 'Thanos',
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'PeyerBache',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'Tony',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: '라쿤',
			owner: 'Xo_oX_Yeri',
		},
		{
			user_id: 'Thanos',
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'PeyerBache',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'Tony',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: '라쿤',
			owner: 'Xo_oX_Yeri',
		},
		{
			user_id: 'Thanos',
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'PeyerBache',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: 'Tony',
			owner: 'Xo_oX_Yeri',
		},
		{
			img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			status: 'normal',
			user_nickname: '라쿤',
			owner: 'Xo_oX_Yeri',
		},
	];
	const renderItem = item => {
		console.log(item);
		return (
			<View style={[organism_style.petAccountList]}>
				<PetLabel data={item} />
				<Text style={{color: APRI10, alignSelf: 'center', position: 'absolute', right: 0}}>팔로우중</Text>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item}) => renderItem(item)} />;
};

// PetLabel.defaultProps = {
// 	data: {
// 		user_id: 'user_id',
// 		user_nickname: 'user_nickname',
// 		img_uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
// 		status: 'normal',
// 	},
// 	onClickLabel: e => console.log(e),
// };
