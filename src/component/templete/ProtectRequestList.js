import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {GRAY10} from 'Root/config/color';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';
import {dummy_ProtectRequestList} from 'Root/config/dummy_data_hjs';
import {ONLY_CONTENT_FOR_ADOPTION, PET_KIND, PET_PROTECT_LOCATION} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState({
		protectArea: '',
		kindFilter: '',
	});

	//보호 요청 데이터 불러오기 (아직 API 미작업 )
	// React.useEffect(() => {
	// 	console.log('ProtectRequestList:feedlist of Shelterprotect');
	// 	getProtectRequestList(
	// 		{
	// 			//필터 - 보호지역

	// 			//필터 - 동물종류
	// 			protect_animal_species: data.protect_animal_species,
	// 			//입양 가능한 게시글만 보기 (rescue)
	// 			protect_request_status: 'rescue',
	// 		},
	// 		data => {
	// 			console.log('data' + JSON.stringify(`data${data}`));
	// 			setData(data);
	// 		},
	// 	);
	// }, [route.params]);

	//[hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요
	const [data1, setData1] = React.useState({
		//user object (게시글 작성자의 db 고유 아이디를 통해 조회)
	});

	const filterOn = () => {
		// alert('입양 가능한 게시글만 보기');
		console.log('입양 가능한 게시글만 보기');
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 보기');
	};
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};

	const onSelectLocation = location => {
		setData({...data, protectArea: location});
	};

	const onSelectKind = kind => {
		setData({...data, kindFilter: kind});
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_PROTECT_LOCATION} onSelect={onSelectLocation} width={306} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} onSelect={onSelectKind} width={306} />
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
			</ScrollView>
		</View>
	);
};

ProtectRequestList.defaultProps = {};
