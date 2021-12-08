import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {dummy_AnimalProtectList} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import AnimalInfoList from '../organism_ksw/AnimalInfoList';
import {login_style, temp_style, baseInfo_style, animalProtectList} from './style_templete';

//접근 테이블 - ProtectAnimalObject, UserObject(pet)
export default AnimalProtectList = ({route}) => {
	const [data, setData] = React.useState(dummy_AnimalProtectList); // 최종적으로 AnimalInfoList에 들어갈 임보 동물 정보
	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[animalProtectList.container]}>
				<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
					<View style={[animalProtectList.title]}>
						<Text style={[txt.noto24, {color: GRAY10}]}>임시보호 중인 동물</Text>
					</View>
					<AnimalInfoList items={data} />
				</View>
			</ScrollView>
		</View>
	);
};
