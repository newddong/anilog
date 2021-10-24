import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import DP from 'Root/config/dp';
import InputBalloon from 'Root/component/molecules/InputBalloon';
export default InputTest1 = props => {
	return (
		<ScrollView>
			<Text style={{backgroundColor: 'blue', color: 'white'}}> inputBalloon </Text>
			<InputBalloon 
                placeholder={"PlaceHolder"}
                value={"title"}
                onChange={ (e) => console.log(e)}
            />
		</ScrollView>
	);
};
