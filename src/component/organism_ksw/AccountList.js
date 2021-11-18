import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {dummy_accountList} from 'Root/config/dummyDate_json';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {organism_style} from './style_organism';

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
				style={[cliked[index].state ? organism_style.userDescriptionLabel_clicked : organism_style.userDescriptionLabel]}
				onPress={() => makeBorder(index)}>
				<UserDescriptionLabel data={item} width={606} />
			</TouchableOpacity>
		);
	};
	return (
		<View style={organism_style.accountList}>
			<FlatList data={dummy_accountList} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};
AccountList.defaultProps = {
	onAccountClick: e => console.log(e),
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
