import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FeedContent from 'Root/component/organism/FeedContent';
import AccountHashList from 'Root/component/organism_ksw/AccountHashList';
import AccountList from 'Root/component/organism_ksw/AccountList';
import ControllableAccount from 'Root/component/organism_ksw/ControllableAccount';
import ControllableAccountList from 'Root/component/organism_ksw/ControllableAccountList';
import ControllableHashTag from 'Root/component/organism_ksw/ControllableHashTag';
import ControllableHashTagList from 'Root/component/organism_ksw/ControllableHashTagList';
import EmailVerification from 'Root/component/organism_ksw/EmailVerification';
import HashTagList from 'Root/component/organism_ksw/HashTagList';
import PasswordChecker from 'Root/component/organism_ksw/PasswordChecker';
import PetAccountList from 'Root/component/organism_ksw/PetAccountList';
import PhoneNumVerification from 'Root/component/organism_ksw/PhoneNumVerification';

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
		</Drawer.Navigator>
	);
};
