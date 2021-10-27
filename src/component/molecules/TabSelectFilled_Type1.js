import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY40} from 'Root/config/color';
export default TabSelectFilled_Type1 = props => {
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
		//...을 붙여야 새로운 배열로 복사를 해서 reference가 바뀐다.
		//단지 copyState=selected 로 한다면 주소가 바뀌지 않아 reRendering이 되지 않음
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
					width: 260 * DP,
					height: 82 * DP,
					backgroundColor: selected[index].state ? APRI10 : GRAY40,
					justifyContent: 'center',
				}}>
				<Text
					style={[
						txt.noto28,
						{
							color: selected[index].state ? 'white' : GRAY10,
							textAlign: 'center',
						},
					]}>
					{item}
				</Text>
			</TouchableOpacity>
		);
	};
	return (
		<View style={{flexDirection: 'row'}}>
			<FlatList data={props.items} renderItem={renderItem} horizontal={true} scrollEnabled={false} />
		</View>
	);
};
TabSelectFilled_Type1.defaultProps = {
	items: null, //FlatList에 담길 배열 정보
	onSelect: {}, //Tab Press 이벤트
};
