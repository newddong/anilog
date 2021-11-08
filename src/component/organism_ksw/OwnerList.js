import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import {ownerList} from './style_organism';

export default OwnerList = props => {
	const testData = [
		{
			img_uri: 'https://pbs.twimg.com/profile_images/719984599456043009/whcMczoB_400x400.jpg',
			petStatus: 'normal',
			breed: '개냥이',
			name: '다리우스',
		},
		{
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/994D85495A5978580A',
			name: '케넨',
		},
		{
			img_uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg',
			name: '야스오',
		},
		{
			img_uri: 'https://pbs.twimg.com/profile_images/719984599456043009/whcMczoB_400x400.jpg',
			name: '다리우스',
		},
		{
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/994D85495A5978580A',
			name: '케넨',
		},
		{
			img_uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg',
			name: '야스오',
		},
	];
	const renderItem = (item, index) => {
		return (
			<View style={[ownerList.itemContainer]}>
				<View style={[ownerList.petProfileImageMedium]}>
					<ProfileImageMedium120 img_uri={item.img_uri} userType={'user'} />
				</View>

				<View style={[ownerList.petProfileInfo]}>
					<Text style={[txt.noto24, {color: GRAY10}]}> {item.name}</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={[ownerList.container]}>
			<View style={[ownerList.insideContainer]}>
				<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
			</View>
		</View>
	);
};

// ProfileImageMedium120 - props
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
