import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SelectedMediaTest from './selectedMediaTest';
import FeedThumbNailTest from './feedThumbNailTest';
import ProfileImageSelectTest from './profileImageSelectTest';
import ProfileTagTest from './profileTagTest';
import ProtectedThumbnailTest from './protectedThumbnailTest';
import Test1 from './test1';
import InputTestNavi from './inputTestNavi';
export default TestNavi = () => {
	const TestStack = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<TestStack.Navigator>
				<TestStack.Screen name="InputTest" component={InputTestNavi} />

				<TestStack.Screen name="Icon,img,label" component={Test1} />
				<TestStack.Screen name="SelectedMedia/LocalMedial/CameraLink" component={SelectedMediaTest} />
				<TestStack.Screen name="FeedThumbnailTest" component={FeedThumbNailTest} />
				<TestStack.Screen name="ProfileImage Select/Large Test  " component={ProfileImageSelectTest} />
				<TestStack.Screen name="ProfileTag" component={ProfileTagTest} />
				<TestStack.Screen name="ProtectedThumbnail" component={ProtectedThumbnailTest} />
			</TestStack.Navigator>
		</NavigationContainer>
	);
};
