import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainHeader from 'Root/navigation/header/MainHeader';
import ParticipationDetail from './participation/participationdetail';
import AidRequestDetail from './aidrequest/aidrequestdetail';
import AidRequestForm from './aidrequest/aidrequestform';
import AnimalSavingHomeTopTabRoute from './animalsavinghome_tab/AnimalSavingHomeTopTabRoute';

const Stack = createStackNavigator();

export default AnimalsavingStackRoute = () => {
	return (
		<Stack.Navigator initialRouteName="AnimalSavingHomeTopTabRoute" screenOptions={{headerMode:'screen'}}>
			<Stack.Screen
				name="AnimalSavingHomeTopTabRoute"
				component={AnimalSavingHomeTopTabRoute}
				options={{header: (props) => <MainHeader {...props}/>}}
			/>
			<Stack.Screen
				name="ParticipationDetail"
				component={ParticipationDetail}
			/>
			<Stack.Screen
				name="AidRequestDetail"
				component={AidRequestDetail}
			/>
			<Stack.Screen
				name="AidRequestForm"
				component={AidRequestForm}
			/>
		</Stack.Navigator>
	);
};