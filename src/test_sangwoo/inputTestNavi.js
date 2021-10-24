import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InputTest1 from "./inputTest1";
export default InputTestNavi = () => {
    const InputTest = createStackNavigator()
    return(
            <InputTest.Navigator>
                <InputTest.Screen name="Icon" component={InputTest1} />
            </InputTest.Navigator>
    )
}