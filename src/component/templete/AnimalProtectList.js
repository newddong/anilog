import React from 'react';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {dummy_ProtectAnimalObject, dummy_UserObject_pet} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import AnimalInfoList from '../organism_ksw/AnimalInfoList';
import {login_style, btn_style, temp_style, baseInfo_style, animalProtectList} from './style_templete';

//필요한 데이터 - 펫 uri , 펫 status, 펫 닉네임, 펫 종류, 펫 품종, 임시보호 경과일자
export default AnimalProtectList = ({route}) => {
	// console.log('rute', route.params); // 로그인 유저의 고유 _id 정보
	const [data, setData] = React.useState([]); // 최종적으로 AnimalInfoList에 들어갈 임보 동물 정보

	//동물 보호 현황 -> 임시 보호 중인 동물 현황 데이터 수신 처리
	//우선 UserMenu에서 보내준 로그인 유저의 고유 아이디 (data._id )를 토대로
	// ProtectAnimalObject 테이블의 protect_protector_id = data._id 조건을 만족하는 동물들을 select
	// Select 목록을 setData
	React.useEffect(() => {
		let my_protect_list = [];
		dummy_ProtectAnimalObject.map((v, i) => {
			v.protect_protector_id == route.params ? my_protect_list.push(v) : null;
		});
		//보호동물 테이블 컬럼 중 임시보호자 계정과 현재 로그인한 계정의 _id가 일치할 시 해당 data를 my_protect_list에 추가
		let copy = [];
		my_protect_list.map((v, i) => {
			let found = dummy_UserObject_pet.filter(element => element._id == v.protect_animal_id);
			//보호동물 계정 데이터를 토대로 해당 동물의 userObject 정보를 검색 => copy에 추가
			found[0].protect_animal_date = v.protect_animal_date;
			copy.push(found[0]);
		});
		setData(copy); //유저가 보호 중인 동물들의 userObject가 담겨져 있음 []
	}, [route.params]);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
				<View style={[animalProtectList.title]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>임시보호 중인 동물</Text>
				</View>
				<AnimalInfoList items={data ? data : []} />
			</View>
		</View>
	);
};
