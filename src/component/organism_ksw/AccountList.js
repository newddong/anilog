import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {APRI10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {dummy_accountList} from 'Root/config/dummyDate_json';
import {Cross46} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {organism_style} from './style_organism';

/**
 *
 *@param {{
 * item : 'Array / 계정 목록',
 * onAccountClick : 'void / 계정 클릭  Callback'
 * makeBorderMode: 'boolean / 클릭 시 테두리 생기는 모드 on/off , default = true',
 * onDelete: '계정 지우기 마크 클릭 Callback'
 * }} props
 */
export default AccountList = props => {
	const [selectedIndex, setSelectedIndex] = React.useState();

	//계정 클릭 시 해당 박스 테두리 생성 함수
	const makeBorder = (item, index) => {
		index == selectedIndex ? setSelectedIndex(99) : setSelectedIndex(index);
		props.onSelect(item, index);
	};

	const renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style={[organism_style.accountListItem, {borderColor: selectedIndex == index && props.makeBorderMode ? APRI10 : WHITE}]}
				onPress={() => makeBorder(index)}>
				<View style={[organism_style.userDescriptionLabelContainer]}>
					<UserDescriptionLabel data={item} width={250} />
				</View>
				<View style={{position: 'absolute', right: 15 * DP}}>
					<Cross46 onPress={() => props.onDelete(index, item)} />
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View style={organism_style.accountList}>
			<FlatList data={props.items == null ? dummy_accountList : props.items} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};
AccountList.defaultProps = {
	onAccountClick: e => console.log(e),
	onDelete: e => console.log(e),
	onSelect: e => console.log(e),
	makeBorderMode: true,
};

//UserDescriptionLabel.defaultProps = {
//	data: {
//		user_id: 'Default id',
//		user_nickname: 'user_nickname',
//		img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
//		text_intro: 'Description',
//	},
//	onLabelClick: e => console.log(e),
//};
