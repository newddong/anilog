import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {Cross52} from '../atom/icon';
import ProfileImageSmall from '../molecules/ProfileImageSmall';
import {familyAccountList} from './style_organism';

export default FamilyAccountList = props => {
	const _dummyData = [1, 2, 3, 4];
	const renderItem = (item, index) => {
		return (
			<View style={[familyAccountList.itemContainer]}>
				<View style={[familyAccountList.profileImageSmall]}>
					<ProfileImageSmall />
				</View>
				<View style={[familyAccountList.userIDContainer]}>
					<Text style={[txt.roboto28b]}>유저</Text>
				</View>
				<View style={[familyAccountList.cross52]}>
					<Cross52 />
				</View>
			</View>
		);
	};

	return <FlatList data={_dummyData} renderItem={({item, index}) => renderItem(item, index)} />;
};
