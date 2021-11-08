import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {AddItem64} from '../atom/icon';
import AidRequest from './AidRequest';
import {aidRequestList} from './style_organism';

export default AidRequestList = props => {
	const testArray = [
		{
			kind: '개',
			breed: '시고르자브종',
			expected_age: 3,
			weight: 1.4,
			neutralization: true,
			saved_point: '마포구 신수동',
			male: true,
			img_uri: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_16.jpg',
		},
		{
			kind: '고양이',
			breed: '멘탈브레이커',
			expected_age: 5,
			weight: 2.4,
			neutralization: true,
			saved_point: '마포구 협곡동',
			male: false,
			img_uri: 'https://static.inven.co.kr/column/2014/06/19/news/i3769211874.jpg',
		},
	];

	const renderItem = (item, index) => {
		return <View style={[aidRequestList.itemContainer]}>{index == 0 ? <AidRequest initList={true} /> : <AidRequest data={item} />}</View>;
	};

	return (
		<View style={[aidRequestList.container]}>
			<View style={[aidRequestList.addProtectedPetContainer]}>
				<View style={[aidRequestList.addProtectedPet_insideContainer]}>
					<AddItem64 />
					<Text style={[txt.noto30, aidRequestList.addProtectedPetText]}>보호중인 동물 추가하기</Text>
				</View>
			</View>
			<FlatList data={testArray} renderItem={({item, index}) => renderItem(item, index)} />
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
