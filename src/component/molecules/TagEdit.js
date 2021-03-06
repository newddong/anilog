import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {Tag_Edit, X_Mark} from '../atom/icon';

export default TagEdit = props => {

	const handleDelete = e => {
		props.onDelete();
	};
	
	return (
		//Tag_Edit와 TagEdit View의 크기를 170*52로 맞춘다
		<View style={{width: 170 * DP, height: 52 * DP}}>
			<Tag_Edit />
			<TouchableOpacity onPress={handleDelete} style={{position: 'absolute', right: 2 * DP, paddingVertical: 4 * DP}}>
				<X_Mark />
			</TouchableOpacity>
		</View>
	);
};
TagEdit.defaultProps = {
	onDelete : e => console.log(e)
}
