import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from "react";
import LoginTemplete from "Root/component/templete/LoginTemplete";
import FindAccount from "Root/component/templete/FindAccount";

const Tab = createMaterialTopTabNavigator();

export default TempleteTestNavi = () => {    
    return(
        <Tab.Navigator initialRouteName='LoginTemplete' screenOptions={{headerShown:false}}>
        <Tab.Screen name='LoginTemplete' component={LoginTemplete} />   
        <Tab.Screen name='FindAccount' component={FindAccount} />           
        </Tab.Navigator>
    )
}
