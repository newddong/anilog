import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginTemplete from 'Templete/LoginTemplete';

import AgreementCheck from 'Templete/AgreementCheck';
import UserAssignMobile from 'Root/component/templete/UserVerification';
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

import AssignPetProfileImage from 'Templete/AssignPetProfileImage';
import AssignPetInfoA from 'Templete/AssignPetInfoA';
import AssignPetInfoB from 'Templete/AssignPetInfoB';

import MainTabNavigation from './main_tab/MainTabNavigation';
import SearchTabNavigation from './search_tab/SearchTabNavigation';

import { PIC_SELECTION } from 'Root/i18n/msg';
import FeedListForHashTag from 'Root/component/templete/FeedListForHashTag';

import SimpleHeader from 'Navigation/header/SimpleHeader';
import SendHeader from '../header/SendHeader';
import UserVerification from 'Root/component/templete/UserVerification';

const RootStack = createStackNavigator();

export default RootStackNavigation = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Login">
					<RootStack.Screen name="MainTab" component={MainTabNavigation} />
					<RootStack.Screen name="Login" component={LoginTemplete} />
					<RootStack.Screen name="Search" component={SearchTabNavigation} />

					<RootStack.Screen name="AgreementCheck" component={AgreementCheck} />
					<RootStack.Screen name="UserVerification" component={UserVerification} />
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
					<RootStack.Screen name="FeedWrite" component={FeedWrite} options={{ header: props => <SendHeader {...props} />, title: '게시물 작성' }} />

					<RootStack.Screen
						name="FeedMissingWrite"
						component={FeedWrite}
						options={{ header: props => <SendHeader {...props} />, title: '실종 게시물' }}
					/>
					<RootStack.Screen
						name="FeedReportWrite"
						component={FeedWrite}
						options={{ header: props => <SendHeader {...props} />, title: '제보 게시물' }}
					/>
					<RootStack.Screen name="LocationPicker" component={LocationPicker} />

					<RootStack.Screen name="SinglePhotoSelect" component={PhotoSelect} />
					<RootStack.Screen name="MultiPhotoSelect" component={PhotoSelect} />
					<RootStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} />

					<RootStack.Screen name="AssignPetProfileImage" component={AssignPetProfileImage} />
					<RootStack.Screen name="AssignPetInfoA" component={AssignPetInfoA} />
					<RootStack.Screen name="AssignPetInfoB" component={AssignPetInfoB} />
				</RootStack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};
