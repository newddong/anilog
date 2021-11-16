import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {vaccination} from './style_organism';

export default Vaccination = props => {
	const testData = [
		{
			vacc_name: '심장사상충',
			current_dueDate: '2011-11-24',
			next_dueDate: '2021-11-24',
		},
		{
			vacc_name: '해장 사상충',
			current_dueDate: '2011-11-24',
			next_dueDate: '2021-11-24',
		},
	];
	const renderItem = (item, index) => {
		return (
			<View style={[vaccination.itemContainer]}>
				<View style={[vaccination.item_name]}>
					<Text style={[txt.noto30]}>{item.vacc_name}</Text>
				</View>
				<View style={[vaccination.current_dueDate]}>
					<Text style={[txt.roboto28b, {color: 'white'}]}>{item.current_dueDate}</Text>
				</View>
				<View style={[vaccination.next_dueDate]}>
					<Text style={[txt.roboto28, {color: GRAY10}]}>{item.next_dueDate}</Text>
				</View>
			</View>
		);
	};
	return (
		<View style={[vaccination.container]}>
			<View style={[vaccination.insideContainer]}>
				<View style={[vaccination.titleContainer]}>
					<View style={[vaccination.title]}>
						<Text style={[txt.noto28, {color: APRI10}]}>매월 1회 접종</Text>
					</View>
					<View style={[vaccination.titleMenu]}>
						<Text>이번 예정일</Text>
					</View>
					<View style={[vaccination.titleMenu]}>
						<Text>다음 예정일</Text>
					</View>
				</View>
				<FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)} />
			</View>
		</View>
	);
};
