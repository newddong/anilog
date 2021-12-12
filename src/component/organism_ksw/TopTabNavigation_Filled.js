import React from 'react';
import {View} from 'react-native';
import {APRI10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import TabSelectFilled_Type3 from '../molecules/TabSelectFilled_Type3';

export default TopTabNavigation_Filled = props => {
	return (
		<View style={{borderBottomColor: APRI10, borderBottomWidth: 3 * DP}}>
			<TabSelectFilled_Type3 items={props.menu} onSelect={index => props.onSelect(index)} />
		</View>
	);
};
TopTabNavigation_Filled.defaultProps = {
	onSelect: e => console.log('TabNavigation Filled' + e),
	menu: [1, 2, 3],
};
