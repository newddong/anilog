import React from 'react';
import { txt } from 'Root/config/textstyle';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import DP from 'Root/config/dp';
import { APRI10, GRAY20, GRAY30 } from 'Root/config/color';

/**
 *
 *@param {{
 * items: 'Array / Tab Box에 담길 ItemList',
 * onSelect: 'Tab Pressed Callback',
 * }} props
 */
export default TabSelectBorder_Type2 = props => {
	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = i;
		});
	const [selected, setSelected] = React.useState(0);

	React.useEffect(() => {
		setSelected(props.select)
	}, [props.select])

	//선택된 Tab의 State를 True로 이외의 Tab은 False로
	const onSelect = index => {

		setSelected(index);
		props.onSelect(index);
	};

	//
	const getWidthByIndex = index => {
		if (index == 0) {
			return 210
		} else if (index == 1) {
			return 210
		} else if (index == 2) {
			return 210
		} else {
			return 140
		}
	}

	const renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => onSelect(index)}
				style={{
					width: 750 * DP / props.items.length,
					height: 70 * DP,
					borderBottomWidth: 2 * DP,
					borderBottomColor: index == selected ? APRI10 : GRAY30,
					marginHorizontal: 0.5 * DP, //서로 다른 Border Color가 겹치는 현상방지
					justifyContent: 'center',
				}}>
				<Text
					style={[
						index == selected ? txt.noto30b : txt.noto30,
						{
							color: index == selected ? APRI10 : GRAY20,
							textAlign: 'center',
							lineHeight: 42 * DP,
							fontSize: props.fontSize * DP,
						},
					]}>
					{item}
				</Text>
			</TouchableOpacity>
		);
	};

	return <FlatList data={props.items} renderItem={renderItem} horizontal={true} scrollEnabled={false} />;
};

TabSelectBorder_Type2.defaultProps = {
	items: [1, 2, 3], //FlatList에 담길 배열 정보
	onSelect: e => console.log(e), //Tab Press 이벤트
	select: 0,
	fontSize: 30
};
