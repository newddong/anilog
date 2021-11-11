import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalNeedHelpList} from './style_organism';
import {animalNeedHelp} from './style_organism';
import {useNavigation} from '@react-navigation/core';

export default AnimalNeedHelpList = props => {
	const navigation = useNavigation();
	const testData = [
		{
			kind: '고양이',
			breed: '자연계 환수종',
			temp_protection_request: true,
			adoption_days_remain: 10,
			registered_date: '2021-06-17',
			location: '자운',
			saved_location: '경기도 강정동',
			thumbnailData: {
				img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
				gender: 'male',
				status: 'missing', // protected, missing, reported, onNegotiation, adoption_available
			},
			selected: true,
		},
		{
			kind: '고양이',
			breed: '육식계 환수종',
			temp_protection_request: false,
			adoption_days_remain: 15,
			registered_date: '2021-06-17',
			location: '칼림도어',
			saved_location: '노스랜드',
			thumbnailData: {
				img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
				gender: 'female',
				status: 'reported', // protected, missing, reported, onNegotiation, adoption_available
			},
			selected: false,
		},
		{
			kind: null,
			breed: null,
			temp_protection_request: true,
			registered_date: '2021-06-17',
			location: '테트리스',
			saved_location: '세이브포인트',
			thumbnailData: {
				img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
				gender: 'female',
				status: 'onNegotiation', // protected, missing, reported, onNegotiation, adoption_available
			},
			selected: true,
		},
		{
			kind: null,
			breed: null,
			temp_protection_request: true,
			registered_date: '2021-06-17',
			location: '테트리스',
			saved_location: '세이브포인트',
			thumbnailData: {
				img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
				gender: 'female',
				status: 'onNegotiation', // protected, missing, reported, onNegotiation, adoption_available
			},
			selected: false,
		},
		{
			kind: null,
			breed: null,
			temp_protection_request: true,
			registered_date: '2021-06-17',
			location: '테트리스',
			saved_location: '세이브포인트',
			thumbnailData: {
				img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
				gender: 'female',
				status: 'onNegotiation', // protected, missing, reported, onNegotiation, adoption_available
			},
			selected: false,
		},
	];

	const renderItem = (item, index) => {
		console.log('index=>' + item.thumbnailData.status);
		return (
			<TouchableOpacity
				style={[animalNeedHelpList.itemContainer]}
				onPress={() => {
					if (item.thumbnailData.status == 'missing') {
						navigation.navigate('MissingAnimalDetail');
					} else if (item.thumbnailData.status == 'reported') {
						navigation.navigate('ReportDetail');
					} else {
					}
				}}>
				<AnimalNeedHelp data={item} />
			</TouchableOpacity>
		);
	};

	return (
		<View style={[animalNeedHelpList.container]}>
			<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} nestedScrollEnabled />
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	onItemClick: e => console.log(e),
};
// AnimalNeedHelp.defaultProps = {
// 	temp_protection_request: true,
// 	adoption_days_remain: 10,
// 	registered_date: '2021-06-17',
// 	location: '자운',
// 	saved_location: '경기도 강정동',
// 	data: {
// 		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
// 		gender: 'female',
// 		status: 'protected', , // protected, missing, reported, onNegotiation, adoption_available
// 	},
// };
