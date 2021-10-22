import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyProfile from './src/screens/myprofile/myprofile';
import FeedStackRoute from './feed_stack/FeedStackRoute';
import AnimalsavingStackRoute from './animalsaving_stack/AnimalsavingStackRoute';
import MovieStackRoute from './movie_stack/MovieStackRoute';
import MainTabBar from 'Root/navigation/header/MainTabbar';
import {TabContext} from './tabContext';
import {FEED, REQ_ANIMAL, VIDEO, MY} from 'Root/i18n/msg';

const MainTabNav = createBottomTabNavigator();
 
export default MainBottomTabRoute = () => {
	const [tab, setTab] = useState(true);
	return (
		<TabContext.Provider value={{ toggle: () => { setTab(!tab);}, tabVisible: visible => {setTab(visible);},}}>
			<MainTabNav.Navigator screenOptions={{header:props=>false}} tabBar={props => <MainTabBar {...props} />}>
				<MainTabNav.Screen	name="FeedStackRoute"	component={FeedStackRoute} options={{tabBarVisible: tab,	tabBarLabel: {FEED},}}/>
				<MainTabNav.Screen	name="AnimalsavingStackRoute" component={AnimalsavingStackRoute} options={{tabBarVisible: tab, tabBarLabel: {REQ_ANIMAL},}}/>
				<MainTabNav.Screen	name="MovieStackRoute" component={MovieStackRoute} options={{tabBarVisible: tab, tabBarLabel: {VIDEO},}}/>
				<MainTabNav.Screen	name="MyProfile" component={MyProfile} options={{tabBarVisible: tab, tabBarLabel: {MY},}}/>
			</MainTabNav.Navigator>
		</TabContext.Provider>
	);
};
