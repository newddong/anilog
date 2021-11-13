import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {organism_style} from './style_organism';

export default AccountList = props => {
	const _dummyData = [
		{
			user_id: '하양이',
			user_nickname: '하양이',
			img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: '안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있...',
		},
		{
			user_id: '구름이',
			user_nickname: '구름이',
			img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: 'Description',
		},
		{
			user_id: '달리',
			user_nickname: '달리',
			img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
			text_intro: '안녕하세요',
		},
	];

	const accountsLength = _dummyData.length;
	let accountState = [];
	Array(accountsLength)
		.fill(_dummyData)
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
				<UserDescriptionLabel data={item} />
			</TouchableOpacity>
		);
	};
	return (
		<View style={organism_style.accountList}>
			<FlatList data={_dummyData} renderItem={({item, index}) => renderItem(item, index)} />
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
