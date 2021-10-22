import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedSearchList from './feedsearchlist';
import SearchList from './searchlist';
import FeedTabbar from 'Root/navigation/header/FeedTabbar';
import TempShelter from './tempshelter';
import DP from 'Root/config/dp';
import {RECOMMENDATION, ACCOUNT, TAG, TEMP_PROTECTION_DIARY, ORI_ACCOUNT, SEARCHED_TAG} from 'Root/i18n/msg';

const Tab = createMaterialTopTabNavigator();

export default FeedTopTabRoute = () => {
	return (
      <Tab.Navigator initialRouteName='recommend' tabBar={(props)=><FeedTabbar {...props}/>}>
         <Tab.Screen name='FeedSearchList' component={FeedSearchList} options={{tabBarLabel:{RECOMMENDATION}}} initialParams={{ itemId: {RECOMMENDATION} }}/>
         <Tab.Screen name='ProfilesSearchList' component={SearchList} options={{tabBarLabel:{ACCOUNT}}} initialParams={{ itemId: {ORI_ACCOUNT} }}/>
         <Tab.Screen name='TagsSearchList' component={SearchList} options={{tabBarLabel:{TAG}}} initialParams={{ itemId: {SEARCHED_TAG} }}/>
         <Tab.Screen name='TempShelter' component={TempShelter} options={{tabBarLabel:{TEMP_PROTECTION_DIARY}}} initialParams={{ itemId: {TEMP_PROTECTION_DIARY}}}/>
      </Tab.Navigator>
	);
};

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24*DP,
		lineHeight: 36*DP,
	},
	noto28rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28*DP,
		lineHeight: 38*DP,
	},
   noto28b:{
		fontFamily:'NotoSansKR-Bold',
		fontSize:30*DP,
		lineHeight:38*DP
	},
	noto30b:{
		fontFamily:'NotoSansKR-Bold',
		fontSize:30*DP,
		lineHeight:42*DP
	},
})