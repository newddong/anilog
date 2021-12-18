import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, protectRequestList_style, baseInfo_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {dummy_AnimalNeedHelpList_various_status, dummy_ShelterProtectAnimalObject} from 'Root/config/dummyDate_json';
import {PET_KIND, PROTECT_STATUS} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import MeatBallDropdown from '../molecules/MeatBallDropdown';
import {getProtectRequestList, getShelterProtectAnimalList} from 'Root/api/shelterapi';
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
				setProtectAnimalList(result.msg);

				Modal.close();
				// setData(result.msg);
			},
			err => {
				console.log('err / getShelterProtectAnimalList', err);
				Modal.close();
			},
		);
		getProtectRequestList(
			//현재 로그인한 보호소의 고유 _id를 파라미터로 보내고
			//_id를 통해 얻어온 보호소의 보호 요청 게시글 리스트를 출력
			{
				city: null,
				protect_animal_species: filterSpecies,
				adoptable_posts: filterStatus == 'rescue',
				protect_request_object_id: null,
				request_number: 5,
			},
			successed => {
				console.log('successed', successed.msg);
				const example = {
					__v: 0,
					_id: '61b8bb76bd39aff1f156d4eb',
					protect_animal_id: '61b852bcc02491f75d05851f',
					protect_request_comment_count: 0,
					protect_request_content: '성스러운 동물입니다.',
					protect_request_date: '2021-12-14T15:42:46.237Z',
					protect_request_favorite_count: 0,
					protect_request_hit: 0,
					protect_request_photos: [
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639496566052_5Os47PJIncQ.jpg',
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639496566058_ZqmyLg58kgA.jpg',
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469755996_GQduCe7EI_0.jpg',
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756009_P5v-dOEsmdw.jpg',
						'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756038_Uhky0oIkFCE.jpg',
					],
					protect_request_photos_uri: [],
					protect_request_status: 'rescue',
					protect_request_title: '어디선가 용이 집앞에 왓어요',
					protect_request_update_date: '2021-12-14T15:42:46.237Z',
					protect_request_writer_id: '61b585861d58f109766f5f0f',
				};
				// setProtectAnimalList(successed.msg);
				// 받아온 protect_animal_protect_Request_id로 해당 게시글 좋아요 여부도 판별해야함
			},
			err => {
				console.log('err', err);
				// setProtectAnimalList(err);
			},
		);
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
