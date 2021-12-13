import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import Modal from '../modal/Modal';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {login_style, searchAccountA} from './style_templete';
import {CommonActions} from '@react-navigation/native';

export default SearchAccountA = props => {
	const navigation = useNavigation();
	const userObejct = dummy_userObject;
	//검색이벤트 발생 시 props.input의 값이 바뀌고 검색을 실시
	const [searchedList, setSearchedList] = React.useState([]);

	React.useEffect(() => {
		if (props.input != null) {
			const inputData = props.input.searchInput;
			//검색 로직에 대해선 아직 미구현이므로 닉네임과 검색Input이 정확히 일치하는 Account Array를 userList로 반환

			let userList = userObejct.filter(e => e.user_nickname == inputData);
			setSearchedList(userList);
		} else {
			null;
		}
	}, [props.input]);

	//계정 클릭 콜백
	const onClickAccount = (item, index) => {
		Modal.popTwoBtn(
			item.user_nickname + '님을 봉사활동자 \n 목록에 추가하시겠습니까?',
			'취소',
			'확인',
			() => Modal.close(),
			() => {
				// navigation.dispatch(
				// 	CommonActions.reset({
				// 		index: 1,
				// 		routes: [
				// 			{name: 'UserProfile'},
				// 			{
				// 				name: props.prevNav,
				// 				params: {addedAccount: item},
				// 			},
				// 		],
				// 	}),
				// );
				// navigation.navigate(props.prevNav,
				// 	{addedVolunteer: item});
				navigation.navigate({
					name: props.prevNav,
					params: {addedVolunteer: item},
					merge: true,
				});
				Modal.close();
			},
		);
	};

	return (
		<View style={[searchAccountA.container]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchAccountA.listContainer]}>
					<ControllableAccountList items={userObejct} onClickAccount={onClickAccount} showButtons={false} />
				</View>
			</ScrollView>
		</View>
	);
};
