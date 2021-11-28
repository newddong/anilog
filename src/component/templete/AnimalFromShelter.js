import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {useNavigation} from '@react-navigation/core';
import {dummy_AnimalNeedHelpList, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {dummy_ProtectRequestList} from 'Root/config/dummyDate_json';

export default AnimalFromShelter = ({route}) => {
	console.log('AnimalFromShelter ', route.params);
	const navigation = useNavigation();
	const [_dummyData, set_dummyData] = React.useState(route.params.data);

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

	const onPressAdoptorInfo = item => {
		console.log('item', item);
		navigation.push('AdoptorInformation');
	};

	const onPressProtectRequest = item => {
		console.log('item', item);
		navigation.push('ProtectRequestManage');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* {console.log('props.route.params.listType=>' + props.route.params.listType)} */}
			{/* {console.log('AnimalFromShelter:props.route.params.borderMode=>' + props.route.params.borderMode)} */}
			<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
				<AnimalNeedHelpList
					data={_dummyData}
					borderMode={true}
					onLabelClick={(status, id) => navigationGo(status, id)}
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
