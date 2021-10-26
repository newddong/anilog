import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View,  TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY20, GRAY40} from 'Root/config/color';
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
	const handleClick = index => {
		const copyState = [...selected];
		if (checkedItems.length < props.selectableNumber) {
			console.log('3개 이하');
			checkedItems.push(index);
		}
		console.log('checked length ' + checkedItems.length);
		if (checkedItems.length >= props.selectableNumber) {
			console.log('3개가 되었을 때');
			if (checkedItems.includes(index)) {
			} else {
				checkedItems.splice(0, 1);
				checkedItems.push(index);
			}
		}
		for (let i = 0; i < copyState.length; i++) {
			if (!checkedItems.includes(i)) {
				copyState[i].state = false;
			} else if (checkedItems.includes(i)) {
				copyState[i].state = true;
			}
		}
		console.log('Checked ' + JSON.stringify(checkedItems));
		setSelected(copyState);
		props.onSelect(checkedItems)
	};
	const getRadioCheck = index => {
		if (selected[index].state) {
			return (
				<View style={{height: 82 * DP}}>
					<RadioChecked48 />
				</View>
			);
		} else if (!selected[index].state) {
			return (
				<View style={{height: 82 * DP}}>
					<RadioUnchecked48 />
				</View>
			);
		}
	};
	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity onPress={() => handleClick(index)}>
				<View style={{height: 82 * DP, flexDirection: 'row'}}>
					{/* <RadioChecked48/>
				<RadioUnchecked48 /> */}
					<View style={{marginLeft: props.horizontal ? 25 * DP : 0}}>{getRadioCheck(index)}</View>
					<Text style={[txt.noto28, {color: GRAY20, textAlign: 'center', includeFontPadding: false, lineHeight: 46 * DP, marginLeft: 12 * DP}]}>
						{item}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View>
			<View style={{}}>
				<FlatList data={props.items} renderItem={renderItem} horizontal={props.horizontal} />
			</View>
		</View>
	);
};
RadioBox.defaultProps = {
	values: null,
	selectableNumber: 1,
	onSelect: {},
};
