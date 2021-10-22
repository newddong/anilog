import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';
import MainHeader from 'Root/navigation/header/MainHeader';
import StackHeader from 'Root/navigation/header/StackHeader';
import MovieHome from './moviehome/moviehome';
import MoviePlay from './moviehome/subcomponent/movieplay';
import CategoryList from './moviehome/subcomponent/categorylist';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default MovieStackRoute = () => {
	return (
		// <Stack.Navigator initialRouteName="MovieHome" headerMode='screen'>
		<Stack.Navigator initialRouteName="MovieHome" screenOptions={{headerMode:'screen', header:(props)=>(<StackHeader {...props}/>)}}>
			<Stack.Screen name="MovieHome" component={MovieHome} options={{header: (props) => <MainHeader {...props}/>}} />
			<Stack.Screen name="MoviePlay" component={MoviePlay} />
			<Stack.Screen name="CategoryList" component={CategoryList} />
		</Stack.Navigator>
	);
};