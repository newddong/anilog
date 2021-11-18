import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
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
	const accountsLength = dummy_accountList.length;
	let accountState = [];
	Array(accountsLength)
		.fill(dummy_accountList)
		.map((v, i) => {
			accountState[i] = {state: false};
		});

	const [cliked, setClicked] = React.useState(accountState);

	//계정 클릭 시 해당 박스 테두리 생성 함수
	const makeBorder = index => {
		const copy = [...cliked];
		copy[index].state = !copy[index].state;
		setClicked(copy);
	};

	const renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style={[
					cliked[index].state && props.makeBorderMode ? organism_style.userDescriptionLabel_clicked : organism_style.userDescriptionLabel,
					{justifyContent: 'center', alignSelf: 'center'},
				]}
				onPress={() => makeBorder(index)}>
				<UserDescriptionLabel data={item} width={250} />
				<View style={{position: 'absolute', right: 15 * DP}}>
					<Cross46 onPress={() => props.onDelete(index)} />
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
	item: null,
	onAccountClick: e => console.log(e),
	onDelete: e => console.log(e),
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
