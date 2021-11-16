import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {dummy_familyAccountList} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {Cross52} from '../atom/icon';
import ProfileImageSmall from '../molecules/ProfileImageSmall';
import {familyAccountList} from './style_organism';

export default FamilyAccountList = props => {
	const [listData, setListData] = React.useState(dummy_familyAccountList);

	//X버튼 Press => 유저 목록에서 삭제
	const deleteUserItem = index => {
		const copy = [...listData];
		copy.splice(index, 1);
		setListData(copy);
	};

	React.useEffect(() => {
		console.log(listData);
	}, [listData]);

	const renderItem = (item, index) => {
		return (
			<View style={[familyAccountList.itemContainer]}>
				<View style={[familyAccountList.profileImageSmall]}>
					<ProfileImageSmall data={item.data} />
				</View>
				<View style={[familyAccountList.userIDContainer]}>
					<Text style={[txt.roboto28b]}>{item.name}</Text>
				</View>
				<Cross52 onPress={() => deleteUserItem(index)} style={[familyAccountList.cross52]} />
			</View>
		);
	};

	return <FlatList data={listData} renderItem={({item, index}) => renderItem(item, index)} />;
};
