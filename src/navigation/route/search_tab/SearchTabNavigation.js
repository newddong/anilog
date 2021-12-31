import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchFeedTabNavigation from './feed_tab/SearchFeedTabNavigation';
import SearchProtectRequest from 'Templete/SearchProtectRequest';
import Temp from 'Navigation/route/main_tab/community_stack/temp';
import TopTabNavigation_Filled from 'Root/component/organism_ksw/TopTabNavigation_Filled';
import InputAndSearchHeader from 'Root/navigation/header/InputAndSearchHeader';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const SearchTabNav = createMaterialTopTabNavigator();

export default SearchTabNavigation = ({route, navigation}) => {
	// navigation.push('Search', {mother: 0, child: 1});
	// ㄴ 위와 같이 호출할 경우 mother는 상위TopTab의 Tab인덱스를, child는 하단TopTab의 인덱스를 설정해줄 수 있음.
	const [searchInput, setSearchInput] = React.useState();
	const tabList = ['피드', '커뮤니티', '보호요청'];
	const navName = ['FEED', 'COMMUNITY', 'SearchProtectRequest'];
	//SearchHeader에서 작성한 검색어와 검색클릭이 행해지면 SearchInput에 값이 들어감

	const [currentScreen, setCurrentScreen] = React.useState(0); //현재 보고 있는 화면 State
	const [currentChild, setCurrentChild] = React.useState(''); //현재 보고 있는 화면 State
	const routeName = getFocusedRouteNameFromRoute(route); //현재 활성화되어 있는 스크린의 이름을 받아옴
	// console.log('route', routeName);
	React.useEffect(() => {
		if (routeName == navName[0]) setCurrentScreen(0);
		else if (routeName == navName[1]) setCurrentScreen(1);
		else if (routeName == navName[2]) setCurrentScreen(2);
	}, [routeName]);

	React.useEffect(() => {
		setSearchInput(route.params);
	}, [route.params]);

	const routeNameChanged = v => {
		console.log('v', v);
		setCurrentChild(v);
	};

	return (
		<SearchTabNav.Navigator
			initialRouteName={'FEED'}
			tabBar={({state, descriptors, navigation, position}) => {
				// console.log('state', state);
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
						value={currentScreen}
					/>
				);
			}}>
			<SearchTabNav.Screen name="FEED" options={{header: props => <InputAndSearchHeader {...props} />, title: ''}}>
				{props => (
					<SearchFeedTabNavigation
						{...props}
						input={searchInput}
						routeNameChild={routeNameChanged}
						prevNav={route.params.prevNav}
						routeName={currentChild}
						defaultIndex={route.params.child ? route.params.child : 0}
					/>
				)}
			</SearchTabNav.Screen>
			<SearchTabNav.Screen name="COMMUNITY" component={Temp} />
			<SearchTabNav.Screen name="SearchProtectRequest">{props => <SearchProtectRequest {...props} input={searchInput} />}</SearchTabNav.Screen>
		</SearchTabNav.Navigator>
	);
};
