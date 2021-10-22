import React, from 'react';
import {SafeAreaView, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, } from '@react-navigation/stack';
import Login from './src/screens/login/login';
import AssignStackRoute from './assign_stack/AssignStackRoute';
import SearchTopTabRoute from './search_tab/SearchTopTabRoute';
import AddressSearch from './src/screens/common/address';
import StackHeader from '../header/StackHeader';
import AddPhoto from 'Screens/camera/addphoto';
import MainBottomTabRoute from './main_tab/MainBottomTabRoute';
import AddPhotoHeader from '../header/AddPhotoHeader';
import {PIC_SELECTION, } from 'Root/i18n/msg';

const MainStack = createStackNavigator();

export default MainStackRoute = () => {
	return (
			<SafeAreaView style={{flex: 1}}>
				<NavigationContainer>
					<MainStack.Navigator initialRouteName="Login" screenOptions={{header: () => <></>,headerMode:'screen'}}>
						<MainStack.Screen name="MainBottomTabRoute" component={MainBottomTabRoute} />
						<MainStack.Screen name="Login" component={Login} />
						<MainStack.Screen name="AssignStackRoute" component={AssignStackRoute} />
						<MainStack.Screen name="SearchTopTabRoute" component={SearchTopTabRoute} />
						<MainStack.Screen name="AddressSearch" component={AddressSearch} options={{header: props => <StackHeader {...props} />}} />
						<MainStack.Screen name="AddPhoto" component={AddPhoto} options={{header: props => <AddPhotoHeader {...props} />, title: {PIC_SELECTION}}} />
						<MainStack.Screen name="AddSinglePhoto"	component={AddPhoto} options={{header: props => <AddPhotoHeader {...props} />, title: {PIC_SELECTION}}} />
					</MainStack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
	);
};