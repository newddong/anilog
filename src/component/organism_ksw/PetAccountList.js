import React from 'react';
import {FlatList, View} from 'react-native';
import {organism_style} from './style_organism';
import PetLabel from '../molecules/PetLabel';

export default PetAccountList = props => {
	const renderItem = item => {
		return (
			<View style={[organism_style.petAccountList]}>
				<PetLabel data={item} />
			</View>
		);
	};

	return <FlatList data={props.items} renderItem={({item}) => renderItem(item)} />;
};
PetAccountList.defaultProps = {
	items: [],
};
