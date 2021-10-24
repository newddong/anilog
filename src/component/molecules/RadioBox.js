
//value 아이콘 가져오는 것부터 해야댐


import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY20, GRAY40} from 'Root/config/color';
export default RadioBox = props => {
	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = {tabName: v[i], state: false};
		});
	tabState[0].state = true

	const [selected, setSelected] = React.useState(tabState);

	


	//선택된 Tab의 State를 True로 이외의 Tab은 False로
	const handleClick = index => {
		const copyState = [...selected]; 
		//...을 붙여야 새로운 배열로 복사를 해서 reference가 바뀐다.
		//단지 copyState=selected 로 한다면 주소가 바뀌지 않아 reRendering이 되지 않음
		for (let i = 0; i < copyState.length; i++) {
			if (i == index) {
				copyState[i].state = true;
			} else {
				copyState[i].state = false;
			}
		}
		setSelected(copyState);
		props.onSelect(copyState[index])

	};
	const renderItem = ({item, index}) => {
		return (
			<TouchableOpacity onPress={() => handleClick(index)}>
				<View style={{justifyContent: 'center', alignSelf: 'center', width: 260 * DP, height: 82 * DP, }}>
					<Text style={[txt.noto28, {color: GRAY20, textAlign: 'center'}]}>{item}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View>
			<View style={{}}>
				<FlatList data={props.items} renderItem={renderItem}  
				scrollEnabled={false}/>
			</View>
		</View>
	);
};
