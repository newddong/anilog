import React from 'react';
import {View} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import TabSelectBorder_Type1 from '../molecules/TabSelectBorder_Type1';
import TabSelectBorder_Type2 from '../molecules/TabSelectBorder_Type2';
import TabSelectBorder_Type3 from '../molecules/TabSelectBorder_Type3';

export default TopTabNavigation_Border_Type2 = props => {
	return (
		<View style={{borderTopColor: APRI10, borderTopWidth: 2 * DP, backgroundColor: 'white'}}>
			<TabSelectBorder_Type2
				items={props.items}
				onSelect={pressedNum => props.onSelect(pressedNum)}
				select={props.select}
				fontSize={props.fontSize}
			/>
		</View>
	);
};

TopTabNavigation_Border_Type2.defaultProps = {
	items: [1, 2, 3],
	onSelect: e => console.log(e),
};