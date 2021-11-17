import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {AddItem64} from '../atom/icon';
import AidRequest from './AidRequest';
import {aidRequestList} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {dummy_AidRequestList} from 'Root/config/dummyDate_json';

export default AidRequestList = props => {
	const navigation = useNavigation();
	const moveToAssignProtectAnimalImage = () => {
		navigation.push('AssignProtectAnimalImage');
	};

	const renderItem = (item, index) => {
		return <View style={[aidRequestList.itemContainer]}>{index == 0 ? <AidRequest initList={true} /> : <AidRequest data={item} />}</View>;
	};

	return (
		<View style={[aidRequestList.container]}>
			<TouchableOpacity onPress={moveToAssignProtectAnimalImage}>
				<View style={[aidRequestList.addProtectedPetContainer]}>
					<View style={[aidRequestList.addProtectedPet_insideContainer]}>
						<AddItem64 onPress={moveToAssignProtectAnimalImage} />
					</View>
					<Text style={[txt.noto30, aidRequestList.addProtectedPetText]}>보호중인 동물 추가하기</Text>
				</View>
			</TouchableOpacity>
			<FlatList data={dummy_AidRequestList} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

// AidRequest.defaultProps = {
// 	data: {
// 		kind: '개',
// 		breed: '시고르자브종',
// 		expected_age: 3,
// 		weight: 1.2,
// 		neutralization: false, // 중성화
// 		saved_point: '경상남도 진주시 가좌동 맨발로 달려나가다',
// 		male: true,
// 		img_uri: DEFAULT_PROFILE,
// 	},
// };
