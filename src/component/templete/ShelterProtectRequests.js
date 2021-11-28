import React from 'react';
import {Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {login_style, btn_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {Meatball50_APRI10_Horizontal} from '../atom/icon';
import {dummy_AnimalNeedHelpList, dummy_ProtectRequestObject, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';

export default ShelterProtectRequests = ({route, navigation}) => {
	// console.log('route _id ', route.params); // 보호소 유저의 _id 및 shelter_name이 담겨있음
	const shelterProtectAnimal = dummy_ShelterProtectAnimalObject;

	const [protectAnimalList, setProtectAnimalList] = React.useState([]); // AnimalNeedHelpList 내가 올린 보호요청 게시글 목록 리스트

	//이후 게시글들을 클릭 시 ProtectRequestObject를 보내야 함
	React.useEffect(() => {
		//우선 id를 토대로 ShelterProtectAnimalObject.protect_animal_writer_id == userData._id가 일치하는 것을 검색
		let list = shelterProtectAnimal.filter(e => e.protect_animal_writer_id == route.params.id);

		//====> 등록일, 보호장소(보호소이름) <=== 두가지 AnimalNeedHelpList에 필요하지만 shelterProtectAnimalObject에서 처리가 안되는 컬럼
		//등록일은 shelterProtectAnimal의 보호동물 게시글 _id 컬럼을 활용하여 ProtectRequestObject에서 등록일을 조인으로 가져옴
		//보호소 이름은 위에서 이미 보내줌 (route.params.shelter_name
		list.map((v, i) => {
			const protectRequest = dummy_ProtectRequestObject.find(e => e._id == v.protect_animal_protect_request_id);
			v.protect_request_date = protectRequest.protect_request_date; //등록일을 Json Data에 추가
			v.shelter_name = route.params.shelter_name; //보호소 이름도 우선 list에 추가해줌 차후 테이블 조인을 통하여 세련된 방식으로 보호소 이름 pass할 예정
		});

		setProtectAnimalList(list);
	}, [route.params]);

	const onLabelClick = (status, user_id) => {
		console.log('status , id => ' + status + '_' + user_id);
	};

	const onFavoriteTag = (e, index) => {
		console.log('e', e); //state
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
				<AnimalNeedHelpList data={protectAnimalList} onLabelClick={onLabelClick} onFavoriteTag={(e, index) => onFavoriteTag(e, index)} />
			</View>
		</View>
	);
};

const e = {
	_id: 1,
	feed_type: 'feed',
	protect_animal_adoption_days_remain: 10,
	protect_animal_adoptor_id: null,
	protect_animal_estimate_age: '6개월',
	protect_animal_neutralization: 'yes',
	protect_animal_photos: ['https://storage.cobak.co/uploads/1588405371328060_143f1eabc3.jpg'],
	protect_animal_protect_request: false,
	protect_animal_protect_request_id: 1,
	protect_animal_protector_discussion_id: null,
	protect_animal_protector_id: null,
	protect_animal_rescue_date: '2021.11.23',
	protect_animal_rescue_location: '바른치킨 서강대역점 주변',
	protect_animal_sex: 'female',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '러시안블루',
	protect_animal_status: 'protect',
	protect_animal_weight: 1.2,
	protect_animal_writer_id: 21,
};
