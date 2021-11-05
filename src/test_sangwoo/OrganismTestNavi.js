import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';

// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default OrganismTestNavi = () => {
	return (
		<Drawer.Navigator initialRouteName="FeedContent">
			<Drawer.Screen name="FeedContent" component={FeedContent} />
		</Drawer.Navigator>
	);
};
