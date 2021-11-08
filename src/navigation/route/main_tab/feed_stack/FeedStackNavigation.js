import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FeedList from 'Templete/FeedList';
import Profile from 'Templete/Profile';
import SocialRelation from 'Templete/SocialRelation';
import FeedListForHashTag from 'Templete/FeedListForHashTag';
import FeedCommentList from 'Templete/FeedCommentList';
import AnimalProtectRequestDetail from 'Root/component/templete/AnimalProtectRequestDetail';

const FeedStack = createStackNavigator();

export default FeedStackNavigation = () => {
	return (
		<FeedStack.Navigator initialRouteName="Login">
			<FeedStack.Screen name="MainHomeFeedList" component={FeedList} />
			<FeedStack.Screen name="UserProfile" component={Profile} />
			<FeedStack.Screen name="SocialRelation" component={SocialRelation} />
			<FeedStack.Screen name="UserFeedList" component={FeedList} />
			<FeedStack.Screen name="HashFeedList" component={FeedList} />
			<FeedStack.Screen name="ProtectAnimalFeedList" component={FeedList} />
			<FeedStack.Screen name="UserTagFeedList" component={FeedList} />
			<FeedStack.Screen name="AnimalProtectRequestDetail" component={AnimalProtectRequestDetail} />
			<FeedStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} />
			<FeedStack.Screen name="FeedCommentList" component={FeedCommentList} />
		</FeedStack.Navigator>
	);
};
