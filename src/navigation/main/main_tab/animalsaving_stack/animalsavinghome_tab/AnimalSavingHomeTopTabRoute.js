import React, from 'react';
import {StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyActivity from './myactivity/myactivity';
import Participation from './participation/participation';
import AidRequest from './aidrequest/aidrequest';
import DP from 'Root/config/dp';
import {APRI10, GRAY10} from 'Root/config/color';
import {REQ_PROTECTION, MY_ACTIVITY, HOW_TO_JOIN} from 'Root/i18n/msg';

const Tab = createMaterialTopTabNavigator();

export default AnimalSavingHomeTopTabRoute = () => {
	return (
		<Tab.Navigator initialRouteName="Request" screenOptions={{
			labelStyle:txt.noto30b,
			activeTintColor:APRI10,
			inactiveTintColor:GRAY10,
			tabStyle:{height:90*DP},
			indicatorStyle:{backgroundColor:APRI10}
		}}>
			<Tab.Screen name="AidRequest" component={AidRequest} options={{tabBarLabel:({color})=>(<Text style={[txt.noto30b,{color:color}]}>{REQ_PROTECTION}</Text>)}}/>
			<Tab.Screen name="MyActivity" component={MyActivity} options={{tabBarLabel:({color})=>(<Text style={[txt.noto30b,{color:color}]}>{MY_ACTIVITY}</Text>)}}/>
			<Tab.Screen name="Participation" component={Participation} options={{tabBarLabel:({color})=>(<Text style={[txt.noto30b,{color:color}]}>{HOW_TO_JOIN}</Text>)}}/>
		</Tab.Navigator>
	);
};

const txt = StyleSheet.create({
	noto30b:{
		fontFamily:'NotoSansKR-Bold',
		fontSize:30*DP,
		lineHeight:46*DP
	},
})