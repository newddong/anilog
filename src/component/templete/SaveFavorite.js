import {useNavigation} from '@react-navigation/core';
import {duration} from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {dummy_AccountHashList} from 'Root/config/dummyDate_json';
import AccountHashList from '../organism_ksw/AccountHashList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, temp_style, selectstat_view_style, saveFavorite} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default SaveFavorite = props => {
	const navigation = useNavigation();
	//계정 좌측 CheckBox 디스플레이 여부
	const [checkBoxMode, setCheckBoxMode] = React.useState(true);
	//checkBox On
	const [_dummyData, set_dummyData] = React.useState(dummy_AccountHashList);
	//Check Box On
	const showCheckBox = e => {
		console.log('ShowCheckBox' + e);
		setCheckBoxMode(e);
	};
	//CheckBox Off
	const hideCheckBox = e => {
		setCheckBoxMode(e);
		console.log('HideChekcBox' + e);
	};

	// 선택하기 => 전체 선택 클릭
	const selectAll = () => {
		let copy = [..._dummyData];
		copy.map((v, i) => {
			v.checkBoxState = !v.checkBoxState;
		});
		set_dummyData(copy);
	};

	// 선택하기 => 선택 삭제 클릭
	const deleteSelectedItem = () => {
		console.log('삭제시작');
		let copy = [..._dummyData];
		let deleteList = [];
		for (let i = 0; i < copy.length; i++) {
			if (copy[i].checkBoxState == true) {
				console.log('삭제목록임' + i);
				copy = copy.filter(item => item.checkBoxState != true);
				// deleteList.push(copy[i].user_nickname == null ? copy[i].keyword : copy[i].user_nickname);
			}
		}
		set_dummyData(copy);
	};

	//CheckBox 클릭 시
	const onCheckBox = (item, index) => {
		console.log(index);
		let copy = [..._dummyData];
		copy[index].checkBoxState = !copy[index].checkBoxState;
		set_dummyData(copy);
	};

	React.useEffect(() => {
		_dummyData.map((v, i) => {
			console.log(i + ' : ' + v.checkBoxState);
		});
	}, [_dummyData]);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* SelectStat	 */}
			<View style={[temp_style.selectstat_view]}>
				{/* 취소, 전체선택, 선택삭제 */}
				<View style={[temp_style.selectstat, selectstat_view_style.selectstat]}>
					{/*  */}
					<SelectStat
						onSelectMode={e => showCheckBox(e)}
						onCancelSelectMode={e => hideCheckBox(e)}
						onSelectAllClick={selectAll}
						onDeleteSelectedItem={deleteSelectedItem}
					/>
				</View>
			</View>

			{/* <FlatList> */}
			<View style={[saveFavorite.accountHashList]}>
				{/* <Text>(O)AccountHashList</Text> */}
				<AccountHashList
					data={_dummyData}
					checkBoxMode={!checkBoxMode}
					onLabelClick={item => navigation.push('UserProfile', item)}
					onHashClick={item => navigation.push('FeedListForHashTag', item)}
					onCheckBox={(item, index) => onCheckBox(item, index)}
				/>
			</View>
		</View>
	);
};
