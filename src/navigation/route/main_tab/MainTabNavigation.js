import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyStackNavigation from './my_stack/MyStackNavigation';
import FeedStackNavigation from './feed_stack/FeedStackNavigation';
import ProtectionStackNavigation from './protection_stack/ProtectionStackNavigation';
import Temp from './community_stack/temp';
import BottomTab from 'Navigation/maintab/BottomTab';
import {FEED, REQ_ANIMAL, VIDEO, MY} from 'Root/i18n/msg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainTabNav = createBottomTabNavigator();

export default MainTabNavigation = ({route}) => {
	return (
		<MainTabNav.Navigator initialRouteName={'FEED'} tabBar={props => <BottomTab {...props} />}>
			<MainTabNav.Screen name="FEED" component={FeedStackNavigation} options={{tabBarLabel: '피드'}} />
			<MainTabNav.Screen name="PROTECTION" component={ProtectionStackNavigation} options={{tabBarLabel: '동물보호'}} />
			<MainTabNav.Screen name="COMMUNITY" component={Temp} options={{tabBarLabel: '커뮤니티'}} />
			<MainTabNav.Screen name="MY" options={{tabBarLabel: 'MY'}}>
				{props => <MyStackNavigation {...props} user_type={route.params} />}
			</MainTabNav.Screen>
		</MainTabNav.Navigator>
	);
};
