import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {dummy_AnimalNeedHelpList_various_status, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';
import Modal from '../modal/Modal';

// ShelterMenu - 보호요청 올린 게시글 클릭
// params - 로그인한 보호소 유저의 _id
export default ShelterProtectRequests = ({route, navigation}) => {
	const [protectAnimalList, setProtectAnimalList] = React.useState([]); // AnimalNeedHelpList 내가 올린 보호요청 게시글 목록 리스트
	const [filterSpecies, setFilterSpecies] = React.useState();
	const [filterStatus, setFilterStatus] = React.useState('');

	React.useEffect(() => {
		Modal.popNoBtn('잠시만 기다려주세요.');
		getShelterProtectAnimalList(
			{
				shelter_protect_animal_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getShelterProtectAnimalList', result.msg);
				// setData(result.msg);
			},
			err => {
				// console.log('err / getShelterProtectAnimalList', err);
				setProtectAnimalList(err);
				Modal.close();
			},
		);
		// getProtectRequestList(
		// 	//현재 로그인한 보호소의 고유 _id를 파라미터로 보내고
		// 	//_id를 통해 얻어온 보호소의 보호 요청 게시글 리스트를 출력
		// 	{
		// 		city: null,
		// 		protect_animal_species: filterSpecies,
		// 		adoptable_posts: filterStatus == 'rescue',
		// 		protect_request_object_id: null,
		// 		request_number: 5,
		// 	},
		// 	successed => {
		// 		console.log('successed', successed);
		// 		// setProtectAnimalList(successed.msg);
		// 		// 받아온 protect_animal_protect_Request_id로 해당 게시글 좋아요 여부도 판별해야함
		// 	},
		// 	err => {
		// 		console.log('err', err);
		// 		setProtectAnimalList(err);
		// 	},
		// );
	}, [filterSpecies, filterStatus]);

	React.useEffect(() => {
		//getProtectRequestList만으로는 AnimalNeedHelpList를 출력할 수 없음.
		//펫정보가 없기 때문 ShelterProtectAnimal 정보를 얻어와야함
		protectAnimalList.map((v, i) => {
			console.log('v', v.protect_animal_id);
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
