import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';
import LinkedAccountList from 'Root/component/templete/LinkedAccountList';
import FollowerList from 'Root/component/templete/FollowerList';
import RecommendedAccountList from 'Root/component/templete/RecommendedAccountList';

const SocialRelationTab = createMaterialTopTabNavigator();

export default SocialRelationTopTabNavigation = () => {
	return (
		<SocialRelationTab.Navigator
			tabBar={({state, descriptors, navigation, position}) => {
				const onSelectTab = pressedTab => {
					navigation.navigate({
						//현재 Tab state가 가지는 routes들 중 pressedTab 인덱스
						name: state.routes[pressedTab].name,
						merge: true,
					});
				};
				const number_of_accounts_followed_together = 15; // 함께아는사람 숫자,  현재 더미데이타
				const number_of_follower = 623; // 해당 계정의 팔로워 숫자,  현재 더미데이타
				const number_of_following = 1029; // 해당 계정의 팔로윙 숫자,  현재 더미데이타
				const tabBarItems = [
					number_of_accounts_followed_together + ' 함께 아는 사람',
					number_of_follower + ' 팔로워',
					number_of_following + ' 팔로잉',
					'추천',
				];

				return (
					<TopTabNavigation_Border
						items={tabBarItems} //Tab에 출력될 Label 배열
						onSelect={pressedTab => onSelectTab(pressedTab)} // 현재 클릭된 상태인 tab (pressedTab에는 클릭된 index가 담겨져있음)
						select={state.index} // gesture Handler(손가락으로 swipe)로 tab을 움직였을 시 자식까지 state를 연동시키기 위한 props
						fontSize={24}
					/>
				);
			}}>
			<SocialRelationTab.Screen name="LinkedAccountList" component={LinkedAccountList} />
			<SocialRelationTab.Screen name="FollowerList" component={FollowerList} />
			<SocialRelationTab.Screen name="FollowingList" component={FollowerList} />
			<SocialRelationTab.Screen name="RecommendedAccountList" component={RecommendedAccountList} />
		</SocialRelationTab.Navigator>
	);
};
