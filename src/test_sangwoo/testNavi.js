import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IconTest from './iconTest'
import ImageStyleTest from './imageStyleTest'
import LabelTest from './labelTest'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default TestNavi = () => {
    const TestStack = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <TestStack.Navigator>

                <TestStack.Screen name="Icon" component={IconTest} />
                <TestStack.Screen name="ImageStyle" component={ImageStyleTest}/>
                <TestStack.Screen name="Label" component={LabelTest}/>
            </TestStack.Navigator>

        </NavigationContainer>
    )
}