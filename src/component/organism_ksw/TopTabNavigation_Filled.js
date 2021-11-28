import React from 'react';
import {View} from 'react-native';
import {WHITE} from 'Root/config/color';
import TabSelectFilled_Type3 from '../molecules/TabSelectFilled_Type3';

export default TopTabNavigation_Filled = props => {
	const tabList = ['피드', '커뮤니티', '보호요청'];
	return (
		<View>
			<TabSelectFilled_Type3 items={tabList} onSelect={index => props.onSelect(index)} />
		</View>
	);
};
TopTabNavigation_Filled.defaultProps = {
	onSelect: e => console.log('TabNavigation Filled' + e),
};
