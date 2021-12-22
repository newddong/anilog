import React from 'react';
import {View} from 'react-native';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import SelectStat from '../organism_ksw/SelectStat';
import {login_style, btn_style, temp_style} from './style_templete';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {useNavigation} from '@react-navigation/core';
import {getProtectRequestList, getShelterProtectAnimalList} from 'Root/api/shelterapi';
import Modal from '../modal/Modal';
import {getUserProtectAnimalList} from 'Root/api/protectapi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default SaveAnimalRequest = ({route}) => {
	const navigation = useNavigation();

	//계정 좌측 CheckBox 디스플레이 여부

	const [checkBoxMode, setCheckBoxMode] = React.useState(false);
	//checkBox On
	const [data, setData] = React.useState([]);
	const [selectCNT, setSelectCNT] = React.useState(0);
	const [acceptAllState, setAcceptAllState] = React.useState(false);
	const [isDeleted, setIsDeleted] = React.useState(false);

	React.useEffect(() => {}, []);

	React.useEffect(() => {
		getProtectRequestList(
			//현재 로그인한 보호소의 고유 _id를 파라미터로 보내고
			//_id를 통해 얻어온 보호소의 보호 요청 게시글 리스트를 출력
			{
				protect_request_object_id: null,
				request_number: 3,
			},
			successed => {
				console.log('successed', successed);
				// setProtectAnimalList(successed.msg);
				// 받아온 protect_animal_protect_Request_id로 해당 게시글 좋아요 여부도 판별해야함
			},
			err => {
				// console.log('err / getProtectRequestList', err);
				err.filter(e => {
					// console.log('e._protect_animal', e.protect_animal_id);
				});
			},
		);
	}, [data]);

	//선택하기 클릭
	const showCheckBox = e => {
		setCheckBoxMode(e);

		//전체 선택을 처음 누를 경우 무조건 체크 박스가 모두 선택되도록 하기 위해 setSelectCNT값을 0으로 초기화.
		setSelectCNT(0);

		//취소를 누르고 다시 선택하기를 누를 경우 선택되어 있는 체크박스가 없게 하기 위해 false로 초기화.
		let copy = [...data];
		copy.map((v, i) => {
			v.checkBoxState = false;
		});
		setData(copy);
	};

	// 취소 클릭
	const hideCheckBox = e => {
		setCheckBoxMode(e);
	};

	//전체 선택 클릭
	const selectAll = () => {
		//v.checkBoxState = !v.checkBoxState와 같이 할 경우 체크 박스 값들이 각각 다를 경우 그것의 반대로만 변경 될 뿐 모두 선택되거나 모두 취소 되지 않음.
		setSelectCNT(selectCNT + 1);
		let copy = [...data];
		copy.map((v, i) => {
			//카운트의 2로 나눈 나머지값을 이용해서 전체 선택 혹은 전체 취소가 되도록 함.
			// selectCNT % 2 == 0 ? (v.checkBoxState = true) : (v.checkBoxState = false);
			v.checkBoxState = !v.checkBoxState;
		});
		setAcceptAllState(!acceptAllState);
		setData(copy);
	};

	// 삭제 클릭
	const deleteSelectedItem = () => {
		console.log('삭제시작');
		let filtered_array = [...data];
		filtered_array = filtered_array.filter(e => e.checkBoxState == false);
		setData(filtered_array);
		setIsDeleted(true);
	};

	//CheckBox 클릭 시
	const onCheckBox = (item, index) => {
		let copy = [...data];
		copy[index].checkBoxState = !copy[index].checkBoxState;
		setData(copy);
	};

	//썸네일 클릭
	const navigationGo = (status, user_id) => {
		console.log('status , id => ' + status + '_' + user_id);
		switch (status) {
			case 'adoption_available':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'emergency':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'missing':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'reported':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'onNegotiation':
				navigation.push('UserProfile', {userId: user_id});
				break;
			case 'adopted':
				navigation.push('UserProfile', {userId: user_id});
				break;
		}
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* SelectStat	 */}
			<View style={[temp_style.selectstat_view]}>
				<SelectStat
					acceptAllState={acceptAllState}
					onSelectMode={showCheckBox}
					onCancelSelectMode={hideCheckBox}
					onSelectAllClick={selectAll}
					onDeleteSelectedItem={deleteSelectedItem}
				/>
			</View>

			{/* <FlatList> */}
			<View style={[temp_style.AnimalNeedHelpList]}>
				<AnimalNeedHelpList
					data={data}
					checkBoxMode={checkBoxMode}
					// onLabelClick={item => navigation.push('UserProfile', item)}
					onClickLabel={navigationGo}
					onHashClick={item => navigation.push('FeedListForHashTag', item)}
					onCheckBox={onCheckBox}
					isCheckAll={acceptAllState}
					isDeleted={isDeleted}
				/>
			</View>
			{/* </FlatList> */}
		</View>
	);
};
const e = [
	{
		__v: 0,
		_id: '61bb6e499c25946f89154dca',
		pet_birthday: '2021-05-05T00:00:00.000Z',
		pet_family: ['61b84ddb4a1b66f74b699b1e'],
		pet_is_temp_protection: true,
		pet_neutralization: 'no',
		pet_sex: 'male',
		pet_species: '개',
		pet_species_detail: '도사견',
		pet_status: 'protect',
		pet_weight: '1.2',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
		user_nickname: '상우아들',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639673417309_11.jpg',
		user_register_date: '2021-12-16T16:50:17.408Z',
		user_type: 'pet',
		user_upload_count: 0,
	},
	{
		__v: 0,
		_id: '61bc7bc5c946746900218905',
		pet_birthday: '2021-12-07T00:00:00.000Z',
		pet_family: ['61b84ddb4a1b66f74b699b1e'],
		pet_is_temp_protection: true,
		pet_neutralization: 'no',
		pet_sex: 'female',
		pet_species: '기타',
		pet_species_detail: '새',
		pet_status: 'protect',
		pet_weight: '11',
		user_agreement: {
			is_donation_info: false,
			is_location_service_info: false,
			is_marketting_info: false,
			is_over_fourteen: false,
			is_personal_info: false,
			is_service: false,
		},
		user_denied: false,
		user_follow_count: 0,
		user_follower_count: 0,
		user_interests: [],
		user_introduction: '',
		user_is_verified_email: false,
		user_is_verified_phone_number: false,
		user_my_pets: [],
		user_nickname: '토라',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639742405433_6040B5AC-48AF-44FA-A3D0-81FF80F8C09A.jpg',
		user_register_date: '2021-12-17T12:00:05.624Z',
		user_type: 'pet',
		user_upload_count: 0,
	},
];
