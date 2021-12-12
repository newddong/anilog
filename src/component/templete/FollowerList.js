import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {Write94} from '../atom/icon';
import InputWithSearchIcon from '../molecules/InputWithSearchIcon';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {followerList} from './style_templete';

export default FollowerList = props => {
	const [searchInput, setSearchInput] = React.useState('');
	const onWrite = () => {
		console.log('Onwrite');
	};
	const onChangeSearchInput = text => {
		console.log('text', text);
	};

	const onSearch = () => {
		console.log('Search Start');
	};
	return (
		<View style={[followerList.container]}>
			<ScrollView style={[{flex: 0}]}>
				<View style={[followerList.inputWitchSearch, {alignSelf: 'center'}]}>
					<InputWithSearchIcon onChange={onChangeSearchInput} onSearch={onSearch} placeholder={'검색어를 입력해주세요.'} />
				</View>
				<View style={[{alignItems: 'center'}]}>
					<ScrollView horizontal={false} style={{flex: 0}}>
						<ScrollView horizontal={true} style={{flex: 1}}>
							<ControllableAccountList items={dummy_userObject} title={'팔로워'} />
						</ScrollView>
					</ScrollView>
				</View>
			</ScrollView>
			<View style={[followerList.floatingBtn]}>
				<Write94 onPress={onWrite} />
			</View>
		</View>
	);
};
