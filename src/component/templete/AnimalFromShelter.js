import React from 'react';
import {View} from 'react-native';
import {login_style, temp_style, baseInfo_style, animalFromShelter_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {useNavigation} from '@react-navigation/core';
import {dummy_AdoptorInformation, dummy_AnimalFromShelter_adopted} from 'Root/config/dummyDate_json';

export default AnimalFromShelter = ({route}) => {
	const navigation = useNavigation();
	const animalFromMyShelterList = dummy_AnimalFromShelter_adopted; //AnimalNeedHelpList에 보낼 리스트정보

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
	//테두리 모드 On 상태에서 입양처 보기 클릭
	const onPressAdoptorInfo = item => {
		// console.log('item', item);
		navigation.push('AdoptorInformation', {...dummy_AdoptorInformation[0], ...item});
	};

	// 테두리 모드 On 상태에서 게시글보기 클릭 => AnimapProtectRequestDetail == ProtectRequestManage
	const onPressProtectRequest = item => {
		navigation.push('ProtectRequestManage', item);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* {console.log('props.route.params.listType=>' + props.route.params.listType)} */}
			{/* {console.log('AnimalFromShelter:props.route.params.borderMode=>' + props.route.params.borderMode)} */}
			<View style={[animalFromShelter_style.container]}>
				<AnimalNeedHelpList
					data={animalFromMyShelterList}
					borderMode={true}
					onClickLabel={(status, id) => navigationGo(status, id)}
					onPressAdoptorInfo={item => onPressAdoptorInfo(item)}
					onPressProtectRequest={item => onPressProtectRequest(item)}
				/>
			</View>
		</View>
	);
};

AnimalFromShelter.defaultProps = {
	data: [],
};
