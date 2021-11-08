import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginTemplete from 'Templete/LoginTemplete';

import AgreementCheck from 'Templete/AgreementCheck';
import UserAssignMobile from 'Templete/UserAssignMobile';
import UserAssignEmail from 'Templete/UserAssignEmail';
import UserPasswordCheck from 'Templete/UserPasswordCheck';
import AssignUserHabitation from 'Templete/AssignUserHabitation';
import AssignUserProfileImage from 'Templete/AssignUserProfileImage';

import ShelterCodeCheck from 'Templete/ShelterCodeCheck';
import ShelterAssignEntrance from 'Templete/ShelterAssignEntrance';
import AssignShelterAddress from 'Templete/AssignShelterAddress';
import AssignShelterInformation from 'Templete/AssignShelterInformation';
import CheckShelterPassword from 'Templete/CheckShelterPassword';
import AssignShelterProfileImage from 'Templete/AssignShelterProfileImage';

import ApplyCompanionA from 'Templete/ApplyCompanionA';
import ApplyCompanionB from 'Templete/ApplyCompanionB';
import ApplyCompanionC from 'Templete/ApplyCompanionC';
import ApplyCompanionD from 'Templete/ApplyCompanionD';
import ApplyDetails from 'Templete/ApplyDetails';

import ApplyVolunteer from 'Templete/ApplyVolunteer';
import FeedMediaTagEdit from 'Templete/FeedMediaTagEdit';
import FeedWrite from 'Templete/FeedWrite';
import LocationPicker from 'Templete/LocationPicker';

import PhotoSelect from 'Templete/PhotoSelect';

import MainTabNavigation from './main_tab/MainTabNavigation';

import {PIC_SELECTION} from 'Root/i18n/msg';

const RootStack = createStackNavigator();

export default RootStackNavigation = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="MainTab">
					<RootStack.Screen name="MainTab" component={MainTabNavigation} />
					<RootStack.Screen name="Login" component={LoginTemplete} />

					<RootStack.Screen name="AgreementCheck" component={AgreementCheck} />
					<RootStack.Screen name="UserAssignMobile" component={UserAssignMobile} />
					<RootStack.Screen name="UserAssignEmail" component={UserAssignEmail} />
					<RootStack.Screen name="UserPasswordCheck" component={UserPasswordCheck} />
					<RootStack.Screen name="AssignUserHabitation" component={AssignUserHabitation} />
					<RootStack.Screen name="AssignUserProfileImage" component={AssignUserProfileImage} />

					<RootStack.Screen name="ShelterCodeCheck" component={ShelterCodeCheck} />
					<RootStack.Screen name="ShelterAssignEntrance" component={ShelterAssignEntrance} />
					<RootStack.Screen name="AssignShelterAddress" component={AssignShelterAddress} />
					<RootStack.Screen name="AssignShelterInformation" component={AssignShelterInformation} />
					<RootStack.Screen name="CheckShelterPassword" component={CheckShelterPassword} />
					<RootStack.Screen name="AssignShelterProfileImage" component={AssignShelterProfileImage} />

					<RootStack.Screen name="ApplyProtectActivityA" component={ApplyCompanionA} />
					<RootStack.Screen name="ApplyProtectActivityB" component={ApplyCompanionB} />
					<RootStack.Screen name="ApplyProtectActivityC" component={ApplyCompanionC} />
					<RootStack.Screen name="ApplyProtectActivityD" component={ApplyCompanionD} />
					<RootStack.Screen name="ApplyProtectActivityE" component={ApplyDetails} />

					<RootStack.Screen name="ApplyAnimalAdoptionA" component={ApplyCompanionA} />
					<RootStack.Screen name="ApplyAnimalAdoptionB" component={ApplyCompanionB} />
					<RootStack.Screen name="ApplyAnimalAdoptionC" component={ApplyCompanionC} />
					<RootStack.Screen name="ApplyAnimalAdoptionD" component={ApplyCompanionD} />
					<RootStack.Screen name="ApplyAnimalAdoptionE" component={ApplyDetails} />

					<RootStack.Screen name="ApplyVolunteer" component={ApplyVolunteer} />
					<RootStack.Screen name="FeedMediaTagEdit" component={FeedMediaTagEdit} />
					<RootStack.Screen name="FeedWrite" component={FeedWrite} />
					<RootStack.Screen name="FeedMissingWrite" component={FeedWrite} />
					<RootStack.Screen name="FeedReportWrite" component={FeedWrite} />
					<RootStack.Screen name="LocationPicker" component={LocationPicker} />

					<RootStack.Screen name="SinglePhotoSelect" component={PhotoSelect} />
					<RootStack.Screen name="MultiPhotoSelect" component={PhotoSelect} />
				</RootStack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};
