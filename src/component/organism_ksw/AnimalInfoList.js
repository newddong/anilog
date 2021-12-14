import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import AnimalInfo from './AnimalInfo';
import {animalInfoList} from './style_organism';

//동물 보호 현황 - From UserMenu / 관련 테이블 @ProtectAnimalObject / UserObject(pet)
export default AnimalInfoList = props => {
	const [data, setData] = React.useState(props.items);

	React.useEffect(() => {
		setData(props.items);
	}, [props.items]);

	const renderItem = (item, index) => {
		return (
			<View style={[animalInfoList.itemContainer]}>
				<AnimalInfo data={item} onPressLabel={() => props.onPressLabel(item, index)} />
			</View>
		);
	};

	return (
		<ScrollView horizontal={false} contentContainerStyle={{flex: 0}}>
			<ScrollView horizontal={true} contentContainerStyle={{flex: 1}} scrollEnabled={false}>
				<View style={[animalInfoList.container]}>
					<FlatList data={data} renderItem={({item, index}) => renderItem(item, index)} scrollEnabled={false} />
				</View>
			</ScrollView>
		</ScrollView>
	);
};

AnimalInfoList.defaultProps = {
	onPressLabel: e => {},
};

// //@ProtectAnimalObject
// _id: 1, // 고유아이디
// protect_animal_id: 11, //임시보호중인 동물
// protect_protector_id: 1, //임시보호자 계정 id
// protect_animal_date: '2021-10-23', //생성일시
// protect_animal_update_date: '2021-10-25', //수정일시
// protect_animal_is_delete: false, //삭제여부
// //@UserObject - pet
// user_type: 'pet', //유저의 유형, 일반유저(user),보호소(shelter),반려동물(pet)으로 나뉨
// user_profile_uri: 'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
// user_nickname: '하양이',
// pet_is_temp_protection: true, //반려동물이 임시보호 중인지 여부
// pet_species: '개', //반려동물의 종류(ex 개, 고양이, 토끼 등)
// pet_species_detail: '리트리버', //반려동물의 종류(ex 리트리버, 불독, 진돗개 등)
// pet_sex: 'female', //반려동물의 성별
// pet_neutralization: 'unknown', //반려동물 중성화 여부
// pet_birthday: '2020-12-03', //반려동물 생일
// pet_weight: '1.5', //반려동물 몸무게
// pet_status: 'protect',
// pet_adopter: null, //반려동물 입양자
// pet_protector: 1, //반려동물 임시보호자
