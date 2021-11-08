import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';
import Feed from 'Root/component/organism/Feed';
import ProfileInfo from 'Root/component/organism/ProfileInfo';

// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default OrganismTestNavi = () => {
	return (
		<Drawer.Navigator initialRouteName="ProfileInfo">
			<Drawer.Screen name="FeedContent" component={FeedContent} />
			<Drawer.Screen name="Feed" component={Feed} />
			<Drawer.Screen name="ProfileInfo" component={ProfileInfo} />
		</Drawer.Navigator>
	);
};
