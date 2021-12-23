import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {accountHashList} from './style_organism';
import UserAccount from './UserAccount';

export default AccountHashList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[accountHashList.userAccount]}>
				<UserAccount
					data={item}
					checkBoxMode={props.checkBoxMode}
					onLabelClick={item => props.onLabelClick(item)}
					onHashClick={() => props.onHashClick(item)}
					onCheckBox={e => props.onCheckBox(e, index)}
				/>
			</View>
		);
	};

	return (
		<View style={[accountHashList.container]}>
			<FlatList data={props.data} renderItem={({item, index}) => renderItem(item, index)} showsVerticalScrollIndicator={false} />
		</View>
	);
};

AccountHashList.defaultProps = {
	items: [],
	onLabelClick: e => console.log(e), // UserAccount의 UserDescriptionLabel 클릭
	onCheckBox: e => console.log(e),
	checkBoxMode: false, // CheckBox 콘테이너 Show T/F
};
