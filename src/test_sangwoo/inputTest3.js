import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import DP from 'Root/config/dp';
import {useNavigation} from '@react-navigation/core';
import InputTimeLimit from 'Root/component/molecules/InputTimeLimit';
import DropdownSelect from 'Root/component/molecules/DropdownSelect';
import Calendar from './calendar';
import DatePicker from 'Root/component/molecules/DatePicker';
import CheckBox from 'Root/component/molecules/CheckBox';
import RadioBox from 'Root/component/molecules/RadioBox';
export default InputTest2 = props => {
	const navigation = useNavigation();
	const itemList = ['ITEM1', 'ITEM2', 'ITEM3', 'ITEM4'];
	return (
		<View>
			
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> Radio - disable </Text>
			<RadioBox items={itemList} onSelect={ e => console.log(e)}/>
			<ScrollView>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => navigation.navigate('InputTest1')}>
					<View style={{width: 130, height: 50, backgroundColor: 'yellow'}}>
						<Text style={{fontSize: 23}}>InputTest1</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('InputTest2')}>
					<View style={{width: 130, height: 50, backgroundColor: 'powderblue'}}>
						<Text style={{fontSize: 23}}>InputTest2</Text>
					</View>
				</TouchableOpacity>
			</View>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> InputTimeLimit - </Text>
			<InputTimeLimit placeholder={'placeholder'} value={null} timelimit={100} alert_msg={'alert_msg'} timeout_msg={'timeout_msg'} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> DropdownSelect - </Text>
			<DropdownSelect itemList={itemList} value={null} defaultIndex={0} />
			<DropdownSelect itemList={itemList} value={null} defaultIndex={1} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> DatePicker - </Text>
			<DatePicker />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> CheckBox - </Text>
			<CheckBox value={'value'} disable={false} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> CheckBox - disable </Text>
			<CheckBox value={'value'} disable={true} />
			</ScrollView>
		</View>
	);
};
