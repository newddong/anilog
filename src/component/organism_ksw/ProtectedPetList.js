import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import {protectedPetList} from './style_organism';

export default ProtectedPetList = props => {
	const renderItem = (item, index) => {
		// console.log('item', item);
		return (
			<View style={[protectedPetList.itemContainer]}>
				<View style={[protectedPetList.petProfileImageMedium]}>
					<TouchableOpacity onPress={() => props.onClickLabel(item)}>
						<ProfileImageMedium120 data={item} />
					</TouchableOpacity>
				</View>

				<View style={[protectedPetList.petProfileInfo]}>
					<Text style={[txt.noto30]}> {item.user_nickname}</Text>
					<Text style={[txt.noto24, {color: GRAY20}]}>
						{item.protect_act_address.district}
						{item.protect_act_address.neighbor}
					</Text>
				</View>
			</View>
		);
	};
	return (
		<View style={[protectedPetList.container]}>
			<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
		</View>
	);
};

ProtectedPetList.defaultProps = {
	onClickLabel: e => console.log(e),
};
