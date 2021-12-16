import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {temp_style, baseInfo_style} from './style_templete';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';

//ShelterMenu => 보호요청 게시글 작성하기 버튼 클릭
//연관 테이블 : ShelterProtectAnimalObject
export default AidRequestAnimalList = ({route, navigation}) => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		// 토큰을 토대로 해당 보호소의 보호동물 목록을 서버로부터 가져옴.
		getShelterProtectAnimalList(
			{
				shelter_protect_animal_object_id: null,
				request_number: 2,
			},
			result => {
				console.log('result / getShelterProtectAnimalList', result.msg);
				setData(result.msg);
			},
			err => {
				console.log('err / getShelterProtectAnimalList', err);
			},
		);
	}, []);

	const onSelectRequestItem = index => {
		//SendHeader에 보내는 파라미터 - 선택된 요청게시글의 protect_animal_protect_request_id , 네비게이션 네임
		navigation.setParams({data: data[index], nav: route.name});
	};

	const onPressAddProtectAnimal = () => {
		navigation.push('AssignProtectAnimalImage');
		// navigation.push('WriteAidRequest');
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[temp_style.aidRequestList_aidRequestManage, baseInfo_style.list]}>
					<AidRequestList items={data} onSelect={onSelectRequestItem} onPressAddProtectAnimal={onPressAddProtectAnimal} />
				</View>
			</ScrollView>
		</View>
	);
};

const result = [
	{
		__v: 0,
		_id: '61b9ec3c185a4f69d5981adb',
		protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
		protect_animal_estimate_age: '3년',
		protect_animal_neutralization: 'yes',
		protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639574588100_%EC%BA%A1%EC%B2%98.JPG'],
		protect_animal_protector_discussion_id: [],
		protect_animal_rescue_date: '2021-11-15T00:00:00.000Z',
		protect_animal_rescue_location: '강원도 평창군청',
		protect_animal_sex: 'female',
		protect_animal_species: '고양이',
		protect_animal_species_detail: '러시안블루',
		protect_animal_status: 'rescue',
		protect_animal_weight: 1.2,
	},
	{
		__v: 0,
		_id: '61ba0dfa4772b1e1d3f2ebaa',
		protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
		protect_animal_estimate_age: '3개월',
		protect_animal_neutralization: 'yes',
		protect_animal_photo_uri_list: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639583226124_%EC%BA%A1%EC%B2%98.JPG'],
		protect_animal_protector_discussion_id: [],
		protect_animal_rescue_date: '2021-11-07T00:00:00.000Z',
		protect_animal_rescue_location: '성수동',
		protect_animal_sex: 'male',
		protect_animal_species: '고양이',
		protect_animal_species_detail: '미딕',
		protect_animal_status: 'rescue',
		protect_animal_weight: 1.5,
	},
];
