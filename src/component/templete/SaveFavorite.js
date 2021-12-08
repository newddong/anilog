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
	const [checkBoxMode, setCheckBoxMode] = React.useState(false);
	//checkBox On
	const [_dummyData, set_dummyData] = React.useState(dummy_AccountHashList);
	let selectCNT = React.useRef(0);

	React.useEffect(() => {
		console.log('SaveFavorite:_dummyData=>' + JSON.stringify(_dummyData));
	}, [_dummyData]);

	//Check Box On
	const showCheckBox = e => {
		console.log(`showCheckBox=>${showCheckBox}`);
		setCheckBoxMode(e);

		//전체 선택을 처음 누를 경우 무조건 체크 박스가 모두 선택되도록 하기 위해 setSelectCNT값을 0으로 초기화.
		selectCNT.current = 0;

		//취소를 누르고 다시 선택하기를 누를 경우 선택되어 있는 체크박스가 없게 하기 위해 false로 초기화.
		let copy = [..._dummyData];
		copy.map((v, i) => {
			v._index = i;
			v.checkBoxState = false;
		});
		set_dummyData(copy);
	};

	//CheckBox Off
	// const hideCheckBox = e => {
	// 	console.log('hideCheckBox  클릭 !!!');
	// 	setCheckBoxMode(false);
	// 	console.log('hideCheckBox =>' + checkBoxModeer);
	// };

	// 선택하기 => 전체 선택 클릭
	const selectAll = () => {
		//v.checkBoxState = !v.checkBoxState와 같이 할 경우 체크 박스 값들이 각각 다를 경우 그것의 반대로만 변경 될 뿐 모두 선택되거나 모두 취소 되지 않음.
		// setSelectCNT(preSelectCNT => preSelectCNT + 1);
		selectCNT.current += 1;

		let copy = [..._dummyData];
		console.log('selectCNT.current =====>' + selectCNT.current);
		copy.map((v, i) => {
			//카운트의 2로 나눈 나머지값을 이용해서 전체 선택 혹은 전체 취소가 되도록 함.
			selectCNT.current % 2 == 1 ? (v.checkBoxState = true) : (v.checkBoxState = false);
		});
		set_dummyData(copy);
	};

	// 선택하기 => 선택 삭제 클릭 (API 데이터 불러온 뒤 다시 수정할 것. - 실제로 ID를 API로 넘긴 후 데이터를 다시 가져와서 표출 해야함.)
	const deleteSelectedItem = () => {
		console.log('삭제시작');
		let tempArray = [];

		let copy = [..._dummyData];
		copy = copy.filter(e => e.checkBoxState != true);
		console.log('deleteSelectedItem:_dummyData=>' + JSON.stringify(copy));
		// let deleteList = [];
		// for (let i = 0; i < copy.length; i++) {
		// 	if (copy[i].checkBoxState == true) {
		// 		console.log('삭제목록임' + i);
		// 		copy = copy.filter(item => item.checkBoxState != true);
		// 		deleteList.push(copy[i].user_nickname == null ? copy[i].keyword : copy[i].user_nickname);
		// 	}
		// }
		copy.map((v, i) => {
			console.log('index=>' + i);
			v._index = i;
			v.checkBoxState = false;
		});

		set_dummyData(copy);
	};

	//CheckBox 클릭 시
	const onCheckBox = (item, index) => {
		console.log(index);
		let copy = [..._dummyData];
		copy[index].checkBoxState = !copy[index].checkBoxState;
		// set_dummyData(copy);
	};

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
					checkBoxMode={checkBoxMode}
					onLabelClick={item => navigation.push('UserProfile', item)}
					onHashClick={item => navigation.push('FeedListForHashTag', item)}
					onCheckBox={(item, index) => onCheckBox(item, index)}
				/>
			</View>
		</View>
	);
};
