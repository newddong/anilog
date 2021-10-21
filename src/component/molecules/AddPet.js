import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Add_Pet} from '../atom/icon';
export default AddPet = props => {
    const onAdd = (e) => {
        alert("Add")
    }
	return (
		<View style={{width: 180 * DP, height: 270 * DP, justifyContent: 'center', alignItems: 'center'}}>
			<TouchableOpacity onPress={onAdd}>
				<Add_Pet />
			</TouchableOpacity>
			<View style={{width: 106 * DP, height: 80 * DP}}>
				<Text style={[txt.noto24, {includeFontPadding: false, color: APRI10, textAlign: 'center', }]}>반려동물추가</Text>
			</View>
		</View>
	);
};
