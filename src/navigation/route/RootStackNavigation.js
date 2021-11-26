import React from 'react';
import {SafeAreaView, View, Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginTemplete from 'Templete/LoginTemplete';

import AgreementCheck from 'Templete/AgreementCheck';
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

import {PIC_SELECTION} from 'Root/i18n/msg';
import FeedListForHashTag from 'Root/component/templete/FeedListForHashTag';

import SimpleHeader from 'Navigation/header/SimpleHeader';
import SendHeader from '../header/SendHeader';
import UserVerification from 'Root/component/templete/UserVerification';

import TwoBtnModal from 'Molecules/TwoBtnModal';
import OneBtnModal from 'Molecules/OneBtnModal';
import NoBtnModal from 'Molecules/NoBtnModal';
import PopupSelect from 'Molecules/PopupSelect';

import {Modal} from 'Component/modal/Modal';
import DatePicker from 'Root/component/molecules/DatePicker';
import Calendar from 'Root/test_sangwoo/calendar';
// import Camera from 'Root/component/templete/Camera';
const RootStack = createStackNavigator();

export default RootStackNavigation = () => {
	const [isPop, setPop] = React.useState(false);
	const [popupComponent, setPopupComponent] = React.useState([]);

	const popIn = Component => {
		const component = React.cloneElement(Component, {key: popupComponent.length});
		setPopupComponent([component, ...popupComponent]);
	};

	Modal.close = () => {
		popupComponent.shift();
		setPopupComponent([...popupComponent]);
		popupComponent.length === 0 && setPop(false);
	};
	Modal.popTwoBtn = (msg, noMsg, yesMsg, onNo, onYes) => {
		popIn(<TwoBtnModal popUpMsg={msg} onNo={onNo} onYes={onYes} noMsg={noMsg} yesMsg={yesMsg} />);
		!isPop && setPop(true);
	};

	Modal.popNoBtn = msg => {
		popIn(<NoBtnModal popUpMsg={msg} />);
		!isPop && setPop(true);
	};

	Modal.popOneBtn = (msg, okMsg, onOk) => {
		popIn(<OneBtnModal popUpMsg={msg} onOk={onOk} okMsg={okMsg} />);
		!isPop && setPop(true);
	};

	Modal.popDrop = component => {
		popIn(component);
		!isPop && setPop(true);
	};

	Modal.popCalendar = (visible, onOff, date) => {
		popIn(<Calendar modalOn={visible} modalOff={onOff} selectDate={date} />);
		!isPop && setPop(true);
	};

	Modal.popupSelect = () => {
		popIn(<PopupSelect />);
		!isPop && setPop(true);
	};

	// const openCalendar = () => {
	// 	console.log('openCale')
	// 	Modal.popCalendar(showCalendar, closeCalendar, date => onDateChange(date))
	// 	setShowCalendar(true);
	// };

	return (
		<SafeAreaView style={{flex: 1}}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Login">
					<RootStack.Screen name="MainTab" component={MainTabNavigation} />
					<RootStack.Screen name="Login" component={LoginTemplete} options={{headerShown: false}} />
					<RootStack.Screen name="Search" component={SearchTabNavigation} />

					<RootStack.Screen
						name="AgreementCheck"
						component={AgreementCheck}
						options={{header: props => <SimpleHeader {...props} />, title: '회원가입'}}
					/>
					<RootStack.Screen
						name="UserVerification"
						component={UserVerification}
						options={{header: props => <SimpleHeader {...props} />, title: '회원가입'}}
					/>
					{/* <RootStack.Screen name="UserAssignEmail" component={UserAssignEmail} /> */}
					<RootStack.Screen
						name="UserPasswordCheck"
						component={UserPasswordCheck}
						options={{header: props => <SimpleHeader {...props} />, title: '회원가입'}}
					/>
					<RootStack.Screen
						name="AssignUserHabitation"
						component={AssignUserHabitation}
						options={{header: props => <SimpleHeader {...props} />, title: '회원가입'}}
					/>
					<RootStack.Screen
						name="AssignUserProfileImage"
						component={AssignUserProfileImage}
						options={{header: props => <SimpleHeader {...props} />, title: '회원가입'}}
					/>

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
					<RootStack.Screen name="FeedWrite" component={FeedWrite} options={{header: props => <SendHeader {...props} />, title: '게시물 작성'}} />

					<RootStack.Screen
						name="FeedMissingWrite"
						component={FeedWrite}
						options={{header: props => <SendHeader {...props} />, title: '실종 게시물'}}
					/>
					<RootStack.Screen
						name="FeedReportWrite"
						component={FeedWrite}
						options={{header: props => <SendHeader {...props} />, title: '제보 게시물'}}
					/>
					<RootStack.Screen name="LocationPicker" component={LocationPicker} />

					<RootStack.Screen name="SinglePhotoSelect" component={PhotoSelect} />
					<RootStack.Screen name="MultiPhotoSelect" component={PhotoSelect} />
					{/* 카메라 컴포넌트 임시 추가 */}
					<RootStack.Screen name="FeedListForHashTag" component={FeedListForHashTag} />

					<RootStack.Screen name="AssignPetProfileImage" component={AssignPetProfileImage} />
					<RootStack.Screen name="AssignPetInfoA" component={AssignPetInfoA} />
					<RootStack.Screen name="AssignPetInfoB" component={AssignPetInfoB} />
				</RootStack.Navigator>
			</NavigationContainer>

			{isPop && <View style={popup.popupBackground}>{popupComponent}</View>}
		</SafeAreaView>
	);
};

const popup = StyleSheet.create({
	popupBackground: {
		// backgroundColor:'red',
		height: Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,
		position: 'absolute',
	},
});
