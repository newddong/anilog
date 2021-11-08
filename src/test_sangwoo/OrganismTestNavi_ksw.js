import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';
import AccountHashList from 'Root/component/organism_ksw/AccountHashList';
import AccountList from 'Root/component/organism_ksw/AccountList';
import AddressInput from 'Root/component/organism_ksw/AddressInput';
import AidRequest from 'Root/component/organism_ksw/AidRequest';
import AidRequestList from 'Root/component/organism_ksw/AidRequestList';
import AnimalInfo from 'Root/component/organism_ksw/AnimalInfo';
import AnimalInfoList from 'Root/component/organism_ksw/AnimalInfoList';
import AssignCheckList from 'Root/component/organism_ksw/AssignCheckList';
import AssignCheckListItem from 'Root/component/organism_ksw/AssignCheckListItem';
import ChildComment from 'Root/component/organism_ksw/ChildComment';
import CompanionForm from 'Root/component/organism_ksw/CompanionForm';
import CompanionFormList from 'Root/component/organism_ksw/CompanionFormList';
import ControllableAccount from 'Root/component/organism_ksw/ControllableAccount';
import ControllableAccountList from 'Root/component/organism_ksw/ControllableAccountList';
import ControllableHashTag from 'Root/component/organism_ksw/ControllableHashTag';
import ControllableHashTagList from 'Root/component/organism_ksw/ControllableHashTagList';
import EmailVerification from 'Root/component/organism_ksw/EmailVerification';
import HashTagList from 'Root/component/organism_ksw/HashTagList';
import InterestTagList from 'Root/component/organism_ksw/InterestTagList';
import MyPetList from 'Root/component/organism_ksw/MyPetList';
import OwnerList from 'Root/component/organism_ksw/OwnerList';
import PasswordChecker from 'Root/component/organism_ksw/PasswordChecker';
import PetAccountList from 'Root/component/organism_ksw/PetAccountList';
import PetList from 'Root/component/organism_ksw/PetList';
import PhoneNumVerification from 'Root/component/organism_ksw/PhoneNumVerification';
import ProfileMenu from 'Root/component/organism_ksw/ProfileMenu';
import ProtectedPetList from 'Root/component/organism_ksw/ProtectedPetList';
import ShelterLabel from 'Root/component/organism_ksw/ShelterLabel';
import ShelterList from 'Root/component/organism_ksw/ShelterList';
import SocialInfoA from 'Root/component/organism_ksw/SocialInfoA';
import SocialInfoB from 'Root/component/organism_ksw/SocialInfoB';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';
import TopTabNavigation_Filled from 'Root/component/organism_ksw/TopTabNavigation_Filled';
import Vaccination from 'Root/component/organism_ksw/Vaccination';
import VolunteerItem from 'Root/component/organism_ksw/VolunteerItem';
import VolunteerItemList from 'Root/component/organism_ksw/VolunteerItemList';
import SelectedMediaList from 'Root/component/organism_ksw/SelectedMediaList';
import AnimalNeedHelp from 'Root/component/organism_ksw/AnimalNeedHelp';
import AnimalNeedHelpList from 'Root/component/organism_ksw/AnimalNeedHelpList';
import AnimalProtectDetail from 'Root/component/organism_ksw/AnimalProtectDetail';
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default OrganismTestNavi_ksw = () => {
	return (
		<Drawer.Navigator initialRouteName="FeedContent">
			<Drawer.Screen name="FeedContent" component={FeedContent} />
			<Drawer.Screen name="PetAccountList" component={PetAccountList} />
			<Drawer.Screen name="AccountList" component={AccountList} />
			<Drawer.Screen name="ControllableAccount" component={ControllableAccount} />
			<Drawer.Screen name="ControllableAccountList" component={ControllableAccountList} />
			<Drawer.Screen name="ControllableHashTag" component={ControllableHashTag} />
			<Drawer.Screen name="ControllableHashTagList" component={ControllableHashTagList} />
			<Drawer.Screen name="AccountHashList" component={AccountHashList} />
			<Drawer.Screen name="HashTagList" component={HashTagList} />
			<Drawer.Screen name="PhoneNumVerification" component={PhoneNumVerification} />
			<Drawer.Screen name="EmailVerification" component={EmailVerification} />
			<Drawer.Screen name="PasswordChecker" component={PasswordChecker} />
			<Drawer.Screen name="SocialInfoA" component={SocialInfoA} />
			<Drawer.Screen name="SocialInfoB" component={SocialInfoB} />
			<Drawer.Screen name="ProfileMenu" component={ProfileMenu} />
			<Drawer.Screen name="MyPetList" component={MyPetList} />
			<Drawer.Screen name="InterestTagList" component={InterestTagList} />
			<Drawer.Screen name="TopTabNavigation_Filled" component={TopTabNavigation_Filled} />
			<Drawer.Screen name="TopTabNavigation_Border" component={TopTabNavigation_Border} />
			<Drawer.Screen name="AddressInput" component={AddressInput} />
			<Drawer.Screen name="Vaccination" component={Vaccination} />
			<Drawer.Screen name="ShelterLabel" component={ShelterLabel} />
			<Drawer.Screen name="ShelterList" component={ShelterList} />
			<Drawer.Screen name="ChildComment" component={ChildComment} />
			<Drawer.Screen name="CompanionForm" component={CompanionForm} />
			<Drawer.Screen name="CompanionFormList" component={CompanionFormList} />
			<Drawer.Screen name="AssignCheckListItem" component={AssignCheckListItem} />
			<Drawer.Screen name="AssignCheckList" component={AssignCheckList} />
			<Drawer.Screen name="ProtectedPetList" component={ProtectedPetList} />
			<Drawer.Screen name="PetList" component={PetList} />
			<Drawer.Screen name="OwnerList" component={OwnerList} />
			<Drawer.Screen name="AidRequest" component={AidRequest} />
			<Drawer.Screen name="AidRequestList" component={AidRequestList} />
			<Drawer.Screen name="VolunteerItem" component={VolunteerItem} />
			<Drawer.Screen name="VolunteerItemList" component={VolunteerItemList} />
			<Drawer.Screen name="AnimalInfo" component={AnimalInfo} />
			<Drawer.Screen name="AnimalInfoList" component={AnimalInfoList} />
			<Drawer.Screen name="SelectedMediaList" component={SelectedMediaList} />
			<Drawer.Screen name="AnimalNeedHelp" component={AnimalNeedHelp} />
			<Drawer.Screen name="AnimalNeedHelpList" component={AnimalNeedHelpList} />
			<Drawer.Screen name="AnimalProtectDetail" component={AnimalProtectDetail} />
		</Drawer.Navigator>
	);
};
