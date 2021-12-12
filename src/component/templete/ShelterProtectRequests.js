import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {dummy_AnimalNeedHelpList_various_status, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';

export default ShelterProtectRequests = ({route, navigation}) => {
	const [protectAnimalList, setProtectAnimalList] = React.useState(dummy_ShelterProtectAnimalObject); // AnimalNeedHelpList 내가 올린 보호요청 게시글 목록 리스트

	const onClickLabel = (status, user_id, item) => {
		// console.log('status , id => ' + status + '_' + user_id);
		console.log('item / ShelterProtectRequestList', item);
		navigation.push('AnimalProtectRequestDetail', dummy_AnimalNeedHelpList_various_status[0]);
	};

	const onFavoriteTag = (state, index) => {
		console.log('e', state); //state
		console.log('index', index); //index
	};

	const onSelectFilter = (value, index) => {
		console.log('value', value);
		console.log('ind', index);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.filterbutton_view, protectRequestList_style.filterbutton_view]}>
				<View style={[temp_style.filterbutton]}>
					<FilterButton menu={PET_KIND} width={306} onSelect={onSelectFilter} />
				</View>
				<View style={[temp_style.meatball50]}>
					<MeatBallDropdown menu={PROTECT_STATUS} />
				</View>
			</View>
			<View style={[temp_style.baseFlatList_protectRequestList, baseInfo_style.list]}>
				<AnimalNeedHelpList data={protectAnimalList} onClickLabel={onLabelClick} onFavoriteTag={onFavoriteTag} />
			</View>
		</View>
	);
};
