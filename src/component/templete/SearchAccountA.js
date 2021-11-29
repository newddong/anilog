import React from 'react';
import {Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {login_style, searchAccountA, temp_style} from './style_templete';

export default SearchAccountA = props => {
	const userObejct = dummy_userObject;
	//검색이벤트 발생 시 props.input의 값이 바뀌고 검색을 실시
	const [searchedList, setSearchedList] = React.useState([]);
	React.useEffect(() => {
		if (props.input != null) {
			const inputData = JSON.stringify(props.input.searchInput);
			//검색 로직에 대해선 아직 미구현이므로 닉네임과 검색Input이 정확히 일치하는 Account Array를 userList로 반환
			let userList = userObejct.filter(e => (e.user_nickname = inputData));
			setSearchedList(userList);
		} else {
			null;
		}
	}, [props.input]);

	React.useEffect(() => {
		// console.log('searchedList', searchedList);
	}, [searchedList]);

	return (
		<View style={[searchAccountA.container]}>
			<ControllableAccountList data={searchedList ? searchedList : []} showCrossMark={false} showButtons={false} />
		</View>
	);
};
