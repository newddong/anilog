import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedList from 'Templete/FeedList';
import Profile from 'Templete/Profile';
import SocialRelation from 'Templete/SocialRelation';
import FeedListForHashTag from 'Templete/FeedListForHashTag';
import FeedCommentList from 'Templete/FeedCommentList';
import AnimalProtectRequestDetail from 'Root/component/templete/AnimalProtectRequestDetail';
import FeedWrite from 'Root/component/templete/FeedWrite';

import LogoHeader from 'Navigation/header/LogoHeader';
import MeatBallHeader from 'Navigation/header/MeatBallHeader';
import AlarmAndSearchHeader from 'Navigation/header/AlarmAndSearchHeader';
import BookmarkHeader from 'Navigation/header/BookmarkHeader';

const FeedStack = createStackNavigator();

export default FeedStackNavigation = () => {
	return (
		<FeedStack.Navigator initialRouteName="MainHomeFeedList">
			<FeedStack.Screen name="MainHomeFeedList" component={FeedList} options={{header:(props)=><LogoHeader {...props}/>}}/>
			<FeedStack.Screen name="UserProfile" component={Profile} options={{header:(props)=><MeatBallHeader {...props}/>,title:'유저 프로필(유저 아이디)'}}/>
			<FeedStack.Screen name="SocialRelation" component={SocialRelation} />
			<FeedStack.Screen name="UserFeedList" component={FeedList} />
			<FeedStack.Screen name="HashFeedList" component={FeedList} />
			<FeedStack.Screen name="ProtectAnimalFeedList" component={FeedList} />
			<FeedStack.Screen name="UserTagFeedList" component={FeedList} />
			<FeedStack.Screen name="AnimalProtectRequestDetail" component={AnimalProtectRequestDetail} />
			<FeedStack.Screen name="FeedCommentList" component={FeedCommentList} options={{header:props=><AlarmAndSearchHeader {...props}/>,title:'몰라'}}/>
			<FeedStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} options={{header:props=><BookmarkHeader {...props}/>,title:'#해시태그'}} />
		</FeedStack.Navigator>
	);
};
