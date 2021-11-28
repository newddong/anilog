import React from 'react';
import {Text, View} from 'react-native';
import {dummy_AnimalNeedHelpList} from 'Root/config/dummyDate_json';
import FilterButton from '../molecules/FilterButton';
import OnOffSwitch from '../molecules/OnOffSwitch';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {login_style, searchProtectRequest, temp_style} from './style_templete';

export default SearchProtectRequest = props => {
	return (
		<View style={[login_style.wrp_main, searchProtectRequest.container]}>
			<View style={[searchProtectRequest.filterView]}>
				<View style={[searchProtectRequest.filterView.inside]}>
					<View style={{flexDirection: 'row'}}>
						<View style={[temp_style.filterBtn]}>
							<FilterButton />
						</View>
						<View style={[temp_style.filterBtn]}>
							<FilterButton />
						</View>
					</View>
					<View style={[searchProtectRequest.filterView.onOffBtnView]}>
						<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
							<Text>입양 가능한 게시글만 보기</Text>
						</View>
						<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
							<OnOffSwitch />
						</View>
					</View>
				</View>
			</View>
			<View style={[temp_style.animalNeedHelpList, searchProtectRequest.animalNeedHelpList]}>
				<AnimalNeedHelpList data={dummy_AnimalNeedHelpList} />
			</View>
		</View>
	);
};
