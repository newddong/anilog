import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {logoutTemp} from 'Root/api/userapi_ksw';
import {APRI10} from 'Root/config/color';

export default LogoutView = ({route}) => {
	const navigation = useNavigation();
	return (
		<View style={{flexDirection: 'row', justifyContent: 'center'}}>
			<Button title={'MainTab'}></Button>
			<TouchableOpacity
				style={{width: 100, backgroundColor: APRI10, justifyContent: 'center', alignItems: 'center'}}
				onPress={() => {
					console.log('logount');
					logoutTemp(
						1,
						e => {
							console.log('e', e);
							AsyncStorage.removeItem('token');
							alert('Logout 성공');
							navigation.navigate('Login');
						},
						err => {
							console.log('err', err);
						},
					);
				}}>
				<Text style={{}}>로그아웃</Text>
			</TouchableOpacity>
		</View>
	);
};
