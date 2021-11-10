import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ShelterLabel from './ShelterLabel';
import {shelterList} from './style_organism';

export default ShelterList = props => {
	const testData = [
		{
			shelterType: 'private',
			img_uri: 'https://upload.wikimedia.org/wikipedia/en/4/4b/DWG_KIA_logo.png',
			name: '아이조아 요양보호소',
			location: '서울시 마포구',
		},
		{
			shelterType: 'public',
			img_uri:
				'https://ww.namu.la/s/a234128b588d1eeb5ebbeccadb31493976c7fad427b43e497d35c65b9a6187e9c071d8e7ceb9f66423ebbffc1aa6180f71cd352cf53ed76bfdc7bba5fc22fdc5959a7ac540097665c73bac148a882dac1ef072fe94a174159ed68e534e2b239141041fcde38c76cba2bf44a1fe62d89a',
			name: 'EDG Gaming',
			location: '베이징',
		},
		{
			shelterType: 'private',
			img_uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/T1_logo.svg/1200px-T1_logo.svg.png',
			name: 'T1',
			location: '서울시 마포구',
		},
		{
			shelterType: 'public',
			img_uri:
				'https://ww.namu.la/s/a234128b588d1eeb5ebbeccadb31493976c7fad427b43e497d35c65b9a6187e9c071d8e7ceb9f66423ebbffc1aa6180f71cd352cf53ed76bfdc7bba5fc22fdc5959a7ac540097665c73bac148a882dac1ef072fe94a174159ed68e534e2b239141041fcde38c76cba2bf44a1fe62d89a',
			name: 'EDG Gaming',
			location: '베이징',
		},
		{
			shelterType: 'public',
			img_uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/T1_logo.svg/1200px-T1_logo.svg.png',
			name: 'T1',
			location: '서울시 마포구',
		},
	];
	const renderItem = (item, index) => {
		return (
			<View style={[shelterList.shelterLabel]}>
				<ShelterLabel img_uri={item.img_uri} shelterType={item.shelterType} name={item.name} location={item.location} />
			</View>
		);
	};
	return (
		<View style={[shelterList.container]}>
			<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} nestedScrollEnabled />
		</View>
	);
};
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
