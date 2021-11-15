import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import AssignCheckListItem from './AssignCheckListItem';
import {assignCheckList} from './style_organism';

export default AssignCheckList = props => {
	const testData = [
		'입양 혹은 임시보호를 하려는 당사자는 성인입니다',
		'주거지 근처에 접종을 위해 주기적으로 갈 수 있는 동물병원이 있습니다',
		'현재 함께 사는 동거인들에게 입양 혹은 임시보호의 동의를 받았거나 동거인이 없습니다.',
		'입양 혹은 임시보호를 하려는 동물에 대한 배변 훈련 지식이 있습니다.',
		'입양 혹은 임시보호를 하려는 동물 청결(손톱 손질, 목욕, 항문낭, 귀청결 등)에 대한 지식이 있습니다.',
	];
	const renderItem = (item, index) => {
		return (
			<View style={[assignCheckList.assignCheckListItem]}>
				<AssignCheckListItem text={item} onCheck={state => props.onCheck(item, index, state)} />
			</View>
		);
	};
	return <FlatList data={testData} renderItem={({item, index}) => renderItem(item, index)}></FlatList>;
};

AssignCheckListItem.defaultProps = {
	text: 'Default Text',
	onCheck: e => console.log(e),
};
