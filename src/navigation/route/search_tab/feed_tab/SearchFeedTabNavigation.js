import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchAccountA from 'Templete/SearchAccountA';
import SearchAccountB from 'Templete/SearchAccountB';
import SearchFeed from 'Templete/SearchFeed';
import SearchHashTag from 'Templete/SearchHashTag';
import ConfirmInputHeader from 'Root/navigation/header/ConfirmInputHeader';
import TopTabNavigation_Border from 'Root/component/organism_ksw/TopTabNavigation_Border';

const SearchFeedTabNav = createMaterialTopTabNavigator();

export default SearchFeedTabNavigation = props => {
	const [searchInput, setSearchInput] = React.useState();

	//SearchHeader에서 작성한 검색어와 검색클릭이 행해지면 SearchInput에 값이 들어감
	React.useEffect(() => {
		setSearchInput(props.input);
	}, [props.input]);

	return (
		<SearchFeedTabNav.Navigator
			initialRouteName={'FEED'}
			tabBar={({state, descriptors, navigation, position}) => {
				const onSelectTab = pressedTab => {
					console.log('press', state.routes[pressedTab].name);

					navigation.navigate({
						//현재 Tab state가 가지는 routes들 중 pressedTab 인덱스
						name: state.routes[pressedTab].name,
						merge: true,
					});
				};
				return (
					<TopTabNavigation_Border
						items={['게시글', '계정', '태그']}
						onSelect={pressedTab => onSelectTab(pressedTab)} // 현재 클릭된 상태인 tab (pressedTab에는 클릭된 index가 담겨져있음)
						select={state.index} // gesture Handler(손가락으로 swipe)로 tab을 움직였을 시 자식까지 state를 연동시키기 위한 props
						fontSize={24}
					/>
				);
			}}>
			<SearchFeedTabNav.Screen name="SearchFeed" component={SearchFeed} />
			<SearchFeedTabNav.Screen name="SearchAccountA">{props => <SearchAccountA {...props} input={searchInput} />}</SearchFeedTabNav.Screen>
			<SearchFeedTabNav.Screen name="SearchAccountB" component={SearchAccountB} />
			<SearchFeedTabNav.Screen name="SearchHashTag" component={SearchHashTag} />
		</SearchFeedTabNav.Navigator>
	);
};
