import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchFeedTabNavigation from './feed_tab/SearchFeedTabNavigation';
import SearchProtectRequest from 'Templete/SearchProtectRequest';
import Temp from 'Navigation/route/main_tab/community_stack/temp';
import TopTabNavigation_Filled from 'Root/component/organism_ksw/TopTabNavigation_Filled';
import ConfirmInputHeader from 'Root/navigation/header/ConfirmInputHeader';
import {View} from 'react-native';
import {WHITE} from 'Root/config/color';

const SearchTabNav = createMaterialTopTabNavigator();

export default SearchTabNavigation = ({route, navigation}) => {
	const [searchInput, setSearchInput] = React.useState();

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
						onSelect={pressedTab => onSelectTab(pressedTab)} // 현재 클릭된 상태인 tab (pressedTab에는 클릭된 index가 담겨져있음)
						select={state.index} // gesture Handler(손가락으로 swipe)로 tab을 움직였을 시 자식까지 state를 연동시키기 위한 props
						fontSize={24}
					/>
				);
			}}>
			<SearchTabNav.Screen name="FEED">{props => <SearchFeedTabNavigation {...props} input={searchInput} />}</SearchTabNav.Screen>
			<SearchTabNav.Screen name="COMMUNITY" component={Temp} />
			<SearchTabNav.Screen name="SearchProtectRequest">{props => <SearchProtectRequest {...props} input={searchInput} />}</SearchTabNav.Screen>
		</SearchTabNav.Navigator>
	);
};
