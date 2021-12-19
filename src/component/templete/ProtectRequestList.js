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
import {getProtectRequestList} from 'Root/api/shelterapi.js';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState([]);

	//보호 요청 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		console.log(`ProtectRequestList:seding data -${data}`);
		getProtectRequestList(
			{
				//필터 - 보호지역 (user_address.city 데이터)
				city: '',
				//필터 - 동물종류
				protect_animal_species: '',
				//입양 가능한 게시글만 보기
				adoptable_posts: false,
				//커서 역할을 할 보호요청 오브잭트(페이징 처리)
				protect_request_object_id: '',
				//보호요청게시글 요청 숫자
				request_number: 1,
			},
			data => {
				console.log('data' + JSON.stringify(`data${data}`));
				setData(data.msg);
			},
			errcallback => {
				console.log(`errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	}, [route.params]);

	React.useEffect(() => {
		console.log(`ProtectRequestList data:${JSON.stringify(data)}`);
	}, [data]);

	// [hjs] 실제로 데이터가 API로부터 넘어오는 부분 확인 후 재작성 필요

	// //UserObject
	//  : '', //보호소 이름

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
		setData({...data, adoptable_posts: true});
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 보기');
		setData({...data, adoptable_posts: false});
	};
	//별도의 API 사용 예정.
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};
	const onSelectLocation = location => {
		setData({...data, city: location});
	};

	const onSelectKind = kind => {
		setData({...data, protect_animal_species: kind});
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
					<AnimalNeedHelpList data={data} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
			</ScrollView>
		</View>
	);
};

ProtectRequestList.defaultProps = {};
