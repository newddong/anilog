import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, BLACK, WHITE} from 'Root/config/color';
export default TabSelectFilled_Type2 = props => {
	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = {tabName: v[i], state: false};
		});
	tabState[0].state = true;
	const [selected, setSelected] = React.useState(tabState);

	const onSelect = index => {
		const copyState = [...selected];
		//선택된 Tab의 State를 True로 이외의 Tab은 False로
		for (let i = 0; i < copyState.length; i++) {
			i == index ? (copyState[i].state = true) : (copyState[i].state = false);
		}
		setSelected(copyState); //새로만들어진 배열로 state 변경
		props.onSelect(copyState[index].tabName);
	};
	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity
				onPress={() => onSelect(index)}
				style={{
					backgroundColor: selected[index].state ? APRI10 : WHITE,
					width: 250 * DP,
					height: 78 * DP,
					justifyContent: 'center',
				}}>
				<Text
					style={[
						selected[index].state ? txt.noto30b : txt.noto30,
						{
							color: selected[index].state ? WHITE : BLACK,
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

TabSelectFilled_Type2.defaultProps = {
	items: null, //FlatList에 담길 배열 정보
	onSelect: e => console.log(e), //Tab Press 이벤트
};
