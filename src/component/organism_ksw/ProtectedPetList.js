import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import {protectedPetList} from './style_organism';

export default ProtectedPetList = props => {
	const testData = [
		{
			img_uri: 'https://pbs.twimg.com/profile_images/719984599456043009/whcMczoB_400x400.jpg',
			petStatus: 'normal',
			location: '인천광역시 남동구',
			name: '다리우스',
		},
		{
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/994D85495A5978580A',
			petStatus: 'protected',
			location: '브리즈번',
			name: '케넨',
		},
		{
			img_uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg',
			petStatus: 'adopted',
			location: '세부',
			name: '야스오',
		},
		{
			img_uri: 'https://pbs.twimg.com/profile_images/719984599456043009/whcMczoB_400x400.jpg',
			petStatus: 'normal',
			location: '인천광역시 남동구',
			name: '다리우스',
		},
		{
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/994D85495A5978580A',
			petStatus: 'protected',
			location: '브리즈번',
			name: '케넨',
		},
		{
			img_uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg',
			petStatus: 'adopted',
			location: '세부',
			name: '야스오',
		},
	];
	const renderItem = (item, index) => {
		return (
			<View style={[protectedPetList.itemContainer]}>
				<View style={[protectedPetList.petProfileImageMedium]}>
					<ProfileImageMedium120 img_uri={item.img_uri} userType={'pet'} petStatus={item.petStatus} />
				</View>

				<View style={[protectedPetList.petProfileInfo]}>
					<Text style={[txt.noto30]}> {item.name}</Text>
					<Text style={[txt.noto24, {color: GRAY20}]}>{item.location}</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={[protectedPetList.container]}>
			<View style={[protectedPetList.insideContainer]}>
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
