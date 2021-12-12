import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import AnimalInfo from './AnimalInfo';
import {animalInfoList} from './style_organism';

export default AnimalInfoList = props => {
	const [data, setData] = React.useState(props.items);

	React.useEffect(() => {
		setData(props.items);
	}, [props.items]);

	const renderItem = (item, index) => {
		return (
			<View style={[animalInfoList.itemContainer]}>
				<AnimalInfo data={item} onPressLabel={() => props.onPressLabel(item, index)} />
			</View>
		);
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
				<View style={[animalInfoList.container]}>
					<FlatList data={data} renderItem={({item, index}) => renderItem(item, index)} scrollEnabled={false} />
				</View>
			</ScrollView>
		</ScrollView>
	);
};

AnimalInfoList.defaultProps = {
	onPressLabel: e => {},
};
