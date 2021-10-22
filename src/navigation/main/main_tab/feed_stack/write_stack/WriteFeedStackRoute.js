import React from 'react';
import {Animated} from 'react-native';
import WriteFeed from './writefeed';
import WriteHeader from 'Root/navigation/header/WriteHeader';
import AddPhoto from 'Screens/camera/addphoto';
import AddSinglePhoto from 'Screens/camera/addphoto';
import PhotoTag from './photoTag';
import UserList from '../user/uselist';
import SearchHeader from 'Root/navigation/header/SearchHeader';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from 'Screens/camera/camera';
import {forSlide} from 'Root/navigation/forslide';
import {NEW_FEED, FEED_EDIT, DOING_TAG, CAMERA} from 'Root/i18n/msg';


const Stack = createStackNavigator();

export default WriteFeedStackRoute = () => {
	const tansitConf = {
		animation: 'timing',
		config: {
			duration: 300,
		},
	};
	return (
		<Stack.Navigator
			initialRouteName="WriteFeed"
			screenOptions={{headerMode:'screen',
				header: props => <WriteHeader {...props} />,
			}}>
			<Stack.Screen
				name="WriteFeed"
				component={WriteFeed}
				options={{headerTitle: NEW_FEED, transitionSpec: {open: tansitConf, close: tansitConf}, cardStyleInterpolator: forSlide}}
			/>
			<Stack.Screen
				name="WriteFeed"
				component={WriteFeed}
				options={{headerTitle: FEED_EDIT, transitionSpec: {open: tansitConf, close: tansitConf}, cardStyleInterpolator: forSlide}}
			/>
			<Stack.Screen
				name="PhotoTag"
				component={PhotoTag}
				options={{headerTitle: DOING_TAG, transitionSpec: {open: tansitConf, close: tansitConf}, cardStyleInterpolator: forSlide}}
			/>
			<Stack.Screen
				name="Camera"
				component={Camera}
				options={{headerTitle: CAMERA, transitionSpec: {open: tansitConf, close: tansitConf}, cardStyleInterpolator: forSlide}}
			/>
			<Stack.Screen
				name="UserList"
				component={UserList}
				options={{
					header: props => <SearchHeader {...props} />,
					transitionSpec: {open: tansitConf, close: tansitConf},
					cardStyleInterpolator: forSlide,
				}}
			/>
		</Stack.Navigator>
	);
};
