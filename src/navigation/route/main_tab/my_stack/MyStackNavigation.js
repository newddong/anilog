import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from 'Templete/Profile';
import SocialRelation from 'Templete/SocialRelation';
import FeedList from 'Templete/FeedList';
import FeedListForHashTag from 'Templete/FeedListForHashTag';
import FeedCommentList from 'Templete/FeedCommentList';
import UserInfoDetailSettting from 'Templete/UserInfoDetailSettting';
import UserMenu from 'Templete/UserMenu';
import UserInfoSetting from 'Templete/UserInfoSetting';
import ChangeUserProfileImage from 'Templete/ChangeUserProfileImage';
import ChangePassword from 'Templete/ChangePassword';
import VaccinationRecord from 'Templete/VaccinationRecord';
import AnimalAdoption from 'Templete/AnimalAdoption';
import PetInfoSetting from 'Templete/PetInfoSetting';
import ChangePetProfileImage from 'Templete/ChangePetProfileImage';
import SetPetInformation from 'Templete/SetPetInformation';
import AddFamilyAccount from 'Templete/AddFamilyAccount';
import AssignPetProfileImage from 'Templete/AssignPetProfileImage';
import AssignPetInfoA from 'Templete/AssignPetInfoA';
import AssignPetInfoB from 'Templete/AssignPetInfoB';
import SaveFavorite from 'Templete/SaveFavorite';
import SaveAnimalRequest from 'Templete/SaveAnimalRequest';
import FavoriteFeeds from 'Templete/FavoriteFeeds';
import AppliesRecord from 'Templete/AppliesRecord';
import ApplyAdoptionList from 'Templete/ApplyAdoptionList';
import ApplyDetails from 'Templete/ApplyDetails';
import AnimalProtectList from 'Templete/AnimalProtectList';
import AssignProtectAnimalImage from 'Templete/AssignProtectAnimalImage';
import AssignProtectAnimalDate from 'Templete/AssignProtectAnimalDate';
import AssignProtectAnimalInfo from 'Templete/AssignProtectAnimalInfo';
import ShelterMenu from 'Templete/ShelterMenu';
import ShelterInfoSetting from 'Templete/ShelterInfoSetting';
import EditShelterInfo from 'Templete/EditShelterInfo';
import AidRequestAnimalList from 'Templete/AidRequestList';
import WriteAidRequest from 'Templete/WriteAidRequest';
import AidRequestManage from 'Templete/AidRequestManage';
// import ProtectApplicant from "Templete/ProtectApplicant";
import ProtectApplyForm from 'Templete/ProtectApplyForm';
import ShelterProtectRequests from 'Templete/ShelterProtectRequests';
import AnimalFromShelter from 'Templete/AnimalFromShelter';
import AdoptorInformation from 'Templete/AdoptorInformation';
import ManageVolunteer from 'Templete/ManageVolunteer';
import ApplicationFormVolunteer from 'Templete/ApplicationFormVolunteer';
import PhotoSelect from 'Templete/PhotoSelect';
import AnimalProtectRequestDetail from 'Templete/AnimalProtectRequestDetail';
import SelectAccount from 'Templete/SelectAccount';

import ConfirmHeader from 'Navigation/header/ConfirmHeader';
import SaveButtonHeader from 'Navigation/header/SaveButtonHeader';

const MyStack = createStackNavigator();

