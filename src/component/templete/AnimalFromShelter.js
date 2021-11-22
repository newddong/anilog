import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AnimalFromShelter = props => {
	const navigation = useNavigation();
	const [_dummyData, set_dummyData] = React.useState(dummy_AnimalNeedHelpList);

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
		<View style={login_style.wrp_main}>
			{console.log('props.route.params.listType=>' + props.route.params.listType)}
			{console.log('AnimalFromShelter:props.route.params.borderMode=>' + props.route.params.borderMode)}
			{/* <FlatList> */}
			<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
				{/* (O)AnimalNeedHelpList */}
				<AnimalNeedHelpList
					data={_dummyData}
					borderMode={props.route.params.borderMode}
					listType={props.route.params.listType}
					onLabelClick={(status, id) => navigationGo(status, id)}
				/>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
