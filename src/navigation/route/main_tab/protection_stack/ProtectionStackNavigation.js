import React from 'react';
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import Profile from "Templete/Profile";
import SocialRelation from "Templete/SocialRelation";
import FeedList from "Templete/FeedList";
// import AnimalProtectRequestDetail from "Templete/AnimalProtectRequestDetail";
import FeedListForHashTag from "Templete/FeedListForHashTag";
import FeedCommentList from "Templete/FeedCommentList";
import MissingAnimalDetail from "Templete/MissingAnimalDetail";
import ReportDetail from "Templete/ReportDetail";
import ActivationDetail from "Templete/ActivationDetail";

import ProtectionTopTabNavigation from "./protection_tab/ProtectionTopTabNavigation";

import { PIC_SELECTION, } from 'Root/i18n/msg';

const ProtectionStack = createStackNavigator();

export default ProtectionStackNavigation = () => {
    return (
        <ProtectionStack.Navigator initialRouteName="SocialRelation">
            <ProtectionStack.Screen name="ProtectionTab" component={ProtectionTopTabNavigation} />

            <ProtectionStack.Screen name="UserProfile" component={Profile} />
            <ProtectionStack.Screen name="SocialRelation" component={SocialRelation} />
            <ProtectionStack.Screen name="UserFeedList" component={FeedList} />
            <ProtectionStack.Screen name="HashFeedList" component={FeedList} />
            <ProtectionStack.Screen name="ProtectAnimalFeedList" component={FeedList} />
            <ProtectionStack.Screen name="UserTagFeedList" component={FeedList} />
            {/* <ProtectionStack.Screen name="AnimalProtectRequestDetail" component={AnimalProtectRequestDetail} /> */}
            <ProtectionStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} />
            <ProtectionStack.Screen name="FeedCommentList" component={FeedCommentList} />

            {/* <ProtectionStack.Screen name="AnimalProtectRequestDetail" component={AnimalProtectRequestDetail} /> */}
            <ProtectionStack.Screen name="MissingAnimalDetail" component={MissingAnimalDetail} />
            <ProtectionStack.Screen name="ReportDetail" component={ReportDetail} />
            <ProtectionStack.Screen name="ActivationDetail" component={ActivationDetail} />
        </ProtectionStack.Navigator>
    );
};
