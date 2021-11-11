import React, {useState, useEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchAccountA from 'Templete/SearchAccountA';
import SearchAccountB from 'Templete/SearchAccountB';
import SearchFeed from 'Templete/SearchFeed';
import SearchHashTag from 'Templete/SearchHashTag';


const SearchFeedTabNav = createMaterialTopTabNavigator();

export default SearchFeedTabNavigation = () => {
	return (
		<SearchFeedTabNav.Navigator initialRouteName={'FEED'}>
			<SearchFeedTabNav.Screen name="SearchFeed" component={SearchFeed} />
			<SearchFeedTabNav.Screen name="SearchAccountA" component={SearchAccountA} />
			<SearchFeedTabNav.Screen name="SearchAccountB" component={SearchAccountB} />
			<SearchFeedTabNav.Screen name="SearchHashTag" component={SearchHashTag} />
		</SearchFeedTabNav.Navigator>
	);
};
