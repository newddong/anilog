import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProtectRequestList from 'Templete/ProtectRequestList';
import MissingReportList from 'Templete/MissingReportList';
import ActivationList from 'Templete/ActivationList';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';

const ProtectionTab = createMaterialTopTabNavigator();

export default ProtectionTopTabNavigation = () => {

	return (
		<ProtectionTab.Navigator
			tabBar={({ state, descriptors, navigation, position }) => {
				//pressedTab에는 TopTabNavigation에서 선택한 tab의 index정보가 존재
				const onSelectTab = pressedTab => {

					navigation.navigate({
						//현재 Tab state가 가지는 routes들 중 pressedTab 인덱스
						name: state.routes[pressedTab].name, merge: true
					});
				};
				return (<TopTabNavigation_Border items={['보호 요청', '실종/제보', '참여 방법']} onSelect={pressedTab => onSelectTab(pressedTab)} />)

			}}>
			<ProtectionTab.Screen name="ProtectRequestList" component={ProtectRequestList} />
			<ProtectionTab.Screen name="MissingReportList" component={MissingReportList} />
			<ProtectionTab.Screen name="ActivationList" component={ActivationList} />
		</ProtectionTab.Navigator >
	);
};
