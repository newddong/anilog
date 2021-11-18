import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20} from 'Root/config/color';

/**
 *
 *@param {{
 * items: 'Array / Tab Box에 담길 ItemList',
 * onSelect: 'Tab Pressed Callback',
 * }} props
 */
export default TabSelectBorder_Type1 = props => {
	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = i;
		});
	const [selected, setSelected] = React.useState(0);

	//선택된 Tab의 State를 True로 이외의 Tab은 False로
	const onSelect = index => {
		setSelected(index);
		props.onSelect(index);
	};

	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity
				onPress={() => onSelect(index)}
				style={{
					width: (props.width * DP) / props.items.length,
					height: 88 * DP,
					borderWidth: 2 * DP,
					borderColor: index == selected ? APRI10 : GRAY20,
					marginHorizontal: 0.5 * DP, //서로 다른 Border Color가 겹치는 현상방지
					justifyContent: 'center',
				}}>
				<Text
					style={[
						index == selected ? txt.noto28b : txt.noto28,
						{
							color: index == selected ? APRI10 : GRAY20,
							textAlign: 'center',
							lineHeight: 42 * DP,
						},
					]}>
					{item}
				</Text>
			</TouchableOpacity>
		);
	};
	return <FlatList data={props.items} renderItem={renderItem} horizontal={true} scrollEnabled={false} />;
};

TabSelectBorder_Type1.defaultProps = {
	width: 654,
	items: [1, 2, 3], //FlatList에 담길 배열 정보
	onSelect: e => console.log(e), //Tab Press 이벤트
};