export default MyStackNavigation = () => {
	return (
		<MyStack.Navigator initialRouteName="AssignPetProfileImage">
			<MyStack.Screen name="UserFeedList" component={FeedList} />
			<MyStack.Screen name="UserFeeds" component={FavoriteFeeds} />
			<MyStack.Screen name="HashFeedList" component={FeedList} />
			<MyStack.Screen name="ProtectAnimalFeedList" component={FeedList} />
			<MyStack.Screen name="UserTagFeedList" component={FeedList} />
			<MyStack.Screen name="UserProfile" component={Profile} />
			<MyStack.Screen name="AnimalProtectRequestDetail" component={AnimalProtectRequestDetail} />
			<MyStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} />
			<MyStack.Screen name="FeedCommentList" component={FeedCommentList} />
			<MyStack.Screen name="SocialRelation" component={SocialRelation} />

			<MyStack.Screen name="UserMenu" component={UserMenu} />
			<MyStack.Screen name="UserInfoSetting" component={UserInfoSetting} />

			<MyStack.Screen name="ChangeUserProfileImage" component={ChangeUserProfileImage} />
			<MyStack.Screen name="PhotoSelect" component={PhotoSelect} />

			<MyStack.Screen name="ChangePassword" component={ChangePassword} />
			<MyStack.Screen
				name="UserInfoDetailSetting"
				component={UserInfoDetailSettting}
				options={{header: props => <SaveButtonHeader {...props} />, title: '프로필 상세 정보'}}
			/>

			<MyStack.Screen name="PetInfoSetting" component={PetInfoSetting} />

			<MyStack.Screen name="ChangePetProfileImage" component={ChangePetProfileImage} />
			<MyStack.Screen name="SetPetInformation" component={SetPetInformation} />
			<MyStack.Screen name="VaccinationRecord" component={VaccinationRecord} />
			<MyStack.Screen name="AddFamilyAccount" component={AddFamilyAccount} />
			<MyStack.Screen name="AnimalAdoption" component={AnimalAdoption} />
			<MyStack.Screen name="SelectAccount" component={SelectAccount} />

			<MyStack.Screen name="AssignPetProfileImage" component={AssignPetProfileImage} />
			<MyStack.Screen name="AssignPetInfoA" component={AssignPetInfoA} />
			<MyStack.Screen name="AssignPetInfoB" component={AssignPetInfoB} />

			<MyStack.Screen name="SaveFavorite" component={SaveFavorite} />
			<MyStack.Screen name="SaveAnimalRequest" component={SaveAnimalRequest} />
			<MyStack.Screen name="FavoriteFeeds" component={FavoriteFeeds} />
			<MyStack.Screen name="FavoriteFeedList" component={FeedList} />
			<MyStack.Screen name="TagMeFeedList" component={FeedList} />
			<MyStack.Screen name="TagMeFeeds" component={FavoriteFeeds} />

			<MyStack.Screen name="AnimalProtectList" component={AnimalProtectList} />

			<MyStack.Screen name="ShelterMenu" component={ShelterMenu} />
			<MyStack.Screen name="ShelterInfoSetting" component={ShelterInfoSetting} />
			<MyStack.Screen name="EditShelterInfo" component={EditShelterInfo} />

			<MyStack.Screen name="AssignProtectAnimalImage" component={AssignProtectAnimalImage} />
			<MyStack.Screen name="AssignProtectAnimalDate" component={AssignProtectAnimalDate} />
			<MyStack.Screen name="AssignProtectAnimalType" component={AssignPetInfoA} />
			<MyStack.Screen name="AssignProtectAnimalAge" component={AssignProtectAnimalInfo} />

			<MyStack.Screen name="AidRequestAnimalList" component={AidRequestAnimalList} />
			<MyStack.Screen name="WriteAidRequest" component={WriteAidRequest} />

			<MyStack.Screen name="ShelterProtectAnimalList" component={AidRequestManage} />

			<MyStack.Screen name="ProtectApplyList" component={AidRequestManage} />
			{/* <MyStack.Screen name="ProtectApplicant" component={ProtectApplicant} /> */}
			<MyStack.Screen name="ProtectApplyForm" component={ProtectApplyForm} />

			<MyStack.Screen name="AnimalFromShelter" component={AnimalFromShelter} />
			<MyStack.Screen name="AdoptorInformation" component={AdoptorInformation} />
			<MyStack.Screen name="ManageShelterVolunteer" component={ManageVolunteer} />
			<MyStack.Screen name="ShelterVolunteerForm" component={ApplicationFormVolunteer} />
			<MyStack.Screen name="ShelterProtectRequests" component={ShelterProtectRequests} />
			<MyStack.Screen name="ProtectRequestManage" component={AnimalProtectRequestDetail} />

			<MyStack.Screen name="AppliesRecord" component={AppliesRecord} />
			<MyStack.Screen name="ApplyAdoptionList" component={ApplyAdoptionList} />
			<MyStack.Screen name="ApplyAdoptionDetails" component={ApplyDetails} />
			<MyStack.Screen name="ApplyTempProtectList" component={ApplyAdoptionList} />
			<MyStack.Screen name="ApplyTempProtectDetails" component={ApplyDetails} />
			<MyStack.Screen name="ManageUserVolunteer" component={ManageVolunteer} />
			<MyStack.Screen name="UserVolunteerForm" component={ApplicationFormVolunteer} />
		</MyStack.Navigator>
	);
};
