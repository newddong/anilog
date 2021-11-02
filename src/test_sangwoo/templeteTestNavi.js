import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from "react";
import LoginTemplete from "Root/component/templete/LoginTemplete";
import FindAccount from "Root/component/templete/FindAccount";
import PasswordReset from "Root/component/templete/PasswordReset";
import SuggestAssign from "Root/component/templete/SuggestAssign";
import AgreementCheck from "Root/component/templete/AgreementCheck";
import UserAssignMobile from "Root/component/templete/UserAssignMobile";
import UserAssignEmail from "Root/component/templete/UserAssignEmail";
import UserPasswordCheck from "Root/component/templete/UserPasswordCheck";
import ShelterCodeCheck from "Root/component/templete/ShelterCodeCheck";
import ShelterAssignEntrance from "Root/component/templete/ShelterAssignEntrance";
import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default TempleteTestNavi = () => {    
    return(
        <Drawer.Navigator initialRouteName="FindAccount">
          <Drawer.Screen name="LoginTemplete" component={LoginTemplete} />
          <Drawer.Screen name="FindAccount" component={FindAccount} />
          <Drawer.Screen name="PasswordReset" component={PasswordReset} />
          <Drawer.Screen name="SuggestAssign" component={SuggestAssign} />
          <Drawer.Screen name="AgreementCheck" component={AgreementCheck} />
          <Drawer.Screen name="UserAssignMobile" component={UserAssignMobile} />
          <Drawer.Screen name="UserAssignEmail" component={UserAssignEmail} />
          <Drawer.Screen name="UserPasswordCheck" component={UserPasswordCheck} />
          <Drawer.Screen name="ShelterCodeCheck" component={ShelterCodeCheck} />
          <Drawer.Screen name="ShelterAssignEntrance" component={ShelterAssignEntrance} />
        </Drawer.Navigator>
    )
}
