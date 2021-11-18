import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import AssignCheckListItem from './AssignCheckListItem';
import {assignCheckList} from './style_organism';

/**
 *
 *@param {{
 *items: 'array / 동의 목록의 list 정보',
 *onCheck : void,
 *onPressDetail : void
 * }} props
 */
export default AssignCheckList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[assignCheckList.assignCheckListItem]}>
				<AssignCheckListItem
					data={item}
					onCheck={state => props.onCheck(item, index, state)}
					state={props.state}
					onPressDetail={() => props.onPressDetail(index)}
				/>
			</View>
		);
	};
	return <FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)}></FlatList>;
};

AssignCheckList.defaultProps = {
	state: false,
	items: ['Default', 'Default'],
	onCheck: e => console.log(e),
	onPressDetail: e => console.log(e + '번째 항목 더보기 클릭'),
};
