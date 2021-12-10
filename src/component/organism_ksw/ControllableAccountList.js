import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ControllableAccount from './ControllableAccount';
import {dummy_userObject} from '../../config/dummyDate_json';
import {controllableAccountList} from './style_organism';

/**
 *
 * @param {{
 * data : 'Object / UserDescriptionLabel Data 필요',
 * onFollowBtnClick: void,
 * onClickAccount : void,
 * showCheckBox : boolean,
 * showCheckBox :boolean,
 * showButtons : boolean
 * }} props
 */
export default ControllableAccountList = props => {
	const [selectedItem, setSelectedItem] = React.useState(0);
	//AccountList 선택이벤트
	const onSelectItem = index => {
		props.onClickAccount(index);
		setSelectedItem(index);
	};

	const renderItem = (item, index) => {
		return (
			<TouchableOpacity
				onPress={() => onSelectItem(index)}
				style={[selectedItem == index ? controllableAccountList.selectedItem : controllableAccountList.no_selectedItem]}>
				<ControllableAccount data={item} showCrossMark={props.showCrossMark} showCheckBox={props.showCheckBox} showButtons={props.showButtons} />
			</TouchableOpacity>
		);
	};

	return (
		<View style={[controllableAccountList.container]}>
			{props.title == null ? null : (
				<View style={[controllableAccountList.title]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>{props.title}</Text>
				</View>
			)}
			<FlatList data={dummy_userObject} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

ControllableAccountList.defaultProps = {
	onClickAccount: e => console.log(e),
	title: null,
	showCrossMark: false,
	showCheckBox: false,
};
