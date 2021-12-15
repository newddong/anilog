import React from 'react';
import {ScrollView, View} from 'react-native';
import {login_style} from './style_templete';
import AidRequestList from '../organism_ksw/AidRequestList';
import {temp_style, baseInfo_style} from './style_templete';
import {dummy_AidRequestAnimalList} from 'Root/config/dummyDate_json';
import {getShelterAidRequestList} from 'Root/api/protect_request_api_ksw';

//ShelterMenu => 보호요청 게시글 작성하기 버튼 클릭
//연관 테이블 : ShelterProtectAnimalObject
export default AidRequestAnimalList = ({route, navigation}) => {
	// console.log('route', props);
	const token = route.params;
	const [data, setData] = React.useState(dummy_AidRequestAnimalList);

	React.useEffect(() => {
		// 토큰을 토대로 해당 보호소가 작성한 보호요청 게시글 목록을 서버로부터 가져옴.
		getShelterAidRequestList(
			token,
			successed => {
				console.log('succeseed / getShelterAidRequestList', successed);
			},
			err => {
				console.log('err / getShelterAidRequestList', err);
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

AidRequestAnimalList.defaultProps = {};
