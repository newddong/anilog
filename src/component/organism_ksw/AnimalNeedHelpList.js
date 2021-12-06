import React from 'react';
import {FlatList, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import AnimalNeedHelp from './AnimalNeedHelp';
import {animalNeedHelpList} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';
/**
 *
 *@param {{
 *nowRoute: parentName,
 *onLabelClick: 'void / Label클릭 콜백함수 '
 *onFavoriteTag : 'void / 즐겨찾기 태그 깃발 클릭 ',
 *borderMode : 'boolean / 테두리 및 입양처보기, 게시글보기 모드 ',
 *onCheckBox : 'boolean / CheckBox 보이기',
 *onHashClick : 'boolean / HashClick Callback',
 *onPressAdoptorInfo : 'void / 테두리 모드 입양처 보기 클릭'
 *onPressProtectRequest : 'void / 테두리 모드 게시글보기 클릭'
 * }} props
 */
export default AnimalNeedHelpList = props => {
	// console.log('AnimalNeedHelpList', props.data[0].protect_animal_photos);
	const onLabelClick = (status, id, item) => {
		props.onLabelClick(status, id, item);
	};

	const renderItem = (item, index) => {
		return (
			<View style={[animalNeedHelpList.itemContainer]}>
				{/* {console.log('item:item._id=>' + item._id)} */}
				<AnimalNeedHelp
					data={item}
					checkBoxMode={props.checkBoxMode}
					isChecked={item.checkBoxState}
					borderMode={props.borderMode}
					onLabelClick={(status, id) => onLabelClick(status, id, item)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
					onFavoriteTag={e => props.onFavoriteTag(e, index)}
					onPressAdoptorInfo={() => props.onPressAdoptorInfo(item)}
					onPressProtectRequest={() => props.onPressProtectRequest(item)}
				/>
			</View>
		);
	};

	return (
		//  width: 702 * DP
		<View style={[props.borderMode ? animalNeedHelpList.container_bordermode : animalNeedHelpList.container]}>
			<ScrollView horizontal={false}>
				<ScrollView horizontal={true}>
					<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

AnimalNeedHelpList.defaultProps = {
	data: dummy_AnimalNeedHelpList,
	onLabelClick: e => console.log(e),
	checkBoxState: false,
};
