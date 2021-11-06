import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';
import AccountHashList from 'Root/component/organism_ksw/AccountHashList';
import AccountList from 'Root/component/organism_ksw/AccountList';
import AddressInput from 'Root/component/organism_ksw/AddressInput';
import ControllableAccount from 'Root/component/organism_ksw/ControllableAccount';
import ControllableAccountList from 'Root/component/organism_ksw/ControllableAccountList';
import ControllableHashTag from 'Root/component/organism_ksw/ControllableHashTag';
import ControllableHashTagList from 'Root/component/organism_ksw/ControllableHashTagList';
import EmailVerification from 'Root/component/organism_ksw/EmailVerification';
import HashTagList from 'Root/component/organism_ksw/HashTagList';
import InterestTagList from 'Root/component/organism_ksw/InterestTagList';
import MyPetList from 'Root/component/organism_ksw/MyPetList';
import PasswordChecker from 'Root/component/organism_ksw/PasswordChecker';
import PetAccountList from 'Root/component/organism_ksw/PetAccountList';
import PhoneNumVerification from 'Root/component/organism_ksw/PhoneNumVerification';
import ProfileMenu from 'Root/component/organism_ksw/ProfileMenu';
import SocialInfoA from 'Root/component/organism_ksw/SocialInfoA';
import SocialInfoB from 'Root/component/organism_ksw/SocialInfoB';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';
import TopTabNavigation_Filled from 'Root/component/organism_ksw/TopTabNavigation_Filled';

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
		</Drawer.Navigator>
	);
};
