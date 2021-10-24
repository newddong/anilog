import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY40} from 'Root/config/color';
export default TabSelectFilled_Type2 = props => {
	const tabLength = props.items.length;
	let tabState = [];
	Array(tabLength)
		.fill(props.items)
		.map((v, i) => {
			tabState[i] = {tabName: v[i], state: false};
		});
	tabState[0].state = true

	const [selected, setSelected] = React.useState(tabState);

	//State가 True인 경우 Tab 배경색이 APRI10 
	const setBackGroundColor = index => {
		if (selected[index].state) {
			return APRI10;
		} else if (!selected[index].state) {
			return 'white';
		}
	};

	//State가 True인 경우 Tab의 Text Color가 휜색
	const getTextColor = index => {
		if (selected[index].state) {
			return 'white';
		} else {
			return GRAY10;
		}
	};

	const getFont = index => {
		if (selected[index].state) {
			return txt.noto30b;
		} else {
			return txt.noto30
		}
	}

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
				<View style={{justifyContent: 'center', alignSelf: 'center', width: 250 * DP, height: 78 * DP, backgroundColor: setBackGroundColor(index)}}>
					<Text style={[getFont(index), {color: getTextColor(index), textAlign: 'center', includeFontPadding:false, lineHeight:42*DP}]}>{item}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View>
			<View style={{width: 250 * DP, height: 78 * DP, backgroundColor: 'yellow'}}>
				<Text style={{textAlign:'center'}}> 260 x 82</Text>
			</View>

			<View style={{flexDirection: 'row'}}>
				<FlatList data={props.items} renderItem={renderItem} horizontal={true} 
				scrollEnabled={false}/>
			</View>
		</View>
	);
};
