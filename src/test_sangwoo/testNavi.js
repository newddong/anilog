import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SelectedMediaTest from './selectedMediaTest';
import FeedThumbNailTest from './thumbNailTest';
import ProfileImageSelectTest from './profileImageSelectTest';
import Test1 from './test1';
import InputTestNavi from './inputTestNavi';
import ButtonTest from './buttonTest';
import TagTest from './TagTest';
export default TestNavi = () => {
	const TestStack = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<TestStack.Navigator initialRouteName={"Icon,img,label"}>
				<TestStack.Screen name="InputTest" component={InputTestNavi} options={{headerShown:false}} />
			
				<TestStack.Screen name="Icon,img,label" component={Test1} />
				<TestStack.Screen name="SelectedMedia/LocalMedial/CameraLink" component={SelectedMediaTest} />
				<TestStack.Screen name="Thumbnail Test" component={FeedThumbNailTest} />
				<TestStack.Screen name="ProfileImage Select/Large Test  " component={ProfileImageSelectTest} />
				<TestStack.Screen name="Tag Test" component={TagTest} />
				<TestStack.Screen name="ButtonTest" component={ButtonTest} />
			</TestStack.Navigator>
		</NavigationContainer>
	);
};
