import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View,  TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {GRAY20} from 'Root/config/color';
import {RadioChecked48, RadioUnchecked48} from '../atom/icon';

export default RadioBox = props => {

	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = {tabName: v[i], state: false};
		});
	// tabState[0].state = true;

	const [selected, setSelected] = React.useState(tabState);
	const [checkedItems, setCheckedItems] = React.useState([]);

	//선택된 Tab의 State를 True로 이외의 Tab은 False로
	const onSelect = index => {
		const copyState = [...selected];
		if (checkedItems.length < props.selectableNumber) { // 유저가 선택한 Box가 선택가능한 수 미만일 경우
			checkedItems.push(index);
		} else { // 유저가 선택한 Box가 선택가능한 수를 초과했을 경우
			if (checkedItems.includes(index)) { // 이미 체크되어 있는 박스를 선택했을 경우
				// noting
			} else { // 새로운 박스를 선택했을 경우 가장 먼저 선택했던 박스를 해제하고 새로운 박스 추가
				checkedItems.splice(0, 1);
				checkedItems.push(index);
			}
		}
		for (let i = 0; i < copyState.length; i++) {
			checkedItems.includes(i) ? copyState[i].state = true
									 : copyState[i].state = false
		}
		setSelected(copyState);
		props.onSelect(checkedItems)
	}

	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity onPress={() => onSelect(index)}>
				<View style={{height: 82 * DP, flexDirection: 'row'}}>
					<View style={{marginLeft: props.horizontal ? 25 * DP : 0}}>
						<View style={{height: 82 * DP}}>
						{selected[index].state  ? <RadioChecked48 />
						      		 			: <RadioUnchecked48 />
						}
						</View>
					</View>
					<Text style={[txt.noto28, {color: GRAY20, lineHeight: 46 * DP, marginLeft: 12 * DP, textAlign: 'center', }]}>
						{item}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return <FlatList data={props.items} renderItem={renderItem} horizontal={props.horizontal} />
	
};
RadioBox.defaultProps = {
	values: null,
	selectableNumber: 1,
	onSelect: e => console.log(e),
};
