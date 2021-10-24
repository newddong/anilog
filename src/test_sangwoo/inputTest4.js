import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import DP from 'Root/config/dp';
import {useNavigation} from '@react-navigation/core';
import RadioBox from 'Root/component/molecules/RadioBox';
export default InputTest4 = props => {
	const navigation = useNavigation();
	const itemList = ['ITEM1', 'ITEM2', 'ITEM3', 'ITEM4'];
	return (
		<View>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> Radio - disable </Text>
			<RadioBox items={itemList} onSelect={e => console.log(e)} />
		</View>
	);
};
