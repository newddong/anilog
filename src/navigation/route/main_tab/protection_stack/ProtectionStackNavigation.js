import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from 'Templete/Profile';
import FeedList from 'Templete/FeedList';
// import AnimalProtectRequestDetail from "Templete/AnimalProtectRequestDetail";
import FeedListForHashTag from 'Templete/FeedListForHashTag';
import FeedCommentList from 'Templete/FeedCommentList';
import MissingAnimalDetail from 'Templete/MissingAnimalDetail';
import ReportDetail from 'Templete/ReportDetail';
import ActivationDetail from 'Templete/ActivationDetail';

import {PIC_SELECTION} from 'Root/i18n/msg';
import SocialRelationTopTabNavigation from './socialRelation_tab/SocialRelationTopTabNavigation';

const ProtectionStack = createStackNavigator();

export default ProtectionStackNavigation = () => {
	return (
		<ProtectionStack.Navigator initialRouteName="ReportDetail">
			<ProtectionStack.Screen name="ProtectionTab" component={MissingAnimalDetail} />

			<ProtectionStack.Screen name="UserProfile" component={Profile} />
			<ProtectionStack.Screen name="SocialRelationTopTab" component={SocialRelationTopTabNavigation} />
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
