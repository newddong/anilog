import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import {protectedPetList} from './style_organism';

export default ProtectedPetList = props => {
	const testData = [
		{
			img_uri:
				'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg',
			petStatus: 'normal',
			breed: '개냥이',
			name: 'Protected',
		},
		{
			img_uri:
				'https://www.thoughtco.com/thmb/FyeEGYYlxuHCW9TsJO-iq_1YA7U=/2848x2136/filters:fill(auto,1)/Close-up_of_mole-56a12a2e3df78cf77268038c.jpg',
			petStatus: 'protected',
			breed: '땅굴',
			name: '두더지',
		},
		{
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/2155B04D584FA5050A',
			petStatus: 'adopted',
			breed: '핏불',
			name: '요네',
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
					<TouchableOpacity onPress={() => props.onClickLabel(item)}>
						<ProfileImageMedium120 img_uri={item.img_uri} userType={'pet'} petStatus={item.petStatus} />
					</TouchableOpacity>
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

ProtectedPetList.defaultProps = {
	onClickLabel: e => console.log(e),
};
// ProfileImageMedium120 - props
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
