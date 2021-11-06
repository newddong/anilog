import React from 'react';
import {View} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import TabSelectBorder_Type2 from '../molecules/TabSelectBorder_Type2';

export default TopTabNavigation_Border = props => {
	const tabList = ['피드', '커뮤니티', '보호요청'];
	return (
		<View style={{borderTopColor: APRI10, borderTopWidth: 2 * DP}}>
			<TabSelectBorder_Type2 items={tabList} />
		</View>
	);
};
