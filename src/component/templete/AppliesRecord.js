import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dummy_UserObject_shelter, dummy_VolunteerAcitivityApplicantObject} from 'Root/config/dummyDate_json';
import {dummy_AppliesRecord_protect} from 'Root/config/dummy_data_hjs';
import {dummy_AppliesRecord_rescue} from 'Root/config/dummy_data_hjs';
import {NextMark} from '../atom/icon';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import ShelterList from '../organism_ksw/ShelterList';
import {appliesRecord, login_style} from './style_templete';

export default AppliesRecord = ({route}) => {
	//첫번째 값만 신청내역에 보여주기 위함. AnimalNeedHelpList가 배열 데이터를 다루기 때문에 반드시 객체가 배열이어야 함.
	const navigation = useNavigation();
	const dummy_protect = [...dummy_AppliesRecord_protect.slice(0, 1)];
	const dummy_rescue = [...dummy_AppliesRecord_rescue.slice(0, 1)];
	const dummy_volunteerObject = dummy_VolunteerAcitivityApplicantObject; //봉사활동, 봉사활동신청서 object
	const dummy_user_shelter = dummy_UserObject_shelter; // 보호소 userObject

	const user_id = route.params;
	const [data, setData] = React.useState({
		favorite: '',
	});

	const [vol_shelterList, setVol_shelterList] = React.useState([]); //신청한 봉사활동의 대상 보호소 Data들 (userObject 형식)
	const [my_volunteerList, setMy_volunteerList] = React.useState([]); //내가 신청한 봉사활동 목록 (VolunteerActivityApplicantObject 형식)

	//유저의 _id를 토대로 봉사활동 신청한 보호소 목록을 검색 => my_volunterrList에 담기
	React.useEffect(() => {
		let id_list = []; //유저가 신청한 봉사활동 목록 데이터에서 타겟 보호소의 _id만을 받아옴
		let shelter_list = []; //검색한 보호소들의 _id로 해당 보호소들의 userObject를 받아옴
		dummy_volunteerObject.map((v, i) => {
			v.volunteer_accompany.includes(user_id) ? id_list.push(v) : null;
		});
		setMy_volunteerList(id_list);
		id_list.map((v, i) => {
			let found = dummy_user_shelter.find(element => element._id == v.volunteer_target_shelter);
			shelter_list.push(found);
		});
		setVol_shelterList(shelter_list); // 보호소 userObject List => ShelterList에 보내야함
	}, [route.params]);

	const showMoreAdoption = () => {
		navigation.push('ApplyAdoptionList', dummy_AppliesRecord_rescue);
	};

	const showMoreProtection = () => {
		navigation.push('ApplyTempProtectList', dummy_AppliesRecord_protect);
	};

	const showMoreVolunteer = () => {
		navigation.push('ManageUserVolunteer', {volunteerItems: my_volunteerList, shelterItems: vol_shelterList}); // 활동 예정중인 신청, 지난 신청 등 나의 신청 목록을 보내줘야 알 수 있는 부분
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
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreAdoption} />
						</View>
					</View>
					<AnimalNeedHelpList data={dummy_rescue} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
				<View style={[appliesRecord.record]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>임시보호 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark onPress={showMoreProtection} />
						</View>
					</View>
					<AnimalNeedHelpList data={dummy_protect} onFavoriteTag={(e, index) => onOff_FavoriteTag(e, index)} />
				</View>
				<View style={[appliesRecord.shelterList_container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.title]}>봉사활동 신청 </Text>
						<Text style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>더보기 </Text>
						<TouchableOpacity onPress={showMoreVolunteer} style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
							<NextMark />
						</TouchableOpacity>
					</View>
					<ShelterList items={vol_shelterList} onShelterLabelClick={onClickShelterLabel} />
				</View>
			</ScrollView>
		</View>
	);
};
