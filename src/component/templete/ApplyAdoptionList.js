import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {login_style, temp_style, baseInfo_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ApplyAdoptionList = props => {
	const navigation = useNavigation();
	console.log(props.route.name);
	return (
		<View style={login_style.wrp_main}>
			{/* <FlatList> */}
			<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
				{/* (O)AnimalNeedHelpList */}
				<AnimalNeedHelpList
					onItemClick={
						props.route.name == 'ApplyTempProtectList'
							? () => navigation.push('ApplyTempProtectDetails')
							: () => navigation.push('ApplyAdoptionDetails')
					}
				/>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
