import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from 'Templete/Profile';
import FeedList from 'Templete/FeedList';
// import AnimalProtectRequestDetail from "Templete/AnimalProtectRequestDetail";
import FeedListForHashTag from 'Templete/FeedListForHashTag';
import FeedCommentList from 'Templete/FeedCommentList';
import MissingAnimalDetail from 'Templete/MissingAnimalDetail';
import ReportDetail from 'Templete/ReportDetail';
import ActivationDetail from 'Templete/ActivationDetail';

import { PIC_SELECTION } from 'Root/i18n/msg';
import SocialRelationTopTabNavigation from './socialRelation_tab/SocialRelationTopTabNavigation';
import ProtectionTopTabNavigation from './protection_tab/ProtectionTopTabNavigation';

const ProtectionStack = createStackNavigator();

export default ProtectionStackNavigation = () => {
	return (
<<<<<<< HEAD
		<ProtectionStack.Navigator initialRouteName="SocialRelationTopTab">
			<ProtectionStack.Screen name="ProtectionTab" component={MissingAnimalDetail} />
=======
		<ProtectionStack.Navigator initialRouteName="ProtectionTab">
			<ProtectionStack.Screen name="ProtectionTab" component={ProtectionTopTabNavigation} />
>>>>>>> 0473ba9331f1e3b73a32ac5b1a0962a0daefd4fb

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
