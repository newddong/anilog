import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {AddItem64} from '../atom/icon';
import AidRequest from './AidRequest';
import {aidRequestList} from './style_organism';
import {useNavigation} from '@react-navigation/core';

/**
 *
 * @param {{
 * items : 'ArrayList',
 * onSelect : void,
 * onPressAddProtectAnimal : void
 * }} props
 */
export default AidRequestList = props => {
	const [selectedIndex, setSelectedIndex] = React.useState();
	const [isSelectedOnce, setIsSelectedOnce] = React.useState(false);
	const onPressAddProtectAnimal = () => {
		props.onPressAddProtectAnimal();
	};

	const onSelect = index => {
		setIsSelectedOnce(true); //첫 화면에서는 모든 Item이 붙투명, 허나 한번이라도 item이 선택된다면 투명도가 적용된 View상태로 적용
		setSelectedIndex(index);
	};

	const renderItem = (item, index) => {
		const isSelected = index == selectedIndex; //현재 선택된 indexd와 해당 item의 index가 같은 경우에서만 불투명으로 처리되며 나머지는 투명해짐
		return (
			<View style={[aidRequestList.itemContainer, index != selectedIndex && isSelectedOnce ? {opacity: 0.5} : {opacity: 1}]}>
				<AidRequest data={item} selected={isSelected} onSelect={() => onSelect(index)} />
			</View>
		);
	};

	return (
		<View style={[aidRequestList.container]}>
			{props.nvName != 'ProtectApplyList' ? (
				<TouchableOpacity onPress={onPressAddProtectAnimal}>
					<View style={[aidRequestList.addProtectedPetContainer]}>
						<View style={[aidRequestList.addProtectedPet_insideContainer]}>
							<AddItem64 />
						</View>
						<Text style={[txt.noto30, aidRequestList.addProtectedPetText]}>보호중인 동물 추가하기</Text>
					</View>
				</TouchableOpacity>
			) : null}
			<View style={aidRequestList.aidRequestListCont}>
				<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} />
			</View>
		</View>
	);
};

AidRequestList.defaultProps = {
	items: [],
	onSelect: e => console.log('AidRequestList / Onselect', e),
	onPressAddProtectAnimal: e => console.log('AidRequestList, OnPressAddProtectAnimal', e),
};
