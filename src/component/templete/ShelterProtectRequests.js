import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {dummy_AnimalNeedHelpList_various_status, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import {getProtectRequestList, getProtectRequestListByShelterId, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import Modal from '../modal/Modal';

// ShelterMenu - 보호요청 올린 게시글 클릭
// params - 로그인한 보호소 유저의 _id
export default ShelterProtectRequests = ({route, navigation}) => {
	const [protectAnimalList, setProtectAnimalList] = React.useState([]); // AnimalNeedHelpList 내가 올린 보호요청 게시글 목록 리스트
	const [filterSpecies, setFilterSpecies] = React.useState();
	const [filterStatus, setFilterStatus] = React.useState('rescue');

	React.useEffect(() => {
		Modal.popNoBtn('잠시만 기다려주세요.');
		console.log('route.params', route.params);
		console.log('filter', filterStatus);
		getProtectRequestListByShelterId(
			//현재 로그인한 보호소의 고유 _id를 파라미터로 보내고
			//_id를 통해 얻어온 보호소의 보호 요청 게시글 리스트를 출력
			{
				shelter_userobject_id: route.params,
				// city: null,
				// protect_animal_species: filterSpecies,
				// adoptable_posts: filterStatus == 'rescue',
				protect_request_status: filterStatus,
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getProtectRequestList / ShelterProtectRequests', result.msg);
				setProtectAnimalList(result.msg);
				Modal.close();
				// setProtectAnimalList(successed.msg);
				// 받아온 protect_animal_protect_Request_id로 해당 게시글 좋아요 여부도 판별해야함
			},
			err => {
				console.log('err / getProtectReqeustListByShelterId / ShelterProtectRequest', err);
				Modal.close();

				// setProtectAnimalList(err);
			},
		);
	}, [filterSpecies, filterStatus]);

	React.useEffect(() => {
		//getProtectRequestList만으로는 AnimalNeedHelpList를 출력할 수 없음.
		//펫정보가 없기 때문 ShelterProtectAnimal 정보를 얻어와야함
		protectAnimalList.map((v, i) => {
			// console.log('v', v.protect_animal_id);
		});
	}, [protectAnimalList]);

	//보호 게시글 목록의 라벨 클릭 콜백
	const onClickLabel = (status, user_id, item) => {
		// console.log('item / ShelterProtectRequestList', item);
		navigation.push('AnimalProtectRequestDetail', dummy_AnimalNeedHelpList_various_status[0]);
	};

	//보호게시글 목록의 즐겨찾기 태그
	const onFavoriteTag = (state, index) => {
		console.log('state Favorite Tag', state); //state
	};

	//화면 좌측 상단 필터드롭다운
	const onSelectFilter = (v, i) => {
		let filter = v;
		if (i == 0) {
			setFilterSpecies();
		} else {
			setFilterSpecies(filter);
		}
	};

	//화면 우측상단 미트볼 드롭다운
	const onSelectMeatball = (v, i) => {
		//입양가능 , 협의중 , 완료
		switch (i) {
			case 0:
				setFilterStatus('rescue');
				break;
			case 1:
				setFilterStatus('discuss');
				break;
			case 2:
				setFilterStatus('complete');
				break;
			default:
				break;
		}
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.filterbutton_view, protectRequestList_style.filterbutton_view]}>
				<View style={[temp_style.filterbutton]}>
					<FilterButton menu={PET_KIND} width={306} onSelect={onSelectFilter} />
				</View>
				<View style={[temp_style.meatball50]}>
					<MeatBallDropdown menu={PROTECT_STATUS} onSelect={onSelectMeatball} />
				</View>
			</View>
			<View style={[temp_style.baseFlatList_protectRequestList, baseInfo_style.list]}>
				<AnimalNeedHelpList data={protectAnimalList} onClickLabel={onClickLabel} onFavoriteTag={onFavoriteTag} />
			</View>
		</View>
	);
};

const es = [
	{
		__v: 0,
		_id: '61c0922bde8b9cf6e8d5057f',
		protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: '낯도 가리지 않습니다. 빨리 오셔요!',
		protect_request_date: '2021-12-20T14:24:43.459Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640010283237_9.jpg'],
		protect_request_status: 'rescue',
		protect_request_title: '고르고스에서 냥줍했습니다, 데려가시면 복받아요.',
		protect_request_update_date: '2021-12-20T14:24:43.459Z',
		protect_request_writer_id: '61c023d9679aa5ae46128102',
	},
	{
		__v: 0,
		_id: '61c093bd75d6787bdf169881',
		protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: 'Content test	',
		protect_request_date: '2021-12-20T14:31:25.459Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [],
		protect_request_status: 'rescue',
		protect_request_title: 'Rutil test',
		protect_request_update_date: '2021-12-20T14:31:25.459Z',
		protect_request_writer_id: '61c023d9679aa5ae46128102',
	},
	{
		__v: 0,
		_id: '61c175d0b83cbeb3c893db71',
		protect_animal_id: {
			__v: 0,
			_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '4년 1개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c175d0b83cbeb3c893db71',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
			protect_animal_rescue_location: '고르고스 언덕',
			protect_animal_sex: 'female',
			protect_animal_species: '기타',
			protect_animal_species_detail: '치와와',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: '나이는 많아 보이지만 아주 정이 많아보입니다. 데려가기를 연락하세요.',
		protect_request_date: '2021-12-21T06:36:00.739Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [],
		protect_request_status: 'rescue',
		protect_request_title: '새로운 엄마를 구해요',
		protect_request_update_date: '2021-12-21T06:36:00.739Z',
		protect_request_writer_id: '61c023d9679aa5ae46128102',
	},
];
