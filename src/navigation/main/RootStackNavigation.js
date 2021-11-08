import React from 'react';
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import Login from './src/screens/login/login';
import AssignStackRoute from './assign_stack/AssignStackRoute';
import SearchTopTabRoute from './search_tab/SearchTopTabRoute';
import AddressSearch from './src/screens/common/address';
import StackHeader from '../header/StackHeader';
import AddPhoto from 'Screens/camera/addphoto';
import MainBottomTabRoute from './main_tab/MainBottomTabRoute';
import AddPhotoHeader from '../header/AddPhotoHeader';
import { PIC_SELECTION, } from 'Root/i18n/msg';


const RootStack = createStackNavigator();

export default RootStackNavigation = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Login">
					<RootStack.Screen name="Login" component={ } />


					<RootStack.Screen name="AgreementCheck" component={ } />
					<RootStack.Screen name="UserAssignMobile" component={ } />
					<RootStack.Screen name="UserAssignEmail" component={ } />
					<RootStack.Screen name="UserPasswordCheck" component={ } />
					<RootStack.Screen name="AssignUserHabitation" component={ } />
					<RootStack.Screen name="AssignUserProfileImage" component={ } />
					
					<RootStack.Screen name="ShelterCodeCheck" component={ } />
					<RootStack.Screen name="ShelterAssignEntrance" component={ } />
					<RootStack.Screen name="AssignShelterAddress" component={ } />
					<RootStack.Screen name="AssignShelterInformation" component={ } />
					<RootStack.Screen name="CheckShelterPassword" component={ } />
					<RootStack.Screen name="AssignShelterProfileImage" component={ } />
					
					<RootStack.Screen name="ApplyProtectActivityA" component={ } />
					<RootStack.Screen name="ApplyProtectActivityB" component={ } />
					<RootStack.Screen name="ApplyProtectActivityC" component={ } />
					<RootStack.Screen name="ApplyProtectActivityD" component={ } />
					<RootStack.Screen name="ApplyProtectActivityE" component={ } />
					
					<RootStack.Screen name="ApplyAnimalAdoptionA" component={ } />
					<RootStack.Screen name="ApplyAnimalAdoptionB" component={ } />
					<RootStack.Screen name="ApplyAnimalAdoptionC" component={ } />
					<RootStack.Screen name="ApplyAnimalAdoptionD" component={ } />
					<RootStack.Screen name="ApplyAnimalAdoptionE" component={ } />
					
					<RootStack.Screen name="ApplyVolunteer" component={ } />
					<RootStack.Screen name="FeedMediaTagEdit" component={ } />
					<RootStack.Screen name="FeedWrite" component={ } />
					<RootStack.Screen name="FeedMissingWrite" component={ } />
					<RootStack.Screen name="FeedReportWrite" component={ } />
					<RootStack.Screen name="LocationPicker" component={ } />

					<RootStack.Screen name="SinglePhotoSelect" component={ } />
					<RootStack.Screen name="MultiPhotoSelect" component={ } />


				</RootStack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

