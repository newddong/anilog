import React from 'react';
import {Text, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import {login_style, btn_style, temp_style, progressbar_style, assignProtectAnimal_style} from './style_templete';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import Stagebar from '../molecules/Stagebar';
import DropdownSelect from '../molecules/DropdownSelect';
import Input24 from '../molecules/Input30';
import AniButton from '../molecules/AniButton';
import {useNavigation} from '@react-navigation/core';
import Dropdown from '../molecules/Dropdown';
import Modal from '../modal/Modal';
import {PET_YEAR, PET_MONTH} from 'Root/i18n/msg';
import {stagebar_style} from '../organism_ksw/style_organism';
import {CommonActions} from '@react-navigation/native';
import NormalDropDown from '../molecules/NormalDropDown';
import Input30 from '../molecules/Input30';
import {assignShelterAnimal} from 'Root/api/shelterapi';

export default AssignProtectAnimalInfo = ({route}) => {
	// console.log('Assing', route.params);
	const navigation = useNavigation();

	const [data, setData] = React.useState({
		...route.params,
		shelter_protect_animal_object_id: '',
		protect_animal_estimate_age: year + '년 ' + month + '개월',
		// protect_animal_estimate_month: PET_MONTH[0],
		protect_animal_weight: '',
		//AssignPetInfoA 에서는 UserObject 반려동물 등록에 맞춘 컬럼명으로 지정되어 있으므로 이를 Protect_animal로 처리
		protect_animal_sex: route.params.pet_sex,
		protect_animal_species: route.params.pet_species,
		protect_animal_species_detail: route.params.pet_species_detail,
		protect_animal_neutralization: route.params.pet_neutralization,
		//요기까지.
	});

	const [year, setYear] = React.useState(PET_YEAR[0]);
	const [month, setMonth] = React.useState(PET_MONTH[0]);

	React.useEffect(() => {
		setData({...data, protect_animal_estimate_age: year == 0 ? month + '개월' : year + '년 ' + month + '개월'});
	}, [year, month]);

	//체중 Value 변동 시 실행
	const onChangeKg = kg => {
		setData({...data, protect_animal_weight: kg});
	};

	//등록 버튼 => 모달에서 '새 글 작성' 클릭
	const goToWriteAidRequest = animalData => {
		Modal.close();
		console.log('AssignProtectAnimalInfo Data_id', data._id);
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [
					{name: 'ShelterMenu'},
					{
						name: 'WriteAidRequest',
						params: {data: animalData},
					},
				],
			}),
		);
		// props.navigation.reset({index: 1, data: data, routes: [{name: 'ShelterMenu'}, {name: 'WriteAidRequest'}]});
	};

	//등록 버튼 => 모달에서 '취소' 클릭
	const goToShelterMenu = () => {
		Modal.close();
		navigation.push('ShelterMenu');
	};

	const registerProtectPet = () => {
		console.log('Before AssiginShelterAnimal Data? ', data);
		assignShelterAnimal(
			data,
			data => {
				console.log(`assignShelterAnimal callback:${data}`);
			},
			err => {
				console.log('err / AssignProtectAnimalInfo', err);
				setData(err);
				Modal.popTwoBtn('보호 동물이 등록되었습니다. \n바로 보호요청 글을 작성하시겠습니까?', '아니오', '새 글 작성', goToShelterMenu, () =>
					goToWriteAidRequest(err),
				);
			},
		);
	};

	//다음 버튼 클릭
	const gotoNextStep = () => {
		// console.log('data At Last', data);
		//컨펌하는 복합모달 제작완료 후 붙일 예정
		registerProtectPet();
	};

	const goBack = () => {
		navigation.goBack();
	};

	const onSelectYear = (v, i) => {
		console.log('v=>' + v);
		setYear(v);
		// setData({...data, protect_animal_estimate_age: v});
	};

	const onSelectMonth = (v, i) => {
		console.log('v=>' + v);
		setMonth(v);
		// setData({...data, protect_animal_estimate_month: v});
	};

	const weigthValid = e => {
		var regExp = /^[\D]{1,20}$/;
		return regExp.test(e);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
					current={4} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
				/>
			</View>

			<View style={[temp_style.textMsg_assignProtectAnimal, assignProtectAnimal_style.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>해당 동물의 예상 연령과 체중, 중성화 여부를 적어주세요.</Text>
			</View>

			<View style={[temp_style.inputForm_assignProtectAnimal]}>
				{/* 예상 연령 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line1]}>
					<View style={assignProtectAnimal_style.width118}>
						<Text style={[txt.noto28]}>예상 연령</Text>
					</View>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<NormalDropDown menu={PET_YEAR} height={500} onSelect={onSelectYear} defaultIndex={0} />
					</View>
					<Text style={[txt.noto24, assignProtectAnimal_style.text118]}>년</Text>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<NormalDropDown menu={PET_MONTH} onSelect={onSelectMonth} defaultIndex={0} />
					</View>
					<Text style={[txt.noto24, assignProtectAnimal_style.text118]}>개월</Text>
				</View>

				{/* 체중 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line2, assignProtectAnimal_style.inputform]}>
					<View style={assignProtectAnimal_style.width118}>
						<Text style={[txt.noto28]}>체중</Text>
					</View>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<Input30
							alert_msg={'숫자 0 이상의 값을 입력하세요'}
							showmsg={false}
							confirm={true}
							showTitle={false}
							width={164}
							placeholder={'몸무게 입력'}
							clearMark={false}
							onChange={onChangeKg}
							value={data.protect_animal_weight}
							validator={weigthValid}
							keyboardType={'number-pad'}
						/>
					</View>
					<Text style={[assignProtectAnimal_style.text118]}>kg</Text>
				</View>
			</View>

			<View style={[temp_style.btn_w226_assignProtectAnimal, assignProtectAnimal_style.btn_w226_view_image]}>
				<View style={[btn_style.btn_w226]}>
					<AniButton btnTitle={'뒤로'} btnTheme={'shadow'} btnStyle={'border'} btnLayout={btn_w226} onPress={goBack} />
				</View>
				<View style={[btn_style.btn_w226]}>
					<AniButton btnTitle={'등록'} btnTheme={'shadow'} btnLayout={btn_w226} onPress={gotoNextStep} />
				</View>
			</View>
		</View>
	);
};

const before = {
	pet_neutralization: 'unknown',
	pet_sex: 'female',
	pet_species: '고양이',
	pet_species_detail: '메인쿤',
	protect_animal_estimate_age: '3년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [
		'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/BB150CB5-956F-4D19-A0F6-BD580E5CAB02/tmp/57D33D50-2021-446A-8BEE-CE526D6BA2A7.jpg',
		'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/BB150CB5-956F-4D19-A0F6-BD580E5CAB02/tmp/55908728-375D-4C3D-8E06-90D3DBEC8AFB.jpg',
		'file:///Users/sangwoo/Library/Developer/CoreSimulator/Devices/CF9EEFF7-5DB8-4052-B8E3-F7C49AD98B82/data/Containers/Data/Application/BB150CB5-956F-4D19-A0F6-BD580E5CAB02/tmp/08A677CD-A7B3-406B-905A-EC9F723AE0F7.jpg',
	],
	protect_animal_rescue_date: '',
	protect_animal_rescue_location: 'Tustin',
	protect_animal_sex: 'female',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '메인쿤',
	protect_animal_weight: '1',
	shelter_protect_animal_object_id: '',
};

const after = {
	__v: 0,
	_id: '61bb59779c25946f89154d86',
	protect_animal_belonged_shelter_id: '61b9eba4185a4f69d5981ad6',
	protect_animal_estimate_age: '3년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [],
	protect_animal_protector_discussion_id: [],
	protect_animal_rescue_date: null,
	protect_animal_rescue_location: 'Tustin',
	protect_animal_sex: 'female',
	protect_animal_species: '고양이',
	protect_animal_species_detail: '메인쿤',
	protect_animal_status: 'rescue',
	protect_animal_weight: 1,
};
