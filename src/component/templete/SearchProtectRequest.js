import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {dummy_AnimalNeedHelpList, dummy_AnimalNeedHelpList_various_status} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import FilterButton from '../molecules/FilterButton';
import OnOffSwitch from '../molecules/OnOffSwitch';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {login_style, searchProtectRequest, temp_style} from './style_templete';

export default SearchProtectRequest = props => {
	const onSwtichOn = () => {
		console.log('입양 가능한 게시물보기 True');
	};
	const onSwtichOff = () => {
		console.log('입양 가능한 게시물보기 False');
	};

	return (
		<View style={[login_style.wrp_main, searchProtectRequest.container]}>
			<View style={[searchProtectRequest.filterView]}>
				<View style={[searchProtectRequest.filterView.inside]}>
					<View style={{flexDirection: 'row'}}>
						<View style={[temp_style.filterBtn]}>
							<FilterButton menu={['보호 지역']} width={306} />
						</View>
						<View style={[temp_style.filterBtn]}>
							<FilterButton menu={['동물 종류']} width={306} />
						</View>
					</View>
					<View style={[searchProtectRequest.filterView.onOffBtnView]}>
						<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
							<Text style={[txt.noto20, {color: GRAY20}]}>입양 가능한 게시글만 보기</Text>
						</View>
						<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
							<OnOffSwitch onSwtichOff={onSwtichOff} onSwtichOn={onSwtichOn} />
						</View>
					</View>
				</View>
			</View>
			<View style={[temp_style.animalNeedHelpList, searchProtectRequest.animalNeedHelpList]}>
				<AnimalNeedHelpList data={dummy_AnimalNeedHelpList_various_status} />
			</View>
		</View>
	);
};
