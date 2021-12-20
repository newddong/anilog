import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {getAppliesRecord} from 'Root/api/protectapi';
import {dummy_manageUserVolunteer} from 'Root/config/dummyDate_json';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {dummy_AppliesRecord_rescue} from 'Root/config/dummy_data_hjs';
import {txt} from 'Root/config/textstyle';
import {NextMark} from '../atom/icon';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import ShelterList from '../organism_ksw/ShelterList';
import {appliesRecord, login_style} from './style_templete';

export default AppliesRecord = ({route}) => {
	//첫번째 값만 신청내역에 보여주기 위함. AnimalNeedHelpList가 배열 데이터를 다루기 때문에 반드시 객체가 배열이어야 함.
	const navigation = useNavigation();
	const dummy_protect = [...dummy_AppliesRecord_protect.slice(0, 1)];
	const dummy_rescue = [...dummy_AppliesRecord_rescue.slice(0, 1)];
	const [adopt_application_list, setAdopt_application_list] = React.useState();
	const [protect_application_list, setProtect_application_list] = React.useState();

	React.useEffect(() => {}, []);

	//보호 요청 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		console.log('- getAppliesRecord data -');
		getAppliesRecord(
			{},
			result => {
				console.log('result / getAppliesRecord / ApplitesRecord  : ', result);
				// setData(data);
			},
			err => {
				console.log('err / getAppliesRecord / AppliesRecord', err);
			},
		);
	}, [route.params]);

	const [data1, setData1] = React.useState([]);

	// //ProtectionActivityApplicantObject
	// protectionActivityApplicantObject_id: '', //신청서 아이디
	// protect_act_type: '', //신청한 보호 활동의 종류, 임시보호(protect), 입양(adopt)
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

	//UserObject - array 형식
	// userobject_id : '',//보호소 아이디
	// user_profile_uri : '', //프로필 사진
	// shelter_name : '', //보호소 이름
	// city : '', //보호소 주소(시, 구 까지 표기)

	//입양 신청 - 더보기 클릭
	const showMoreAdoption = () => {
		navigation.push('ApplyAdoptionList', dummy_AppliesRecord_rescue);
	};

	//임시보호 신청 - 더보기 클릭
	const showMoreProtection = () => {
		navigation.push('ApplyTempProtectList', dummy_AppliesRecord_protect);
	};

	//봉사활동 신청 - 더보기 클릭
	const showMoreVolunteer = () => {
		navigation.push('ManageUserVolunteer'); // 활동 예정중인 신청, 지난 신청 등 나의 신청 목록을 보내줘야 알 수 있는 부분
	};

	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};

	//봉사활동 신청 하단 라벨 클릭
	const onClickShelterLabel = shelterInfo => {
		console.log('shelter', shelterInfo);
		navigation.push('UserVolunteerForm', shelterInfo); //봉사 활동 신청 관련
	};

	return (
		<View style={[login_style.wrp_main, appliesRecord.container]}>
			<ScrollView>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>입양 신청 </Text>
						<TouchableOpacity onPress={showMoreAdoption} style={[appliesRecord.showMoreBox]}>
							<Text style={[txt.noto24]}>더보기 </Text>
							<NextMark />
						</TouchableOpacity>
					</View>
					<AnimalNeedHelpList data={dummy_rescue} onFavoriteTag={onOff_FavoriteTag} />
				</View>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>임시보호 신청 </Text>
						<TouchableOpacity onPress={showMoreProtection} style={[appliesRecord.showMoreBox]}>
							<Text style={[txt.noto24]}>더보기 </Text>
							<NextMark />
						</TouchableOpacity>
					</View>
					<AnimalNeedHelpList data={dummy_protect} onFavoriteTag={onOff_FavoriteTag} />
				</View>
				<View style={[appliesRecord.shelterList_container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>봉사활동 신청 </Text>
						<TouchableOpacity onPress={showMoreVolunteer} style={[appliesRecord.showMoreBox]}>
							<Text style={[txt.noto24]}>더보기 </Text>
							<NextMark />
						</TouchableOpacity>
					</View>
					<ShelterList items={dummy_manageUserVolunteer} onShelterLabelClick={onClickShelterLabel} />
				</View>
			</ScrollView>
		</View>
	);
};
