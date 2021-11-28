import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {GRAY10} from 'Root/config/color';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';
import {dummy_ProtectRequestList} from 'Root/config/dummy_data_hjs';
import {ONLY_CONTENT_FOR_ADOPTION, PET_KIND} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState({
		protectArea: '',
		kindFilter: '',
	});

	console.log(navigation.getState().routes);
	console.log(route);
	const filterOn = () => {
		// alert('입양 가능한 게시글만 보기');
		console.log('입양 가능한 게시글만 보기');
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 보기');
	};
	const onOff_protectAreaFilter = () => {
		alert('보호지역 필터 버튼 오프');
	};
	const onOff_kindFilter = () => {
		alert('동물 종류 필터 버튼 오프');
	};
	const onOn_protectAreaFilter = () => {
		alert('보호지역 필터 버튼 온');
	};
	const onOn_kindFilter = () => {
		alert('동물 종류 필터 버튼 온');
	};
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};

	return (
		<ScrollView style={{flex: 1}}>
			<View style={[login_style.wrp_main, protectRequestList.container]}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton btnTitle={'보호 지역'} btnLayout={btn_w306} onOff={onOff_protectAreaFilter} onOn={onOn_protectAreaFilter} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} />
							</View>
						</View>
						<View style={[searchProtectRequest.filterView.onOffBtnView]}>
							<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
								<Text style={[txt.noto20, {color: GRAY10}]}>{ONLY_CONTENT_FOR_ADOPTION}</Text>
							</View>
							<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
								<OnOffSwitch onSwtichOn={filterOn} onSwtichOff={filterOff} />
							</View>
						</View>
					</View>
				</View>
				<View style={[searchProtectRequest.animalNeedHelpList]}>
					<AnimalNeedHelpList data={dummy_ProtectRequestList} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
			</View>
		</ScrollView>
	);
};
