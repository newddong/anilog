import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProtectRequestList from 'Templete/ProtectRequestList';
import MissingReportList from 'Templete/MissingReportList';
import ActivationList from 'Templete/ActivationList';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';

const ProtectionTab = createMaterialTopTabNavigator();

export default ProtectionTopTabNavigation = () => {
	return (
		<ProtectionTab.Navigator
			tabBar={({state, descriptors, navigation, position}) => {
				const onSelectTab = pressedTab => {
					navigation.navigate({
						//현재 Tab state가 가지는 routes들 중 pressedTab 인덱스
						name: state.routes[pressedTab].name,
						merge: true,
					});
				};
				return (
					<TopTabNavigation_Border
						items={['보호 요청', '실종/제보', '참여 방법']} //Tab에 출력될 Label 배열
						onSelect={onSelectTab} // 현재 클릭된 상태인 tab (pressedTab에는 클릭된 index가 담겨져있음)
						select={state.index}
					/>
				); // gesture Handler(손가락으로 swipe)로 tab을 움직였을 시 자식까지 state를 연동시키기 위한 props
			}}>
			<ProtectionTab.Screen name="ProtectRequestList" component={ProtectRequestList} />
			<ProtectionTab.Screen name="MissingReportList" component={MissingReportList} />
			<ProtectionTab.Screen name="ActivationList" component={ActivationList} />
		</ProtectionTab.Navigator>
	);
};
