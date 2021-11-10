import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyStackNavigation from './my_stack/MyStackNavigation';
import FeedStackNavigation from './feed_stack/FeedStackNavigation';
import ProtectionStackNavigation from './protection_stack/ProtectionStackNavigation';
import Temp from './community_stack/temp';
import {FEED, REQ_ANIMAL, VIDEO, MY} from 'Root/i18n/msg';

const MainTabNav = createBottomTabNavigator();

export default MainTabNavigation = () => {
	const [tab, setTab] = useState(true);
	return (
<<<<<<< HEAD
		<MainTabNav.Navigator>
=======
		<MainTabNav.Navigator initialRouteName={'MY'}>
>>>>>>> 92a5581a50bb8abb4709d4d01227d32925d84657
			<MainTabNav.Screen name="FEED" component={FeedStackNavigation} />
			<MainTabNav.Screen name="PROTECTION" component={ProtectionStackNavigation} />
			<MainTabNav.Screen name="COMMUNITY" component={Temp} />
			<MainTabNav.Screen name="MY" component={MyStackNavigation} />
		</MainTabNav.Navigator>
	);
};
