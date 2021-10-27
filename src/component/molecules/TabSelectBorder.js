import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY20} from 'Root/config/color';

export default TabSelectBorder = props => {

	const tabLength = props.items.length;
	let tabState = [];
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
		props.onSelect(copyState[index]);
	};

	const renderItem = ({item, index}) => {
		return ( 
			<TouchableOpacity
				onPress={() => onSelect(index)}
				style={{
					width: 328 * DP,
					height: 88 * DP,
					borderWidth: 2 * DP,
					borderColor: selected[index].state ? APRI10 : GRAY20,
					marginHorizontal: 0.5 * DP, //서로 다른 Border Color가 겹치는 현상방지
					justifyContent: 'center',
				}}>
				<Text
					style={[
						selected[index].state ? txt.noto28b : txt.noto28,
						{
							color: selected[index].state ? APRI10 : GRAY20,
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

TabSelectBorder.defaultProps = {
	items: null, //FlatList에 담길 배열 정보
	onSelect: e => console.log(e), //Tab Press 이벤트
};
