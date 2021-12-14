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
import {getProtectRequestList} from 'Root/api/protect_request_api_hjs';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState({
		protectArea: '',
		kindFilter: '',
	});

	//보호 요청 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		console.log('ProtectRequestList:feedlist of Shelterprotect');
		getProtectRequestList(
			{
				//필터 - 보호지역 (user_address.city 데이터)
				city: data.city,
				//필터 - 동물종류
				protect_animal_species: data.protect_animal_species,
				//입양 가능한 게시글만 보기
				adoptable_posts: data.adoptable_posts,
			},
			data => {
				console.log('data' + JSON.stringify(`data${data}`));
				setData(data);
			},
		);
	}, [route.params]);

	// [hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요
	const [data1, setData1] = React.useState([]);

	// //UserObject
	// shelter_name: '', //보호소 이름

	// //protectRequestObject
	// protect_request_photo_thumbnail: '', //보호요청 게시물 썸네일 uri
	// protect_request_status: '', //	보호요청 상태
	// protect_animal_id: '', //보호요청할 동물
	// protect_request_date: '', //보호요청 게시글 작성일시

	// //ShelterProtectAnimalObject
	// protect_animal_species: '', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
	// protect_animal_species_detail: '', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
	// protect_animal_sex: '', //보호중인 동물의 성별
	// protect_animal_rescue_location: '', //보호중인 동물의 구조장소

	// //BookmarkProtectRequestObject
	// bookmark: false, //유저-보호요청 북마크

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
