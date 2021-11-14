import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CompanionForm from './CompanionForm';
import {companionFormList} from './style_organism';

export default CompanionFormList = props => {
	const testList = [
		{
			breed: 0,
			age: 0,
			duration: 0,
		},
		{
			breed: 1,
			age: 1,
			duration: 1,
		},
	];

	const renderItem = (item, index) => {
		return (
			<View style={[companionFormList.companionFormContainer]}>
				<CompanionForm data={item} />
			</View>
		);
	};

	return (
		<View style={[companionFormList.container]}>
			<FlatList data={testList} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

// value: null,
// itemList: [1, 2, 3, 4], //DropDown될 리스트 목록
// defaultIndex: 0, // DropDown Default상태의 index
// width: 180, //Select+Text 부분의 width Default=180(5글자)
// onChange: e => console.log(e),
