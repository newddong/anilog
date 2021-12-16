import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyStackNavigation from './my_stack/MyStackNavigation';
import FeedStackNavigation from './feed_stack/FeedStackNavigation';
import ProtectionStackNavigation from './protection_stack/ProtectionStackNavigation';
import Temp from './community_stack/temp';
import BottomTab from 'Navigation/maintab/BottomTab';
import {FEED, REQ_ANIMAL, VIDEO, MY} from 'Root/i18n/msg';

const MainTabNav = createBottomTabNavigator();

export default MainTabNavigation = () => {
	const [tab, setTab] = useState(true);
	return (
		<MainTabNav.Navigator initialRouteName={'MY'} tabBar={props => <BottomTab {...props} />}>
			<MainTabNav.Screen name="FEED" component={FeedStackNavigation} options={{tabBarLabel: '피드'}} />
			<MainTabNav.Screen name="PROTECTION" component={ProtectionStackNavigation} options={{tabBarLabel: '동물보호'}} />
			<MainTabNav.Screen name="COMMUNITY" component={Temp} options={{tabBarLabel: '커뮤니티'}} />
			<MainTabNav.Screen name="MY" component={MyStackNavigation} options={{tabBarLabel: 'MY'}} />
		</MainTabNav.Navigator>
	);
};
