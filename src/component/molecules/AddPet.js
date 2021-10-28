import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {ASSIGN_PET} from 'Root/i18n/msg';
import {Add_Pet} from '../atom/icon';
export default AddPet = props => {

	const onAdd = e => {
		alert('Add');
	};
	
	return (
		<View style={{width: 180 * DP, height: 270 * DP, justifyContent: 'center', alignItems: 'center'}}>
			<TouchableOpacity onPress={onAdd}>
				<Add_Pet />
			</TouchableOpacity>
			<Text style={[txt.noto24, {color: APRI10, textAlign: 'center', width: 106 * DP, height: 80 * DP}]}>{ASSIGN_PET}</Text>
		</View>
	);
};
