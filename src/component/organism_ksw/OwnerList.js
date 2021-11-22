import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { dummy_ownerList } from 'Root/config/dummyDate_json';
import { txt } from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import { ownerList } from './style_organism';

export default OwnerList = props => {

	const renderItem = (item, index) => {
		return (
			<View style={[ownerList.itemContainer]}>
				<View style={[ownerList.petProfileImageMedium]}>
					<TouchableOpacity onPress={() => props.onClickLabel(item)}>
						<ProfileImageMedium120 img_uri={item.img_uri} userType={'user'} />
					</TouchableOpacity>
				</View>

				<View style={[ownerList.petProfileInfo]}>
					<Text style={[txt.noto24, { color: GRAY10 }]}> {item.name}</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={[ownerList.container]}>
			<View style={[ownerList.insideContainer]}>
				<FlatList data={dummy_ownerList} renderItem={({ item, index }) => renderItem(item, index)} horizontal={true} />
			</View>
		</View>
	);
};

OwnerList.defaultProps = {
	onClickLabel: e => console.log(e),
};
// ProfileImageMedium120 - props
// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	userType: 'user', //required - 유저타입 pet user shelter
// 	shelterType: 'none', // public private
// 	petStatus: 'none', // normal protected adopted none
