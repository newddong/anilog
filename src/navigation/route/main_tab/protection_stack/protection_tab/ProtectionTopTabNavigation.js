import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProtectRequestList from 'Templete/ProtectRequestList';
import MissingReportList from 'Templete/MissingReportList';
import ActivationList from 'Templete/ActivationList';
import DP from 'Root/config/dp';
import {APRI10, GRAY10} from 'Root/config/color';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';
import {useNavigation} from '@react-navigation/core';

const ProtectionTab = createMaterialTopTabNavigator();

export default ProtectionTopTabNavigation = () => {
	const navigation = useNavigation();
	const onSelectTab = pressedTab => {
		console.log(pressedTab);
	};
	return (
		<ProtectionTab.Navigator
			initialRouteName={'ActivationList'}
			tabBar={props => <TopTabNavigation_Border items={['보호 요청', '실종/제보', '참여 방법']} onSelect={pressedTab => onSelectTab(pressedTab)} />}>
			<ProtectionTab.Screen name="ProtectRequestList" component={ProtectRequestList} />
			<ProtectionTab.Screen name="MissingReportList" component={MissingReportList} />
			<ProtectionTab.Screen name="ActivationList" component={ActivationList} />
		</ProtectionTab.Navigator>
	);
};
