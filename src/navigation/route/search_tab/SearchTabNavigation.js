import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchFeedTabNavigation from './feed_tab/SearchFeedTabNavigation';
import SearchProtectRequest from 'Templete/SearchProtectRequest';
import Temp from 'Navigation/route/main_tab/community_stack/temp';
import TopTabNavigation_Filled from 'Root/component/organism_ksw/TopTabNavigation_Filled';

const SearchTabNav = createMaterialTopTabNavigator();

export default SearchTabNavigation = ({route, navigation}) => {
	// navigation.push('Search', {mother: 0, child: 1});
	// ㄴ 위와 같이 호출할 경우 mother는 상위TopTab의 Tab인덱스를, child는 하단TopTab의 인덱스를 설정해줄 수 있음.
	// console.log('tab', route.params);
	const [searchInput, setSearchInput] = React.useState();
	const tabList = ['피드', '커뮤니티', '보호요청'];
	//SearchHeader에서 작성한 검색어와 검색클릭이 행해지면 SearchInput에 값이 들어감
	React.useEffect(() => {
		setSearchInput(route.params);
	}, [route.params]);

	return (
		<SearchTabNav.Navigator
			initialRouteName={'FEED'}
			tabBar={({state, descriptors, navigation, position}) => {
				const onSelectTab = pressedTab => {
					// console.log('press', state.routes[pressedTab].name);
					navigation.navigate({
						//현재 Tab state가 가지는 routes들 중 pressedTab 인덱스
						name: state.routes[pressedTab].name,
						merge: true,
					});
				};
				return (
					<TopTabNavigation_Filled
						onSelect={onSelectTab} // 현재 클릭된 상태인 tab (pressedTab에는 클릭된 index가 담겨져있음)
						select={route.params.mother ? route.params.mother : state.index} // gesture Handler(손가락으로 swipe)로 tab을 움직였을 시 자식까지 state를 연동시키기 위한 props
						fontSize={24}
						menu={tabList}
					/>
				);
			}}>
			<SearchTabNav.Screen name="FEED">
				{props => (
					<SearchFeedTabNavigation
						{...props}
						input={searchInput}
						prevNav={route.params.prevNav}
						defaultIndex={route.params.child ? route.params.child : 0}
					/>
				)}
			</SearchTabNav.Screen>
			<SearchTabNav.Screen name="COMMUNITY" component={Temp} />
			<SearchTabNav.Screen name="SearchProtectRequest">{props => <SearchProtectRequest {...props} input={searchInput} />}</SearchTabNav.Screen>
		</SearchTabNav.Navigator>
	);
};
