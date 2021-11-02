import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import AssignUserHabitation from "Root/component/templete/AssignUserHabitation";
import AssignUserProfileImage from "Root/component/templete/AssignUserProfileImage";
import AssignShelterAddress from "Root/component/templete/AssignShelterAddress";
import AssignShelterInformation from "Root/component/templete/AssignShelterInformation";
import CheckShelterPassword from "Root/component/templete/CheckShelterPassword";
import AssignShelterProfileImage from "Root/component/templete/AssignShelterProfileImage";
import ChangeUserProfileImage from "Root/component/templete/ChangeUserProfileImage";
import ChangePetProfileImage from "Root/component/templete/ChangePetProfileImage";
import ChangePassword from "Root/component/templete/ChangePassword";
import UserInfoDetailSettting from "Root/component/templete/UserInfoDetailSettting";




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
          <Drawer.Screen name="AssignUserHabitation" component={AssignUserHabitation} /> 
          <Drawer.Screen name="AssignUserProfileImage" component={AssignUserProfileImage} /> 
          <Drawer.Screen name="AssignShelterAddress" component={AssignShelterAddress} /> 
          <Drawer.Screen name="AssignShelterInformation" component={AssignShelterInformation} /> 
          <Drawer.Screen name="CheckShelterPassword" component={CheckShelterPassword} /> 
          <Drawer.Screen name="AssignShelterProfileImage" component={AssignShelterProfileImage} /> 
          <Drawer.Screen name="ChangeUserProfileImage" component={ChangeUserProfileImage} /> 
          <Drawer.Screen name="ChangePetProfileImage" component={ChangePetProfileImage} /> 
          <Drawer.Screen name="ChangePassword" component={ChangePassword} /> 
          <Drawer.Screen name="UserInfoDetailSettting" component={UserInfoDetailSettting} /> 
        </Drawer.Navigator>
    )
}
