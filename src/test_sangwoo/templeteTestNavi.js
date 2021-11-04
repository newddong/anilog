import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import LoginTemplete from 'Root/component/templete/LoginTemplete';
import FindAccount from 'Root/component/templete/FindAccount';
import PasswordReset from 'Root/component/templete/PasswordReset';
import SuggestAssign from 'Root/component/templete/SuggestAssign';
import AgreementCheck from 'Root/component/templete/AgreementCheck';
import UserAssignMobile from 'Root/component/templete/UserAssignMobile';
import UserAssignEmail from 'Root/component/templete/UserAssignEmail';
import UserPasswordCheck from 'Root/component/templete/UserPasswordCheck';
import ShelterCodeCheck from 'Root/component/templete/ShelterCodeCheck';
import ShelterAssignEntrance from 'Root/component/templete/ShelterAssignEntrance';
import AssignUserHabitation from 'Root/component/templete/AssignUserHabitation';
import AssignUserProfileImage from 'Root/component/templete/AssignUserProfileImage';
import AssignShelterAddress from 'Root/component/templete/AssignShelterAddress';
import AssignShelterInformation from 'Root/component/templete/AssignShelterInformation';
import CheckShelterPassword from 'Root/component/templete/CheckShelterPassword';
import AssignShelterProfileImage from 'Root/component/templete/AssignShelterProfileImage';
import ChangeUserProfileImage from 'Root/component/templete/ChangeUserProfileImage';
import ChangePetProfileImage from 'Root/component/templete/ChangePetProfileImage';
import ChangePassword from 'Root/component/templete/ChangePassword';
import UserInfoDetailSettting from 'Root/component/templete/UserInfoDetailSettting';
import AddFamilyAccount from 'Root/component/templete/AddFamilyAccount';
import UserMenu from 'Root/component/templete/UserMenu';
import UserInfoSetting from 'Root/component/templete/UserInfoSetting';
import ShelterMenu from 'Root/component/templete/ShelterMenu';
import ShelterInfoSetting from 'Root/component/templete/ShelterInfoSetting';
import EditShelterInfo from 'Root/component/templete/EditShelterInfo';
import ProtectApplyForm from 'Root/component/templete/ProtectApplyForm';
import ApplicationFormVolunteer from 'Root/component/templete/ApplicationFormVolunteer';
import AnimalAdoption from 'Root/component/templete/AnimalAdoption';
import SetPetInformation from 'Root/component/templete/SetPetInformation';
import PetInfoSetting from 'Root/component/templete/PetInfoSetting';
import VaccinationRecord from 'Root/component/templete/VaccinationRecord';
import FeedListForHashTag from 'Root/component/templete/FeedListForHashTag';
import SearchFeed from 'Root/component/templete/SearchFeed';
import SearchAccountA from 'Root/component/templete/SearchAccountA';
import SearchAccountB from 'Root/component/templete/SearchAccountB';
import SearchHashTag from 'Root/component/templete/SearchHashTag';
import SearchProtectRequest from 'Root/component/templete/SearchProtectRequest';
import AppliesRecord from 'Root/component/templete/AppliesRecord';
import ProtectRequestList from 'Root/component/templete/ProtectRequestList';
import MissingReportList from 'Root/component/templete/MissingReportList';
import ActivationList from 'Root/component/templete/ActivationList';
import ActivationDetail from 'Root/component/templete/ActivationDetail';
import ApplyVolunteer from 'Root/component/templete/ApplyVolunteer';
import ApplyCompanionA from 'Root/component/templete/ApplyCompanionA';
import ApplyCompanionB from 'Root/component/templete/ApplyCompanionB';
import ApplyCompanionC from 'Root/component/templete/ApplyCompanionC';
import ApplyCompanionD from 'Root/component/templete/ApplyCompanionD';
import ApplyDetails from 'Root/component/templete/ApplyDetails';
import PhotoSelect from 'Root/component/templete/PhotoSelect';
import UserIdentification from 'Root/component/templete/UserIdentification';
import MissingAnimalDetail from 'Root/component/templete/MissingAnimalDetail';
import ReportDetail from 'Root/component/templete/ReportDetail';
import FeedList from 'Root/component/templete/FeedList';
import FeedCommentList from 'Root/component/templete/FeedCommentList';
import SocialRelation from 'Root/component/templete/SocialRelation';
import LocationPicker from 'Root/component/templete/LocationPicker';
import AccountPicker from 'Root/component/templete/AccountPicker';
import SelectAccount from 'Root/component/templete/SelectAccount';
import AidRequestList from 'Root/component/templete/AidRequestList';
import ManageVolunteer from 'Root/component/templete/ManageVolunteer';
import WriteAidRequest from 'Root/component/templete/WriteAidRequest';

// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default TempleteTestNavi = () => {
	return (
		<Drawer.Navigator initialRouteName="FindAccount">
			<Drawer.Screen name="LoginTemplete" component={LoginTemplete} />
			<Drawer.Screen name="FindAccount" component={FindAccount} />
			<Drawer.Screen name="PasswordReset" component={PasswordReset} />
			<Drawer.Screen name="SuggestAssign" component={SuggestAssign} />
			<Drawer.Screen name="AgreementCheck" component={AgreementCheck} />
			<Drawer.Screen name="UserAssignMobile" component={UserAssignMobile} />
			<Drawer.Screen name="UserAssignEmail" component={UserAssignEmail} />
			<Drawer.Screen name="UserPasswordCheck" component={UserPasswordCheck} />
			<Drawer.Screen name="ShelterCodeCheck" component={ShelterCodeCheck} />
			<Drawer.Screen name="ShelterAssignEntrance" component={ShelterAssignEntrance} />
			<Drawer.Screen name="AssignUserHabitation" component={AssignUserHabitation} />
			<Drawer.Screen name="AssignUserProfileImage" component={AssignUserProfileImage} />
			<Drawer.Screen name="AssignShelterAddress" component={AssignShelterAddress} />
			<Drawer.Screen name="AssignShelterInformation" component={AssignShelterInformation} />
			<Drawer.Screen name="CheckShelterPassword" component={CheckShelterPassword} />
			<Drawer.Screen name="AssignShelterProfileImage" component={AssignShelterProfileImage} />
			<Drawer.Screen name="ChangeUserProfileImage" component={ChangeUserProfileImage} />
			<Drawer.Screen name="ChangePetProfileImage" component={ChangePetProfileImage} />
			<Drawer.Screen name="ChangePassword" component={ChangePassword} />
			<Drawer.Screen name="UserInfoDetailSettting" component={UserInfoDetailSettting} />
			<Drawer.Screen name="AddFamilyAccount" component={AddFamilyAccount} />
			<Drawer.Screen name="UserMenu" component={UserMenu} />
			<Drawer.Screen name="UserInfoSetting" component={UserInfoSetting} />
			<Drawer.Screen name="ShelterMenu" component={ShelterMenu} />
			<Drawer.Screen name="ShelterInfoSetting" component={ShelterInfoSetting} />
			<Drawer.Screen name="EditShelterInfo" component={EditShelterInfo} />
			<Drawer.Screen name="ApplicationFormVolunteer" component={ApplicationFormVolunteer} />
			<Drawer.Screen name="AnimalAdoption" component={AnimalAdoption} />
			<Drawer.Screen name="SetPetInformation" component={SetPetInformation} />
			<Drawer.Screen name="PetInfoSetting" component={PetInfoSetting} />
			<Drawer.Screen name="VaccinationRecord" component={VaccinationRecord} />
			<Drawer.Screen name="FeedListForHashTag" component={FeedListForHashTag} />
			<Drawer.Screen name="SearchFeed" component={SearchFeed} />
			<Drawer.Screen name="SearchAccountA" component={SearchAccountA} />
			<Drawer.Screen name="SearchAccountB" component={SearchAccountB} />
			<Drawer.Screen name="SearchHashTag" component={SearchHashTag} />
			<Drawer.Screen name="SearchProtectRequest" component={SearchProtectRequest} />
			<Drawer.Screen name="AppliesRecord" component={AppliesRecord} />
			<Drawer.Screen name="ProtectRequestList" component={ProtectRequestList} />
			<Drawer.Screen name="MissingReportList" component={MissingReportList} />
			<Drawer.Screen name="ActivationList" component={ActivationList} />
			<Drawer.Screen name="ActivationDetail" component={ActivationDetail} />
			<Drawer.Screen name="ApplyVolunteer" component={ApplyVolunteer} />
			<Drawer.Screen name="ApplyCompanionA" component={ApplyCompanionA} />
			<Drawer.Screen name="ApplyCompanionB" component={ApplyCompanionB} />
			<Drawer.Screen name="ApplyCompanionC" component={ApplyCompanionC} />
			<Drawer.Screen name="ApplyCompanionD" component={ApplyCompanionD} />
			<Drawer.Screen name="ApplyDetails" component={ApplyDetails} />
			<Drawer.Screen name="PhotoSelect" component={PhotoSelect} />
			<Drawer.Screen name="UserIdentification" component={UserIdentification} />
			<Drawer.Screen name="MissingAnimalDetail" component={MissingAnimalDetail} />
			<Drawer.Screen name="ReportDetail" component={ReportDetail} />
			<Drawer.Screen name="FeedList" component={FeedList} />
			<Drawer.Screen name="FeedCommentList" component={FeedCommentList} />
			<Drawer.Screen name="SocialRelation" component={SocialRelation} />
			<Drawer.Screen name="LocationPicker" component={LocationPicker} />
			<Drawer.Screen name="AccountPicker" component={AccountPicker} />
			<Drawer.Screen name="SelectAccount" component={SelectAccount} />
			<Drawer.Screen name="AidRequestList" component={AidRequestList} />
			<Drawer.Screen name="ManageVolunteer" component={ManageVolunteer} />
			<Drawer.Screen name="WriteAidRequest" component={WriteAidRequest} />
		</Drawer.Navigator>
	);
};
