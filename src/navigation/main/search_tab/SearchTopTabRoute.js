import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedTopTabRoute from './feed_tab/FeedTopTabRoute';
import AidRequest from 'Screens/animalsaving/aidrequest/aidrequest';
import HealthMovie from './healthmovie/healthmovie';
import SearchHeader from 'Root/navigation/header/SearchHeader';
import SearchContext from './searchcontext';
import {FEED, HEALTH_VIDEO, REQ_PROTECTION} from 'Root/i18n/msg';

const Searchtab = createMaterialTopTabNavigator();
  
export default SearchTopTabRoute = () => {
	const [input,setInput] = React.useState(false);
	return (
		<SearchContext.Provider value={{isInput:input, setInput:()=>{setInput(true)}, releaseInput:()=>{setInput(false)},}}>
			<Searchtab.Navigator initialRouteName="FeedTopTabRoute" tabBar={props => <SearchHeader {...props} />} swipeEnabled={false}>
				<Searchtab.Screen name="FeedTopTabRoute" component={FeedTopTabRoute} options={{tabBarLabel: {FEED}}} />
				<Searchtab.Screen name="HealthMovie" component={HealthMovie} options={{tabBarLabel: {HEALTH_VIDEO}}} />
				<Searchtab.Screen name="AidRequest" component={AidRequest} options={{tabBarLabel: {REQ_PROTECTION}}} />
			</Searchtab.Navigator>
		</SearchContext.Provider>
	);
};