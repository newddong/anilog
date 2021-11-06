import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';
import Feed from 'Root/component/organism/Feed';

// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default OrganismTestNavi = () => {
	return (
		<Drawer.Navigator initialRouteName="Feed">
			<Drawer.Screen name="FeedContent" component={FeedContent} />
			<Drawer.Screen name="Feed" component={Feed} />
		</Drawer.Navigator>
	);
};
