import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getUserProtectAnimalList} from 'Root/api/protectapi';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';
import {GRAY10} from 'Root/config/color';
import {dummy_AnimalProtectList} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import AnimalInfoList from '../organism_ksw/AnimalInfoList';
import {login_style, temp_style, baseInfo_style, animalProtectList} from './style_templete';

//접근 테이블 - ProtectAnimalObject, UserObject(pet)
export default AnimalProtectList = ({route}) => {
	const token = route.params;
	const navigation = useNavigation();
	const [data, setData] = React.useState([]); // 최종적으로 AnimalInfoList에 들어갈 임보 동물 정보

	React.useEffect(() => {
		getUserProtectAnimalList(
			{userobject_id: token},
			successed => {
				console.log('success / AnimalProtectList', successed);
				setData(successed);
				//받아오는 list를 setData
			},
			err => {
				console.log('err', err);
			},
		);
	}, [route.params]);

	const onPressLabel = (item, index) => {
		console.log('index', item);
		navigation.push('UserProfile', item);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView contentContainerStyle={[animalProtectList.container]}>
				<View style={[animalProtectList.title]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>임시보호 중인 동물</Text>
				</View>
				<View style={[animalProtectList.insideContainer]}>
					<AnimalInfoList items={data} onPressLabel={onPressLabel} />
				</View>
			</ScrollView>
		</View>
	);
};

const result = [
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
];
