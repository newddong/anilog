import React from 'react';
import TabSelectFilled_Type3 from '../molecules/TabSelectFilled_Type3';

export default TopTabNavigation_Filled = props => {
	const tabList = ['피드', '커뮤니티', '보호요청'];
	return <TabSelectFilled_Type3 items={tabList} />;
};
