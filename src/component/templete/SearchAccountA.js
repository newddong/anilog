import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import Modal from '../modal/Modal';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {login_style, searchAccountA} from './style_templete';
import {getUserListByNickname} from 'Root/api/userapi';

export default SearchAccountA = props => {
	// console.log('SearchAccountA', props.input);
	const navigation = useNavigation();
	//검색이벤트 발생 시 props.input의 값이 바뀌고 검색을 실시
	const [searchedList, setSearchedList] = React.useState([]);

	React.useEffect(() => {
		if (props.input != null) {
			// const inputData = props.input.searchIn
			//검색 로직에 대해선 아직 미구현이므로 닉네임과 검색Input이 정확히 일치하는 Account Array를 userList로 반환
			if (props.input.searchInput != null) {
				console.log(`keyword=>${props.input}`);
				setSearchedList([]);
				Modal.popNoBtn('검색 중... 잠시만 기다려주세요');
				getUserListByNickname(
					{
						user_nickname: props.input.searchInput,
						request_number: 20,
						userobject_id: null,
						user_type: 'user',
					},
					result => {
						console.log('result / getUserListByNick / SearchAccountA', result.msg);
						setSearchedList(result.msg);
						Modal.close();
					},
					err => {
						console.log('err / getUserListByNick / SearchAccountA', err);
						Modal.close();
						if (err == '검색 결과가 없습니다.') {
							Modal.popNoBtn('검색 결과가 없습니다.');

							setTimeout(() => {
								Modal.close();
							}, 1500);
						}
					},
				);
			}

			// let userList = userObejct.filter(e => e.user_nickname == inputData);
		} else {
			null;
		}
	}, [props.input]);

	//계정 클릭 콜백
	const onClickAccount = (item, index) => {
		console.log('onClickAccount', props);
		console.log('click item', item);
		let sendUserobject = {_id: item._id};
		// navigation.push('UserProfile', {userobject: sendUserobject});
		navigation.navigate('UserProfile', {userobject: sendUserobject});

		// 	() => {
		// 		console.log('pressed');
		// 		navigation.push('UserFeedList', {userobject: item._id});
		// 		Modal.close();
		// 		// navigation.navigate('UserFeedList', {userobject: item._id});
		// 		// navigation.navigate({
		// 		// 	name: props.prevNav,
		// 		// 	params: {addedVolunteer: item},
		// 		// 	merge: true,
		// 		// });
		// 	},
		// );
	};

	return (
		<View style={[searchAccountA.container]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchAccountA.listContainer]}>
					<ControllableAccountList items={searchedList} onClickAccount={onClickAccount} showButtons={false} />
				</View>
			</ScrollView>
		</View>
	);
};
