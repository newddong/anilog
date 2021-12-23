import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {login_style, temp_style, baseInfo_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ApplyAdoptionList = props => {
	const navigation = useNavigation();
	const onOff_FavoriteTag = (value, index) => {
		// console.log('즐겨찾기=>' + value + ' ' + index);
	};
	const onLabelClick = item => {
		// console.log('onLabelClick !!');
		navigation.push('ApplyAdoptionDetails', item);
	};

	//입양신청 및 임시보호 신청 리스트 데이터 불러오기
	// React.useEffect(() => {
	// 	console.log('- ApplyAdoptionList - ');
	// 	getApplyAdoptionTempProtectList(
	// 		{
	// 			userobject_id: props.route.params.userobject_id,
	// 			protect_act_type: props.route.params.protect_act_type,
	// 		},
	// 		data => {
	// 			console.log('data' + JSON.stringify(`data${data}`));
	// 			setData(data);
	// 		},
	// 	);
	// }, [props.route.params]);

	// //ProtectionActivityApplicantObject
	// city : '', //보호장소

	// //ProtectRequestObject
	// protect_request_photo_thumbnail: '',//보호요청 게시물 썸네일 uri
	// protect_request_status : '', //상태 [입양가능(rescue),협의중(discuss),안락사 임박(nearrainbow), 완료(complete), 사망(rainbowbridge)]
	// protect_request_date //보호요청 게시글 작성일시

	//ShelterProtectAnimalObject
	// protect_animal_rescue_location : '', //보호중인 동물의 구조장소
	// protect_animal_species : '', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
	// protect_animal_species_detail : '', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
	// protect_animal_sex : '', //보호중인 동물의 성별

	// bookmark: false,

	console.log(props.route.name);
	return (
		<View style={login_style.wrp_main}>
			<View style={[temp_style.baseFlatList, baseInfo_style.list]}>
				<AnimalNeedHelpList
					data={props.route.params}
					onItemClick={
						props.route.name == 'ApplyTempProtectList'
							? () => navigation.push('ApplyTempProtectDetails', props.route.params)
							: () => navigation.push('ApplyAdoptionDetails', props.route.params)
					}
					onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)}
					onClickLabel={(status, id, item) => onLabelClick(item)}
				/>
			</View>
		</View>
	);
};
