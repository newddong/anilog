import React from 'react';
import {Text, View} from 'react-native';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import ControllableAccountList from '../organism_ksw/ControllableAccountList';
import {login_style, searchAccountA} from './style_templete';

export default SearchAccountA = props => {
	const userObejct = dummy_userObject;
	//검색이벤트 발생 시 props.input의 값이 바뀌고 검색을 실시
	const [searchedList, setSearchedList] = React.useState([]);

	React.useEffect(() => {
		if (props.input != null) {
			const inputData = props.input.searchInput;
			//검색 로직에 대해선 아직 미구현이므로 닉네임과 검색Input이 정확히 일치하는 Account Array를 userList로 반환
			userObejct.map((v, i) => {
				console.log(i, v.user_nickname);
			});
			let userList = userObejct.filter(e => e.user_nickname == inputData);
			setSearchedList(userList);
		} else {
			null;
		}
	}, [props.input]);

	//계정 클릭 콜백
	const onClickAccount = data => {
		console.log('data', data);
	};

	return (
		<View style={[searchAccountA.container]}>
			<ControllableAccountList data={searchedList ? searchedList : []} onClickAccount={onClickAccount} showCrossMark={false} showButtons={false} />
		</View>
	);
};
