import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProtectRequestList from "Templete/ProtectRequestList";
import MissingReportList from "Templete/MissingReportList";
import ActivationList from "Templete/ActivationList";

const ProtectionTab = createMaterialTopTabNavigator();

export default ProtectionTopTabNavigation = () => {
    return (
        <ProtectionTab.Navigator screenOptions={{}}>
            <ProtectionTab.Screen name="ProtectRequestList" component={ProtectRequestList} />
            <ProtectionTab.Screen name="MissingReportList" component={MissingReportList} />
            <ProtectionTab.Screen name="ActivationList" component={ActivationList} />
        </ProtectionTab.Navigator>
    );
};
