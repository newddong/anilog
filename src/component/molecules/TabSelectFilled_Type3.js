import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY40, WHITE} from 'Root/config/color';

export default TabSelectFilled_Type3 = props => {
	let tabState = [];
	const tabLength = props.items.length;
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = {tabName: v[i], state: false};
		});
	tabState[0].state = true;
	const [selected, setSelected] = React.useState(tabState);

	//선택된 Tab의 State를 True로 이외의 Tab은 False로
	const onSelect = index => {
		const copyState = [...selected];
		for (let i = 0; i < copyState.length; i++) {
			i == index ? (copyState[i].state = true) : (copyState[i].state = false);
		}
		setSelected(copyState);
		props.onSelect(copyState[index].tabName);
	};

	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity
				onPress={() => onSelect(index)}
				style={{
					width: 250 * DP,
					height: 70 * DP,
					borderTopLeftRadius: 30 * DP,
					borderTopRightRadius: 30 * DP,
					backgroundColor: selected[index].state ? APRI10 : GRAY40,
					justifyContent: 'center',
				}}>
				<Text
					style={[
						txt.noto30b,
						{
							color: selected[index].state ? WHITE : GRAY10,
							textAlign: 'center',
						},
					]}>
					{item}
				</Text>
			</TouchableOpacity>
		);
	};

	return <FlatList data={props.items} renderItem={renderItem} horizontal={true} scrollEnabled={false} />;
};
TabSelectFilled_Type3.defaultProps = {
	items: [1, 2, 3], //FlatList에 담길 배열 정보
	onSelect: e => console.log(e), //Tab Press 이벤트
};
