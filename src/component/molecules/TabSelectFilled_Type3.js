import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY10, GRAY40, WHITE} from 'Root/config/color';

/**
 *
 *@param {{
 * items: 'Array / Tab Box에 담길 ItemList',
 * onSelect: void,
 * }} props
 */
export default TabSelectFilled_Type3 = props => {
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
					width: 250 * DP,
					height: 70 * DP,
					borderTopLeftRadius: 30 * DP,
					borderTopRightRadius: 30 * DP,
					backgroundColor: selected == index ? APRI10 : WHITE,
					justifyContent: 'center',
				}}>
				<Text
					style={[
						txt.noto30b,
						{
							color: selected == index ? WHITE : GRAY10,
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
