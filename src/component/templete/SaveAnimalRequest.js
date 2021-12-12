import React from 'react';
import {View} from 'react-native';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, btn_style, temp_style} from './style_templete';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {useNavigation} from '@react-navigation/core';

export default SaveAnimalRequest = props => {
	//계정 좌측 CheckBox 디스플레이 여부
	const [checkBoxMode, setCheckBoxMode] = React.useState(false);
	//checkBox On
	const [_dummyData, set_dummyData] = React.useState(dummy_AppliesRecord_protect);
	const [selectCNT, setSelectCNT] = React.useState(0);
	const [acceptAllState, setAcceptAllState] = React.useState(false);

	const navigation = useNavigation();

	React.useEffect(() => {
		_dummyData.map((v, i) => {
			console.log('v,', i, v.checkBoxState);
		});
		// console.log('dummy 2', _dummyData[1].checkBoxState);
	}, [_dummyData]);

	//선택하기 클릭
	const showCheckBox = e => {
		setCheckBoxMode(e);

		//전체 선택을 처음 누를 경우 무조건 체크 박스가 모두 선택되도록 하기 위해 setSelectCNT값을 0으로 초기화.
		setSelectCNT(0);

		//취소를 누르고 다시 선택하기를 누를 경우 선택되어 있는 체크박스가 없게 하기 위해 false로 초기화.
		let copy = [..._dummyData];
		copy.map((v, i) => {
			v.checkBoxState = false;
		});
		set_dummyData(copy);
	};

	// 취소 클릭
	const hideCheckBox = e => {
		setCheckBoxMode(e);
	};

	//전체 선택 클릭
	const selectAll = () => {
		//v.checkBoxState = !v.checkBoxState와 같이 할 경우 체크 박스 값들이 각각 다를 경우 그것의 반대로만 변경 될 뿐 모두 선택되거나 모두 취소 되지 않음.
		setSelectCNT(selectCNT + 1);
		let copy = [..._dummyData];
		copy.map((v, i) => {
			//카운트의 2로 나눈 나머지값을 이용해서 전체 선택 혹은 전체 취소가 되도록 함.
			// selectCNT % 2 == 0 ? (v.checkBoxState = true) : (v.checkBoxState = false);
			v.checkBoxState = !v.checkBoxState;
		});
		setAcceptAllState(!acceptAllState);
		set_dummyData(copy);
	};

	// 삭제 클릭
	const deleteSelectedItem = () => {
		console.log('삭제시작');
		let copy = [..._dummyData];
		copy = copy.filter(e => e.checkBoxState != true); //CheckBoxState가 true인 경우엔 걸러진다
		set_dummyData(copy);
	};

	//CheckBox 클릭 시
	const onCheckBox = (item, index) => {
		let copy = [..._dummyData];
		copy[index].checkBoxState = !copy[index].checkBoxState;
		set_dummyData(copy);
	};

	//썸네일 클릭
	const navigationGo = (status, user_id) => {
		console.log('status , id => ' + status + '_' + user_id);
		switch (status) {
			case 'adoption_available':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'emergency':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'missing':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'reported':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'onNegotiation':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'adopted':
				navigation.push('UserProfile', {userId: user_id});
				break;
		}
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* SelectStat	 */}
			<View style={[temp_style.selectstat_view]}>
				<SelectStat
					acceptAllState={acceptAllState}
					onSelectMode={e => showCheckBox(e)}
					onCancelSelectMode={e => hideCheckBox(e)}
					onSelectAllClick={selectAll}
					onDeleteSelectedItem={deleteSelectedItem}
				/>
			</View>

			{/* <FlatList> */}
			<View style={[temp_style.AnimalNeedHelpList]}>
				<AnimalNeedHelpList
					data={_dummyData}
					checkBoxMode={checkBoxMode}
					// onLabelClick={item => navigation.push('UserProfile', item)}
					onClickLabel={(status, id) => navigationGo(status, id)}
					onHashClick={item => navigation.push('FeedListForHashTag', item)}
					onCheckBox={(item, index) => onCheckBox(item, index)}
					isCheckAll={acceptAllState}
				/>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
