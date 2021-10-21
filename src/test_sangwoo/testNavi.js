import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IconTest from './iconTest'
import ImageStyleTest from './imageStyleTest'
import LabelTest from './labelTest'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SelectedMediaTest from "./selectedMediaTest";
import FeedThumbNailTest from "./feedThumbNailTest";
import ProfileImageSelectTest from "./profileImageSelectTest";
import ProfileTagTest from "./profileTagTest";
import ProtectedThumbnailTest from "./protectedThumbnailTest";
export default TestNavi = () => {
    const TestStack = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <TestStack.Navigator>
                <TestStack.Screen name="Icon" component={IconTest} />
                <TestStack.Screen name="ImageStyle" component={ImageStyleTest}/>
                <TestStack.Screen name="Label" component={LabelTest}/>
                <TestStack.Screen name="SelectedMedia/LocalMedial/CameraLink" component={SelectedMediaTest}/>
                <TestStack.Screen name="FeedThumbnailTest" component={FeedThumbNailTest}/>
                <TestStack.Screen name="ProfileImage Select/Large Test  " component={ProfileImageSelectTest}/>
                <TestStack.Screen name="ProfileTag" component={ProfileTagTest} />
                <TestStack.Screen name="ProtectedThumbnail" component={ProtectedThumbnailTest} />
            </TestStack.Navigator>
        </NavigationContainer>
    )
}