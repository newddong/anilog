import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {Cross52} from '../atom/icon';
import ProfileImageSmall from '../molecules/ProfileImageSmall';
import {familyAccountList} from './style_organism';

export default FamilyAccountList = props => {
	const [listData, setListData] = React.useState([1, 2, 3, 4]);

	//X버튼 Press => 유저 목록에서 삭제
	const deleteUserItem = index => {
		const copy = [...listData];
		copy.splice(index, 1);
		setListData(copy);
	};

	const renderItem = (item, index) => {
		return (
			<View style={[familyAccountList.itemContainer]}>
				<View style={[familyAccountList.profileImageSmall]}>
					<ProfileImageSmall />
				</View>
				<View style={[familyAccountList.userIDContainer]}>
					<Text style={[txt.roboto28b]}>유저</Text>
				</View>
				<TouchableOpacity onPress={() => deleteUserItem(index)} style={[familyAccountList.cross52]}>
					<Cross52 />
				</TouchableOpacity>
			</View>
		);
	};

	return <FlatList data={listData} renderItem={({item, index}) => renderItem(item, index)} />;
};
