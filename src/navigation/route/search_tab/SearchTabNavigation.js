import React, {useState, useEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchFeedTabNavigation from './feed_tab/SearchFeedTabNavigation';
import SearchProtectRequest from 'Templete/SearchProtectRequest';
import Temp from 'Navigation/route/main_tab/community_stack/temp'

const SearchTabNav = createMaterialTopTabNavigator();

export default SearchTabNavigation = () => {
	return (
		<SearchTabNav.Navigator initialRouteName={'FEED'}>
			<SearchTabNav.Screen name="FEED" component={SearchFeedTabNavigation} />
			<SearchTabNav.Screen name="COMMUNITY" component={Temp} />
			<SearchTabNav.Screen name="SearchProtectRequest" component={SearchProtectRequest} />
		</SearchTabNav.Navigator>
	);
};